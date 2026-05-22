import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TaxSort Features – AI Receipt Scanner, GPS Mileage Tracker & Expense Sorter",
  description: "Explore TaxSort features: AI-powered receipt scanning, GPS mileage tracking, automatic expense categorization, and one-tap audit-ready PDF export for freelancers.",
};

const features = [
  { icon: "📷", title: "AI Receipt Scanning", desc: "Snap any receipt and AI extracts merchant, amount, date, and tax category instantly. Works on crumpled, faded, or digital receipts." },
  { icon: "🗺️", title: "GPS Mileage Tracking", desc: "Auto-track every business trip. TaxSort logs your route, calculates the deductible distance, and categorizes it — all in the background." },
  { icon: "📂", title: "Smart Expense Sorting", desc: "AI categorizes every expense into CRA and IRS-approved categories. 50+ categories supported with smart learning over time." },
  { icon: "📄", title: "Audit-Ready Export", desc: "Generate professional PDF or CSV reports in one tap. Send directly to your accountant or import into TurboTax or H&R Block." },
  { icon: "☁️", title: "Secure Cloud Backup", desc: "All receipts and data are encrypted and backed up to the cloud 24/7. Never lose a receipt again." },
  { icon: "📊", title: "Real-Time Tax Savings", desc: "Watch your estimated tax savings grow as you add expenses. Know exactly where you stand before tax season hits." },
  { icon: "👥", title: "Multi-Business Support", desc: "Manage expenses for multiple businesses or side hustles from one app. Separate reports per business." },
  { icon: "🔍", title: "Smart Search", desc: "Find any receipt instantly with full-text search across all your stored receipts and expenses." },
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
                <div className="text-4xl mb-4">{f.icon}</div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h2>
                <p className="text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
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
