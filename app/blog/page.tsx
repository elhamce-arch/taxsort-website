import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import SubscribeForm from "@/components/SubscribeForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TaxSort Blog – Tax Tips for Freelancers & Self-Employed",
  description: "Tax tips, guides, and advice for freelancers, independent contractors, and self-employed individuals. Learn how to maximize deductions and simplify tax season.",
};

const categories = ["All", "Tax Tips", "Mileage", "Canada", "USA", "Gig Economy", "Real Estate"];

const posts = [
  {
    slug: "uber-drivers-tax-guide",
    title: "How Uber Drivers Can Save on Taxes",
    excerpt: "Driving for Uber, Lyft, or any rideshare platform? You're leaving money on the table. Here's exactly how to maximize your mileage, vehicle, and business deductions.",
    category: "Gig Economy",
    date: "May 22, 2026",
    readTime: "7 min read",
    color: "#e3f2fd",
  },
  {
    slug: "realtor-tax-guide",
    title: "How Realtors Can Save on Taxes",
    excerpt: "Real estate agents have some of the best deduction opportunities of any profession, but only if you track them. Here's every deduction realtors should be claiming.",
    category: "Real Estate",
    date: "May 21, 2026",
    readTime: "8 min read",
    color: "#fff8e1",
  },
  {
    slug: "top-tax-deductions-freelancers",
    title: "Top 15 Tax Deductions Every Freelancer Should Know",
    excerpt: "Most freelancers leave money on the table at tax time. Here are the 15 most commonly missed deductions, from your home office to your phone bill.",
    category: "Tax Tips",
    date: "May 20, 2026",
    readTime: "6 min read",
    color: "#e8f0e5",
  },
  {
    slug: "mileage-deduction-guide",
    title: "The Complete Guide to Mileage Deductions for Self-Employed",
    excerpt: "Every business kilometre you drive is a tax deduction. Here's exactly how to track, calculate, and claim your mileage, whether you're in Canada or the US.",
    category: "Mileage",
    date: "May 15, 2026",
    readTime: "8 min read",
    color: "#e8f5e9",
  },
  {
    slug: "home-office-deduction",
    title: "Home Office Deduction: What Freelancers Can and Cannot Claim",
    excerpt: "Working from home? You may be able to deduct a portion of your rent, utilities, and internet. Here's how to calculate and claim it correctly.",
    category: "Tax Tips",
    date: "May 10, 2026",
    readTime: "5 min read",
    color: "#fef9e7",
  },
  {
    slug: "gig-worker-taxes-usa",
    title: "Gig Worker Taxes in the US: The Complete 2025 Guide",
    excerpt: "Driving for Uber or delivering for DoorDash in the US? Here's everything about Schedule C, self-employment tax, 1099 forms, and quarterly estimated payments.",
    category: "USA",
    date: "May 8, 2026",
    readTime: "10 min read",
    color: "#e3f2fd",
  },
  {
    slug: "gig-worker-taxes-canada",
    title: "Gig Worker Taxes in Canada: The Complete 2026 Guide",
    excerpt: "Driving for Uber or delivering for DoorDash? Here's everything you need to know about filing taxes as a gig worker in Canada.",
    category: "Canada",
    date: "May 5, 2026",
    readTime: "10 min read",
    color: "#fce4ec",
  },
  {
    slug: "receipt-scanning-tips",
    title: "How to Never Lose a Business Receipt Again",
    excerpt: "The best freelancers are obsessive about receipts, but not in a stressful way. Here's the simple system to capture every deductible expense automatically.",
    category: "Tax Tips",
    date: "April 28, 2026",
    readTime: "4 min read",
    color: "#e3f2fd",
  },
  {
    slug: "freelancer-tax-mistakes",
    title: "7 Tax Mistakes Freelancers Make (And How to Avoid Them)",
    excerpt: "From missing the self-employment deduction to forgetting quarterly payments. These are the most expensive mistakes freelancers make at tax time.",
    category: "Tax Tips",
    date: "April 20, 2026",
    readTime: "7 min read",
    color: "#f3e5f5",
  },
];

const categoryIcons: Record<string, string> = {
  "Tax Tips": "💡",
  "Mileage": "🚗",
  "Canada": "🍁",
  "USA": "🇺🇸",
  "Gig Economy": "🚗",
  "Real Estate": "🏠",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ background: "#e8f0e5" }} className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#2a7a3b" }}>TaxSort Blog</p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Tax Tips for Freelancers</h1>
            <p className="text-xl text-gray-600 max-w-xl mx-auto">
              Practical guides to help you track more, deduct more, and keep more of what you earn.
            </p>
          </div>
        </section>

        {/* Featured post */}
        <section className="py-12 px-4 border-b border-gray-100">
          <div className="max-w-5xl mx-auto">
            <article className="rounded-2xl overflow-hidden border border-gray-100 md:flex hover:shadow-lg transition-all">
              <div className="md:w-2/5 h-56 md:h-auto flex flex-col items-center justify-center relative overflow-hidden" style={{ background: posts[0].color }}>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10" />
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <span className="text-7xl">{categoryIcons[posts[0].category] ?? "📝"}</span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/70 text-gray-700 uppercase tracking-wide">{posts[0].category}</span>
                </div>
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full text-white" style={{ background: "#2a7a3b" }}>{posts[0].category}</span>
                  <span className="text-xs text-gray-400">{posts[0].date} · {posts[0].readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">{posts[0].title}</h2>
                <p className="text-gray-500 leading-relaxed mb-5">{posts[0].excerpt}</p>
                <Link href={`/blog/${posts[0].slug}`} className="font-semibold text-sm inline-flex items-center gap-1" style={{ color: "#2a7a3b" }}>
                  Read article →
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* All posts */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.slice(1).map((p) => (
                <article key={p.slug} className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-all flex flex-col">
                  <div className="h-44 flex flex-col items-center justify-center relative overflow-hidden" style={{ background: p.color }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10" />
                    <div className="relative z-10 flex flex-col items-center gap-2">
                      <span className="text-5xl">{categoryIcons[p.category] ?? "📝"}</span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/70 text-gray-700">{p.category}</span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-600">{p.category}</span>
                      <span className="text-xs text-gray-400">{p.readTime}</span>
                    </div>
                    <h2 className="text-base font-bold text-gray-900 mb-2 leading-snug flex-1">{p.title}</h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{p.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs text-gray-400">{p.date}</span>
                      <Link href={`/blog/${p.slug}`} className="text-sm font-semibold" style={{ color: "#2a7a3b" }}>
                        Read →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section style={{ background: "#e8f0e5" }} className="py-16 px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Get tax tips in your inbox</h2>
            <p className="text-gray-600 mb-6">Monthly guides for freelancers. No spam, unsubscribe anytime.</p>
            <SubscribeForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
