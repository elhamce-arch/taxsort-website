import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TaxSort Blog – Tax Tips for Freelancers & Self-Employed",
  description: "Tax tips, guides, and advice for freelancers, independent contractors, and self-employed individuals. Learn how to maximize deductions and simplify tax season.",
};

const posts = [
  {
    slug: "top-tax-deductions-freelancers",
    title: "Top 15 Tax Deductions Every Freelancer Should Know",
    excerpt: "Most freelancers leave money on the table at tax time. Here are the 15 most commonly missed deductions you should be tracking today.",
    category: "Tax Tips",
    date: "May 20, 2026",
  },
  {
    slug: "mileage-deduction-guide",
    title: "The Complete Guide to Mileage Deductions for Self-Employed",
    excerpt: "Every business kilometre you drive is a tax deduction. Here's exactly how to track, calculate, and claim your mileage — whether you're in Canada or the US.",
    category: "Mileage",
    date: "May 15, 2026",
  },
  {
    slug: "home-office-deduction",
    title: "Home Office Deduction: What Freelancers Can and Cannot Claim",
    excerpt: "Working from home? You may be able to deduct a portion of your rent, utilities, and internet. Here's how to calculate and claim it correctly.",
    category: "Tax Tips",
    date: "May 10, 2026",
  },
  {
    slug: "gig-worker-taxes-canada",
    title: "Gig Worker Taxes in Canada: The Complete 2026 Guide",
    excerpt: "Driving for Uber or delivering for DoorDash? Here's everything you need to know about filing taxes as a gig worker in Canada.",
    category: "Canada",
    date: "May 5, 2026",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <section style={{ background: "#e8f0e5" }} className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Tax tips for freelancers</h1>
            <p className="text-xl text-gray-600">Guides and advice to help you keep more of what you earn.</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {posts.map((p) => (
              <article key={p.slug} className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-all">
                <div className="h-40 flex items-center justify-center text-5xl" style={{ background: "#e8f0e5" }}>
                  📝
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-600">{p.category}</span>
                    <span className="text-xs text-gray-400">{p.date}</span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{p.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.excerpt}</p>
                  <span className="text-sm font-semibold" style={{ color: "#2a7a3b" }}>Read more →</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
