import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import InstallBanner from "@/components/InstallBanner";
import { AuthProvider } from "@/lib/auth-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.taxsort.app"),
  title: "TaxSort – Tax App for Freelancers | AI Receipt Scanner & Mileage Tracker",
  description: "TaxSort is the tax app built for freelancers and self-employed. AI receipt scanning, GPS mileage tracking, and automatic expense sorting. Get maximum deductions. Free to start.",
  keywords: ["tax app for freelancers", "receipt scanner", "mileage tracker", "expense tracker", "self-employed tax", "freelancer taxes", "gig worker taxes", "self-employed Canada", "self-employed USA", "CRA tax categories", "IRS tax categories", "freelancer tax deductions"],
  openGraph: {
    type: "website",
    siteName: "TaxSort",
    title: "TaxSort – Snap. Sort. Save. | Tax App for Freelancers",
    description: "Stop losing receipts and missing deductions. TaxSort uses AI to scan receipts, track mileage, and prepare audit-ready tax files. Free to start.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "TaxSort – AI Tax App for Freelancers" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TaxSort – Tax App for Freelancers",
    description: "AI receipt scanning, GPS mileage tracking, and automatic expense sorting. Free to start.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" hrefLang="en-us" href="https://taxsort.app" />
        <link rel="alternate" hrefLang="en-ca" href="https://taxsort.app" />
        <link rel="alternate" hrefLang="en" href="https://taxsort.app" />
        <link rel="manifest" href="/dashboard-manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="TaxSort" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <InstallBanner />
        </AuthProvider>
      </body>
    </html>
  );
}
