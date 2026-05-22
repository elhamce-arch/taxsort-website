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
    desc: "Perfect for getting started",
    cta: "Download Free",
    features: [
      "AI receipt scanning (up to 30/month)",
      "Basic expense categorization",
      "Manual mileage entry",
      "Monthly summary report",
      "Cloud backup",
      "iOS & Android",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "per month",
    desc: "For serious freelancers",
    cta: "Get Pro",
    features: [
      "Unlimited AI receipt scanning",
      "GPS auto mileage tracking",
      "Smart expense categorization",
      "Unlimited PDF & CSV exports",
      "Bank account integration",
      "Multi-business support",
      "Priority support",
      "Advanced analytics",
    ],
    highlight: true,
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
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl p-8 ${p.highlight ? "text-white" : "border border-gray-200 bg-white"}`}
                style={p.highlight ? { background: "#1a1a1a" } : {}}
              >
                <div className="mb-6">
                  <h2 className="text-xl font-bold mb-1">{p.name}</h2>
                  <p className={`text-sm mb-4 ${p.highlight ? "text-gray-400" : "text-gray-500"}`}>{p.desc}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold">{p.price}</span>
                    <span className={p.highlight ? "text-gray-400" : "text-gray-500"}>{p.period}</span>
                  </div>
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
                <ul className="space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${p.highlight ? "text-gray-300" : "text-gray-600"}`}>
                      <span className="text-green-500">✓</span>
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
