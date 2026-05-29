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
  imageUrl?: string;
}

interface Business { id: string; name: string; currency?: string; }

function currencySymbol(currency?: string) {
  if (currency === "CAD") return "CA$";
  if (currency === "GBP") return "£";
  if (currency === "AUD") return "AU$";
  return "$";
}

type Range = "ytd" | "last_year" | "last90" | "last30" | "all";

const RANGE_LABELS: Record<Range, string> = {
  ytd: "This Year", last_year: "Last Year", last90: "Last 90 Days", last30: "Last 30 Days", all: "All Time",
};

function fmtDate(ts: { seconds: number }) {
  return new Date(ts.seconds * 1000).toLocaleDateString("en-CA");
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

function toCSV(rows: string[][]): string {
  return rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(",")).join(String.fromCharCode(10));
}

function buildCSV(receipts: Receipt[]): string {
  return toCSV([
    ["Date", "Vendor", "Category", "Amount", "Notes"],
    ...receipts.map(r => [
      r.date ? fmtDate(r.date) : "",
      r.vendor ?? "",
      r.category ?? "",
      (r.total ?? 0).toFixed(2),
      r.notes ?? "",
    ]),
  ]);
}

function buildIIF(receipts: Receipt[]): string {
  const header = `!TRNS\tTRNSID\tTRNSTYPE\tDATE\tACCNT\tNAME\tAMOUNT\tMEMO
!SPL\tSPLID\tTRNSTYPE\tDATE\tACCNT\tNAME\tAMOUNT\tMEMO
!ENDTRNS
`;
  const rows = receipts.map((r, i) => {
    const dt = r.date ? new Date(r.date.seconds * 1000).toLocaleDateString("en-US") : "";
    const amt = (r.total ?? 0).toFixed(2);
    const cat = r.category ?? "Other";
    return `TRNS	${i + 1}	CHECK	${dt}	Checking	${r.vendor ?? ""}	-${amt}	${cat}
SPL	${i + 1}	CHECK	${dt}	${cat}	${r.vendor ?? ""}	${amt}	
ENDTRNS`;
  });
  return header + rows.join(String.fromCharCode(10));
}

function openPrint(html: string) {
  const win = window.open("", "_blank", "width=900,height=700");
  if (!win) { alert("Please allow pop-ups for this site to generate PDFs."); return; }
  win.document.write(html);
  win.document.close();
  win.focus();
  setTimeout(() => { win.print(); }, 600);
}

function buildReportHTML(receipts: Receipt[], bizName: string, rangeLabel: string, sym = "$"): string {
  const total = receipts.reduce((s, r) => s + (r.total ?? 0), 0);
  const rows = receipts.map(r =>
    `<tr><td>${r.date ? fmtDate(r.date) : "—"}</td><td>${r.vendor ?? "Unknown"}</td><td>${r.category ?? "Uncategorized"}</td><td style="text-align:right">${sym}${(r.total ?? 0).toFixed(2)}</td></tr>`
  ).join("");
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Expense Report</title>
  <style>
    body{font-family:system-ui,sans-serif;color:#1a1a1a;padding:32px;max-width:800px;margin:0 auto}
    .header{background:#00897B;color:#fff;padding:20px 24px;border-radius:8px;margin-bottom:24px}
    .header h1{margin:0 0 4px;font-size:20px}.header p{margin:0;opacity:.85;font-size:13px}
    table{width:100%;border-collapse:collapse;font-size:13px}
    th{background:#f0f9f8;color:#00897B;text-align:left;padding:8px 12px;border-bottom:2px solid #b2dfdb;font-size:11px;text-transform:uppercase;letter-spacing:.5px}
    td{padding:7px 12px;border-bottom:1px solid #f0f0f0}
    tr:hover td{background:#f9fffe}
    .total-row td{font-weight:700;border-top:2px solid #b2dfdb;background:#f0f9f8}
    @media print{body{padding:0}.no-print{display:none}}
  </style></head><body>
  <div class="header"><h1>Expense Report — ${bizName}</h1><p>${rangeLabel} &nbsp;·&nbsp; ${receipts.length} transactions &nbsp;·&nbsp; Generated ${new Date().toLocaleDateString("en-CA")}</p></div>
  <table><thead><tr><th>Date</th><th>Vendor</th><th>Category</th><th style="text-align:right">Amount</th></tr></thead>
  <tbody>${rows}<tr class="total-row"><td colspan="3">Total</td><td style="text-align:right">${sym}${total.toFixed(2)}</td></tr></tbody></table>
  <script>window.onafterprint=function(){window.close()}<\/script></body></html>`;
}

function buildSummaryHTML(receipts: Receipt[], bizName: string, rangeLabel: string, sym = "$"): string {
  const byCategory: Record<string, number> = {};
  receipts.forEach(r => { const c = r.category ?? "Uncategorized"; byCategory[c] = (byCategory[c] ?? 0) + (r.total ?? 0); });
  const sorted = Object.entries(byCategory).sort(([, a], [, b]) => b - a);
  const total = receipts.reduce((s, r) => s + (r.total ?? 0), 0);
  let totalDed = 0;
  const rows = sorted.map(([cat, amt]) => {
    const lower = cat.toLowerCase();
    const isPersonal = lower.includes("personal");
    const mult = (lower.includes("meal") || lower.includes("entertainment")) && !lower.includes("50%") ? 0.5 : isPersonal ? 0 : 1;
    const ded = isPersonal ? 0 : amt * mult;
    totalDed += ded;
    const rule = isPersonal ? "Non-deductible" : mult < 1 ? "50% rule" : "100%";
    return `<tr><td>${cat}</td><td style="text-align:right">${sym}${amt.toFixed(2)}</td><td style="text-align:center">${rule}</td><td style="text-align:right;color:#00897B;font-weight:600">${sym}${ded.toFixed(2)}</td></tr>`;
  }).join("");
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Tax Summary</title>
  <style>
    body{font-family:system-ui,sans-serif;color:#1a1a1a;padding:32px;max-width:800px;margin:0 auto}
    .header{background:#00897B;color:#fff;padding:20px 24px;border-radius:8px;margin-bottom:24px}
    .header h1{margin:0 0 4px;font-size:20px}.header p{margin:0;opacity:.85;font-size:13px}
    table{width:100%;border-collapse:collapse;font-size:13px}
    th{background:#f0f9f8;color:#00897B;text-align:left;padding:8px 12px;border-bottom:2px solid #b2dfdb;font-size:11px;text-transform:uppercase;letter-spacing:.5px}
    td{padding:7px 12px;border-bottom:1px solid #f0f0f0}
    .total-row td{font-weight:700;border-top:2px solid #b2dfdb;background:#f0f9f8}
    .note{margin-top:20px;font-size:11px;color:#888;line-height:1.6;border-top:1px solid #eee;padding-top:12px}
    @media print{body{padding:0}}
  </style></head><body>
  <div class="header"><h1>Tax Expense Summary — ${bizName}</h1><p>${rangeLabel} &nbsp;·&nbsp; ${receipts.length} transactions &nbsp;·&nbsp; Generated ${new Date().toLocaleDateString("en-CA")}</p></div>
  <table><thead><tr><th>Category</th><th style="text-align:right">Total</th><th style="text-align:center">Rule</th><th style="text-align:right">Est. Deductible</th></tr></thead>
  <tbody>${rows}<tr class="total-row"><td>TOTAL</td><td style="text-align:right">${sym}${total.toFixed(2)}</td><td></td><td style="text-align:right;color:#00897B">${sym}${totalDed.toFixed(2)}</td></tr></tbody></table>
  <p class="note">* Meals &amp; Entertainment estimated at 50% deductible (US/CA rules). This summary is for reference only — consult your accountant for exact tax figures.</p>
  <script>window.onafterprint=function(){window.close()}<\/script></body></html>`;
}

async function exportZIP(receipts: Receipt[], bizName: string, suffix: string) {
  const JSZip = (await import("jszip")).default;
  const zip = new JSZip();
  zip.file("expenses.csv", buildCSV(receipts));
  zip.file("quickbooks.iif", buildIIF(receipts));
  const blob = await zip.generateAsync({ type: "blob" });
  downloadBlob(blob, `TaxSort-bundle-${suffix}.zip`);
}

async function exportImagesZIP(receipts: Receipt[], suffix: string) {
  const JSZip = (await import("jszip")).default;
  const zip = new JSZip();
  const folder = zip.folder("receipts");
  zip.file("expenses.csv", buildCSV(receipts));
  let fetched = 0;
  for (const r of receipts) {
    if (!r.imageUrl) continue;
    try {
      const res = await fetch(r.imageUrl);
      const blob = await res.blob();
      const ext = blob.type.includes("pdf") ? "pdf" : "jpg";
      const safeName = (r.vendor ?? "receipt").replace(/[^a-zA-Z0-9]/g, "-").slice(0, 30);
      const date = r.date ? fmtDate(r.date) : "unknown";
      folder?.file(`${date}-${safeName}.${ext}`, blob);
      fetched++;
    } catch { /* skip missing images */ }
  }
  if (fetched === 0) {
    alert("No receipt images found for the selected range.");
    return;
  }
  const blob = await zip.generateAsync({ type: "blob" });
  downloadBlob(blob, `TaxSort-images-${suffix}.zip`);
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
      const list = snap.docs.map(d => ({ id: d.id, name: (d.data().name as string) ?? d.id, currency: d.data().currency as string | undefined }));
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
  const suffix = new Date().toISOString().slice(0, 10);
  const rangeLabel = RANGE_LABELS[range];
  const sym = currencySymbol(businesses.find(b => b.id === selectedBiz)?.currency);

  async function run(key: string, fn: () => Promise<void> | void) {
    setWorking(key);
    try { await fn(); } finally { setWorking(null); }
  }

  const exports = [
    {
      key: "csv",
      iconPath: "M3 10h18M3 14h18M10 3v18M14 3v18",
      iconColor: "#26A69A", bg: "#E0F2F1",
      title: "Export as CSV",
      desc: "Open in Excel, Google Sheets, or any accounting software",
      label: "Download CSV",
      action: () => run("csv", () => downloadBlob(new Blob([buildCSV(receipts)], { type: "text/csv" }), `TaxSort-expenses-${suffix}.csv`)),
    },
    {
      key: "pdf",
      iconPath: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z",
      iconColor: "#EF5350", bg: "#FFEBEE",
      title: "PDF Expense Report",
      desc: "Full transaction list — opens in a new tab, use browser Print → Save as PDF",
      label: "Open PDF",
      action: () => run("pdf", () => openPrint(buildReportHTML(receipts, bizName, rangeLabel, sym))),
    },
    {
      key: "summary",
      iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
      iconColor: "#00796B", bg: "#E0F2F1",
      title: "Tax Summary PDF",
      desc: "Category totals with 50% meals rule applied — opens in a new tab, use Print → Save as PDF",
      label: "Open Summary",
      action: () => run("summary", () => openPrint(buildSummaryHTML(receipts, bizName, rangeLabel, sym))),
    },
    {
      key: "qb",
      iconPath: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      iconColor: "#2E7D32", bg: "#E8F5E9",
      title: "QuickBooks IIF",
      desc: "Import directly into QuickBooks Desktop — categories pre-mapped to QB accounts",
      label: "Download IIF",
      action: () => run("qb", () => downloadBlob(new Blob([buildIIF(receipts)], { type: "text/plain" }), `TaxSort-quickbooks-${suffix}.iif`)),
    },
    {
      key: "history",
      iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      iconColor: "#00897B", bg: "#E0F2F1",
      title: "Full History CSV",
      desc: "Every transaction ever recorded — ignores the date filter above",
      label: "Export All Time",
      action: () => run("history", () => downloadBlob(new Blob([buildCSV(allReceipts)], { type: "text/csv" }), `TaxSort-full-history-${suffix}.csv`)),
    },
    {
      key: "zip",
      iconPath: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12",
      iconColor: "#7E57C2", bg: "#EDE7F6",
      title: "ZIP Bundle",
      desc: "CSV + QuickBooks IIF packed into a single ZIP file",
      label: "Download ZIP",
      action: () => run("zip", () => exportZIP(receipts, bizName, suffix)),
    },
    {
      key: "images",
      iconPath: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
      iconColor: "#0288D1", bg: "#E1F5FE",
      title: "Receipt Images ZIP",
      desc: "All receipt photos packed into a ZIP file — includes CSV summary",
      label: "Download Images",
      action: () => run("images", () => exportImagesZIP(receipts, suffix)),
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
          {/* Filters bar */}
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
                {(Object.keys(RANGE_LABELS) as Range[]).map(r => (
                  <option key={r} value={r}>{RANGE_LABELS[r]}</option>
                ))}
              </select>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">In Range</p>
              <p className="text-sm font-semibold text-gray-900">{receipts.length} transactions · <span className="text-teal-700">{sym}{total.toFixed(2)}</span></p>
            </div>
          </div>

          {/* Export cards */}
          <div className="space-y-3">
            {exports.map(e => (
              <div key={e.key} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: e.bg }}>
                  <svg className="w-5 h-5" fill="none" stroke={e.iconColor} strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={e.iconPath} />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900">{e.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{e.desc}</p>
                </div>
                <button
                  onClick={e.action}
                  disabled={working !== null || (e.key !== "history" && e.key !== "zip" && receipts.length === 0)}
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
