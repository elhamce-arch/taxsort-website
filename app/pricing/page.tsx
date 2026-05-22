import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TaxSort Pricing – Free & Pro Plans for Freelancers and Self-Employed",
  description: "Start free or upgrade to Pro. TaxSort offers flexible pricing for freelancers, gig workers, and self-employed. AI receipt scanning and mileage tracking included.",
};

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    annualNote: null,
    desc: "Try it out — no credit card needed",
    cta: "Download Free",
    features: [
      "AI receipt scanning (up to 10/month)",
      "Auto expense categorization",
      "GPS mileage tracking",
      "1 bank or CSV import per month",
      "1 free export per type (PDF, CSV, ZIP)",
      "1 business profile",
      "Cloud backup",
      "iOS & Android",
    ],
    highlight: false,
    badge: null,
  },
  {
    name: "Pro",
    price: "$7.99",
    period: "/ month",
    annualNote: "or $44.99 / year — save 53%",
    desc: "Everything you need to stay tax-ready",
    cta: "Get Pro",
    features: [
      "Unlimited AI receipt scanning",
      "Unlimited bank & CSV imports",
      "Unlimited PDF, CSV & ZIP bundle exports",
      "Full tax summary & transaction history export",
      "Multiple business profiles",
      "Deduction Health Score",
      "AI tax tips on every receipt",
      "Manually add & categorize expenses",
      "This app is 100% tax deductible",
    ],
    highlight: true,
    badge: "Most Popular",
  },
];

const faqs = [
  { q: "Can I cancel anytime?", a: "Yes. Cancel your Pro subscription anytime with no fees or penalties. Your data remains accessible on the Free plan." },
  { q: "Is my data secure?", a: "All data is encrypted in transit and at rest. We use bank-level security to protect your financial information." },
  { q: "Does TaxSort work for Canadian taxes?", a: "Yes. TaxSort fully supports CRA tax categories for Canadian freelancers and self-employed individuals." },
  { q: "What about US taxes?", a: "TaxSort also supports IRS tax categories, making it perfect for American freelancers and self-employed workers." },
  { q: "Can my accountant access my reports?", a: "Yes. Export PDF or CSV reports and share them directly with your accountant via email or file sharing." },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ background: "#e8f0e5" }} className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Simple, honest pricing
            </h1>
            <p className="text-xl text-gray-600">Start free. Upgrade when you need more.</p>
          </div>
        </section>

        {/* Plans */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 items-stretch">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl p-8 relative flex flex-col ${p.highlight ? "text-white" : "border border-gray-200 bg-white"}`}
                style={p.highlight ? { background: "linear-gradient(160deg, #1a4d28 0%, #0f2e18 100%)" } : {}}
              >
                {p.badge && (
                  <span className="absolute top-6 right-6 text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "#4ade80", color: "#0d0d0d" }}>
                    {p.badge}
                  </span>
                )}
                <div className="mb-6">
                  <h2 className="text-xl font-bold mb-1">{p.name}</h2>
                  <p className={`text-sm mb-4 ${p.highlight ? "text-gray-400" : "text-gray-500"}`}>{p.desc}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold">{p.price}</span>
                    <span className={p.highlight ? "text-gray-400" : "text-gray-500"}>{p.period}</span>
                  </div>
                  {p.name === "Pro" && (
                    <p className="text-sm mt-2 flex items-center gap-2">
                      <span style={{ textDecoration: "line-through", color: "#6b7280" }}>$95.88/yr</span>
                      <span style={{ color: "#4ade80" }}>$44.99 / year — save 53%</span>
                    </p>
                  )}
                </div>
                <Link
                  href="/#download"
                  className={`block text-center py-3 rounded-xl font-semibold mb-8 transition-colors ${
                    p.highlight
                      ? "bg-white text-gray-900 hover:bg-gray-100"
                      : "text-white hover:opacity-90"
                  }`}
                  style={!p.highlight ? { background: "#2a7a3b" } : {}}
                >
                  {p.cta}
                </Link>
                <ul className="space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2 text-sm ${p.highlight ? "text-gray-300" : "text-gray-600"}`}>
                      <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently asked questions</h2>
            <div className="space-y-6">
              {faqs.map((f) => (
                <div key={f.q} className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
