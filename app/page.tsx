import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants";

const stats = [
  { value: "98%", label: "Receipts processed instantly" },
  { value: "100%", label: "All tax categories supported" },
  { value: "24/7", label: "Secure cloud backup" },
  { value: "1 tap", label: "Export audit-ready files" },
];

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
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ background: "#e8f0e5" }} className="pt-16 pb-20 px-4">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 max-w-xl">
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Snap.<br />Sort.<br />Save.<br />Done.
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-md">
                Effortless AI receipt capture, mileage tracking, and expense sorting for freelancers.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg font-semibold text-white"
                  style={{ background: "#2a7a3b" }}
                >
                  App Store
                </a>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg font-semibold text-gray-900 bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  Google Play
                </a>
              </div>
            </div>

            {/* Stats grid */}
            <div className="flex-1 grid grid-cols-2 gap-4 w-full max-w-md">
              {stats.map((s) => (
                <div key={s.value} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="text-3xl font-bold text-gray-900 mb-1">{s.value}</div>
                  <div className="text-sm text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted by */}
        <section className="py-10 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm text-gray-400 uppercase tracking-widest mb-6">Trusted by freelancers worldwide</p>
            <div className="flex flex-wrap justify-center gap-10 text-gray-300 font-semibold text-lg">
              {["Freelancers", "Contractors", "Consultants", "Gig Workers", "Creatives"].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4" id="features">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Features built for freelancers</h2>
              <p className="text-lg text-gray-500 max-w-xl mx-auto">
                Everything you need to stay on top of your taxes year-round, not just in April.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.title} className="p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all">
                  <div className="text-3xl mb-4">{f.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section style={{ background: "#e8f0e5" }} className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Snap. Sort. Save. — in 3 steps</h2>
              <p className="text-lg text-gray-600 max-w-xl mx-auto">Tax season used to be stressful. Not anymore.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Snap", desc: "Take a photo of any receipt. Our AI reads and categorizes it instantly." },
                { step: "02", title: "Sort", desc: "Expenses are automatically organized into tax categories. Review in seconds." },
                { step: "03", title: "Export", desc: "Generate audit-ready PDFs for your accountant or tax software in one tap." },
              ].map((s) => (
                <div key={s.step} className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="text-5xl font-bold text-gray-100 mb-4">{s.step}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{s.title}</h3>
                  <p className="text-gray-500">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
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
          </div>
        </section>

        {/* Stats row */}
        <section className="py-16 px-4 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2">See your savings in action</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-16 text-center">
              {[
                { value: "40%", label: "Average tax savings" },
                { value: "32%", label: "More deductions found" },
                { value: "2014", label: "Receipts scanned per user" },
              ].map((s) => (
                <div key={s.value}>
                  <div className="text-5xl font-bold mb-2">{s.value}</div>
                  <div className="text-gray-400 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Real stories. Real savings.</h2>
              <p className="text-lg text-gray-500">Freelancers who made tax season effortless.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="p-6 rounded-2xl border border-gray-100 hover:shadow-sm transition-all">
                  <p className="text-gray-600 mb-6 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <div className="font-semibold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-400">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#e8f0e5" }} className="py-20 px-4" id="download">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Start saving on taxes today</h2>
            <p className="text-lg text-gray-600 mb-8">Free to download. No credit card required.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-xl font-semibold text-white"
                style={{ background: "#2a7a3b" }}
              >
                Download on App Store
              </a>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-xl font-semibold text-gray-900 bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                Get it on Google Play
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
