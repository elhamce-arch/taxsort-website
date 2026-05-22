import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – TaxSort",
  description: "TaxSort privacy policy. Learn how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section style={{ background: "#e8f0e5" }} className="py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
            <p className="text-gray-500 text-sm">Last updated: April 26, 2026</p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto prose prose-gray">

            <div className="space-y-10 text-gray-700 leading-relaxed">

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">1. Who We Are</h2>
                <p>TaxSort is a mobile application designed for North American small business owners to track receipts, mileage, and tax deductions. This policy explains how we collect, use, and protect your data.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">2. What Data We Collect</h2>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Email addresses and account credentials (via Google Sign-In or email/password)</li>
                  <li>Transaction data from bank statements or manual entries</li>
                  <li>Receipt images uploaded or photographed within the app</li>
                  <li>Business name and user-configured preferences</li>
                  <li>Location data (GPS coordinates) when mileage tracking is enabled, including trip start/end points and route waypoints</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Data</h2>
                <p className="text-sm mb-3">Data is used exclusively to operate TaxSort:</p>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Transaction and receipt information is stored securely in your personal account on Google Firebase (Firestore and Cloud Storage).</li>
                  <li>Receipt images may be processed through Google Gemini AI for text extraction and categorization — identifying vendor names, amounts, and dates — without training AI models.</li>
                  <li>Location data detects and records business drives for mileage deduction purposes. GPS tracking is off by default.</li>
                  <li>We do not sell, rent, or share your personal data with any third parties for marketing purposes.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">4. Data Storage and Security</h2>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>All data resides on Google Firebase infrastructure, protected by Firebase Security Rules.</li>
                  <li>Only account owners can access their own transactions, receipts, and location data.</li>
                  <li>Firebase App Check prevents unauthorized API access.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">5. Location & Mileage Tracking</h2>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Location access is optional and requires explicit user enablement.</li>
                  <li>When enabled, GPS automatically detects and logs business drives.</li>
                  <li>Trip distance, coordinates, and waypoints are stored in your private Firebase account.</li>
                  <li>You can disable tracking or delete mileage history at any time from the Mileage tab.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">6. In-App Purchases</h2>
                <p className="text-sm">Premium features are available through subscription. Purchases are processed by Google Play or the App Store and managed through RevenueCat. We do not store your payment information.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">7. Data Retention and Deletion</h2>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Your data persists while your account remains active.</li>
                  <li>You can delete all transaction data using the &ldquo;Wipe All Data&rdquo; option in the app.</li>
                  <li>Mileage history can be deleted from the Mileage tab.</li>
                  <li>For permanent account deletion, contact us at <a href="mailto:TaxSortSupport@gmail.com" className="underline" style={{ color: "#2a7a3b" }}>TaxSortSupport@gmail.com</a>.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">8. Changes to This Policy</h2>
                <p className="text-sm">We may update this policy periodically. Changes will be posted here with an updated date.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">9. Contact Us</h2>
                <p className="text-sm">Questions about this privacy policy? Email us at{" "}
                  <a href="mailto:TaxSortSupport@gmail.com" className="underline" style={{ color: "#2a7a3b" }}>
                    TaxSortSupport@gmail.com
                  </a>
                </p>
              </div>

              <p className="text-xs text-gray-400 pt-4 border-t border-gray-100">© 2026 Elitech Pro Services Inc. All rights reserved.</p>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
