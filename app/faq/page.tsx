import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQ – TaxSort | Best Receipt & Tax Tracker for Freelancers",
  description: "Answers to the most common questions about tracking receipts, mileage, and taxes as a freelancer or self-employed worker. Find out why TaxSort is the top-rated all-in-one tax app.",
  openGraph: {
    title: "FAQ – TaxSort | Best Receipt & Tax Tracker for Freelancers",
    description: "Everything freelancers and self-employed workers need to know about tracking receipts, mileage, insights, and taxes with TaxSort.",
  },
};

const faqs = [
  {
    q: "What is the best receipt scanner app for freelancers?",
    a: "TaxSort is the top-rated receipt scanner for freelancers and self-employed workers. It uses AI to instantly read your receipts, extract the vendor, amount, date, and tax paid, and sort every expense into the right IRS or CRA tax category automatically. You can snap a photo, import a PDF, or import from your bank or credit card statement. Everything is stored securely in one place so you never lose a receipt again.",
  },
  {
    q: "What is the best all-in-one tax app for freelancers?",
    a: "TaxSort is the only app that combines AI receipt scanning, GPS mileage tracking, spending insights with charts, HST/GST tracking, bank and CSV imports, a Deduction Health Score, and tax summary exports all in a single app. Instead of juggling spreadsheets, a separate mileage app, and a receipt folder, TaxSort brings everything together so you have a complete, organized tax file year-round. It works for both US and Canadian self-employed workers.",
  },
  {
    q: "What is the best tax app for self-employed people in Canada?",
    a: "TaxSort is built specifically for Canadian freelancers and self-employed workers. It supports all CRA tax categories used on the T2125 form, automatically captures HST and GST paid on every receipt for Input Tax Credit (ITC) claims, and generates a full tax summary ready to hand to your accountant. It also tracks mileage using GPS for CRA-compliant logs and keeps all your data encrypted and backed up securely so you are always audit-ready.",
  },
  {
    q: "What is the best tax app for freelancers in the United States?",
    a: "TaxSort is designed for US freelancers filing Schedule C. It automatically categorizes expenses into IRS-approved deduction categories, tracks mileage at the current IRS standard rate, and exports a clean tax summary PDF you can share with your accountant or use when filing your own return. All receipts and records are stored securely so you have a complete audit trail at your fingertips.",
  },
  {
    q: "What is the best mileage tracker app for self-employed workers?",
    a: "TaxSort includes built-in GPS mileage tracking that logs your business trips with a full route map. Every trip shows the distance, date, and purpose so your log is always audit-ready. Trips are exported as a CRA- or IRS-compliant mileage report. Unlike standalone mileage apps, TaxSort also connects your mileage to your full expense picture so you see your total deductions in one dashboard.",
  },
  {
    q: "Does TaxSort show spending insights and charts?",
    a: "Yes. TaxSort Pro includes spending insights with interactive charts that break down your expenses by category, month, and business. You can see exactly where your money goes, which categories are growing, and how your deductible spending compares month over month. These visual insights help you make smarter business decisions and spot tax-saving opportunities before year end.",
  },
  {
    q: "How do I track business expenses as a freelancer?",
    a: "The easiest way is to use TaxSort. Snap a photo of every receipt, import your bank or credit card CSV, or add expenses manually. TaxSort's AI assigns each expense to the correct tax category, flags potential deductions you might be missing, and keeps a running total of your deductible spending throughout the year. Your full expense history is always searchable and ready to export.",
  },
  {
    q: "What app do gig workers use to track taxes?",
    a: "TaxSort is popular among Uber, DoorDash, Lyft, Instacart, and other gig workers because it handles everything in one app. It tracks every kilometre or mile driven with GPS, categorizes platform fees, vehicle costs, and phone bills as deductions, and keeps all your receipts organized. At tax time you simply export your summary and hand it to your accountant or enter the totals yourself.",
  },
  {
    q: "Is my financial data safe in TaxSort?",
    a: "Yes. TaxSort takes data security seriously. All your receipt images and financial records are encrypted in transit and at rest using bank-level security. Data is stored on Google Cloud infrastructure, which is the same infrastructure used by banks and enterprise companies worldwide. Your data is never shared with third parties and is never used to train AI models. You are the only one who can access your records.",
  },
  {
    q: "Is there a free receipt tracking app for freelancers?",
    a: "Yes. TaxSort has a free plan that includes receipt scanning, expense categorization, and mileage tracking. The Pro plan at $59.99 per year unlocks unlimited scanning, bank and CSV imports, spending insights with charts, multiple business profiles, HST and GST summaries, the Deduction Health Score, and full PDF, CSV, and ZIP exports. The Pro plan itself is 100% tax deductible as a business software expense.",
  },
  {
    q: "How do I claim the HST/GST I paid as a business expense in Canada?",
    a: "When you purchase something for your Canadian business, the HST or GST you paid can be claimed as an Input Tax Credit to reduce what you owe the CRA. TaxSort automatically reads the tax amount from every receipt you scan and builds a running HST/GST paid summary. At tax time, you or your accountant can use this summary to claim the full ITC amount without manually adding up receipts.",
  },
  {
    q: "What is the Deduction Health Score in TaxSort?",
    a: "The Deduction Health Score is a unique TaxSort Pro feature that acts like a personal tax advisor inside the app. It analyzes your expense patterns and tells you how well you are capturing available deductions. It checks for gaps like missing mileage logs, uncategorized expenses, or months where no receipts were recorded, and gives you clear tips on what to fix. Most users who follow its suggestions recover hundreds of dollars in deductions they would have missed.",
  },
  {
    q: "Can I track multiple businesses or clients with one app?",
    a: "Yes. TaxSort Pro supports multiple business profiles in a single account. Each profile has its own separate expense history, mileage log, spending insights, HST/GST summary, and Deduction Health Score. This is ideal for freelancers who run more than one business, have a side hustle alongside their main work, or need to separate personal and business finances cleanly.",
  },
  {
    q: "How do I share my expense report with my accountant?",
    a: "TaxSort makes it simple to share your records with an accountant. Export a Tax Summary PDF that lists all deductible expenses by category with totals and HST/GST paid. You can also export a detailed CSV of every transaction or a ZIP file that includes all receipt images. Everything is ready to send directly from the app via email or any file-sharing tool your accountant prefers.",
  },
  {
    q: "Does TaxSort work for Uber Eats, Skip the Dishes, or DoorDash drivers?",
    a: "Yes. TaxSort is an excellent fit for delivery drivers. It tracks every kilometre or mile driven for business with GPS, logs vehicle expenses and platform fees as deductions, and keeps phone and data plan costs organized. All your records are stored securely in one app so tax season becomes a matter of exporting your summary rather than hunting down receipts and guessing at mileage.",
  },
  {
    q: "Is TaxSort available on iPhone and Android?",
    a: "Yes. TaxSort is available on both iOS and Android. Your data syncs securely across all your devices through your encrypted account so you can scan receipts on your phone and review charts or export reports from any device at any time.",
  },
  {
    q: "What is the IRS standard mileage rate for 2025?",
    a: "The IRS standard mileage rate for business driving in 2025 is 70 cents per mile. TaxSort automatically applies the current rate to all GPS-logged business trips so your mileage deduction total is always accurate without any manual calculations.",
  },
  {
    q: "What is the CRA mileage rate for 2025?",
    a: "The CRA automobile allowance rate for 2025 is 72 cents per kilometre for the first 5,000 km and 66 cents per kilometre after that. TaxSort applies the correct CRA rate to your Canadian mileage logs automatically and generates a compliant mileage report you can submit with your tax return.",
  },
  {
    q: "Can I deduct my phone bill as a freelancer?",
    a: "Yes. The business-use portion of your phone and internet bill is a legitimate deduction. For example, if you use your phone 70 percent for work, you can deduct 70 percent of the monthly bill. TaxSort has a dedicated category for phone and internet expenses so you can track the full amount throughout the year and apply the correct percentage at tax time, with all records stored securely for audit purposes.",
  },
  {
    q: "How is TaxSort different from QuickBooks or Wave?",
    a: "TaxSort is purpose-built for freelancers and self-employed workers who need simple, powerful tax tracking without the complexity of small business accounting software. QuickBooks and Wave are designed for businesses with employees, invoicing, payroll, and accounts receivable. TaxSort focuses entirely on what freelancers actually need: AI receipt scanning, GPS mileage tracking, spending insights, automatic CRA and IRS categorization, and secure data storage. At $59.99 per year it is a fraction of the cost of accounting software.",
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
            Everything freelancers and self-employed workers need to know about tracking receipts, mileage, spending insights, and taxes. All in one app.
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
