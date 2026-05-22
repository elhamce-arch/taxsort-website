import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TaxSort – Tax App for Freelancers | AI Receipt Scanner & Mileage Tracker",
  description: "TaxSort is the tax app built for freelancers and self-employed. AI receipt scanning, GPS mileage tracking, and automatic expense sorting. Get maximum deductions. Free to start.",
  keywords: ["tax app for freelancers", "receipt scanner", "mileage tracker", "expense tracker", "self-employed tax", "freelancer taxes"],
  openGraph: {
    type: "website",
    siteName: "TaxSort",
    title: "TaxSort – Snap. Sort. Save. | Tax App for Freelancers",
    description: "Stop losing receipts and missing deductions. TaxSort uses AI to scan receipts, track mileage, and prepare audit-ready tax files. Free to start.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TaxSort – Tax App for Freelancers",
    description: "AI receipt scanning, GPS mileage tracking, and automatic expense sorting. Free to start.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
