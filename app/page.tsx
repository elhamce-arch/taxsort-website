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
    desc: "Snap a photo and our AI instantly reads, categorizes, and stores your receipt. No manual entry ever.",
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
    desc: "AI automatically categorizes expenses into CRA and IRS-approved tax categories.",
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
    desc: "Generate PDF, CSV & ZIP reports ready for your accountant or tax software in one tap.",
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
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Freelance Designer",
    text: "TaxSort saved me hours every tax season. I just snap receipts as I go and everything is sorted. My accountant loves the reports.",
  },
  {
    name: "James T.",
    role: "Independent Contractor",
    text: "The mileage tracker alone saved me over $800 last year. I never thought to track all those client visits before.",
  },
  {
    name: "Priya K.",
    role: "Self-Employed Consultant",
    text: "Finally an app that understands freelancers. Simple, fast, and the AI categorization is incredibly accurate.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "TaxSort",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "iOS, Android",
      "description": "AI-powered tax management app for freelancers. Snap receipts, track mileage, sort expenses, and export audit-ready files.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "1200",
      },
    },
    {
      "@type": "Organization",
      "name": "TaxSort",
      "url": "https://taxsort.com",
      "description": "TaxSort helps freelancers and self-employed individuals manage taxes effortlessly with AI.",
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is TaxSort?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "TaxSort is an AI-powered mobile app that helps freelancers and self-employed individuals manage taxes by scanning receipts, tracking mileage, and automatically categorizing expenses.",
          },
        },
        {
          "@type": "Question",
          "name": "Is TaxSort free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, TaxSort has a free plan that includes AI receipt scanning and expense tracking. A Pro plan is also available for unlimited exports and advanced features.",
          },
        },
        {
          "@type": "Question",
          "name": "Does TaxSort work for Canadian taxes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, TaxSort supports both CRA (Canada) and IRS (USA) tax categories, making it ideal for Canadian and American freelancers.",
          },
        },
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
      <Navbar dark />
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
                Everything you need<br className="hidden md:block" /> at tax time.
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
          </div>
        </section>

        {/* ── How it works — sage green ── */}
        <section style={{ background: "#e8f0e5" }} className="py-24 px-4" id="how-it-works">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll className="text-center mb-14">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#2a7a3b" }}>How It Works</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Four steps to tax-ready</h2>
              <p className="text-lg text-gray-600 max-w-xl mx-auto">Tax season used to be stressful. Not anymore.</p>
            </RevealOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Snap", desc: "Take a photo of any receipt. Our AI reads and categorizes it instantly.", img: "/screenshot-receipt.jpeg", alt: "TaxSort AI receipt scanning" },
                { step: "02", title: "Sort", desc: "Expenses are automatically organized into tax categories. Review in seconds.", img: "/screenshot-expenses.jpeg", alt: "TaxSort expense list" },
                { step: "03", title: "Track", desc: "Every business drive is logged automatically with GPS mileage tracking.", img: "/screenshot-mileage.jpeg", alt: "TaxSort mileage tracking" },
                { step: "04", title: "Export", desc: "Generate audit-ready PDFs for your accountant in one tap.", img: "/screenshot-export.jpeg", alt: "TaxSort export screen" },
              ].map((s, i) => (
                <RevealOnScroll key={s.step} delay={i * 100}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm h-full">
                    <div className="h-64 overflow-hidden">
                      <div style={{ marginTop: "-20px" }}>
                        <Image src={s.img} alt={s.alt} width={300} height={600} className="w-full h-auto" />
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="text-3xl font-bold mb-1" style={{ color: "#2a7a3b" }}>{s.step}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                      <p className="text-gray-500 text-sm">{s.desc}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">See TaxSort in action</h2>
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

        {/* ── Testimonials ── */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll className="text-center mb-14">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#2a7a3b" }}>Reviews</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Real stories. Real savings.</h2>
              <p className="text-lg text-gray-500">Freelancers who made tax season effortless.</p>
            </RevealOnScroll>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <RevealOnScroll key={t.name} delay={i * 100}>
                  <div className="p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-sm transition-all h-full">
                    <p className="text-gray-600 mb-6 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                    <div>
                      <div className="font-semibold text-gray-900">{t.name}</div>
                      <div className="text-sm text-gray-400">{t.role}</div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing preview ── */}
        <section className="py-20 px-4" style={{ background: "#0a0a0a" }} id="pricing">
          <div className="max-w-4xl mx-auto">
            <RevealOnScroll className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#4ade80" }}>Pricing</p>
              <h2 className="text-4xl font-bold text-white mb-4">Simple, honest pricing</h2>
              <p className="text-gray-400">Start free. Upgrade when you need more.</p>
            </RevealOnScroll>
            <div className="grid md:grid-cols-2 gap-6">
              <RevealOnScroll>
                <div className="rounded-2xl p-8 flex flex-col h-full" style={{ background: "#111111", boxShadow: "0 0 0 1px rgba(255,255,255,0.08)" }}>
                  <h3 className="text-xl font-bold text-white mb-1">Free</h3>
                  <p className="text-gray-400 text-sm mb-4">Try it out — no credit card needed</p>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-5xl font-bold text-white">$0</span>
                    <span className="text-gray-400 ml-1">forever</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400 flex-1 mb-6">
                    {["AI receipt scanning (up to 10/month)", "Auto expense categorization", "GPS mileage tracking", "1 bank or CSV import/month", "Cloud backup"].map((f) => (
                      <li key={f} className="flex items-start gap-2"><span style={{ color: "#4ade80" }}>✓</span>{f}</li>
                    ))}
                  </ul>
                  <Link href="/#download" className="block text-center py-3 rounded-xl font-semibold text-white transition-colors" style={{ border: "1px solid rgba(255,255,255,0.2)" }}>
                    Download Free
                  </Link>
                </div>
              </RevealOnScroll>
              <RevealOnScroll delay={100}>
                <div className="rounded-2xl p-8 flex flex-col h-full relative" style={{ background: "linear-gradient(160deg, #1a4d28 0%, #0f2e18 100%)", boxShadow: "0 0 0 1px rgba(74,222,128,0.25), 0 8px 40px rgba(74,222,128,0.1)" }}>
                  <span className="absolute top-6 right-6 text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "#4ade80", color: "#0d0d0d" }}>Most Popular</span>
                  <h3 className="text-xl font-bold text-white mb-1">Pro</h3>
                  <p className="text-gray-400 text-sm mb-4">Everything you need to stay tax-ready</p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-5xl font-bold text-white">$7.99</span>
                    <span className="text-gray-400 ml-1">/ month</span>
                  </div>
                  <p className="text-sm mb-6 flex items-center gap-2">
                    <span style={{ textDecoration: "line-through", color: "#6b7280" }}>$95.88/yr</span>
                    <span style={{ color: "#4ade80" }}>$44.99 / year — save 53%</span>
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300 flex-1 mb-6">
                    {["Unlimited AI receipt scanning", "Unlimited bank & CSV imports", "Unlimited PDF, CSV & ZIP exports", "Multiple business profiles", "Deduction Health Score", "AI tax tips on every receipt"].map((f) => (
                      <li key={f} className="flex items-start gap-2"><span style={{ color: "#4ade80" }}>✓</span>{f}</li>
                    ))}
                  </ul>
                  <Link href="/pricing" className="block text-center py-3 rounded-xl font-semibold bg-white text-gray-900 hover:bg-gray-100 transition-colors">
                    Get Pro
                  </Link>
                </div>
              </RevealOnScroll>
            </div>
            <RevealOnScroll className="text-center mt-8">
              <Link href="/pricing" className="text-sm font-semibold" style={{ color: "#4ade80" }}>See full pricing details →</Link>
            </RevealOnScroll>
          </div>
        </section>

        {/* ── CTA — dark green ── */}
        <section className="py-24 px-4" id="download" style={{ background: "linear-gradient(160deg, #1a4d28 0%, #0f2e18 100%)" }}>
          <RevealOnScroll className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Start saving on <span style={{ color: "#4ade80" }}>taxes</span> today.
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
