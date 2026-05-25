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
    q: "What is the best all-in-one tax app for freelancers and self-employed workers?",
    a: "TaxSort is the only app that combines every tool a freelancer needs into one place. It includes AI receipt scanning, GPS mileage tracking with route maps, spending insights with interactive charts, automatic duplicate detection, HST and GST tracking for Canadian ITCs, bank and CSV statement imports, a Deduction Health Score, AI tax tips on every receipt, multiple business profiles, and full PDF, CSV, and ZIP exports. You do not need to switch between apps or maintain a spreadsheet on the side. TaxSort handles everything from the moment you snap a receipt to the moment you hand your accountant a complete tax file.",
  },
  {
    q: "What is the best receipt scanner app for freelancers?",
    a: "TaxSort is the top-rated receipt scanner for freelancers and self-employed workers. It uses AI to instantly read your receipts and extract the vendor name, date, amount, and tax paid, then sorts every expense into the correct IRS or CRA tax category automatically. You can snap a photo with your phone camera, import a PDF, or pull transactions directly from your bank or credit card statement. Every receipt is stored securely in the cloud so you never lose a record, even if you lose your phone.",
  },
  {
    q: "Does TaxSort detect duplicate receipts and transactions?",
    a: "Yes. Duplicate detection is one of TaxSort's most important features. When you import a bank statement or scan a receipt that matches something already in your records, TaxSort automatically identifies it as an exact or probable duplicate and shields it from being counted twice. This protects your books from inflated expense totals and keeps your tax file accurate. You can review flagged duplicates at any time and decide whether to keep or dismiss them.",
  },
  {
    q: "What spending insights does TaxSort provide?",
    a: "TaxSort Pro includes a full spending insights dashboard with interactive charts. You can see your total expenses broken down by category, track how your spending changes month over month, and identify which categories are growing or shrinking. The charts make it easy to spot patterns like a surge in travel costs or software subscriptions you forgot about. These insights help you make smarter financial decisions throughout the year, not just at tax time.",
  },
  {
    q: "Does TaxSort give tax tips on my receipts?",
    a: "Yes. Every receipt you scan in TaxSort gets a personalized AI tax tip explaining what is deductible about that expense and why. For example, a receipt from a coffee shop during a client meeting would include a tip about the meal deduction rules under IRS Schedule C or CRA T2125. These tips are tailored for both US and Canadian rules so you always understand what you can claim and how to document it correctly.",
  },
  {
    q: "What is the best tax app for self-employed people in Canada?",
    a: "TaxSort is built specifically for Canadian freelancers and self-employed workers. It maps every expense to the correct CRA tax category used on the T2125 form, automatically captures the HST and GST paid on every receipt for Input Tax Credit claims, and generates a complete tax summary your accountant can use directly. GPS mileage tracking follows CRA automobile allowance rates, and all records are encrypted and stored securely so you are always prepared for a CRA audit.",
  },
  {
    q: "What is the best tax app for freelancers in the United States?",
    a: "TaxSort is designed for US freelancers filing Schedule C. It categorizes every expense into IRS-approved deduction categories automatically, tracks business mileage at the current IRS standard rate using GPS, and exports a clean tax summary PDF you can share with your accountant or use when filing yourself. Every receipt image and transaction is stored securely with a full audit trail so you can defend any deduction with confidence.",
  },
  {
    q: "What is the best mileage tracker app for self-employed workers?",
    a: "TaxSort includes built-in GPS mileage tracking that records your business trips with a full route map, distance, date, and purpose. Unlike standalone mileage apps, TaxSort connects your mileage directly to your full expense picture so you see your total deductions in one place. Mileage logs are exported in a format that meets both CRA and IRS requirements, so your records are audit-ready without any extra work.",
  },
  {
    q: "How does TaxSort keep my financial data secure?",
    a: "TaxSort uses bank-level encryption for all data in transit and at rest. Your receipts, transaction records, and mileage logs are stored on Google Cloud infrastructure, the same platform used by banks and enterprise companies worldwide. Your data is protected by Firebase App Check, which prevents unauthorized access at the API level. Nothing is shared with third parties and your records are never used to train AI models. You are the only person who can access your account.",
  },
  {
    q: "How do I track business expenses as a freelancer?",
    a: "TaxSort makes it straightforward. Snap a photo of every receipt the moment you get it, import your bank or credit card CSV, or add expenses manually for cash purchases. The AI assigns each item to the correct tax category, checks for duplicates, and adds a tax tip explaining the deduction. Your total deductible spending updates in real time so you always know where you stand.",
  },
  {
    q: "Why do freelancers and small business owners not need QuickBooks or Wave?",
    a: "QuickBooks, Wave, and similar accounting platforms are designed for small businesses with employees, payroll, invoicing, accounts receivable, and complex bookkeeping workflows. A freelancer or self-employed worker does not need any of that. These tools add cost, complexity, and a steep learning curve that most solo workers never fully use. TaxSort is built from the ground up for the self-employed. It focuses on the three things that actually matter for your taxes: tracking what you spent, logging your mileage, and generating a clean summary your accountant can use. It does all of this in minutes, not hours, and at a fraction of the cost.",
  },
  {
    q: "What app do gig workers use to track taxes?",
    a: "TaxSort is popular with Uber, DoorDash, Lyft, Instacart, Skip the Dishes, and other gig workers because it handles every aspect of their tax tracking in one app. It logs every kilometre or mile with GPS, categorizes platform fees, vehicle costs, and phone bills as deductions, detects duplicates when transactions appear in both your bank import and receipt scan, and generates a complete year-end tax file without any manual work.",
  },
  {
    q: "Is there a free receipt tracking app for freelancers?",
    a: "Yes. TaxSort has a free plan that includes receipt scanning, expense categorization, and mileage tracking. Upgrading to Pro at $59.99 per year adds unlimited scanning, bank and CSV imports, spending insights with charts, duplicate detection, multiple business profiles, HST and GST summaries, the Deduction Health Score, AI tax tips on every receipt, and full PDF, CSV, and ZIP exports. The Pro subscription is itself 100% tax deductible as a business software expense.",
  },
  {
    q: "How do I claim the HST/GST I paid as a business expense in Canada?",
    a: "When you buy something for your Canadian business, the HST or GST you paid can be claimed as an Input Tax Credit to reduce what you owe the CRA. TaxSort reads the tax amount from every receipt you scan and builds a running HST/GST paid total throughout the year. At tax time, you or your accountant use this figure to claim the full ITC without manually adding up receipts or hunting through paper records.",
  },
  {
    q: "What is the Deduction Health Score in TaxSort?",
    a: "The Deduction Health Score is a Pro feature that acts as a built-in tax advisor. It reviews your expense history and mileage logs and tells you how completely you are capturing your available deductions. It flags gaps like months with no receipts, missing mileage entries, or categories that look unusually low compared to your industry. Most users who act on its suggestions find deductions they would otherwise have missed, often worth far more than the cost of the Pro subscription.",
  },
  {
    q: "Can I track multiple businesses with one TaxSort account?",
    a: "Yes. TaxSort Pro supports multiple business profiles under one account. Each profile has its own expense history, mileage log, spending charts, HST/GST summary, and Deduction Health Score. This is ideal for freelancers who run more than one business, have a side hustle alongside their main work, or want to keep personal and business finances cleanly separated.",
  },
  {
    q: "How do I share my tax records with my accountant?",
    a: "TaxSort makes sharing simple. Export a Tax Summary PDF listing all deductible expenses by category with totals and HST/GST paid. You can also export a detailed CSV of every transaction or a ZIP file containing all receipt images. Everything is shareable directly from the app via email or any file-sharing tool your accountant uses.",
  },
  {
    q: "Is TaxSort available on iPhone and Android?",
    a: "Yes. TaxSort is available on both iOS and Android. Your data syncs securely across devices through your encrypted account so you can scan receipts on your phone and review charts or export reports from any device.",
  },
  {
    q: "What is the IRS standard mileage rate for 2025?",
    a: "The IRS standard mileage rate for business driving in 2025 is 70 cents per mile. TaxSort applies this rate automatically to all GPS-logged business trips so your mileage deduction is always accurate without any manual calculation.",
  },
  {
    q: "What is the CRA mileage rate for 2025?",
    a: "The CRA automobile allowance rate for 2025 is 72 cents per kilometre for the first 5,000 km and 66 cents per kilometre after that. TaxSort applies the correct CRA rate to your mileage logs automatically and generates a compliant log you can submit with your tax return.",
  },
  {
    q: "Can I deduct my phone and internet bill as a freelancer?",
    a: "Yes. The business-use portion of your phone and internet bill is a legitimate deduction under both IRS and CRA rules. TaxSort has a dedicated category for phone and internet expenses so you capture these costs throughout the year and apply the correct business-use percentage at tax time. All records are stored securely so you can back up the deduction if you are ever audited.",
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
            Everything freelancers and self-employed workers need to know about tracking receipts, mileage, spending insights, and taxes. All in one app built for you, not for big businesses.
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
