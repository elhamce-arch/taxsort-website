"use client";
import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/lib/auth-context";
import Link from "next/link";

interface Business { id: string; name: string; currency?: string; }

function currencySymbol(currency?: string) {
  if (currency === "CAD") return "CA$";
  if (currency === "GBP") return "£";
  if (currency === "AUD") return "AU$";
  return "$";
}
interface Receipt {
  id: string;
  vendor: string;
  total: number;
  date: { seconds: number };
  category: string;
  has_image: boolean;
  is_bank_import?: boolean;
}

const CATEGORY_COLORS: Record<string, string> = {
  "Meals & Entertainment": "#f97316",
  "Travel": "#3b82f6",
  "Office Supplies": "#8b5cf6",
  "Phone & Internet": "#06b6d4",
  "Software & Subscriptions": "#6366f1",
  "Advertising & Marketing": "#ec4899",
  "Professional Services": "#14b8a6",
  "Vehicle & Transportation": "#f59e0b",
  "Delivery & Freight": "#84cc16",
};

function categoryColor(cat: string) {
  return CATEGORY_COLORS[cat] ?? "#00897B";
}

function initials(name: string) {
  return name.split(" ").slice(0, 2).map(w => w[0]).join("").toUpperCase();
}

function formatDate(ts: { seconds: number }) {
  return new Date(ts.seconds * 1000).toLocaleDateString("en-CA");
}

export default function DashboardPage() {
  const { user } = useAuth();
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [selectedBiz, setSelectedBiz] = useState<string>("");
  const [receipts, setReceipts] = useState<Receipt[]>([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  // Load businesses
  useEffect(() => {
    if (!user) return;
    getDocs(collection(db, "users", user.uid, "businesses")).then(snap => {
      const list = snap.docs.map(d => ({ id: d.id, name: (d.data().name as string) ?? d.id, currency: d.data().currency as string | undefined }));
      setBusinesses(list);
      if (list.length > 0) setSelectedBiz(list[0].id);
    });
  }, [user]);

  // Load receipts for selected business
  useEffect(() => {
    if (!user || !selectedBiz) return;
    setLoading(true);
    const q = query(
      collection(db, "users", user.uid, "businesses", selectedBiz, "receipts"),
      orderBy("date", "desc")
    );
    const unsub = onSnapshot(q, snap => {
      setReceipts(snap.docs.map(d => ({ id: d.id, ...d.data() } as Receipt)));
      setLoading(false);
    });
    return unsub;
  }, [user, selectedBiz]);

  const categories = Array.from(new Set(receipts.map(r => r.category).filter(Boolean))).sort();

  const now = new Date();
  const filtered = receipts.filter(r => {
    if (search && !r.vendor?.toLowerCase().includes(search.toLowerCase()) && !r.category?.toLowerCase().includes(search.toLowerCase())) return false;
    if (categoryFilter !== "all" && r.category !== categoryFilter) return false;
    if (dateFilter !== "all" && r.date) {
      const d = new Date(r.date.seconds * 1000);
      if (dateFilter === "this_month") {
        if (d.getMonth() !== now.getMonth() || d.getFullYear() !== now.getFullYear()) return false;
      } else if (dateFilter === "last_month") {
        const lm = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        if (d.getMonth() !== lm.getMonth() || d.getFullYear() !== lm.getFullYear()) return false;
      } else if (dateFilter === "this_year") {
        if (d.getFullYear() !== now.getFullYear()) return false;
      } else if (dateFilter === "last_year") {
        if (d.getFullYear() !== now.getFullYear() - 1) return false;
      }
    }
    return true;
  });

  const total = filtered.reduce((s, r) => s + (r.total ?? 0), 0);
  const sym = currencySymbol(businesses.find(b => b.id === selectedBiz)?.currency);

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Expenses</h1>
          <p className="text-sm text-gray-500 mt-0.5">{filtered.length} transactions · Total: <span className="font-semibold text-teal-700">{sym}{total.toFixed(2)}</span></p>
        </div>
        <div className="flex items-center gap-3">
          {businesses.length > 1 && (
            <select
              value={selectedBiz}
              onChange={e => setSelectedBiz(e.target.value)}
              className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700"
            >
              {businesses.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
            </select>
          )}
          <Link
            href="/dashboard/upload"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "#00897B" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Add Receipt
          </Link>
        </div>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-wrap gap-3 mb-4">
        <div className="relative flex-1 min-w-48">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 111 11a6 6 0 0116 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search vendor or category…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <select
          value={categoryFilter}
          onChange={e => setCategoryFilter(e.target.value)}
          className="px-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          <option value="all">All Categories</option>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <select
          value={dateFilter}
          onChange={e => setDateFilter(e.target.value)}
          className="px-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          <option value="all">All Time</option>
          <option value="this_month">This Month</option>
          <option value="last_month">Last Month</option>
          <option value="this_year">This Year</option>
          <option value="last_year">Last Year</option>
        </select>
        {(categoryFilter !== "all" || dateFilter !== "all" || search) && (
          <button
            onClick={() => { setCategoryFilter("all"); setDateFilter("all"); setSearch(""); }}
            className="px-3 py-2.5 rounded-xl text-sm text-gray-500 bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-2 border-teal-600 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <svg className="w-12 h-12 mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <p className="text-sm">No expenses yet. <Link href="/dashboard/upload" className="text-teal-600 underline">Upload a receipt</Link></p>
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-xs text-gray-400 uppercase tracking-wide">
                <th className="text-left px-6 py-3 font-medium">Vendor</th>
                <th className="text-left px-6 py-3 font-medium">Category</th>
                <th className="text-left px-6 py-3 font-medium">Date</th>
                <th className="text-right px-6 py-3 font-medium">Amount</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r, i) => (
                <tr key={r.id} className={`border-b border-gray-50 hover:bg-gray-50 transition-colors ${i === filtered.length - 1 ? "border-0" : ""}`}>
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                        style={{ background: categoryColor(r.category) }}
                      >
                        {initials(r.vendor ?? "?")}
                      </div>
                      <span className="font-medium text-gray-800">{r.vendor ?? "Unknown"}</span>
                    </div>
                  </td>
                  <td className="px-6 py-3">
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs" style={{ background: categoryColor(r.category) + "20", color: categoryColor(r.category) }}>
                      {r.category ?? "Uncategorized"}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-gray-500">{r.date ? formatDate(r.date) : "—"}</td>
                  <td className="px-6 py-3 text-right font-semibold text-gray-900">{sym}{(r.total ?? 0).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
