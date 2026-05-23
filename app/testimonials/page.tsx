import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TaxSort Reviews – Freelancers Share How They Save on Taxes",
  description: "Read real reviews from freelancers and self-employed users who use TaxSort to scan receipts, track mileage, and maximize tax deductions every year.",
};

const testimonials = [
  { name: "Sarah M.", role: "Freelance Designer", saved: "$1,240", text: "TaxSort saved me hours every tax season. I just snap receipts as I go and everything is sorted. My accountant loves the clean reports." },
  { name: "James T.", role: "Realtor", saved: "$860", text: "The mileage tracker alone saved me over $800 last year. I never thought to track all those client visits before TaxSort." },
  { name: "Priya K.", role: "Self-Employed Consultant", saved: "$2,100", text: "Finally an app that understands freelancers. Simple, fast, and the AI categorization is incredibly accurate." },
  { name: "Marco R.", role: "Uber & DoorDash Driver", saved: "$1,650", text: "As a gig worker I have tons of small expenses. TaxSort handles everything automatically. I saved more in taxes than I expected." },
  { name: "Lisa W.", role: "Freelance Writer", saved: "$780", text: "I used to dread tax season. Now I'm ready all year. TaxSort makes it effortless to stay organized." },
  { name: "David C.", role: "Web Developer", saved: "$1,420", text: "The bank integration is a game changer. All my business transactions auto-import and categorize themselves. Incredible." },
];

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ background: "#e8f0e5" }} className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Real Stories.<br />Real Savings.
            </h1>
            <p className="text-xl text-gray-600">Freelancers who made tax season effortless with TaxSort.</p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-4 border-b border-gray-100">
          <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
            {[
              { value: "750K+", label: "Receipts scanned" },
              { value: "1.2M", label: "Miles tracked" },
              { value: "4.8★", label: "App Store rating" },
            ].map((s) => (
              <div key={s.value}>
                <div className="text-4xl font-bold text-gray-900 mb-1">{s.value}</div>
                <div className="text-sm text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                <div className="inline-block px-3 py-1 rounded-full text-sm font-semibold text-white mb-4" style={{ background: "#2a7a3b" }}>
                  Saved {t.saved}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-400">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#e8f0e5" }} className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Thousands of Freelancers</h2>
            <p className="text-lg text-gray-600 mb-8">Start Saving on Taxes Today. Free to download.</p>
            <Link href="/#download" className="px-8 py-3 rounded-xl font-semibold text-white inline-block" style={{ background: "#2a7a3b" }}>
              Download TaxSort Free
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
