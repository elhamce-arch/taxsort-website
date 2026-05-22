import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How TaxSort Works – Snap, Sort & Export in 3 Simple Steps",
  description: "Snap a receipt, sort expenses automatically with AI, and export audit-ready documents in one tap. TaxSort makes tax season simple for freelancers and gig workers.",
};

const steps = [
  {
    step: "01",
    title: "Snap",
    subtitle: "Capture any receipt instantly",
    desc: "Open TaxSort and take a photo of any receipt — from coffee shops to software subscriptions. Our AI reads the merchant, amount, date, and category in seconds. No manual entry, ever.",
    points: ["Works with crumpled or faded receipts", "Supports email receipt forwarding", "Bank transaction import available"],
    img: "/screenshot-receipt.jpeg",
    alt: "TaxSort AI receipt scanning showing scanned receipt with auto-extracted vendor and amount",
  },
  {
    step: "02",
    title: "Sort",
    subtitle: "AI organizes everything for you",
    desc: "Every expense is automatically sorted into CRA and IRS-approved tax categories. Review your sorted expenses anytime — edit, merge, or flag anything in seconds.",
    points: ["50+ tax categories supported", "Smart duplicate detection", "Real-time savings estimate updates"],
    img: "/screenshot-expenses.jpeg",
    alt: "TaxSort expense list showing categorized transactions with totals",
  },
  {
    step: "03",
    title: "Export",
    subtitle: "One tap to audit-ready reports",
    desc: "When tax season arrives, generate a clean professional PDF report in one tap. Share it directly with your accountant or import into your tax software.",
    points: ["PDF and CSV export formats", "Compatible with TurboTax and H&R Block", "Share directly from your phone"],
    img: "/screenshot-export.jpeg",
    alt: "TaxSort export screen showing CSV, PDF, ZIP and Tax Summary export options",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ background: "#e8f0e5" }} className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Snap. Sort. Export.<br />Simple.
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Three steps is all it takes to go from messy receipts to a clean, audit-ready tax file.
            </p>
            <Link href="#steps" className="px-8 py-3 rounded-xl font-semibold text-white inline-block" style={{ background: "#2a7a3b" }}>
              See how it works
            </Link>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 px-4" id="steps">
          <div className="max-w-5xl mx-auto space-y-20">
            {steps.map((s, i) => (
              <div key={s.step} className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-12 items-center`}>
                <div className="flex-1">
                  <div className="text-8xl font-bold text-gray-100 mb-2">{s.step}</div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">{s.title}</h2>
                  <p className="text-lg text-gray-500 mb-4">{s.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0" style={{ background: "#2a7a3b" }}>✓</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="w-56 md:w-64 rounded-3xl overflow-hidden shadow-xl">
                    <Image src={s.img} alt={s.alt} width={280} height={560} className="w-full h-auto" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#e8f0e5" }} className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to simplify tax season?</h2>
            <p className="text-lg text-gray-600 mb-8">Join thousands of freelancers who already use TaxSort.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#download" className="px-8 py-3 rounded-xl font-semibold text-white" style={{ background: "#2a7a3b" }}>
                Download Free
              </Link>
              <Link href="/pricing" className="px-8 py-3 rounded-xl font-semibold text-gray-900 bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
