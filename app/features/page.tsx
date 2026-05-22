import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TaxSort Features – AI Receipt Scanner, GPS Mileage Tracker & Expense Sorter",
  description: "Explore TaxSort features: AI-powered receipt scanning, GPS mileage tracking, automatic expense categorization, and one-tap audit-ready PDF export for freelancers.",
};

const features = [
  {
    icon: <svg viewBox="0 0 44 44" width="44" height="44" fill="none"><rect x="9" y="4" width="26" height="33" rx="3" fill="#e8f0e5" stroke="#2a7a3b" strokeWidth="2"/><line x1="14" y1="13" x2="30" y2="13" stroke="#2a7a3b" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/><line x1="14" y1="18" x2="26" y2="18" stroke="#2a7a3b" strokeWidth="1.5" strokeLinecap="round" opacity="0.45"/><line x1="14" y1="23" x2="30" y2="23" stroke="#2a7a3b" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/><line x1="5" y1="20" x2="39" y2="20" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"/><circle cx="36" cy="10" r="5" fill="#4ade80" opacity="0.9"/><path d="M33 10 L35 12 L39 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: "AI Receipt Scanning",
    desc: "Snap any receipt and AI extracts merchant, amount, date, and tax category instantly. Works on crumpled, faded, or digital receipts.",
  },
  {
    icon: <svg viewBox="0 0 44 44" width="44" height="44" fill="none"><path d="M22 3C14 3 8 10 8 17C8 27 22 41 22 41C22 41 36 27 36 17C36 10 30 3 22 3Z" fill="#e8f0e5" stroke="#2a7a3b" strokeWidth="2"/><circle cx="22" cy="17" r="6" fill="#2a7a3b"/><circle cx="22" cy="17" r="2.5" fill="white"/><circle cx="22" cy="38" r="4" fill="#2a7a3b" opacity="0.2" className="icon-ping-1"/><circle cx="22" cy="38" r="4" fill="#2a7a3b" opacity="0.15" className="icon-ping-2"/></svg>,
    title: "GPS Mileage Tracking",
    desc: "Auto-track every business trip. TaxSort logs your route, calculates the deductible distance, and categorizes it — all in the background.",
  },
  {
    icon: <svg viewBox="0 0 44 44" width="44" height="44" fill="none"><rect x="4" y="6" width="36" height="9" rx="4.5" fill="#fef2f2" stroke="#f87171" strokeWidth="1.5"/><circle cx="11" cy="10.5" r="3" fill="#f87171"/><rect x="17" y="9" width="16" height="3" rx="1.5" fill="#f87171" opacity="0.5"/><rect x="4" y="18" width="36" height="9" rx="4.5" fill="#eff6ff" stroke="#60a5fa" strokeWidth="1.5"/><circle cx="11" cy="22.5" r="3" fill="#60a5fa"/><rect x="17" y="21" width="20" height="3" rx="1.5" fill="#60a5fa" opacity="0.5"/><rect x="4" y="30" width="36" height="9" rx="4.5" fill="#e8f0e5" stroke="#2a7a3b" strokeWidth="2"/><circle cx="11" cy="34.5" r="3" fill="#2a7a3b"/><rect x="17" y="33" width="14" height="3" rx="1.5" fill="#2a7a3b" opacity="0.7"/></svg>,
    title: "Smart Expense Sorting",
    desc: "AI categorizes every expense into CRA and IRS-approved categories. 50+ categories supported with smart learning over time.",
  },
  {
    icon: <svg viewBox="0 0 44 44" width="44" height="44" fill="none"><path d="M8 3 L28 3 L36 11 L36 34 L8 34 Z" fill="#e8f0e5" stroke="#2a7a3b" strokeWidth="2" strokeLinejoin="round"/><path d="M28 3 L28 11 L36 11" fill="none" stroke="#2a7a3b" strokeWidth="2" strokeLinejoin="round" opacity="0.6"/><line x1="13" y1="17" x2="31" y2="17" stroke="#2a7a3b" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/><line x1="13" y1="22" x2="25" y2="22" stroke="#2a7a3b" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/><circle cx="33" cy="37" r="7" fill="#2a7a3b"/><line x1="33" y1="33" x2="33" y2="40" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M29 37 L33 41 L37 37" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: "Audit-Ready Export",
    desc: "Generate professional PDF or CSV reports in one tap. Send directly to your accountant or import into TurboTax or H&R Block.",
  },
  {
    icon: <svg viewBox="0 0 44 44" width="44" height="44" fill="none"><path d="M11 28 Q4 28 4 21 Q4 14 10 13 Q11 7 17 5 Q22 2 27 5 Q31 1 36 5 Q42 6 41 13 Q44 15 43 21 Q42 27 35 27 L29 27" stroke="#2a7a3b" strokeWidth="2" strokeLinecap="round" fill="none"/><line x1="11" y1="28" x2="28" y2="28" stroke="#2a7a3b" strokeWidth="2" strokeLinecap="round"/><rect x="14" y="28" width="14" height="13" rx="3" fill="#e8f0e5" stroke="#2a7a3b" strokeWidth="1.5"/><path d="M17 28 L17 25 C17 22.8 18.8 21 21 21 C23.2 21 25 22.8 25 25 L25 28" fill="none" stroke="#2a7a3b" strokeWidth="1.5" strokeLinecap="round"/><circle cx="21" cy="35" r="1.5" fill="#2a7a3b"/></svg>,
    title: "Secure Cloud Backup",
    desc: "All receipts and data are encrypted and backed up to the cloud 24/7. Never lose a receipt again.",
  },
  {
    icon: <svg viewBox="0 0 44 44" width="44" height="44" fill="none"><line x1="5" y1="5" x2="5" y2="38" stroke="#2a7a3b" strokeWidth="2" strokeLinecap="round"/><line x1="5" y1="38" x2="40" y2="38" stroke="#2a7a3b" strokeWidth="2" strokeLinecap="round"/><rect x="9" y="22" width="8" height="16" rx="3" fill="#86efac"/><rect x="21" y="14" width="8" height="24" rx="3" fill="#4ade80"/><rect x="33" y="7" width="8" height="31" rx="3" fill="#2a7a3b"/><path d="M10 27 Q18 20 25 15 Q30 11 35 8" stroke="#2a7a3b" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2.5" opacity="0.5"/></svg>,
    title: "Real-Time Tax Savings",
    desc: "Watch your estimated tax savings grow as you add expenses. Know exactly where you stand before tax season hits.",
  },
  {
    icon: <svg viewBox="0 0 44 44" width="44" height="44" fill="none"><rect x="3" y="9" width="26" height="22" rx="4" fill="#e8f0e5" stroke="#2a7a3b" strokeWidth="2"/><circle cx="11" cy="18" r="4" fill="#2a7a3b" opacity="0.5"/><line x1="18" y1="16" x2="25" y2="16" stroke="#2a7a3b" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/><line x1="18" y1="20" x2="23" y2="20" stroke="#2a7a3b" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/><rect x="15" y="17" width="26" height="22" rx="4" fill="white" stroke="#2a7a3b" strokeWidth="2"/><circle cx="23" cy="26" r="4" fill="#2a7a3b"/><line x1="30" y1="24" x2="37" y2="24" stroke="#2a7a3b" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/><line x1="30" y1="28" x2="35" y2="28" stroke="#2a7a3b" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/></svg>,
    title: "Multi-Business Support",
    desc: "Manage expenses for multiple businesses or side hustles from one app. Separate reports per business.",
  },
  {
    icon: <svg viewBox="0 0 44 44" width="44" height="44" fill="none"><circle cx="18" cy="18" r="14" fill="#e8f0e5" stroke="#2a7a3b" strokeWidth="2"/><line x1="10" y1="15" x2="26" y2="15" stroke="#2a7a3b" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/><line x1="10" y1="19" x2="22" y2="19" stroke="#2a7a3b" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/><line x1="10" y1="23" x2="20" y2="23" stroke="#2a7a3b" strokeWidth="1.5" strokeLinecap="round" opacity="0.35"/><line x1="28" y1="28" x2="41" y2="41" stroke="#2a7a3b" strokeWidth="3" strokeLinecap="round"/></svg>,
    title: "Smart Search",
    desc: "Find any receipt instantly with full-text search across all your stored receipts and expenses.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ background: "#e8f0e5" }} className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Features built<br />for freelancers
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Everything you need to stay on top of your taxes year-round — not just in April.
            </p>
            <Link href="/#download" className="px-8 py-3 rounded-xl font-semibold text-white inline-block" style={{ background: "#2a7a3b" }}>
              Download Free
            </Link>
          </div>
        </section>

        {/* Features grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                <div className="mb-5">{f.icon}</div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h2>
                <p className="text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* App screenshots showcase */}
        <section style={{ background: "#e8f0e5" }} className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">See it in action</h2>
            <div className="flex flex-col md:flex-row justify-center items-end gap-6">
              {[
                { src: "/screenshot-receipt.jpeg", alt: "AI receipt scanning", label: "Snap receipts instantly" },
                { src: "/screenshot-expenses.jpeg", alt: "Expense tracking dashboard", label: "Auto-sorted expenses" },
                { src: "/screenshot-mileage.jpeg", alt: "GPS mileage tracking", label: "GPS mileage tracking" },
                { src: "/screenshot-export.jpeg", alt: "Export tax reports", label: "One-tap export" },
              ].map((s, i) => (
                <div key={s.label} className={`flex flex-col items-center gap-3 ${i === 1 ? "md:mb-8" : ""}`}>
                  <div className="w-40 rounded-2xl overflow-hidden shadow-lg">
                    <div style={{ marginTop: "-20px" }}>
                      <Image src={s.src} alt={s.alt} width={200} height={400} className="w-full h-auto" />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-600">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-4 bg-gray-900 text-white">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "98%", label: "Receipt accuracy" },
              { value: "50+", label: "Tax categories" },
              { value: "1 tap", label: "Export to PDF" },
              { value: "24/7", label: "Cloud backup" },
            ].map((s) => (
              <div key={s.value}>
                <div className="text-4xl font-bold mb-2">{s.value}</div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#e8f0e5" }} className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Start tracking expenses today</h2>
            <p className="text-lg text-gray-600 mb-8">Free to download. No credit card required.</p>
            <Link href="/pricing" className="px-8 py-3 rounded-xl font-semibold text-white inline-block" style={{ background: "#2a7a3b" }}>
              See Pricing
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
