import { MetadataRoute } from "next";

const blogPosts = [
  { slug: "uber-drivers-tax-guide", date: "2026-05-22" },
  { slug: "realtor-tax-guide", date: "2026-05-21" },
  { slug: "top-tax-deductions-freelancers", date: "2026-05-20" },
  { slug: "mileage-deduction-guide", date: "2026-05-15" },
  { slug: "home-office-deduction", date: "2026-05-10" },
  { slug: "gig-worker-taxes-usa", date: "2026-05-08" },
  { slug: "gig-worker-taxes-canada", date: "2026-05-05" },
  { slug: "receipt-scanning-tips", date: "2026-04-28" },
  { slug: "freelancer-tax-mistakes", date: "2026-04-20" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://taxsort.app";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/features`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/pricing`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...blogPosts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
