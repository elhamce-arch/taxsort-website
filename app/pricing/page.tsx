import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TaxSort Pricing – Free & Pro Plans for Freelancers and Self-Employed",
  description: "Start free or upgrade to Pro. TaxSort offers flexible pricing for freelancers, gig workers, and self-employed. AI receipt scanning and mileage tracking included.",
  alternates: { canonical: "https://www.taxsort.app/pricing" },
}

const freeFeatures = [
  "10 AI receipt scans / month",
  "Basic expense categories",
  "Manual expense entry",
  "Basic tax summary",
  "CSV export",
];

const proFeatures = [
  "Unlimited AI receipt scanning",
  "HST/GST & sales tax captured per receipt",
  "Total HST/GST paid summary for ITC claims (🇨🇦)",
  "Spending Insights with interactive charts",
  "Unlimited bank & CSV imports",
  "Unlimited PDF, CSV & ZIP exports",
  "Full tax summary & transaction history",
  "Multiple business profiles",
  "Deduction Health Score",
  "AI tax tips on every receipt",
  "Manually add & categorize expenses",
  "This app is 100% tax deductible",
];

const faqs = [
  { q: "Can I cancel anytime?", a: "Yes. Cancel your Pro subscription anytime with no fees or penalties. Your data remains accessible on the Free plan." },
  { q: "Is my data secure?", a: "All data is encrypted in transit and at rest. We use bank-level security to protect your financial information." },
  { q: "Does TaxSort work for US taxes?", a: "Yes. TaxSort fully supports IRS tax categories for American freelancers and self-employed workers." },
  { q: "What about Canadian taxes?", a: "Yes. TaxSort also fully supports CRA tax categories for Canadian freelancers and self-employed individuals." },
  { q: "Can my accountant access my reports?", a: "Yes. Export PDF or CSV reports and share them directly with your accountant via email or file sharing." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ background: "#e8f0e5" }} className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Simple, Honest Pricing
            </h1>
            <p className="text-xl text-gray-600">Start free. Upgrade when you need more.</p>
          </div>
        </section>

        {/* Plans */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6 items-stretch">

            {/* Free */}
            <div className="rounded-2xl p-8 border border-gray-200 bg-white flex flex-col">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-1">Free</h2>
                <p className="text-sm text-gray-500 mb-4">Get started at no cost</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-gray-900">$0</span>
                  <span className="text-gray-500">/ forever</span>
                </div>
              </div>
              <Link
                href="/#download"
                className="block text-center py-3 rounded-xl font-semibold mb-8 transition-opacity hover:opacity-90 text-white"
                style={{ background: "#2a7a3b" }}
              >
                Get Started Free
              </Link>
              <ul className="space-y-3 flex-1">
                {freeFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pro Annual */}
            <div
              className="rounded-2xl p-8 flex flex-col relative text-white"
              style={{ background: "linear-gradient(160deg, #1a4d28 0%, #0f2e18 100%)" }}
            >
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-1">Pro</h2>
                <p className="text-sm text-gray-400 mb-4">Full access, billed annually</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">$44.99</span>
                  <span className="text-gray-400">/ year</span>
                </div>
                <p className="text-sm mt-1 text-gray-400">$3.75 / month · USD · Billed Annually</p>
                <p className="text-sm mt-2" style={{ color: "#4ade80" }}>Less than a coffee a month · Cancel anytime</p>
              </div>
              <Link
                href="/#download"
                className="block text-center py-3 rounded-xl font-semibold mb-8 transition-colors bg-white text-gray-900 hover:bg-gray-100"
              >
                Start Pro Annual
              </Link>
              <ul className="space-y-3 flex-1">
                {proFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
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
