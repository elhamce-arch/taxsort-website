import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import RevealOnScroll from "@/components/RevealOnScroll";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TaxSort Features – AI Receipt Scanner, GPS Mileage Tracker & Expense Sorter",
  description: "Explore TaxSort features: AI-powered receipt scanning, GPS mileage tracking, automatic expense categorization, and one-tap audit-ready PDF export for freelancers.",
};

const features = [
  {
    icon: (
      <svg viewBox="0 0 100 100" width="96" height="96" fill="none">
        <rect x="24" y="8" width="52" height="72" rx="5" stroke="white" strokeWidth="2" fill="white" fillOpacity="0.08"/>
        <line x1="34" y1="24" x2="66" y2="24" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <line x1="34" y1="33" x2="58" y2="33" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        <line x1="34" y1="42" x2="66" y2="42" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        <line x1="34" y1="51" x2="52" y2="51" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.35"/>
        <line x1="34" y1="60" x2="63" y2="60" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
        <g className="icon-scan-beam">
          <rect x="16" y="43" width="68" height="2.5" rx="1.25" fill="#86efac"/>
          <rect x="16" y="40" width="68" height="8" rx="4" fill="#86efac" fillOpacity="0.15"/>
        </g>
        <circle cx="76" cy="16" r="4" fill="#86efac" className="icon-dot-1"/>
        <circle cx="86" cy="8" r="2.8" fill="#86efac" fillOpacity="0.8" className="icon-dot-2"/>
        <circle cx="84" cy="22" r="2" fill="#86efac" fillOpacity="0.6" className="icon-dot-3"/>
      </svg>
    ),
    title: "AI Receipt Scanning",
    desc: "Snap any receipt and AI extracts merchant, amount, date, and tax category instantly. Works on crumpled, faded, or digital receipts.",
    accent: "linear-gradient(135deg, #1a4d28 0%, #2a7a3b 100%)",
    glow: "rgba(74,222,128,0.15)",
  },
  {
    icon: (
      <svg viewBox="0 0 100 100" width="96" height="96" fill="none">
        <path d="M16 84 Q28 68 45 62 Q58 56 65 42" stroke="white" strokeWidth="2" strokeDasharray="4 3.5" strokeLinecap="round" opacity="0.45"/>
        <rect x="10" y="78" width="20" height="11" rx="3.5" fill="white" fillOpacity="0.65"/>
        <rect x="13" y="73" width="14" height="8" rx="3" fill="white" fillOpacity="0.45"/>
        <circle cx="15" cy="90" r="3.5" fill="white" opacity="0.9"/>
        <circle cx="26" cy="90" r="3.5" fill="white" opacity="0.9"/>
        <path d="M65 8 C55 8 47 16 47 26 C47 39 65 58 65 58 C65 58 83 39 83 26 C83 16 75 8 65 8Z" fill="white" opacity="0.9"/>
        <circle cx="65" cy="26" r="8" fill="#60a5fa"/>
        <circle cx="65" cy="24" r="3" fill="white" opacity="0.6"/>
        <circle cx="65" cy="58" r="6" fill="none" stroke="white" strokeWidth="2" className="icon-ping-1"/>
        <circle cx="65" cy="58" r="6" fill="none" stroke="white" strokeWidth="1.5" className="icon-ping-2"/>
      </svg>
    ),
    title: "GPS Mileage Tracking",
    desc: "Auto-track every business trip. TaxSort logs your route, calculates the deductible distance, and categorizes it — all in the background.",
    accent: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)",
    glow: "rgba(96,165,250,0.15)",
  },
  {
    icon: (
      <svg viewBox="0 0 100 100" width="96" height="96" fill="none">
        <rect x="10" y="16" width="80" height="19" rx="9.5" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.35" strokeWidth="1.5"/>
        <circle cx="25" cy="25.5" r="6" fill="#f87171" opacity="0.9"/>
        <rect x="37" y="22" width="38" height="4" rx="2" fill="white" opacity="0.45"/>
        <rect x="37" y="28" width="24" height="3" rx="1.5" fill="white" opacity="0.3"/>
        <rect x="10" y="41" width="80" height="19" rx="9.5" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.35" strokeWidth="1.5"/>
        <circle cx="25" cy="50.5" r="6" fill="#60a5fa" opacity="0.9"/>
        <rect x="37" y="47" width="44" height="4" rx="2" fill="white" opacity="0.45"/>
        <rect x="37" y="53" width="30" height="3" rx="1.5" fill="white" opacity="0.3"/>
        <rect x="10" y="66" width="80" height="19" rx="9.5" fill="white" fillOpacity="0.18" stroke="white" strokeOpacity="0.6" strokeWidth="2"/>
        <circle cx="25" cy="75.5" r="6" fill="#a78bfa" opacity="0.9"/>
        <rect x="37" y="72" width="40" height="4" rx="2" fill="white" opacity="0.6"/>
        <rect x="37" y="78" width="26" height="3" rx="1.5" fill="white" opacity="0.4"/>
        <circle cx="82" cy="75.5" r="8" fill="#a78bfa" fillOpacity="0.35" className="icon-dot-1"/>
        <path d="M77 75.5 L81 79.5 L87 72" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Smart Expense Sorting",
    desc: "AI categorizes every expense into IRS and CRA-approved categories. 50+ categories supported with smart learning over time.",
    accent: "linear-gradient(135deg, #3b1f5e 0%, #7c3aed 100%)",
    glow: "rgba(167,139,250,0.15)",
  },
  {
    icon: (
      <svg viewBox="0 0 100 100" width="96" height="96" fill="none">
        <path d="M18 10 L64 10 L78 24 L78 82 L18 82 Z" fill="white" fillOpacity="0.08" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M64 10 L64 24 L78 24" fill="none" stroke="white" strokeWidth="2" strokeLinejoin="round" opacity="0.55"/>
        <line x1="28" y1="38" x2="68" y2="38" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        <line x1="28" y1="47" x2="68" y2="47" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        <line x1="28" y1="56" x2="56" y2="56" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.35"/>
        <rect x="26" y="18" width="18" height="10" rx="3" fill="#fb923c" opacity="0.9"/>
        <rect x="48" y="18" width="18" height="10" rx="3" fill="#86efac" opacity="0.75"/>
        <g className="icon-arrow-down">
          <circle cx="87" cy="74" r="11" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1.5" strokeOpacity="0.4"/>
          <line x1="87" y1="67" x2="87" y2="77" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M82 73 L87 78 L92 73" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </svg>
    ),
    title: "Audit-Ready Export",
    desc: "Generate professional PDF or CSV reports in one tap. Send directly to your accountant or import into TurboTax or H&R Block.",
    accent: "linear-gradient(135deg, #5c2a0e 0%, #ea580c 100%)",
    glow: "rgba(251,146,60,0.15)",
  },
  {
    icon: (
      <svg viewBox="0 0 100 100" width="96" height="96" fill="none">
        <path d="M28 72 Q14 72 14 58 Q14 46 26 44 Q27 32 37 28 Q44 20 56 24 Q64 14 76 22 Q88 22 88 36 Q96 37 94 49 Q93 60 82 62 L72 62" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.8"/>
        <line x1="28" y1="72" x2="70" y2="72" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.8"/>
        <g className="icon-arrow-up">
          <line x1="50" y1="80" x2="50" y2="56" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          <path d="M43 62 L50 55 L57 62" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <circle cx="78" cy="78" r="13" fill="#0f766e" stroke="white" strokeWidth="1.5" opacity="0.95"/>
        <path d="M74 77 L74 73 C74 70 76 68 78 68 C80 68 82 70 82 73 L82 77 Z" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="72" y="76" width="12" height="8" rx="2" fill="white" opacity="0.9"/>
        <circle cx="78" cy="75" r="2" fill="#0f766e"/>
      </svg>
    ),
    title: "Secure Cloud Backup",
    desc: "All receipts and data are encrypted and backed up to the cloud 24/7. Never lose a receipt again.",
    accent: "linear-gradient(135deg, #0f3d3d 0%, #0d9488 100%)",
    glow: "rgba(45,212,191,0.15)",
  },
  {
    icon: (
      <svg viewBox="0 0 100 100" width="96" height="96" fill="none">
        <line x1="12" y1="28" x2="88" y2="28" stroke="white" strokeWidth="0.75" opacity="0.15"/>
        <line x1="12" y1="48" x2="88" y2="48" stroke="white" strokeWidth="0.75" opacity="0.15"/>
        <line x1="12" y1="68" x2="88" y2="68" stroke="white" strokeWidth="0.75" opacity="0.15"/>
        <rect x="16" y="44" width="18" height="36" rx="5" fill="#86efac" opacity="0.7" className="icon-bar-1"/>
        <rect x="41" y="28" width="18" height="52" rx="5" fill="#4ade80" opacity="0.85" className="icon-bar-2"/>
        <rect x="66" y="14" width="18" height="66" rx="5" fill="#22c55e" className="icon-bar-3"/>
        <path d="M22 62 Q38 46 50 38 Q62 30 78 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3" opacity="0.55"/>
        <circle cx="80" cy="16" r="8" fill="white" fillOpacity="0.15" className="icon-dot-1"/>
        <path d="M76 19 L80 14 L84 19" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85"/>
      </svg>
    ),
    title: "Real-Time Tax Savings",
    desc: "Watch your estimated tax savings grow as you add expenses. Know exactly where you stand before tax season hits.",
    accent: "linear-gradient(135deg, #1a4d28 0%, #16a34a 100%)",
    glow: "rgba(74,222,128,0.15)",
  },
  {
    icon: (
      <svg viewBox="0 0 100 100" width="96" height="96" fill="none">
        <rect x="6" y="18" width="52" height="42" rx="8" fill="white" fillOpacity="0.08" stroke="white" strokeWidth="2" opacity="0.6"/>
        <circle cx="22" cy="36" r="8" fill="white" opacity="0.4"/>
        <line x1="34" y1="31" x2="50" y2="31" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
        <line x1="34" y1="38" x2="48" y2="38" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.35"/>
        <rect x="42" y="40" width="52" height="42" rx="8" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="2"/>
        <circle cx="58" cy="58" r="8" fill="white" opacity="0.7"/>
        <line x1="70" y1="53" x2="86" y2="53" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
        <line x1="70" y1="60" x2="84" y2="60" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
        <circle cx="84" cy="22" r="10" fill="#be185d" stroke="white" strokeWidth="1.5" className="icon-dot-1"/>
        <line x1="84" y1="17" x2="84" y2="27" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="79" y1="22" x2="89" y2="22" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Multi-Business Support",
    desc: "Manage expenses for multiple businesses or side hustles from one app. Separate reports per business.",
    accent: "linear-gradient(135deg, #4a1942 0%, #be185d 100%)",
    glow: "rgba(244,114,182,0.15)",
  },
  {
    icon: (
      <svg viewBox="0 0 100 100" width="96" height="96" fill="none">
        <circle cx="42" cy="42" r="28" fill="white" fillOpacity="0.08" stroke="white" strokeWidth="2.5" opacity="0.85"/>
        <line x1="30" y1="35" x2="54" y2="35" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
        <line x1="30" y1="42" x2="50" y2="42" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.45"/>
        <line x1="30" y1="49" x2="54" y2="49" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
        <line x1="62" y1="62" x2="84" y2="84" stroke="white" strokeWidth="4.5" strokeLinecap="round" opacity="0.85"/>
        <circle cx="74" cy="20" r="5" fill="#fbbf24" className="icon-dot-1"/>
        <circle cx="84" cy="12" r="3" fill="#fbbf24" fillOpacity="0.8" className="icon-dot-2"/>
        <circle cx="82" cy="26" r="2.5" fill="#fbbf24" fillOpacity="0.6" className="icon-dot-3"/>
      </svg>
    ),
    title: "Smart Search",
    desc: "Find any receipt instantly with full-text search across all your stored receipts and expenses.",
    accent: "linear-gradient(135deg, #451a03 0%, #d97706 100%)",
    glow: "rgba(251,191,36,0.15)",
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
        <section className="py-20 px-4" style={{ background: "#0a0a0a" }}>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <RevealOnScroll key={f.title} delay={i * 80}>
                <FeatureCard icon={f.icon} title={f.title} desc={f.desc} accent={f.accent} glow={f.glow} />
              </RevealOnScroll>
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
