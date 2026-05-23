# TaxSort Website — Site Notes & Change Log

## Overview
Marketing website for the TaxSort mobile app (iOS + Android).
Live at: https://taxsort.app
Hosted on: Vercel (auto-deploys from GitHub main branch)
Stack: Next.js 15, TypeScript, Tailwind CSS

---

## Website Pages & Marketing Features

### Home Page (`/`)
- Dark green hero section with floating phone mockups (3 screenshots)
- Autoplay demo video of the app in the "How It Works" section
- "Trusted by" section listing target user types (Freelancers, Realtors, Uber Drivers, etc.)
- 6 feature cards with custom SVG animated icons
- 4-step "How It Works" section with phone video + step list
- Stats section (98% bookkeeping time saved, 100% tax categories, 24/7 backup, 1-tap export)
- YouTube demo video embed
- Testimonials section (3 user reviews)
- Pricing preview (Free vs Pro side-by-side cards)
- Download CTA section with App Store + Google Play badges
- JSON-LD structured data: SoftwareApplication, Organization, FAQPage schemas
- RevealOnScroll animations on all sections

### Features Page (`/features`)
- Hero with headline and download CTA
- 8 feature cards grid (AI Receipt Scanning, GPS Mileage, Smart Sorting, Audit Export, Cloud Backup, Real-Time Savings, Multi-Business, Smart Search)
- App screenshot showcase (4 screenshots)
- Stats bar (98% accuracy, 50+ categories, 1-tap PDF, 24/7 backup)
- CTA section linking to pricing

### Pricing Page (`/pricing`)
- Two-column layout: Free vs Pro Annual
- Free plan: $0 forever — 10 AI scans/month, basic categories, manual entry, basic tax summary, CSV export
- Pro plan: $47.99/year USD (= $3.99/month), billed annually — unlimited everything
- Pro features: Unlimited AI scanning, unlimited bank/CSV imports, unlimited PDF/CSV/ZIP exports, full tax summary & history, multiple business profiles, Deduction Health Score, AI tax tips on every receipt, manually add & categorize expenses, app is 100% tax deductible
- Savings badge: SAVE $47.89 — 50% OFF vs monthly equivalent
- FAQ section (5 questions: cancel anytime, data security, US taxes, Canadian taxes, accountant access)

### Blog (`/blog` + `/blog/[slug]`)
9 long-form articles targeting high-intent search keywords:
1. `uber-drivers-tax-guide` — How Uber Drivers Can Save on Taxes (Gig Economy)
2. `realtor-tax-guide` — How Realtors Can Save on Taxes (Real Estate)
3. `top-tax-deductions-freelancers` — Top 15 Tax Deductions Every Freelancer Should Know
4. `mileage-deduction-guide` — Complete Guide to Mileage Deductions for Self-Employed
5. `home-office-deduction` — Home Office Deduction: What Freelancers Can and Cannot Claim
6. `gig-worker-taxes-usa` — Gig Worker Taxes in the US: The Complete 2025 Guide
7. `gig-worker-taxes-canada` — Gig Worker Taxes in Canada: The Complete 2025–2026 Guide
8. `receipt-scanning-tips` — How to Never Lose a Business Receipt Again
9. `freelancer-tax-mistakes` — 7 Tax Mistakes Freelancers Make (And How to Avoid Them)

Each blog post includes:
- Individual metadata (title + description)
- BlogPosting JSON-LD structured data schema
- IRS and CRA coverage (US + Canada dual market)
- CTA section at bottom linking to app download
- Disclaimer linking to official IRS/CRA sources

### Testimonials Page (`/testimonials`)
- 6 testimonials with saved amounts ($780–$2,100)
- Stats: 750K+ receipts scanned, 1.2M miles tracked, 4.8★ App Store rating
- CTA section

### How It Works (`/how-it-works`)
- Redirects to `/#how-it-works` on the home page

### Privacy Policy (`/privacy`)
- Full privacy policy covering data collection, Firebase storage, GPS tracking, RevenueCat payments, data deletion

---

## SEO Changes Made (May 2026)

### `app/layout.tsx`
- Added `metadataBase: new URL("https://taxsort.app")` — required for Next.js to generate absolute OG image URLs
- Added OG image references: `images: [{ url: "/og-image.png", width: 1200, height: 630 }]`
- Added Twitter image: `images: ["/og-image.png"]`
- Expanded keywords array to include: gig worker taxes, self-employed Canada, self-employed USA, CRA tax categories, IRS tax categories, freelancer tax deductions

### `app/sitemap.ts`
- Added all 9 blog post URLs to sitemap (they were previously missing — Google couldn't discover them)
- Each blog post has its exact publish date as `lastModified`
- Removed `/how-it-works` (it's a redirect, not a real page)
- Total URLs in sitemap: 14 (5 main pages + 9 blog posts)

### `app/robots.ts`
- Explicitly allows major AI crawlers by user-agent:
  - GPTBot (ChatGPT)
  - ChatGPT-User
  - PerplexityBot
  - ClaudeBot (Claude)
  - anthropic-ai
  - Googlebot
  - Bingbot
- Sitemap URL declared: `https://taxsort.app/sitemap.xml`

### `app/blog/[slug]/page.tsx`
- Added BlogPosting JSON-LD structured data to every blog post
- Schema includes: headline, description, datePublished, author, publisher, mainEntityOfPage
- This enables Google AI Overview, ChatGPT, and Perplexity to cite blog articles as sources

### `app/opengraph-image.tsx`
- Created dynamic OG image using Next.js `ImageResponse` (edge runtime)
- 1200×630px, dark green gradient matching site branding
- Contains: AI-Powered Tax Management badge, main headline, feature list, TaxSort logo + domain
- Auto-generated server-side — no static PNG file needed
- Accessible at: https://taxsort.app/opengraph-image

### `public/llms.txt`
- Updated pricing from old "$7.99/month" to correct "$47.99/year ($3.99/month, USD, billed annually)"
- Added full Pro feature list
- Added full blog article list so AI engines know what content exists
- Added support email and YouTube channel
- This file is read by ChatGPT, Claude, Perplexity when users ask about TaxSort

---

## Pricing Changes (May 2026)

- **Removed** monthly subscription plan ($7.99/month)
- **Kept** Free plan ($0 forever) and Pro Annual plan only
- **Updated** Pro Annual price: $44.99 → **$47.99/year** (= $3.99/month)
- Updated savings badge: SAVE $47.89 — 50% OFF
- Added "USD · Billed Annually" label to Pro card
- Updated pricing on home page preview section to match
- Removed "Most Popular" badge from home page pricing (redundant with only one paid plan)

---

## UI / Copy Fixes (May 2026)

### Heading Capitalization — Fixed Across All Pages
| Page | Before | After |
|---|---|---|
| pricing/page.tsx | "Frequently asked questions" | "Frequently Asked Questions" |
| page.tsx (home) | "Everything you need at tax time." | "Everything You Need at Tax Time." |
| page.tsx (home) | "Start saving on taxes today." | "Start Saving on Taxes Today." |
| features/page.tsx | "Features built for freelancers" | "Features Built for Freelancers" |
| features/page.tsx | "See it in action" | "See It in Action" |
| features/page.tsx | "Start tracking expenses today" | "Start Tracking Expenses Today" |
| testimonials/page.tsx | "Real stories. Real savings." | "Real Stories. Real Savings." |
| testimonials/page.tsx | "Join thousands of freelancers" | "Join Thousands of Freelancers" |
| blog/page.tsx | "Tax tips for freelancers" | "Tax Tips for Freelancers" |
| Navbar.tsx | "How it works" | "How It Works" |
| Footer.tsx | "How it works" | "How It Works" |

---

## Search Engine & AI Engine Submissions

### Google Search Console
- Domain property verified: `taxsort.app` (verified via Cloudflare DNS TXT record)
- Sitemap submitted: `https://taxsort.app/sitemap.xml`
- Status: Submitted, processing

### Bing Webmaster Tools
- Imported from Google Search Console (no re-verification needed)
- Sitemap submitted: `https://taxsort.app/sitemap.xml`
- Status: Processing
- Note: Bing powers ChatGPT's web browsing — this submission enables ChatGPT to find and recommend TaxSort

---

## Remaining To-Do

### High Priority
- [ ] Submit to **Product Hunt** — major traffic driver for apps
- [ ] List on **AlternativeTo** (search "tax app" or "receipt scanner" — add TaxSort)
- [ ] List on **Capterra** and **GetApp** — AI engines pull from these when recommending business software
- [ ] Get 2–3 **backlinks** from freelance/finance blogs (guest posts, app roundups)

### Medium Priority
- [ ] Add **hreflang tags** for `en-US` and `en-CA` — the site serves both markets but doesn't declare it to Google
- [ ] Add more blog posts — target keywords like "freelancer tax app Canada", "best receipt scanner app", "DoorDash taxes guide"
- [ ] Add **FAQ schema** to the pricing page FAQ section

### Low Priority
- [ ] Wire up the newsletter subscribe button on the blog page (currently no backend)
- [ ] Add Terms of Service page (footer link currently points to `#`)
- [ ] Consider adding a sitemap index if blog grows beyond 50 posts

---

## Key Files Reference

| File | Purpose |
|---|---|
| `app/layout.tsx` | Global metadata, OG tags, font |
| `app/sitemap.ts` | XML sitemap for all pages + blog posts |
| `app/robots.ts` | Crawler rules — all bots allowed |
| `app/opengraph-image.tsx` | Auto-generated 1200×630 OG image |
| `public/llms.txt` | Plain-text summary for AI engines (ChatGPT, Claude, Perplexity) |
| `lib/constants.ts` | App Store and Google Play URLs |
| `components/Navbar.tsx` | Sticky nav with mobile hamburger |
| `components/Footer.tsx` | Footer with links and social |
| `components/RevealOnScroll.tsx` | Scroll animation wrapper |
| `components/FeatureCard.tsx` | Animated feature card component |
