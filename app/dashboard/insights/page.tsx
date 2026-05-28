"use client";
import { useEffect, useState, useMemo } from "react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/lib/auth-context";

interface Receipt {
  id: string;
  vendor: string;
  total: number;
  date: { seconds: number };
  category: string;
}

interface Business { id: string; name: string; }

const PALETTE = [
  "#00897B","#26A69A","#4CAF50","#8BC34A","#FF9800",
  "#F44336","#9C27B0","#3F51B5","#2196F3","#00BCD4",
  "#795548","#607D8B","#E91E63","#FF5722","#FFC107",
];

function DonutChart({ data }: { data: { label: string; value: number; color: string }[] }) {
  const total = data.reduce((s, d) => s + d.value, 0);
  if (total === 0) return <div className="w-40 h-40 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-400">No data</div>;
  const cx = 80, cy = 80, R = 65, r = 40;
  let angle = -Math.PI / 2;
  const slices = data.map((d) => {
    const sweep = (d.value / total) * 2 * Math.PI;
    const end = angle + sweep;
    const large = sweep > Math.PI ? 1 : 0;
    const path = sweep >= 2 * Math.PI - 0.001
      ? `M ${cx} ${cy - R} A ${R} ${R} 0 1 1 ${cx - 0.01} ${cy - R} Z M ${cx} ${cy - r} A ${r} ${r} 0 1 0 ${cx + 0.01} ${cy - r} Z`
      : `M ${cx + R * Math.cos(angle)} ${cy + R * Math.sin(angle)} A ${R} ${R} 0 ${large} 1 ${cx + R * Math.cos(end)} ${cy + R * Math.sin(end)} L ${cx + r * Math.cos(end)} ${cy + r * Math.sin(end)} A ${r} ${r} 0 ${large} 0 ${cx + r * Math.cos(angle)} ${cy + r * Math.sin(angle)} Z`;
    angle = end;
    return { ...d, path };
  });
  return (
    <svg viewBox="0 0 160 160" className="w-40 h-40 flex-shrink-0">
      {slices.map((s, i) => <path key={i} d={s.path} fill={s.color} />)}
    </svg>
  );
}

function BarChart({ months }: { months: { label: string; value: number }[] }) {
  const max = Math.max(...months.map(m => m.value), 1);
  const bw = 36, gap = 10, H = 110;
  const W = months.length * (bw + gap) - gap;
  return (
    <svg viewBox={`0 0 ${W} ${H + 28}`} className="w-full" style={{ maxHeight: 160 }}>
      {months.map((m, i) => {
        const bh = Math.max((m.value / max) * H, m.value > 0 ? 4 : 0);
        const x = i * (bw + gap);
        const y = H - bh;
        return (
          <g key={i}>
            <rect x={x} y={y} width={bw} height={bh} rx={5} fill="#00897B" opacity={0.8} />
            <text x={x + bw / 2} y={H + 14} textAnchor="middle" fontSize={9} fill="#9CA3AF">{m.label}</text>
            {m.value > 0 && (
              <text x={x + bw / 2} y={y - 4} textAnchor="middle" fontSize={8} fill="#374151">
                ${m.value >= 1000 ? (m.value / 1000).toFixed(1) + "k" : m.value.toFixed(0)}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

type Period = "month" | "ytd" | "all";

export default function InsightsPage() {
  const { user } = useAuth();
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [selectedBiz, setSelectedBiz] = useState("");
  const [receipts, setReceipts] = useState<Receipt[]>([]);
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState<Period>("ytd");

  useEffect(() => {
    if (!user) return;
    getDocs(collection(db, "users", user.uid, "businesses")).then(async snap => {
      const list = snap.docs.map(d => ({ id: d.id, name: (d.data().name as string) ?? d.id }));
      setBusinesses(list);
      const bid = list[0]?.id ?? "personal";
      setSelectedBiz(bid);
      const q = query(collection(db, "users", user.uid, "businesses", bid, "receipts"), orderBy("date", "desc"));
      const rSnap = await getDocs(q);
      setReceipts(rSnap.docs.map(d => ({ id: d.id, ...d.data() } as Receipt)));
      setLoading(false);
    });
  }, [user]);

  useEffect(() => {
    if (!user || !selectedBiz) return;
    setLoading(true);
    const q = query(collection(db, "users", user.uid, "businesses", selectedBiz, "receipts"), orderBy("date", "desc"));
    getDocs(q).then(snap => {
      setReceipts(snap.docs.map(d => ({ id: d.id, ...d.data() } as Receipt)));
      setLoading(false);
    });
  }, [user, selectedBiz]);

  const filtered = useMemo(() => {
    const now = new Date();
    return receipts.filter(r => {
      if (!r.date) return false;
      const d = new Date(r.date.seconds * 1000);
      if (period === "month") return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth();
      if (period === "ytd") return d.getFullYear() === now.getFullYear();
      return true;
    });
  }, [receipts, period]);

  const total = filtered.reduce((s, r) => s + (r.total ?? 0), 0);
  const largest = filtered.length ? filtered.reduce((a, b) => (b.total ?? 0) > (a.total ?? 0) ? b : a, filtered[0]) : null;

  const byCategory = useMemo(() => {
    const acc: Record<string, number> = {};
    filtered.forEach(r => { const c = r.category ?? "Uncategorized"; acc[c] = (acc[c] ?? 0) + (r.total ?? 0); });
    return Object.entries(acc).sort(([, a], [, b]) => b - a);
  }, [filtered]);

  const chartData = byCategory.map(([label, value], i) => ({ label, value, color: PALETTE[i % PALETTE.length] }));

  const monthlyData = useMemo(() => {
    const now = new Date();
    const months = Array.from({ length: 6 }, (_, i) => {
      const d = new Date(now.getFullYear(), now.getMonth() - (5 - i), 1);
      return { label: d.toLocaleDateString("en-US", { month: "short" }), key: `${d.getFullYear()}-${d.getMonth()}`, value: 0 };
    });
    receipts.forEach(r => {
      if (!r.date) return;
      const d = new Date(r.date.seconds * 1000);
      const m = months.find(m => m.key === `${d.getFullYear()}-${d.getMonth()}`);
      if (m) m.value += r.total ?? 0;
    });
    return months;
  }, [receipts]);

  const deductible = filtered.reduce((s, r) => {
    const cat = (r.category ?? "").toLowerCase();
    if (cat.includes("personal")) return s;
    const mult = cat.includes("meal") || cat.includes("entertainment") ? 0.5 : 1;
    return s + (r.total ?? 0) * mult;
  }, 0);

  const uniqueMonths = new Set(filtered.map(r => r.date ? `${new Date(r.date.seconds * 1000).getFullYear()}-${new Date(r.date.seconds * 1000).getMonth()}` : null)).size;
  const monthlyAvg = uniqueMonths > 0 ? total / uniqueMonths : 0;

  return (
    <div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Insights</h1>
          <p className="text-sm text-gray-500 mt-0.5">Spending analysis and tax overview</p>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          {businesses.length > 1 && (
            <select value={selectedBiz} onChange={e => setSelectedBiz(e.target.value)}
              className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700">
              {businesses.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
            </select>
          )}
          <div className="flex gap-1 bg-white border border-gray-200 rounded-xl p-1 text-sm">
            {(["month", "ytd", "all"] as Period[]).map(p => (
              <button key={p} onClick={() => setPeriod(p)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${period === p ? "text-white" : "text-gray-500 hover:text-gray-700"}`}
                style={period === p ? { background: "#00897B" } : {}}>
                {p === "month" ? "This Month" : p === "ytd" ? "This Year" : "All Time"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-20"><div className="w-8 h-8 border-2 border-teal-600 border-t-transparent rounded-full animate-spin" /></div>
      ) : (
        <>
          {/* Summary cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { label: "Total Spent", value: `$${total.toFixed(2)}`, sub: `${filtered.length} transactions` },
              { label: "Est. Deductible", value: `$${deductible.toFixed(2)}`, sub: `${total > 0 ? Math.round(deductible / total * 100) : 0}% of total` },
              { label: "Monthly Avg", value: `$${monthlyAvg.toFixed(2)}`, sub: "per active month" },
              { label: "Largest Expense", value: `$${(largest?.total ?? 0).toFixed(2)}`, sub: largest?.vendor ?? "—" },
            ].map(c => (
              <div key={c.label} className="bg-white rounded-2xl border border-gray-100 p-5">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">{c.label}</p>
                <p className="text-2xl font-bold text-gray-900">{c.value}</p>
                <p className="text-xs text-gray-400 mt-0.5">{c.sub}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Category donut */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="text-base font-semibold text-gray-900 mb-4">By Category</h2>
              {byCategory.length === 0 ? (
                <p className="text-sm text-gray-400 text-center py-8">No data for this period</p>
              ) : (
                <div className="flex gap-5 items-center">
                  <DonutChart data={chartData} />
                  <div className="flex-1 space-y-2 min-w-0">
                    {chartData.slice(0, 7).map(({ label, value, color }) => (
                      <div key={label}>
                        <div className="flex justify-between text-xs mb-0.5">
                          <span className="text-gray-700 truncate pr-2">{label}</span>
                          <span className="font-medium text-gray-900 flex-shrink-0">${value.toFixed(0)}</span>
                        </div>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full rounded-full transition-all" style={{ width: `${(value / total) * 100}%`, background: color }} />
                        </div>
                      </div>
                    ))}
                    {byCategory.length > 7 && <p className="text-xs text-gray-400">+{byCategory.length - 7} more</p>}
                  </div>
                </div>
              )}
            </div>

            {/* Monthly trend */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="text-base font-semibold text-gray-900 mb-4">Monthly Spending</h2>
              {monthlyData.every(m => m.value === 0) ? (
                <p className="text-sm text-gray-400 text-center py-8">No data yet</p>
              ) : (
                <div className="pt-2"><BarChart months={monthlyData} /></div>
              )}
            </div>
          </div>

          {/* Full category table */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h2 className="text-base font-semibold text-gray-900 mb-4">Category Breakdown</h2>
            {byCategory.length === 0 ? (
              <p className="text-sm text-gray-400">No expenses in this period.</p>
            ) : (
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-xs text-gray-400 uppercase tracking-wide border-b border-gray-100">
                    <th className="text-left py-2 font-medium">Category</th>
                    <th className="text-right py-2 font-medium">Amount</th>
                    <th className="text-right py-2 font-medium">% of Total</th>
                    <th className="text-right py-2 font-medium">Transactions</th>
                    <th className="text-right py-2 font-medium">Est. Deductible</th>
                  </tr>
                </thead>
                <tbody>
                  {byCategory.map(([cat, amt], i) => {
                    const count = filtered.filter(r => (r.category ?? "Uncategorized") === cat).length;
                    const catLower = cat.toLowerCase();
                    const isPersonal = catLower.includes("personal");
                    const mult = catLower.includes("meal") || catLower.includes("entertainment") ? 0.5 : 1;
                    const ded = isPersonal ? 0 : amt * mult;
                    return (
                      <tr key={cat} className="border-b border-gray-50 hover:bg-gray-50">
                        <td className="py-2.5">
                          <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: PALETTE[i % PALETTE.length] }} />
                            <span className="text-gray-700">{cat}</span>
                          </div>
                        </td>
                        <td className="py-2.5 text-right font-semibold text-gray-900">${amt.toFixed(2)}</td>
                        <td className="py-2.5 text-right text-gray-500">{total > 0 ? (amt / total * 100).toFixed(1) : 0}%</td>
                        <td className="py-2.5 text-right text-gray-500">{count}</td>
                        <td className="py-2.5 text-right text-teal-700 font-medium">${ded.toFixed(2)}</td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-gray-200">
                    <td className="py-2.5 font-bold text-gray-900">Total</td>
                    <td className="py-2.5 text-right font-bold text-gray-900">${total.toFixed(2)}</td>
                    <td className="py-2.5 text-right text-gray-500">100%</td>
                    <td className="py-2.5 text-right text-gray-500">{filtered.length}</td>
                    <td className="py-2.5 text-right font-bold text-teal-700">${deductible.toFixed(2)}</td>
                  </tr>
                </tfoot>
              </table>
            )}
          </div>
          <p className="text-xs text-gray-400 text-center mt-4">Est. Deductible applies 50% rule to Meals &amp; Entertainment. Consult your accountant for exact figures.</p>
        </>
      )}
    </div>
  );
}
