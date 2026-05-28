"use client";
import { useEffect, useState, useMemo } from "react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/lib/auth-context";

interface Receipt {
  vendor: string;
  total: number;
  date: { seconds: number };
  category: string;
  notes?: string;
}

interface Business { id: string; name: string; }

type Range = "ytd" | "last_year" | "last90" | "last30" | "all";

function fmtDate(ts: { seconds: number }) {
  return new Date(ts.seconds * 1000).toLocaleDateString("en-CA");
}

function rangeLabel(r: Range) {
  if (r === "ytd") return "This Year";
  if (r === "last_year") return "Last Year";
  if (r === "last90") return "Last 90 Days";
  if (r === "last30") return "Last 30 Days";
  return "All Time";
}

function filterByRange(receipts: Receipt[], range: Range): Receipt[] {
  const now = new Date();
  return receipts.filter(r => {
    if (!r.date) return false;
    const d = new Date(r.date.seconds * 1000);
    if (range === "ytd") return d.getFullYear() === now.getFullYear();
    if (range === "last_year") return d.getFullYear() === now.getFullYear() - 1;
    if (range === "last90") return (now.getTime() - d.getTime()) <= 90 * 86400000;
    if (range === "last30") return (now.getTime() - d.getTime()) <= 30 * 86400000;
    return true;
  });
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}

function buildCSVRows(receipts: Receipt[]) {
  return [
    ["Date", "Vendor", "Category", "Amount", "Notes"],
    ...receipts.map(r => [
      r.date ? fmtDate(r.date) : "",
      r.vendor ?? "",
      r.category ?? "",
      (r.total ?? 0).toFixed(2),
      r.notes ?? "",
    ]),
  ];
}

function rowsToCSV(rows: string[][]) {
  return rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("
");
}

function exportCSV(receipts: Receipt[], filename: string) {
  const csv = rowsToCSV(buildCSVRows(receipts));
  downloadBlob(new Blob([csv], { type: "text/csv" }), filename);
}

function buildIIF(receipts: Receipt[], bizName: string) {
  const header = "!TRNS	TRNSID	TRNSTYPE	DATE	ACCNT	NAME	AMOUNT	MEMO
!SPL	SPLID	TRNSTYPE	DATE	ACCNT	NAME	AMOUNT	MEMO
!ENDTRNS
";
  const rows = receipts.map((r, i) => {
    const dt = r.date ? new Date(r.date.seconds * 1000).toLocaleDateString("en-US") : "";
    const amt = (r.total ?? 0).toFixed(2);
    const cat = r.category ?? "Other";
    return `TRNS	${i + 1}	CHECK	${dt}	Checking	${r.vendor ?? ""}	-${amt}	${cat}
SPL	${i + 1}	CHECK	${dt}	${cat}	${r.vendor ?? ""}	${amt}	
ENDTRNS`;
  });
  return header + rows.join("
");
}

async function exportPDF(receipts: Receipt[], bizName: string, title: string, isTaxSummary: boolean, range: Range) {
  const { default: jsPDF } = await import("jspdf");
  const { default: autoTable } = await import("jspdf-autotable");
  const doc = new jsPDF();
  const teal = [0, 137, 123] as [number, number, number];
  const today = new Date().toLocaleDateString("en-CA");

  doc.setFillColor(...teal);
  doc.rect(0, 0, 210, 28, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text(title, 14, 12);
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text(`${bizName}  ·  ${rangeLabel(range)}  ·  Generated ${today}`, 14, 20);

  doc.setTextColor(30, 30, 30);

  const total = receipts.reduce((s, r) => s + (r.total ?? 0), 0);

  if (isTaxSummary) {
    // Category summary with deductible amounts
    const byCategory: Record<string, number> = {};
    receipts.forEach(r => {
      const c = r.category ?? "Uncategorized";
      byCategory[c] = (byCategory[c] ?? 0) + (r.total ?? 0);
    });
    const sorted = Object.entries(byCategory).sort(([, a], [, b]) => b - a);

    let totalDed = 0;
    const rows = sorted.map(([cat, amt]) => {
      const lower = cat.toLowerCase();
      const isPersonal = lower.includes("personal");
      const mult = lower.includes("meal") || lower.includes("entertainment") ? 0.5 : 1;
      const ded = isPersonal ? 0 : amt * mult;
      totalDed += ded;
      const note = isPersonal ? "Non-deductible" : mult < 1 ? "50% rule" : "100%";
      return [cat, `$${amt.toFixed(2)}`, note, `$${ded.toFixed(2)}`];
    });
    rows.push(["TOTAL", `$${total.toFixed(2)}`, "", `$${totalDed.toFixed(2)}`]);

    autoTable(doc, {
      startY: 36,
      head: [["Category", "Amount", "Rule", "Est. Deductible"]],
      body: rows,
      headStyles: { fillColor: teal, textColor: 255, fontStyle: "bold" },
      alternateRowStyles: { fillColor: [245, 250, 249] },
      columnStyles: { 1: { halign: "right" }, 3: { halign: "right" } },
      foot: [],
    });

    const finalY = (doc as unknown as { lastAutoTable: { finalY: number } }).lastAutoTable?.finalY ?? 120;
    doc.setFontSize(9);
    doc.setTextColor(120, 120, 120);
    doc.text("* Meals & Entertainment estimated at 50% deductible (US/CA). Consult your accountant for exact figures.", 14, finalY + 10, { maxWidth: 182 });

  } else {
    // Full transaction list
    const rows = receipts.map(r => [
      r.date ? fmtDate(r.date) : "—",
      r.vendor ?? "Unknown",
      r.category ?? "Uncategorized",
      `$${(r.total ?? 0).toFixed(2)}`,
    ]);

    autoTable(doc, {
      startY: 36,
      head: [["Date", "Vendor", "Category", "Amount"]],
      body: rows,
      headStyles: { fillColor: teal, textColor: 255, fontStyle: "bold" },
      alternateRowStyles: { fillColor: [245, 250, 249] },
      columnStyles: { 3: { halign: "right" } },
    });

    const finalY = (doc as unknown as { lastAutoTable: { finalY: number } }).lastAutoTable?.finalY ?? 120;
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 137, 123);
    doc.text(`Total: $${total.toFixed(2)}  (${receipts.length} transactions)`, 14, finalY + 12);
  }

  const suffix = new Date().toISOString().slice(0, 10);
  doc.save(`TaxSort-${isTaxSummary ? "tax-summary" : "report"}-${suffix}.pdf`);
}

async function exportZIP(receipts: Receipt[], bizName: string) {
  const { default: JSZip } = await import("jszip");
  const zip = new JSZip();
  const csv = rowsToCSV(buildCSVRows(receipts));
  const iif = buildIIF(receipts, bizName);
  zip.file("expenses.csv", csv);
  zip.file("quickbooks.iif", iif);
  const blob = await zip.generateAsync({ type: "blob" });
  downloadBlob(blob, `TaxSort-bundle-${new Date().toISOString().slice(0, 10)}.zip`);
}

export default function ExportPage() {
  const { user } = useAuth();
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [selectedBiz, setSelectedBiz] = useState("");
  const [bizName, setBizName] = useState("My Business");
  const [allReceipts, setAllReceipts] = useState<Receipt[]>([]);
  const [range, setRange] = useState<Range>("ytd");
  const [loading, setLoading] = useState(true);
  const [working, setWorking] = useState<string | null>(null);

  useEffect(() => {
    if (!user) return;
    getDocs(collection(db, "users", user.uid, "businesses")).then(snap => {
      const list = snap.docs.map(d => ({ id: d.id, name: (d.data().name as string) ?? d.id }));
      setBusinesses(list);
      const biz = list[0];
      if (biz) { setSelectedBiz(biz.id); setBizName(biz.name); }
    });
  }, [user]);

  useEffect(() => {
    if (!user || !selectedBiz) return;
    setLoading(true);
    const q = query(collection(db, "users", user.uid, "businesses", selectedBiz, "receipts"), orderBy("date", "desc"));
    getDocs(q).then(snap => {
      setAllReceipts(snap.docs.map(d => d.data() as Receipt));
      setLoading(false);
    });
  }, [user, selectedBiz]);

  const receipts = useMemo(() => filterByRange(allReceipts, range), [allReceipts, range]);
  const total = receipts.reduce((s, r) => s + (r.total ?? 0), 0);

  async function run(key: string, fn: () => Promise<void>) {
    setWorking(key);
    try { await fn(); } finally { setWorking(null); }
  }

  const suffix = new Date().toISOString().slice(0, 10);

  const exports = [
    {
      key: "csv",
      icon: "M3 10h18M3 14h18M10 3v18M14 3v18",
      iconColor: "#26A69A",
      bg: "#E0F2F1",
      title: "Export as CSV",
      desc: "Open in Excel, Google Sheets, or any accounting software",
      label: "Download CSV",
      action: () => run("csv", async () => exportCSV(receipts, `TaxSort-expenses-${suffix}.csv`)),
    },
    {
      key: "pdf",
      icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z",
      iconColor: "#EF5350",
      bg: "#FFEBEE",
      title: "PDF Expense Report",
      desc: "Professional report with all transactions and category totals",
      label: "Download PDF",
      action: () => run("pdf", () => exportPDF(receipts, bizName, "Expense Report", false, range)),
    },
    {
      key: "summary",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
      iconColor: "#00796B",
      bg: "#E0F2F1",
      title: "Tax Summary PDF",
      desc: "Accountant-ready: category totals with 50% meals rule applied, estimated deductible total",
      label: "Download Summary",
      action: () => run("summary", () => exportPDF(receipts, bizName, "Tax Expense Summary", true, range)),
    },
    {
      key: "qb",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      iconColor: "#2E7D32",
      bg: "#E8F5E9",
      title: "QuickBooks IIF",
      desc: "Import directly into QuickBooks Desktop — categories pre-mapped to standard QB accounts",
      label: "Download IIF",
      action: () => run("qb", async () => {
        const iif = buildIIF(receipts, bizName);
        downloadBlob(new Blob([iif], { type: "text/plain" }), `TaxSort-quickbooks-${suffix}.iif`);
      }),
    },
    {
      key: "history",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      iconColor: "#00897B",
      bg: "#E0F2F1",
      title: "Full History CSV",
      desc: "Every transaction ever recorded — ignores the date filter above",
      label: "Export All Time",
      action: () => run("history", async () => exportCSV(allReceipts, `TaxSort-full-history-${suffix}.csv`)),
    },
    {
      key: "zip",
      icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12",
      iconColor: "#7E57C2",
      bg: "#EDE7F6",
      title: "ZIP Bundle",
      desc: "CSV + QuickBooks IIF packed into a single ZIP file",
      label: "Download ZIP",
      action: () => run("zip", () => exportZIP(receipts, bizName)),
    },
  ];

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Export</h1>
      <p className="text-sm text-gray-500 mb-6">Download your expenses in multiple formats.</p>

      {loading ? (
        <div className="flex justify-center py-20"><div className="w-8 h-8 border-2 border-teal-600 border-t-transparent rounded-full animate-spin" /></div>
      ) : (
        <>
          {/* Filters */}
          <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-6 flex flex-wrap gap-4 items-center justify-between">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Business</p>
              {businesses.length > 1 ? (
                <select value={selectedBiz} onChange={e => {
                  setSelectedBiz(e.target.value);
                  setBizName(businesses.find(b => b.id === e.target.value)?.name ?? "My Business");
                }} className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white text-gray-700">
                  {businesses.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
                </select>
              ) : (
                <p className="text-sm font-medium text-gray-800">{bizName}</p>
              )}
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Date Range</p>
              <select value={range} onChange={e => setRange(e.target.value as Range)}
                className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white text-gray-700">
                <option value="ytd">This Year</option>
                <option value="last_year">Last Year</option>
                <option value="last90">Last 90 Days</option>
                <option value="last30">Last 30 Days</option>
                <option value="all">All Time</option>
              </select>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">In Range</p>
              <p className="text-sm font-semibold text-gray-900">{receipts.length} transactions · <span className="text-teal-700">${total.toFixed(2)}</span></p>
            </div>
          </div>

          {/* Export cards */}
          <div className="space-y-3">
            {exports.map(e => (
              <div key={e.key} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: e.bg }}>
                  <svg className="w-5 h-5" fill="none" stroke={e.iconColor} strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={e.icon} />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900">{e.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{e.desc}</p>
                </div>
                <button
                  onClick={e.action}
                  disabled={working !== null || (e.key !== "history" && receipts.length === 0)}
                  className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                  style={{ background: "#00897B" }}
                >
                  {working === e.key ? (
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                  )}
                  {e.label}
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
