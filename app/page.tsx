import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import FeatureCard from "@/components/FeatureCard";
import Link from "next/link";
import Image from "next/image";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants";

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
    desc: "Snap a photo and our AI instantly reads the merchant, subtotal, HST/GST/sales tax, and total — categorizes and stores it automatically. No manual entry ever.",
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
    desc: "Automatically track every business trip with GPS. Every kilometer counts toward your deductions.",
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
    desc: "AI automatically categorizes expenses into IRS and CRA-approved tax categories.",
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
    desc: "Generate PDF, CSV & ZIP reports in one tap. Includes a Tax/HST column per expense and a total HST/GST paid summary for Canadian ITC claims.",
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
    desc: "All your receipts and data are encrypted and backed up securely 24/7. Never lose a record.",
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
    title: "Real-Time Savings",
    desc: "Watch your estimated tax savings grow as you add expenses throughout the year.",
    accent: "linear-gradient(135deg, #1a4d28 0%, #16a34a 100%)",
    glow: "rgba(74,222,128,0.15)",
  },
  {
    icon: (
      <svg viewBox="0 0 100 100" width="96" height="96" fill="none">
        <circle cx="50" cy="50" r="34" fill="none" stroke="white" strokeWidth="2" opacity="0.2"/>
        <path d="M50 50 L50 16 A34 34 0 0 1 84 50 Z" fill="#4ade80" opacity="0.9"/>
        <path d="M50 50 L84 50 A34 34 0 0 1 26 76 Z" fill="#60a5fa" opacity="0.8"/>
        <path d="M50 50 L26 76 A34 34 0 0 1 50 16 Z" fill="#a78bfa" opacity="0.7"/>
        <circle cx="50" cy="50" r="14" fill="#0a0a0a"/>
        <line x1="68" y1="20" x2="80" y2="14" stroke="white" strokeWidth="1.5" opacity="0.5"/>
        <line x1="82" y1="65" x2="90" y2="70" stroke="white" strokeWidth="1.5" opacity="0.5"/>
        <line x1="28" y1="78" x2="20" y2="86" stroke="white" strokeWidth="1.5" opacity="0.5"/>
        <circle cx="80" cy="14" r="3" fill="#4ade80"/>
        <circle cx="90" cy="70" r="3" fill="#60a5fa"/>
        <circle cx="20" cy="86" r="3" fill="#a78bfa"/>
      </svg>
    ),
    title: "Spending Insights",
    desc: "See exactly where your money goes with interactive pie charts broken down by tax category. Switch between total spending and deductible-only view for any year.",
    accent: "linear-gradient(135deg, #1e3a5f 0%, #7c3aed 100%)",
    glow: "rgba(167,139,250,0.15)",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "TaxSort",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "iOS, Android, Web",
      "description": "AI-powered tax management app for freelancers. Snap receipts, track mileage, sort expenses, and export audit-ready files.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
      },
    },
    {
      "@type": "Organization",
      "name": "TaxSort",
      "url": "https://taxsort.app",
      "description": "TaxSort helps freelancers and self-employed individuals manage taxes effortlessly with AI.",
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Is TaxSort free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. TaxSort has a free plan that includes 10 AI receipt scans per month, GPS mileage tracking, and 1 bank import per month. No credit card required." } },
        { "@type": "Question", "name": "Can I cancel anytime?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Cancel your Pro subscription anytime with no fees or penalties. Your data remains accessible on the Free plan." } },
        { "@type": "Question", "name": "Does TaxSort work for US taxes?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. TaxSort fully supports IRS tax categories for American freelancers and self-employed workers filing Schedule C." } },
        { "@type": "Question", "name": "What about Canadian taxes?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. TaxSort fully supports CRA tax categories for Canadian freelancers filing T2125. HST/GST paid is tracked separately for ITC claims." } },
        { "@type": "Question", "name": "Does TaxSort support UK taxes?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. TaxSort fully supports HMRC tax categories for UK self-employed workers filing Self Assessment (SA103F). VAT-inclusive totals are captured on every receipt." } },
        { "@type": "Question", "name": "Does TaxSort support Australian taxes?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. TaxSort fully supports ATO tax categories for Australian sole traders and self-employed workers filing myTax. GST paid is tracked separately on every receipt." } },
        { "@type": "Question", "name": "Does it capture HST/GST from receipts?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every receipt scan automatically extracts the subtotal, HST/GST or sales tax, and total as separate fields. Canadian users get a total HST/GST paid summary in every export." } },
        { "@type": "Question", "name": "Can my accountant access my reports?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Export PDF or CSV reports and share them directly with your accountant via email or file sharing." } },
        { "@type": "Question", "name": "Is my data secure?", "acceptedAnswer": { "@type": "Answer", "text": "All data is encrypted in transit and at rest. We use bank-level security to protect your financial information." } },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        {/* ── Hero — dark green with floating phones ── */}
        <section className="pt-20 pb-0 px-4 overflow-hidden" style={{ background: "linear-gradient(160deg, #1a4d28 0%, #0f2e18 100%)" }}>
          <div className="max-w-4xl mx-auto text-center">

            {/* Eyebrow */}
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-6 animate-fade-in"
              style={{ color: "#4ade80" }}
            >
              AI-Powered Tax Management
            </p>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up delay-100">
              Snap, Sort, and Save on{" "}
              <span style={{ color: "#4ade80" }}>Taxes</span>
              {" "}Effortlessly.
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
              Snap receipts, track mileage, and export tax-ready reports.
            </p>

            {/* Download badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-up delay-300">
              <a
                href="/dashboard"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-colors shadow-lg"
                style={{ background: "#4ade80", color: "#0f2e18" }}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6M10 14L21 3M21 13v8a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h8"/>
                </svg>
                Launch Web App
              </a>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white text-gray-900 font-semibold text-sm hover:bg-gray-100 transition-colors shadow-lg"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#000">
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.459 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z"/>
                </svg>
                <span>
                  <span className="block text-xs text-gray-500 leading-none">Download on the</span>
                  App Store
                </span>
              </a>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white text-gray-900 font-semibold text-sm hover:bg-gray-100 transition-colors shadow-lg"
              >
                <Image src="/google-play-icon.png" alt="Google Play" width={24} height={24} />
                <span>
                  <span className="block text-xs text-gray-500 leading-none">Get it on</span>
                  Google Play
                </span>
              </a>
            </div>

            {/* ── Phone mockups — floating ── */}
            <div className="relative flex items-end justify-center gap-4 md:gap-6 h-[380px] md:h-[500px] animate-fade-in delay-500">

              {/* Green ambient glow behind center phone */}
              <div
                className="absolute left-1/2 bottom-0 -translate-x-1/2 w-64 h-64 rounded-full animate-glow-pulse pointer-events-none"
                style={{ background: "radial-gradient(circle, #4ade80 0%, transparent 70%)", filter: "blur(40px)" }}
              />

              {/* Left phone */}
              <div className="hidden md:block relative w-36 md:w-44 self-end mb-8 animate-float-left">
                <div className="rounded-[28px] overflow-hidden shadow-2xl border-2 border-white/10">
                  <div style={{ marginTop: "-20px" }}>
                    <Image
                      src="/screenshot-receipt.jpeg"
                      alt="AI receipt scanning"
                      width={200}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Center phone — largest, straight float */}
              <div className="relative w-52 md:w-64 z-10 animate-float">
                <div className="rounded-[36px] overflow-hidden shadow-[0_0_80px_rgba(74,222,128,0.25)] border-2 border-white/10">
                  <div style={{ marginTop: "-20px" }}>
                    <Image
                      src="/screenshot-expenses.jpeg"
                      alt="TaxSort expense tracking"
                      width={300}
                      height={600}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Right phone */}
              <div className="hidden md:block relative w-36 md:w-44 self-end mb-8 animate-float-right">
                <div className="rounded-[28px] overflow-hidden shadow-2xl border-2 border-white/10">
                  <div style={{ marginTop: "-20px" }}>
                    <Image
                      src="/screenshot-mileage.jpeg"
                      alt="GPS mileage tracking"
                      width={200}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Trusted by ── */}
        <section className="py-10 border-y border-white/10" style={{ background: "#0d2617" }}>
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">Trusted by people who work for themselves</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {["Business Owners", "Freelancers", "Uber Drivers", "Realtors", "Gig Workers", "Personal Finance"].map((t) => (
                <span key={t} className="font-bold" style={{ color: "#86efac" }}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features — dark Cash App style ── */}
        <section className="py-24 px-4" id="features" style={{ background: "#0a0a0a" }}>
          <div className="max-w-6xl mx-auto">
            <RevealOnScroll className="mb-14">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#4ade80" }}>Features</p>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                Everything You Need<br className="hidden md:block" /> at Tax Time.
              </h2>
              <p className="text-lg text-gray-400 max-w-xl">
                Built for anyone who wants to spend less time on taxes and keep more of what they earn.
              </p>
            </RevealOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((f, i) => (
                <RevealOnScroll key={f.title} delay={i * 80}>
                  <FeatureCard
                    icon={f.icon}
                    title={f.title}
                    desc={f.desc}
                    accent={f.accent}
                    glow={f.glow}
                  />
                </RevealOnScroll>
              ))}
            </div>
            <RevealOnScroll className="text-center mt-10">
              <Link href="/features" className="text-sm font-semibold" style={{ color: "#4ade80" }}>See all features →</Link>
            </RevealOnScroll>
          </div>
        </section>

        {/* ── How it works ── */}
        <section className="py-24 px-4 overflow-hidden" id="how-it-works" style={{ background: "#0a0a0a" }}>
          <div className="max-w-6xl mx-auto">

            {/* Header */}
            <RevealOnScroll className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#4ade80" }}>How It Works</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Four Steps to Tax-Ready</h2>
              <p className="text-lg text-gray-400 max-w-xl mx-auto">Tax season used to be stressful. Not anymore.</p>
            </RevealOnScroll>

            {/* Side-by-side: phone video + steps */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

              {/* Left — phone with autoplay video */}
              <RevealOnScroll className="flex-shrink-0 flex justify-center">
                <div className="relative">
                  <div
                    className="w-60 md:w-72 rounded-[44px] overflow-hidden step-phone-float"
                    style={{
                      border: "3px solid rgba(255,255,255,0.1)",
                      boxShadow: "0 0 0 1px rgba(74,222,128,0.12), 0 40px 100px rgba(0,0,0,0.8), 0 0 80px rgba(74,222,128,0.15)",
                    }}
                  >
                    <video autoPlay loop muted playsInline className="w-full h-auto block">
                      <source src="/demo.mp4" type="video/mp4" />
                    </video>
                  </div>
                  {/* Ambient glow */}
                  <div
                    className="absolute -inset-12 -z-10 rounded-full pointer-events-none animate-glow-pulse"
                    style={{ background: "radial-gradient(circle, rgba(74,222,128,0.2) 0%, transparent 65%)", filter: "blur(40px)" }}
                  />
                </div>
              </RevealOnScroll>

              {/* Right — step list */}
              <div className="flex-1 flex flex-col gap-0 w-full">
                {/* Vertical line */}
                <div className="relative">
                  <div className="absolute left-6 top-8 bottom-8 w-px hidden lg:block"
                    style={{ background: "linear-gradient(to bottom, transparent, rgba(74,222,128,0.3) 20%, rgba(74,222,128,0.3) 80%, transparent)" }}
                  />

                  {[
                    { step: "01", title: "Snap", desc: "Take a photo of any receipt. Our AI reads the merchant, subtotal, HST/GST/sales tax, total, and category instantly — no manual entry.", emoji: "📸" },
                    { step: "02", title: "Sort", desc: "Expenses are automatically organized into IRS and CRA-approved tax categories. Review and edit in seconds.", emoji: "🗂️" },
                    { step: "03", title: "Track", desc: "Every business drive is logged automatically with GPS. Every kilometre counts toward your deductions.", emoji: "📍" },
                    { step: "04", title: "Export", desc: "Generate audit-ready PDF, CSV, or ZIP reports for your accountant in one tap. Tax season, done.", emoji: "📤" },
                  ].map((s, i) => (
                    <RevealOnScroll key={s.step} delay={i * 100}>
                      <div
                        className="group relative flex items-start gap-6 p-6 rounded-2xl cursor-default transition-all duration-300 hover:bg-white/[0.03]"
                      >
                        {/* Step dot */}
                        <div className="relative flex-shrink-0 flex flex-col items-center">
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm step-dot-pulse z-10"
                            style={{ background: "rgba(74,222,128,0.12)", border: "1px solid rgba(74,222,128,0.35)", color: "#4ade80" }}
                          >
                            {s.step}
                          </div>
                        </div>

                        {/* Text */}
                        <div className="flex-1 pt-2">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-white">{s.title}</h3>
                            <span className="text-2xl">{s.emoji}</span>
                          </div>
                          <p className="text-gray-400 leading-relaxed">{s.desc}</p>
                        </div>

                        {/* Hover accent */}
                        <div className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ background: "#4ade80" }}
                        />
                      </div>
                    </RevealOnScroll>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats — dark green ── */}
        <section className="py-20 px-4 text-white" style={{ background: "#0f2e18" }}>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "98%", label: "Save on bookkeeping time" },
              { value: "100%", label: "All tax categories supported" },
              { value: "24/7", label: "Secure cloud backup" },
              { value: "1 tap", label: "Export audit-ready files" },
            ].map((s, i) => (
              <RevealOnScroll key={s.value} delay={i * 100}>
                <div className="text-4xl font-bold mb-2" style={{ color: "#4ade80" }}>{s.value}</div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* ── Video ── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <RevealOnScroll>
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#2a7a3b" }}>Demo</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">See TaxSort in Action</h2>
              <p className="text-lg text-gray-500 mb-10">Watch how easy it is to snap, sort, and save on taxes.</p>
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/lpuW6R3Dqe4"
                  title="TaxSort App Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ── Pricing preview ── */}
        <section className="py-20 px-4" style={{ background: "#0a0a0a" }} id="pricing">
          <div className="max-w-4xl mx-auto">
            <RevealOnScroll className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#4ade80" }}>Pricing</p>
              <h2 className="text-4xl font-bold text-white mb-4">Simple, Honest Pricing</h2>
              <p className="text-gray-400">Start free. Upgrade when you need more.</p>
            </RevealOnScroll>
            <div className="grid md:grid-cols-2 gap-6">
              <RevealOnScroll>
                <div className="rounded-2xl p-8 flex flex-col h-full" style={{ background: "#111111", boxShadow: "0 0 0 1px rgba(255,255,255,0.08)" }}>
                  <h3 className="text-xl font-bold text-white mb-1">Free</h3>
                  <p className="text-gray-400 text-sm mb-4">Get started at no cost</p>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-5xl font-bold text-white">$0</span>
                    <span className="text-gray-400 ml-1">/ forever</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400 flex-1 mb-6">
                    {["10 AI receipt scans / month", "Basic expense categories", "Manual expense entry", "Basic tax summary", "CSV export"].map((f) => (
                      <li key={f} className="flex items-start gap-2"><span style={{ color: "#4ade80" }}>✓</span>{f}</li>
                    ))}
                  </ul>
                  <Link href="/#download" className="block text-center py-3 rounded-xl font-semibold text-white transition-colors" style={{ border: "1px solid rgba(255,255,255,0.2)" }}>
                    Get Started Free
                  </Link>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={100}>
                <div className="rounded-2xl p-8 flex flex-col h-full relative" style={{ background: "linear-gradient(160deg, #1a4d28 0%, #0f2e18 100%)", boxShadow: "0 0 0 1px rgba(74,222,128,0.25), 0 8px 40px rgba(74,222,128,0.1)" }}>
                  <div className="mb-1">
                    <h3 className="text-xl font-bold text-white">Pro</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">Full access, billed annually</p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-5xl font-bold text-white">$44.99</span>
                    <span className="text-gray-400 ml-1">/ year</span>
                  </div>
                  <p className="text-sm mb-1" style={{ color: "#4ade80" }}>$3.75 / month · USD · Billed Annually</p>
                  <p className="text-sm mb-6" style={{ color: "#4ade80" }}>Less than a coffee a month · Cancel anytime</p>
                  <ul className="space-y-2 text-sm text-gray-300 flex-1 mb-6">
                    {[
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
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2"><span style={{ color: "#4ade80" }}>✓</span>{f}</li>
                    ))}
                  </ul>
                  <Link href="/#download" className="block text-center py-3 rounded-xl font-semibold bg-white text-gray-900 hover:bg-gray-100 transition-colors">
                    Start Pro Annual
                  </Link>
                </div>
              </RevealOnScroll>
            </div>
            <RevealOnScroll className="text-center mt-6">
              <p className="text-xs text-gray-500 mb-4">All prices in USD</p>
              <Link href="/pricing" className="text-sm font-semibold" style={{ color: "#4ade80" }}>See full pricing details →</Link>
            </RevealOnScroll>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <RevealOnScroll className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#2a7a3b" }}>FAQ</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-500">Everything you need to know before getting started.</p>
            </RevealOnScroll>
            <div className="space-y-4">
              {[
                { q: "Is TaxSort free?", a: "Yes. TaxSort has a free plan that includes 10 AI receipt scans per month, GPS mileage tracking, and 1 bank import per month. No credit card required." },
                { q: "Can I cancel anytime?", a: "Yes. Cancel your Pro subscription anytime with no fees or penalties. Your data remains accessible on the Free plan." },
                { q: "Does TaxSort work for US taxes?", a: "Yes. TaxSort fully supports IRS tax categories for American freelancers and self-employed workers filing Schedule C." },
                { q: "What about Canadian taxes?", a: "Yes. TaxSort fully supports CRA tax categories for Canadian freelancers filing T2125. HST/GST paid is tracked separately for ITC claims." },
                { q: "Does it capture HST/GST from receipts?", a: "Yes. Every receipt scan automatically extracts the subtotal, HST/GST or sales tax, and total as separate fields. Canadian users get a total HST/GST paid summary in every export." },
                { q: "Can my accountant access my reports?", a: "Yes. Export PDF or CSV reports and share them directly with your accountant via email or file sharing." },
                { q: "Is my data secure?", a: "All data is encrypted in transit and at rest. We use bank-level security to protect your financial information." },
              ].map((f, i) => (
                <RevealOnScroll key={f.q} delay={i * 60}>
                  <div className="bg-white rounded-xl p-6 border border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA — dark green ── */}
        <section className="py-24 px-4" id="download" style={{ background: "linear-gradient(160deg, #1a4d28 0%, #0f2e18 100%)" }}>
          <RevealOnScroll className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Start Saving on <span style={{ color: "#4ade80" }}>Taxes</span> Today.
            </h2>
            <p className="text-lg text-gray-400 mb-10">Free to download. No credit card required.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white text-gray-900 font-semibold text-sm hover:bg-gray-100 transition-colors shadow-lg"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#000">
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.459 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z"/>
                </svg>
                <span>
                  <span className="block text-xs text-gray-500 leading-none">Download on the</span>
                  App Store
                </span>
              </a>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white text-gray-900 font-semibold text-sm hover:bg-gray-100 transition-colors shadow-lg"
              >
                <Image src="/google-play-icon.png" alt="Google Play" width={24} height={24} />
                <span>
                  <span className="block text-xs text-gray-500 leading-none">Get it on</span>
                  Google Play
                </span>
              </a>
            </div>
          </RevealOnScroll>
        </section>
      </main>
      <Footer />
    </>
  );
}
