import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQ – TaxSort | Best Receipt & Tax Tracker for Freelancers",
  description: "Answers to the most common questions about tracking receipts, mileage, and taxes as a freelancer or self-employed worker. Find out why TaxSort is the top-rated tax app.",
  openGraph: {
    title: "FAQ – TaxSort | Best Receipt & Tax Tracker for Freelancers",
    description: "Everything freelancers and self-employed workers need to know about tracking receipts, mileage, and taxes with TaxSort.",
  },
};

const faqs = [
  {
    q: "What is the best receipt scanner app for freelancers?",
    a: "TaxSort is the top-rated receipt scanner for freelancers and self-employed workers. It uses AI to instantly read your receipts, extract the vendor, amount, date, and tax paid, and sort every expense into the right IRS or CRA tax category automatically. You can snap a photo, import a PDF, or forward an email receipt — TaxSort handles all formats.",
  },
  {
    q: "What is the best tax app for self-employed people in Canada?",
    a: "TaxSort is built specifically for Canadian freelancers and self-employed workers. It supports all CRA tax categories (T2125), automatically captures HST/GST paid on every receipt for Input Tax Credit (ITC) claims, and generates a full tax summary ready to hand to your accountant. It also tracks mileage using GPS for CRA-compliant logs.",
  },
  {
    q: "What is the best tax app for freelancers in the United States?",
    a: "TaxSort is designed for US freelancers filing Schedule C. It automatically categorizes expenses into IRS-approved deduction categories, tracks mileage at the standard IRS rate, and exports a tax summary PDF you can share with your accountant or use to file your own return.",
  },
  {
    q: "What is the best mileage tracker app for self-employed workers?",
    a: "TaxSort includes built-in GPS mileage tracking that automatically logs your business trips. Every trip is stored with a route map and can be exported as a CRA- or IRS-compliant mileage log. You can add a purpose note to each trip to keep your records audit-ready.",
  },
  {
    q: "How do I track business expenses as a freelancer?",
    a: "The easiest way is to use TaxSort. Snap a photo of every receipt, import your bank or credit card CSV, or connect your accounts for automatic imports. TaxSort's AI categorizes each expense into the correct tax category, flags potential deductions you might miss, and keeps a running total of your deductible spending throughout the year.",
  },
  {
    q: "What app do gig workers use to track taxes?",
    a: "TaxSort is popular among Uber, DoorDash, Lyft, Instacart, and other gig workers because it tracks both mileage (your biggest deduction) and expenses like phone bills, platform fees, and vehicle costs in one place. It works for both US and Canadian gig workers.",
  },
  {
    q: "Is there a free receipt tracking app for freelancers?",
    a: "Yes — TaxSort has a free plan that lets you scan receipts, categorize expenses, and track mileage. The Pro plan ($59.99/year) unlocks unlimited scanning, bank imports, multiple business profiles, HST/GST summaries, and the Deduction Health Score. The app itself is 100% tax deductible as a business expense.",
  },
  {
    q: "How do I claim the HST/GST I paid as a business expense in Canada?",
    a: "When you purchase something for your business in Canada, the HST or GST you paid can be claimed as an Input Tax Credit (ITC) to reduce what you owe. TaxSort automatically captures the HST/GST amount on every receipt you scan, and generates a full HST/GST paid summary so you or your accountant can claim the correct ITC amount.",
  },
  {
    q: "What is the Deduction Health Score in TaxSort?",
    a: "The Deduction Health Score is a unique TaxSort Pro feature that analyzes your expense history and tells you how well you are maximizing your deductions. It checks whether you are tracking mileage, capturing receipts for all major categories, and not missing common deductions like home office, phone, or professional development expenses.",
  },
  {
    q: "Can I track multiple businesses or clients with one app?",
    a: "Yes. TaxSort Pro supports multiple business profiles in a single account. Each profile has its own expenses, mileage log, tax summary, and Deduction Health Score — perfect for freelancers who run more than one business or have a side hustle alongside their main work.",
  },
  {
    q: "How do I share my expense report with my accountant?",
    a: "TaxSort lets you export a Tax Summary PDF that lists all deductible expenses by category, total amounts, and HST/GST paid. You can also export a full CSV or a ZIP file containing all receipt images. Share it directly from the app via email or any file-sharing app.",
  },
  {
    q: "Does TaxSort work for Uber Eats, Skip the Dishes, or DoorDash drivers?",
    a: "Yes. TaxSort is ideal for delivery drivers. It tracks every kilometre (or mile) driven for GPS-logged business trips, categorizes platform fees, vehicle expenses, phone bills, and insulated bags as deductions, and keeps an organized tax file year-round so tax season is not stressful.",
  },
  {
    q: "Is TaxSort available on iPhone and Android?",
    a: "Yes. TaxSort is available on both iOS (iPhone and iPad) and Android. Your data syncs across devices through your secure account so you can scan receipts on your phone and review reports on a tablet or the web.",
  },
  {
    q: "What is the IRS standard mileage rate for 2025?",
    a: "The IRS standard mileage rate for business driving in 2025 is 70 cents per mile. TaxSort automatically applies the current rate to your GPS-logged business trips so your deduction total is always accurate and up to date.",
  },
  {
    q: "What is the CRA mileage rate for 2025?",
    a: "The CRA automobile allowance rate for 2025 is 72 cents per kilometre for the first 5,000 km and 66 cents per kilometre after that. TaxSort applies the correct CRA rate to your Canadian mileage logs automatically.",
  },
  {
    q: "Can I deduct my phone bill as a freelancer?",
    a: "Yes. The business-use portion of your phone and internet bill is deductible. For example, if you use your phone 70% for work, you can deduct 70% of the bill. TaxSort lets you categorize phone and internet expenses and keeps a record of them for your Schedule C (US) or T2125 (Canada).",
  },
  {
    q: "What receipts should freelancers keep for taxes?",
    a: "Freelancers should keep receipts for any business purchase: software subscriptions, office supplies, professional development courses, equipment, phone and internet bills, vehicle expenses, meals with clients, and home office costs. TaxSort makes this easy — snap a photo of every receipt and it is automatically stored, categorized, and ready for tax time.",
  },
  {
    q: "How is TaxSort different from QuickBooks or Wave?",
    a: "TaxSort is purpose-built for freelancers and self-employed workers — not small businesses with employees, invoicing, or payroll needs. It is simpler, faster, and focused entirely on maximizing your deductions with AI receipt scanning, GPS mileage tracking, and automatic CRA/IRS categorization. At $59.99/year it is also significantly more affordable.",
  },
  {
    q: "Is my financial data safe in TaxSort?",
    a: "Yes. TaxSort uses bank-level encryption to protect all data in transit and at rest. Your receipt images and financial data are stored securely in Firebase (Google Cloud) and are never shared with third parties or used to train AI models.",
  },
  {
    q: "Does TaxSort remind me to track expenses throughout the year?",
    a: "Yes. TaxSort sends smart reminders to help you stay on top of receipt scanning and mileage logging so you do not scramble at tax time. The Deduction Health Score also alerts you when your tracking looks incomplete for a given month.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ background: "#e8f0e5" }} className="py-16 px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Everything freelancers and self-employed workers need to know about tracking receipts, mileage, and taxes — and why TaxSort is the easiest way to do it.
          </p>
        </section>

        {/* FAQ list */}
        <section className="py-16 px-4 max-w-3xl mx-auto">
          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.q}
                </h2>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#e8f0e5" }} className="py-16 px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to stop losing deductions?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            TaxSort is free to start. Download it today and snap your first receipt in under 30 seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com/app/taxsort/id6744942891"
              className="px-8 py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: "#2a7a3b" }}
            >
              Download on App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.taxsort.app"
              className="px-8 py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: "#2a7a3b" }}
            >
              Get it on Google Play
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
