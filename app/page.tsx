import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import Link from "next/link";
import Image from "next/image";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants";

const features = [
  {
    icon: "📷",
    title: "AI Receipt Scanning",
    desc: "Snap a photo and our AI instantly reads, categorizes, and stores your receipt. No manual entry ever.",
  },
  {
    icon: "🗺️",
    title: "GPS Mileage Tracking",
    desc: "Automatically track every business trip with GPS. Every kilometer counts toward your deductions.",
  },
  {
    icon: "📂",
    title: "Smart Expense Sorting",
    desc: "AI automatically categorizes expenses into CRA and IRS-approved tax categories.",
  },
  {
    icon: "📄",
    title: "Audit-Ready Export",
    desc: "Generate clean, professional PDF reports ready for your accountant or tax filing in one tap.",
  },
  {
    icon: "☁️",
    title: "Secure Cloud Backup",
    desc: "All your receipts and data are encrypted and backed up securely 24/7.",
  },
  {
    icon: "📊",
    title: "Real-Time Savings",
    desc: "See your estimated tax savings update in real-time as you add expenses throughout the year.",
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
            <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto mb-10 animate-fade-in-up delay-200">
              The AI receipt scanner and mileage tracker built for freelancers, contractors, and gig workers.
            </p>

            {/* Download badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-up delay-300">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white text-gray-900 font-semibold text-sm hover:bg-gray-100 transition-colors shadow-lg"
              >
                <svg viewBox="0 0 814 1000" className="w-5 h-6" fill="#000">
                  <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 530.4 0 407.9 0 292.1c0-183.2 119.7-280.4 237.5-280.4 60.2 0 110.3 39.5 148.4 39.5 36.3 0 93.3-41.5 161.9-41.5 26 0 108.2 2.6 168.6 79.9zm-138.4-79.4c-3.8-17.9-11-36.5-22.3-53.6-28.1-40.8-74.2-70.2-116.8-70.2-2.6 0-5.2.3-7.7.6 1.3 20.6 8.9 41.5 21.8 59.7 27.5 37.5 73.6 65.1 124.4 63.5z"/>
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
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                  <path d="M3.18 23.76a2.5 2.5 0 001.56-.52L16.5 12 4.74.76A2.5 2.5 0 003.18.24C2.25.24 1.5 1 1.5 2v20c0 1 .75 1.76 1.68 1.76z" fill="#4285F4"/>
                  <path d="M20.32 10.21l-3.82-2.21L13.06 12l3.44 3.44 3.82-2.21c1.09-.63 1.09-2.39 0-3.02z" fill="#FBBC04"/>
                  <path d="M4.74 23.24L16.5 12l-3.44-3.44L4.74.76a2.5 2.5 0 00-.56 1.59v19.3c0 .59.2 1.14.56 1.59z" fill="#34A853"/>
                  <path d="M4.74.76L16.5 12l-3.44-3.44L4.74.76z" fill="#EA4335"/>
                </svg>
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
            <div className="flex flex-wrap justify-center gap-8 text-gray-300 font-semibold text-sm">
              {["Freelancers", "Business Owners", "Uber Drivers", "Realtors", "Gig Workers", "Personal Finance"].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features — light ── */}
        <section className="py-24 px-4 bg-white" id="features">
          <div className="max-w-5xl mx-auto">
            <RevealOnScroll className="text-center mb-14">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#2a7a3b" }}>Features</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything you need at tax time</h2>
              <p className="text-lg text-gray-500 max-w-xl mx-auto">
                Built for freelancers who want to spend less time on taxes and more time doing what they love.
              </p>
            </RevealOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, i) => (
                <RevealOnScroll key={f.title} delay={i * 80}>
                  <div className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all h-full">
                    <div className="text-3xl mb-4">{f.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
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
                      <div className="text-3xl font-bold text-gray-100 mb-1">{s.step}</div>
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
              { value: "98%", label: "Receipt accuracy" },
              { value: "50+", label: "Tax categories" },
              { value: "1 tap", label: "Export to PDF" },
              { value: "24/7", label: "Cloud backup" },
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
                <svg viewBox="0 0 814 1000" className="w-5 h-6" fill="#000">
                  <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 530.4 0 407.9 0 292.1c0-183.2 119.7-280.4 237.5-280.4 60.2 0 110.3 39.5 148.4 39.5 36.3 0 93.3-41.5 161.9-41.5 26 0 108.2 2.6 168.6 79.9zm-138.4-79.4c-3.8-17.9-11-36.5-22.3-53.6-28.1-40.8-74.2-70.2-116.8-70.2-2.6 0-5.2.3-7.7.6 1.3 20.6 8.9 41.5 21.8 59.7 27.5 37.5 73.6 65.1 124.4 63.5z"/>
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
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                  <path d="M3.18 23.76a2.5 2.5 0 001.56-.52L16.5 12 4.74.76A2.5 2.5 0 003.18.24C2.25.24 1.5 1 1.5 2v20c0 1 .75 1.76 1.68 1.76z" fill="#4285F4"/>
                  <path d="M20.32 10.21l-3.82-2.21L13.06 12l3.44 3.44 3.82-2.21c1.09-.63 1.09-2.39 0-3.02z" fill="#FBBC04"/>
                  <path d="M4.74 23.24L16.5 12l-3.44-3.44L4.74.76a2.5 2.5 0 00-.56 1.59v19.3c0 .59.2 1.14.56 1.59z" fill="#34A853"/>
                  <path d="M4.74.76L16.5 12l-3.44-3.44L4.74.76z" fill="#EA4335"/>
                </svg>
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
