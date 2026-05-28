"use client";
import { useEffect, useState } from "react";
import { collection, query, orderBy, getDocs, getDocs as getBizDocs } from "firebase/firestore";
import { db, auth } from "@/lib/firebase";

interface Receipt {
  vendor: string;
  total: number;
  date: { seconds: number };
  category: string;
}

export default function ExportPage() {
  const [receipts, setReceipts] = useState<Receipt[]>([]);
  const [businessId, setBusinessId] = useState("");
  const [loading, setLoading] = useState(true);
  const [exporting, setExporting] = useState(false);

  useEffect(() => {
    const uid = auth.currentUser?.uid;
    if (!uid) return;
    getBizDocs(collection(db, "users", uid, "businesses")).then(async snap => {
      const bid = snap.docs[0]?.id ?? "personal";
      setBusinessId(bid);
      const q = query(collection(db, "users", uid, "businesses", bid, "receipts"), orderBy("date", "desc"));
      const rSnap = await getDocs(q);
      setReceipts(rSnap.docs.map(d => d.data() as Receipt));
      setLoading(false);
    });
  }, []);

  function exportCSV() {
    setExporting(true);
    const rows = [
      ["Date", "Vendor", "Category", "Amount"],
      ...receipts.map(r => [
        r.date ? new Date(r.date.seconds * 1000).toLocaleDateString("en-CA") : "",
        r.vendor ?? "",
        r.category ?? "",
        (r.total ?? 0).toFixed(2),
      ]),
    ];
    const csv = rows.map(r => r.map(c => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `TaxSort-expenses-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    setExporting(false);
  }

  const total = receipts.reduce((s, r) => s + (r.total ?? 0), 0);

  const byCategory = receipts.reduce<Record<string, number>>((acc, r) => {
    const cat = r.category ?? "Uncategorized";
    acc[cat] = (acc[cat] ?? 0) + (r.total ?? 0);
    return acc;
  }, {});

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Export</h1>
      <p className="text-sm text-gray-500 mb-6">Download your expenses as a CSV file for your accountant or tax software.</p>

      {loading ? (
        <div className="flex justify-center py-20"><div className="w-8 h-8 border-2 border-teal-600 border-t-transparent rounded-full animate-spin" /></div>
      ) : (
        <>
          {/* Summary card */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-500">Total expenses</p>
                <p className="text-3xl font-bold text-gray-900">${total.toFixed(2)}</p>
                <p className="text-xs text-gray-400 mt-0.5">{receipts.length} transactions</p>
              </div>
              <button
                onClick={exportCSV}
                disabled={exporting || receipts.length === 0}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white text-sm transition-opacity hover:opacity-90 disabled:opacity-60"
                style={{ background: "#00897B" }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CSV
              </button>
            </div>

            {/* By category */}
            <div className="border-t border-gray-100 pt-4 space-y-2">
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">By Category</p>
              {Object.entries(byCategory)
                .sort(([, a], [, b]) => b - a)
                .map(([cat, amt]) => (
                  <div key={cat} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{cat}</span>
                    <span className="text-sm font-medium text-gray-900">${amt.toFixed(2)}</span>
                  </div>
                ))}
            </div>
          </div>

          <p className="text-xs text-gray-400 text-center">
            More export formats (PDF report, SA103F, T2125, Schedule C) available in the mobile app.
          </p>
        </>
      )}
    </div>
  );
}
