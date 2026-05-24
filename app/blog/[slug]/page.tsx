import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

// ─────────────────────────────────────────────────────────────
// Post data
// ─────────────────────────────────────────────────────────────
const posts: Record<string, {
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  content: React.ReactNode;
}> = {

  // ── Uber Drivers ───────────────────────────────────────────
  "uber-drivers-tax-guide": {
    title: "How Uber Drivers Can Save on Taxes",
    description: "Driving for Uber, Lyft, or any rideshare platform? Here's exactly how to maximize your mileage, vehicle, and business deductions.",
    category: "Gig Economy",
    date: "May 22, 2026",
    readTime: "7 min read",
    content: (
      <div className="prose-content">
        <p className="lead">If you drive for Uber, Lyft, or any rideshare platform, you are running a small business. That means a long list of legitimate tax deductions. Most drivers claim only mileage and miss hundreds of dollars in additional savings. This guide walks through every deduction available, with rules for both the <strong>United States (IRS)</strong> and <strong>Canada (CRA)</strong>.</p>

        <blockquote>
          <strong>Disclaimer:</strong> Tax rules change annually. Verify current rates with the <a href="https://www.irs.gov" target="_blank" rel="noopener noreferrer">IRS</a> or <a href="https://www.canada.ca/en/revenue-agency.html" target="_blank" rel="noopener noreferrer">CRA</a> and consult a qualified tax professional before filing.
        </blockquote>

        <h2>1. Mileage: Your Biggest Deduction</h2>
        <p>For most rideshare drivers, vehicle expenses are the single largest deduction. Every business mile you drive is deductible. This includes not just the time a passenger is in the car, but from the moment you turn on the app and start driving toward a pickup.</p>

        <h3>United States (IRS)</h3>
        <p>The IRS offers two methods. Choose your method in the first year you use the vehicle for business. You generally cannot switch afterward if you used accelerated depreciation.</p>
        <ul>
          <li><strong>Standard mileage rate:</strong> Multiply total business miles by the IRS rate (67¢/mile for 2024; check <a href="https://www.irs.gov" target="_blank" rel="noopener noreferrer">irs.gov</a> for the current year). This is the simplest method and works well for most drivers.</li>
          <li><strong>Actual expenses method:</strong> Deduct the business-use percentage of all vehicle costs: fuel, insurance, oil changes, registration, repairs, and depreciation. More record-keeping, but can yield a larger deduction for high-mileage, high-cost vehicles.</li>
        </ul>
        <p><strong>What counts as business miles?</strong> Miles driven with the app on (whether or not a passenger is aboard), miles traveling to pick up a passenger, and miles traveling between rides in an active session.</p>

        <h3>Canada (CRA)</h3>
        <p>The CRA uses the actual-expenses method for self-employed individuals. Calculate your total business kilometres as a percentage of total kilometres driven in the year, then apply that percentage to all eligible vehicle expenses.</p>
        <ul>
          <li>Fuel, oil changes, maintenance and repairs</li>
          <li>Insurance premiums</li>
          <li>Registration and licensing fees</li>
          <li>Capital cost allowance (CCA) if you own the vehicle, or lease payments if you lease</li>
        </ul>
        <p><strong>Important for rideshare drivers in Canada:</strong> The CRA has ruled that rideshare services qualify as taxicab services. This means you must register for GST/HST immediately. The standard $30,000 small-supplier threshold does not apply. Uber and Lyft typically collect and remit HST on your behalf in most provinces, but confirm the arrangement with your platform.</p>

        <h2>2. Your Phone</h2>
        <p>Your smartphone is essential for rideshare work. You can deduct the business-use percentage of your monthly plan and, if you purchased the phone for work, the business-use portion of the device cost.</p>
        <p>Track how much of your phone use is business-related. Many full-time rideshare drivers can claim 80–100% of their plan if it is used primarily for driving. Keep monthly bills as supporting documentation.</p>

        <h2>3. Car Cleaning and Maintenance</h2>
        <p>Keeping your car clean is a legitimate business expense for rideshare drivers. Car washes, interior cleaning, air fresheners, and detailing are all deductible to the extent the car is used for business. Keep receipts for every wash.</p>

        <h2>4. Passenger Amenities</h2>
        <p>Water bottles, phone chargers, mints, and small snacks provided to passengers are deductible business expenses. Keep a simple running log of what you spend each week, as these small amounts add up over a year.</p>

        <h2>5. Rideshare App Fees and Commissions</h2>
        <p>The service fees and commissions Uber and Lyft deduct from your fares are a business expense. Your platform will provide an annual tax summary showing total fees paid; this amount is fully deductible.</p>

        <h2>6. Parking and Tolls</h2>
        <p>Parking fees and toll charges incurred while driving for business are deductible. This includes parking while waiting for a ride in a designated area. Keep digital or paper receipts.</p>
        <p><strong>Note:</strong> Parking tickets and fines are not deductible.</p>

        <h2>7. Dash Camera</h2>
        <p>A dashboard camera is both a safety device and a deductible business expense. In the US, you may be able to deduct the full cost in the year of purchase under Section 179. In Canada, it is added to the appropriate CCA class. Deduct the business-use percentage if the vehicle is also used personally.</p>

        <h2>8. Seat Covers and Car Accessories</h2>
        <p>Seat covers, floor mats, and other accessories purchased specifically to maintain or improve your vehicle for rideshare purposes are deductible to the business-use percentage of the car.</p>

        <h2>9. Health Insurance Premiums (US Only)</h2>
        <p>Self-employed rideshare drivers in the US who are not eligible for coverage through a spouse&apos;s employer plan can deduct 100% of health insurance premiums for themselves and their family on Schedule 1 of Form 1040. This reduces your adjusted gross income, even if you don&apos;t itemize.</p>

        <h2>10. Self-Employment Tax Deduction (US Only)</h2>
        <p>You pay 15.3% self-employment tax as both employee and employer. The IRS allows you to deduct 50% of that SE tax on Schedule 1, which reduces your taxable income but not your SE tax bill itself.</p>

        <h2>Quarterly Estimated Tax Payments</h2>
        <h3>United States</h3>
        <p>If you expect to owe $1,000 or more in taxes, pay quarterly: April 15, June 15, September 15, and January 15. Pay online at <a href="https://www.irs.gov/payments" target="_blank" rel="noopener noreferrer">irs.gov/payments</a>. Missing payments results in an underpayment penalty.</p>

        <h3>Canada</h3>
        <p>If you owe more than $3,000 in two consecutive years, the CRA requires quarterly instalment payments: March 15, June 15, September 15, and December 15.</p>

        <h2>The Key to Maximizing Deductions: Track Everything</h2>
        <p>The difference between drivers who maximize deductions and those who don&apos;t comes down to one habit: tracking in real time. TaxSort automatically logs your mileage via GPS and lets you snap receipts the moment you receive them, so every deductible expense is captured before it can be forgotten.</p>
        <p>At tax time, export a complete summary for your accountant or tax software. Every trip, every wash, every phone bill. Organized and ready.</p>
      </div>
    ),
  },

  // ── Realtors ────────────────────────────────────────────────
  "realtor-tax-guide": {
    title: "How Realtors Can Save on Taxes",
    description: "Real estate agents have some of the best deduction opportunities of any profession, but only if you track them all year long.",
    category: "Real Estate",
    date: "May 21, 2026",
    readTime: "8 min read",
    content: (
      <div className="prose-content">
        <p className="lead">Real estate agents and brokers are self-employed professionals with one of the richest sets of tax deductions available. Between mileage, marketing, licensing, and office expenses, a well-organized realtor can significantly reduce their tax bill, all legally. This guide covers every major deduction for realtors in the <strong>United States (IRS Schedule C)</strong> and <strong>Canada (CRA T2125)</strong>.</p>

        <blockquote>
          <strong>Disclaimer:</strong> Tax laws change. Verify current rules with the <a href="https://www.irs.gov" target="_blank" rel="noopener noreferrer">IRS</a> or <a href="https://www.canada.ca/en/revenue-agency.html" target="_blank" rel="noopener noreferrer">CRA</a> and consult a qualified tax professional before filing.
        </blockquote>

        <h2>1. Mileage: The Realtor&apos;s Biggest Deduction</h2>
        <p>Realtors drive constantly: showing properties, meeting clients, attending closings, visiting offices, and going to inspections. Every one of those trips is a deductible business expense.</p>

        <h3>United States (IRS)</h3>
        <p>Use the standard mileage rate (67¢/mile for 2024; check <a href="https://www.irs.gov" target="_blank" rel="noopener noreferrer">irs.gov</a> for the current year) or deduct actual vehicle expenses based on business-use percentage. The standard mileage method is simpler and often sufficient. Log every trip: date, destination, and business purpose.</p>

        <h3>Canada (CRA)</h3>
        <p>Deduct actual vehicle expenses multiplied by your business-use percentage. Track every business kilometre driven throughout the year, along with total annual kilometres. Maintain a contemporaneous logbook, as the CRA may ask for it in an audit.</p>

        <p><strong>Pro tip:</strong> TaxSort automatically logs GPS mileage in the background. By year end, you have a complete, audit-ready record of every business trip.</p>

        <h2>2. Home Office</h2>
        <p>If you regularly use a dedicated space in your home for business, such as reviewing listings, preparing contracts, or doing marketing, you can claim a home office deduction.</p>

        <h3>United States (IRS, Form 8829)</h3>
        <ul>
          <li><strong>Simplified method:</strong> $5 per square foot, up to 300 sq ft (max $1,500/year)</li>
          <li><strong>Regular method:</strong> Actual home expenses × business-use percentage (more work, potentially larger deduction)</li>
        </ul>
        <p>The space must be used regularly and exclusively for business.</p>

        <h3>Canada (CRA, T2125)</h3>
        <p>Deduct a proportional share of rent (or maintenance, property taxes, and insurance if you own) based on the square footage of the workspace relative to total home area. You cannot use the deduction to create or increase a business loss.</p>

        <h2>3. Marketing and Advertising</h2>
        <p>Marketing is one of the largest expenses for most realtors, and it is fully deductible.</p>
        <ul>
          <li>MLS listing fees</li>
          <li>Professional photography and videography for listings</li>
          <li>Drone photography</li>
          <li>Website hosting, domain registration, and design</li>
          <li>Social media advertising (Facebook, Instagram, Google Ads)</li>
          <li>Print flyers, postcards, and signage</li>
          <li>Branded merchandise (pens, notepads, calendars)</li>
          <li>Virtual tour software subscriptions</li>
        </ul>

        <h2>4. Professional Fees and Licensing</h2>
        <p>All fees required to maintain your real estate license and professional standing are deductible.</p>
        <ul>
          <li>Real estate license renewal fees</li>
          <li>Board and association dues (NAR, CREA, and local boards)</li>
          <li>Errors and Omissions (E&amp;O) insurance premiums</li>
          <li>Desk fees paid to your broker</li>
          <li>MLS membership fees</li>
          <li>Transaction coordinator fees</li>
        </ul>

        <h2>5. Continuing Education</h2>
        <p>Courses, seminars, conferences, and designations required to maintain or improve your skills in real estate are deductible.</p>
        <ul>
          <li>Designation courses (ABR, CRS, GRI, SRS, etc.)</li>
          <li>Conference registration fees and related travel</li>
          <li>Books, online courses, and training subscriptions</li>
          <li>Coaching programs (business-related)</li>
        </ul>

        <h2>6. Client Entertainment and Meals</h2>
        <p>Business meals with clients, referral partners, or other agents are 50% deductible in both the US and Canada. Keep a receipt and note the business purpose and who attended.</p>
        <p>Client appreciation gifts are deductible up to <strong>$25 per recipient per year</strong> under US rules. In Canada, gifts to clients may be fully deductible depending on the nature of the gift. Consult the CRA guidelines for specifics.</p>

        <h2>7. Phone and Internet</h2>
        <p>Your smartphone and internet connection are essential business tools. Deduct the business-use percentage of:</p>
        <ul>
          <li>Monthly mobile phone plan</li>
          <li>Home or office internet service</li>
          <li>Any real estate apps or CRM subscriptions (Follow Up Boss, kvCORE, etc.)</li>
        </ul>

        <h2>8. Office Supplies and Equipment</h2>
        <ul>
          <li>Printer, ink, and paper</li>
          <li>Laptop or tablet (business-use percentage)</li>
          <li>Locking lockboxes</li>
          <li>Presentation materials and folders</li>
          <li>Digital signature software (DocuSign)</li>
        </ul>
        <p>In the US, Section 179 may allow full first-year expensing of equipment. In Canada, claim capital cost allowance (CCA) at the appropriate class rate. Class 50 is for computers at 55% declining balance.</p>

        <h2>9. Staging and Open House Expenses</h2>
        <p>If you pay staging costs out of pocket to help sell a listing, those expenses are deductible. Open house supplies (refreshments, signage, printed materials) are also business expenses. Keep all receipts.</p>

        <h2>10. Bank Fees and Credit Card Fees</h2>
        <p>Monthly fees for a business bank account and annual fees for a business credit card are deductible. Interest on a business credit card used exclusively for business expenses is also deductible.</p>

        <h2>Quarterly Estimated Taxes</h2>
        <p>As a self-employed realtor, no employer withholds tax from your commission income. Stay ahead of tax bills:</p>
        <ul>
          <li><strong>United States:</strong> Pay quarterly to the IRS if you expect to owe $1,000 or more: April 15, June 15, September 15, January 15.</li>
          <li><strong>Canada:</strong> Pay CRA quarterly instalments if you owe more than $3,000 two years in a row: March 15, June 15, September 15, December 15.</li>
        </ul>

        <h2>The System That Pays for Itself</h2>
        <p>The biggest challenge for realtors isn&apos;t knowing what to deduct. The harder part is remembering to track every expense throughout a busy year. A receipt you don&apos;t capture is a deduction you lose.</p>
        <p>TaxSort is designed for exactly this: snap every receipt the moment you get it, let GPS mileage tracking run in the background, and export a complete tax summary when you need it. For most realtors, the app pays for itself in the first month of tracking alone.</p>
      </div>
    ),
  },

  // ── 1 ──────────────────────────────────────────────────────
  "top-tax-deductions-freelancers": {
    title: "Top 15 Tax Deductions Every Freelancer Should Know",
    description: "Most freelancers leave money on the table at tax time. Here are the 15 most commonly missed deductions.",
    category: "Tax Tips",
    date: "May 20, 2026",
    readTime: "6 min read",
    content: (
      <div className="prose-content">
        <p className="lead">Most freelancers and self-employed individuals claim only the obvious deductions, leaving hundreds or thousands of dollars on the table every year. This guide covers 15 legitimate deductions available to self-employed people in <strong>United States (IRS Schedule C)</strong> and <strong>Canada (CRA T2125)</strong>.</p>

        <blockquote>
          <strong>Disclaimer:</strong> Tax laws change. This article reflects general principles as understood in 2025–2026. Always verify with the <a href="https://www.irs.gov" target="_blank" rel="noopener noreferrer">IRS</a> or <a href="https://www.canada.ca/en/revenue-agency.html" target="_blank" rel="noopener noreferrer">CRA</a> and consult a qualified tax professional before filing.
        </blockquote>

        <h2>1. Home Office</h2>
        <p><strong>Canada:</strong> If you use a workspace in your home regularly and exclusively for your business, you can deduct a proportional share of your rent, utilities, and internet. Calculate the percentage as: <em>office square footage ÷ total home square footage</em>. Claimed on T2125, Part 7. You cannot use this deduction to create or increase a business loss; any unused amount carries forward.</p>
        <p><strong>United States:</strong> The IRS offers two methods via Form 8829: the <em>simplified method</em> ($5 per sq ft, up to 300 sq ft = max $1,500) or the <em>regular method</em> (actual home expenses × business-use percentage). The space must be used regularly and exclusively for business.</p>

        <h2>2. Vehicle and Mileage</h2>
        <p><strong>Canada:</strong> Self-employed individuals deduct actual vehicle expenses multiplied by the business-use percentage (business km ÷ total km for the year). Keep a detailed logbook: date, destination, business purpose, and kilometres driven.</p>
        <p><strong>United States:</strong> You can use the IRS standard mileage rate (67¢/mile for 2024; check IRS Notice for the current year) or deduct actual vehicle expenses. You must choose your method in the first year you use the vehicle for business.</p>

        <h2>3. Phone and Internet</h2>
        <p>You can deduct the business-use portion of your phone and internet bills. If you use your phone 60% for business, deduct 60% of the bill. Keep records to justify the percentage you claim.</p>

        <h2>4. Professional Development and Education</h2>
        <p>Courses, workshops, books, and online subscriptions that maintain or improve skills required in your current work are deductible. A new career change does not qualify. The training must relate to your existing business.</p>

        <h2>5. Software and Subscriptions</h2>
        <p>Business software (accounting, design, project management, cloud storage) used for your work is fully deductible. Subscriptions with mixed personal/business use must be prorated.</p>

        <h2>6. Office Supplies</h2>
        <p>Paper, printer ink, pens, postage, and other consumables used for your business are deductible in the year purchased.</p>

        <h2>7. Professional Fees</h2>
        <p>Accountant fees, legal fees related to your business, and bookkeeping costs are deductible. The cost of TaxSort Pro is also a deductible business expense.</p>

        <h2>8. Equipment and Technology</h2>
        <p><strong>Canada:</strong> Capital cost allowance (CCA) lets you depreciate computers, cameras, and equipment over time (Class 50 for computers: 55% declining balance). Immediate expensing rules may allow a larger first-year deduction. Check the CRA website for the current rules.</p>
        <p><strong>United States:</strong> Section 179 allows you to deduct the full cost of qualifying equipment in the year of purchase (up to the annual limit). Consult IRS Publication 946 for current limits.</p>

        <h2>9. Marketing and Advertising</h2>
        <p>Website hosting, domain names, social media ads, business cards, and promotional materials are all deductible business expenses.</p>

        <h2>10. Business Meals (50%)</h2>
        <p>Both the IRS and CRA allow a deduction of 50% of meal expenses incurred for business purposes, such as meeting with a client or discussing business with a partner. Keep receipts and note the business purpose and who attended.</p>

        <h2>11. Professional Memberships and Dues</h2>
        <p>Industry association fees, professional licensing fees, and dues for organizations directly related to your work are deductible.</p>

        <h2>12. Business Travel</h2>
        <p>Flights, hotels, and ground transportation for business trips are deductible. Purely personal portions of a mixed trip are not. Keep all receipts and document the business purpose of each trip.</p>

        <h2>13. Health Insurance Premiums (US Only)</h2>
        <p>Self-employed individuals in the US who are not eligible for employer-sponsored health coverage can deduct 100% of health insurance premiums for themselves and their family on Schedule 1 of Form 1040. This does not go on Schedule C, but it reduces adjusted gross income. See IRS Publication 535.</p>

        <h2>14. Retirement Contributions</h2>
        <p><strong>Canada:</strong> RRSP contributions reduce your taxable income. The annual contribution limit is 18% of your previous year&apos;s earned income, up to the CRA&apos;s annual maximum (check My Account at canada.ca for your personal room).</p>
        <p><strong>United States:</strong> SEP-IRA contributions (up to 25% of net self-employment earnings, subject to annual IRS limits) and Solo 401(k) contributions are deductible. See IRS Publication 560.</p>

        <h2>15. Bank Fees and Interest</h2>
        <p>Monthly fees on a business bank account, interest on a business loan or business credit card, and transaction fees are all deductible. Keep business and personal accounts separate to make this straightforward.</p>

        <h2>Keep Good Records</h2>
        <p>The CRA requires you to keep records for <strong>six years</strong> from the end of the tax year they relate to. The IRS generally requires records for <strong>three years</strong> (six if you underreported income by more than 25%). Digital records are accepted by both authorities provided they are legible and complete.</p>

        <p>TaxSort automatically captures, categorizes, and stores your receipts, so you have documentation ready when you need it.</p>
      </div>
    ),
  },

  // ── 2 ──────────────────────────────────────────────────────
  "mileage-deduction-guide": {
    title: "The Complete Guide to Mileage Deductions for Self-Employed",
    description: "Every business kilometre you drive is a tax deduction. Here's how to track, calculate, and claim your mileage in Canada and the US.",
    category: "Mileage",
    date: "May 15, 2026",
    readTime: "8 min read",
    content: (
      <div className="prose-content">
        <p className="lead">If you drive for your business, whether visiting clients, picking up supplies, or going to job sites, every kilometre is a potential tax deduction. This guide explains exactly how mileage deductions work in Canada and the United States, what records you need, and how to avoid common mistakes.</p>

        <blockquote>
          <strong>Disclaimer:</strong> Mileage rates and rules change annually. Always verify current rates with the <a href="https://www.irs.gov" target="_blank" rel="noopener noreferrer">IRS</a> or <a href="https://www.canada.ca/en/revenue-agency.html" target="_blank" rel="noopener noreferrer">CRA</a> and consult a tax professional.
        </blockquote>

        <h2>What Counts as a Business Drive?</h2>
        <p>Both the IRS and CRA define business driving as travel related to earning income from your business. This includes:</p>
        <ul>
          <li>Driving to meet a client or customer</li>
          <li>Travelling to a job site or work location</li>
          <li>Running business errands (picking up supplies, dropping off deliveries)</li>
          <li>Driving between two separate work locations</li>
          <li>Attending a business conference or networking event</li>
        </ul>
        <p><strong>Commuting does not qualify.</strong> The drive from your home to a regular fixed office is personal and not deductible. However, if your home is your principal place of business (you have a legitimate home office), driving from home to meet clients may qualify.</p>

        <h2>Canada: How Mileage Deductions Work</h2>
        <p>The CRA does not offer a standard per-kilometre deduction for self-employed individuals. Instead, you deduct <strong>actual vehicle expenses</strong> multiplied by the <strong>business-use percentage</strong> of your vehicle.</p>

        <h3>Step 1: Track all vehicle expenses</h3>
        <p>Keep receipts for: fuel, oil changes, insurance, repairs, registration, and lease payments (or CCA if you own the vehicle). These are claimed on <strong>T2125, Part 2</strong>.</p>

        <h3>Step 2: Keep a mileage logbook</h3>
        <p>The CRA requires a logbook recording every trip: date, destination, odometer readings (start and end), and the business purpose. You also need total kilometres driven in the year (personal + business).</p>

        <h3>Step 3: Calculate business-use percentage</h3>
        <p>Business km ÷ Total km for the year = Business-use %<br />
        Example: 12,000 business km ÷ 20,000 total km = 60%</p>

        <h3>Step 4: Apply the percentage</h3>
        <p>Multiply your total vehicle expenses by the business-use percentage to get your deductible amount.</p>

        <p>The CRA does publish a prescribed per-kilometre rate used for <em>employee</em> automobile allowances (check the CRA website for the current year&apos;s rate). Self-employed individuals use the actual-expenses method described above.</p>

        <h2>United States: How Mileage Deductions Work</h2>
        <p>Self-employed individuals in the US can choose between two methods. You must choose in the <strong>first year</strong> you use the vehicle for business.</p>

        <h3>Option A: Standard Mileage Rate</h3>
        <p>Multiply business miles by the IRS standard mileage rate. The rate for <strong>2024 was 67 cents per mile</strong> (IRS Notice 2024-08). Check the IRS website or a current tax resource for the rate applicable to the year you are filing.</p>
        <p>You cannot use the standard mileage rate if you have already claimed MACRS depreciation or Section 179 expensing on the vehicle.</p>

        <h3>Option B: Actual Expenses</h3>
        <p>Track all vehicle costs (fuel, insurance, repairs, depreciation) and multiply by your business-use percentage. Generally more work but may yield a larger deduction for high-cost vehicles.</p>

        <h3>Record-keeping for the IRS</h3>
        <p>The IRS requires contemporaneous records: date, business destination, business purpose, and miles driven for each trip. Apps or a paper logbook both work. The key is recording trips at the time they occur, not reconstructed later from memory.</p>
        <p>Report vehicle expenses on <strong>Schedule C, Part II, Line 9</strong> (car and truck expenses). You must also complete <strong>Part IV</strong> of Schedule C with vehicle details.</p>

        <h2>What TaxSort Tracks Automatically</h2>
        <p>TaxSort&apos;s GPS mileage tracker logs the start and end of each trip, records the route, calculates the distance, and stores it in your account, linked to the tax year. You can review and categorize trips as business or personal, then export your complete mileage log at tax time.</p>

        <h2>Key Tips</h2>
        <ul>
          <li><strong>Log trips immediately.</strong> Reconstructing a year of driving from memory will not hold up to an audit.</li>
          <li><strong>Record the purpose.</strong> &ldquo;Client visit: Sarah Chen, 123 Main St&rdquo; is far better than &ldquo;work.&rdquo;</li>
          <li><strong>Track total odometer readings.</strong> Both the IRS and CRA may ask for beginning and end-of-year readings.</li>
          <li><strong>Do not claim 100% business use unless it is true.</strong> This is a common audit trigger.</li>
        </ul>
      </div>
    ),
  },

  // ── 3 ──────────────────────────────────────────────────────
  "home-office-deduction": {
    title: "Home Office Deduction: What Freelancers Can and Cannot Claim",
    description: "Working from home? You may be able to deduct a portion of your rent, utilities, and internet. Here's how to calculate and claim it correctly.",
    category: "Tax Tips",
    date: "May 10, 2026",
    readTime: "5 min read",
    content: (
      <div className="prose-content">
        <p className="lead">Working from home is one of the biggest perks of being self-employed, and the home office deduction is one of the most valuable tax breaks available. But it also comes with strict rules. Here&apos;s what you can claim, what you cannot, and how to calculate it properly.</p>

        <blockquote>
          <strong>Disclaimer:</strong> Tax rules vary by country and change over time. Verify current rules with the <a href="https://www.irs.gov" target="_blank" rel="noopener noreferrer">IRS</a> or <a href="https://www.canada.ca/en/revenue-agency.html" target="_blank" rel="noopener noreferrer">CRA</a> and consult a tax professional.
        </blockquote>

        <h2>The Golden Rule: Regular and Exclusive Use</h2>
        <p>Both the IRS and CRA require that the workspace be used <strong>regularly and exclusively</strong> for your business. A kitchen table where you also eat dinner generally does not qualify. A dedicated room used only for work, even a clearly defined portion of a room, is a much stronger claim.</p>

        <h2>Canada (CRA): Workspace-in-the-Home</h2>
        <p>Claimed on <strong>T2125, Part 7</strong>. To qualify, the workspace must be either:</p>
        <ul>
          <li>Your <strong>principal place of business</strong> (you work from home most of the time), or</li>
          <li>Used <strong>exclusively and regularly</strong> to meet clients, customers, or patients</li>
        </ul>

        <h3>What you can deduct (renters)</h3>
        <ul>
          <li>Rent (proportional share)</li>
          <li>Electricity, heat, and water</li>
          <li>Internet (business-use portion)</li>
          <li>Condo or strata fees (proportional share)</li>
        </ul>

        <h3>What you can deduct (homeowners)</h3>
        <ul>
          <li>Utilities (heat, electricity, water)</li>
          <li>Internet (business-use portion)</li>
          <li>Condo or strata fees</li>
          <li>Minor repairs and maintenance related to the workspace</li>
        </ul>
        <p><strong>Note for homeowners:</strong> Mortgage interest and capital cost allowance on your home are technically deductible but are rarely claimed because they can trigger capital gains consequences when you sell. Seek professional advice before claiming these.</p>

        <h3>How to calculate the deduction</h3>
        <p>Office square footage ÷ Total home square footage = Business-use percentage</p>
        <p>Example: 150 sq ft office ÷ 1,200 sq ft total = 12.5%<br />
        If your monthly rent is $2,000 and utilities are $200/month:<br />
        ($2,000 + $200) × 12 months × 12.5% = <strong>$3,300 deductible per year</strong></p>

        <h3>Loss restriction</h3>
        <p>The CRA does <strong>not</strong> allow you to create or increase a business loss using the workspace-in-home deduction. If your business income is $4,000 and your other expenses are $3,800, you can only claim up to $200 in workspace expenses. The remaining amount carries forward to the next tax year.</p>

        <h2>United States (IRS): Form 8829</h2>
        <p>The IRS allows two methods for the home office deduction:</p>

        <h3>Simplified Method</h3>
        <ul>
          <li>$5 per square foot of your home office</li>
          <li>Maximum of 300 square feet = maximum deduction of $1,500</li>
          <li>No depreciation; no Form 8829 required</li>
          <li>Deduction cannot exceed your gross income from the business</li>
        </ul>

        <h3>Regular Method (Form 8829)</h3>
        <ul>
          <li>Office sq ft ÷ total home sq ft = business-use percentage</li>
          <li>Apply that percentage to mortgage interest (or rent), utilities, insurance, and depreciation</li>
          <li>More paperwork but often a larger deduction</li>
          <li>Requires depreciation recapture when you sell the home</li>
        </ul>

        <h3>Exclusive use requirement</h3>
        <p>The IRS strictly enforces &ldquo;exclusive use.&rdquo; If the room is used for both work and personal activities, neither method applies. A child occasionally doing homework in your office does not automatically disqualify you, but regular personal use does.</p>

        <h2>What You Cannot Claim</h2>
        <ul>
          <li>Space used for personal purposes (even occasionally)</li>
          <li>A home office used only for &ldquo;convenience&rdquo; when you have a fixed office elsewhere (US)</li>
          <li>Mortgage principal payments (not deductible as a business expense in either country)</li>
          <li>General home improvements not related to the workspace</li>
        </ul>

        <h2>Best Practice</h2>
        <p>Take a photo of your workspace and measure the square footage once a year. Keep utility bills organized. TaxSort can store these receipts and documents so they are ready at tax time.</p>
      </div>
    ),
  },

  // ── 4 ──────────────────────────────────────────────────────
  "gig-worker-taxes-usa": {
    title: "Gig Worker Taxes in the US: The Complete 2025 Guide",
    description: "Driving for Uber or delivering for DoorDash in the US? Schedule C, self-employment tax, 1099 forms, quarterly estimated payments, all explained.",
    category: "USA",
    date: "May 8, 2026",
    readTime: "10 min read",
    content: (
      <div className="prose-content">
        <p className="lead">If you earn money through Uber, Lyft, DoorDash, Instacart, Upwork, Fiverr, or any other platform, the IRS considers you <strong>self-employed</strong>. No employer withholds taxes from your earnings. You are responsible for reporting your income, paying self-employment tax, and making quarterly estimated payments.</p>

        <blockquote>
          <strong>Disclaimer:</strong> This article reflects US federal tax rules as generally understood for the 2025 tax year. State taxes vary and are not covered here. Always verify at <a href="https://www.irs.gov" target="_blank" rel="noopener noreferrer">irs.gov</a> and consult a qualified tax professional before filing.
        </blockquote>

        <h2>You Are Self-Employed: Here Is What That Means</h2>
        <p>Gig platforms classify workers as independent contractors, not employees. As a result:</p>
        <ul>
          <li>No federal or state income tax is withheld from your platform earnings</li>
          <li>No Social Security or Medicare taxes are withheld; you pay the full self-employment tax yourself</li>
          <li>You must report all income, including cash tips and bonuses</li>
          <li>You can deduct legitimate business expenses to reduce your taxable income</li>
        </ul>

        <h2>The Forms You Will Receive: 1099-NEC and 1099-K</h2>
        <p>Platforms that pay you $600 or more during the calendar year are required to issue a <strong>1099-NEC</strong> (Non-Employee Compensation) or <strong>1099-K</strong> (Payment Card and Third Party Network Transactions), depending on how payments were processed.</p>
        <p><strong>Important:</strong> Even if you earn less than the reporting threshold and receive no 1099, you are still legally required to report the income on your tax return. The IRS receives copies of all 1099s issued. Any income reported on a 1099 that does not appear on your return is a common audit trigger.</p>
        <p>Check each 1099 carefully. Platforms sometimes report gross earnings before their fees and commissions are deducted. You can deduct those platform fees as a business expense. You are not taxed on money you never received as take-home pay.</p>

        <h2>Where to Report: Schedule C</h2>
        <p>Self-employment income is reported on <strong>Schedule C (Profit or Loss from Business)</strong>, filed with your Form 1040. Your net profit (income minus deductions) flows to Schedule 1 and is added to your taxable income.</p>
        <p>If you have multiple gig income sources (e.g., you drive for Uber and do freelance design), you file a separate Schedule C for each distinct business activity, or combine them on one Schedule C if they are the same type of work.</p>

        <h2>Self-Employment Tax</h2>
        <p>This is the biggest surprise for first-year gig workers. In addition to regular income tax, self-employed individuals pay <strong>self-employment (SE) tax</strong> of <strong>15.3%</strong> on net self-employment earnings:</p>
        <ul>
          <li>12.4% for Social Security (on earnings up to the annual wage base of $168,600 for 2024; check IRS for the current year&apos;s limit)</li>
          <li>2.9% for Medicare (no income cap)</li>
          <li>An additional 0.9% Medicare surtax applies if net earnings exceed $200,000 (single) or $250,000 (married filing jointly)</li>
        </ul>
        <p>SE tax is calculated on <strong>Schedule SE</strong>. The good news: you can deduct <strong>50% of your SE tax</strong> on Schedule 1 as an above-the-line deduction, which reduces your adjusted gross income.</p>
        <p>As a rough estimate, plan to set aside <strong>25–35% of net gig income</strong> for federal taxes (income tax + SE tax combined), depending on your overall income level.</p>

        <h2>Quarterly Estimated Tax Payments</h2>
        <p>Because no employer withholds tax from your gig earnings, you are generally required to pay taxes in advance through quarterly estimated payments using <strong>Form 1040-ES</strong>.</p>
        <p>You must make estimated payments if you expect to owe at least <strong>$1,000 in federal tax</strong> for the year after withholding and credits.</p>

        <table>
          <thead>
            <tr><th>Payment Period</th><th>Due Date</th></tr>
          </thead>
          <tbody>
            <tr><td>January 1 – March 31</td><td>April 15</td></tr>
            <tr><td>April 1 – May 31</td><td>June 15</td></tr>
            <tr><td>June 1 – August 31</td><td>September 15</td></tr>
            <tr><td>September 1 – December 31</td><td>January 15 (following year)</td></tr>
          </tbody>
        </table>

        <p>If a due date falls on a weekend or federal holiday, it moves to the next business day. Pay online at <a href="https://www.irs.gov/payments" target="_blank" rel="noopener noreferrer">irs.gov/payments</a> via Direct Pay. It is free and instant.</p>
        <p>Underpaying estimated taxes results in an underpayment penalty calculated using the federal short-term interest rate plus 3 percentage points (IRS Form 2210). The penalty is generally avoided if you pay at least 90% of the current year&apos;s tax or 100% of the prior year&apos;s tax liability (110% if your prior-year AGI exceeded $150,000).</p>

        <h2>Deductions for Gig Workers</h2>
        <p>Reducing your net Schedule C profit reduces both income tax and SE tax, making deductions especially valuable for self-employed individuals.</p>
        <ul>
          <li><strong>Mileage:</strong> Business miles at the IRS standard rate (67¢/mile for 2024; check the current rate) or actual vehicle expenses. Rideshare and delivery drivers typically have significant mileage deductions.</li>
          <li><strong>Phone:</strong> The business-use percentage of your monthly phone bill</li>
          <li><strong>Platform fees and commissions:</strong> Deducted on Schedule C, reducing the gross income reported on your 1099</li>
          <li><strong>Equipment:</strong> Insulated delivery bags, phone mounts, dashcams, etc.</li>
          <li><strong>Parking and tolls:</strong> Deductible for business trips (separate from the mileage rate if using standard mileage)</li>
          <li><strong>Home office:</strong> If you use a dedicated space to manage your gig work (Form 8829)</li>
          <li><strong>Health insurance premiums:</strong> 100% deductible on Schedule 1 if you are not eligible for employer-sponsored coverage</li>
          <li><strong>Self-employed retirement contributions:</strong> SEP-IRA (up to 25% of net SE earnings, subject to IRS annual limit) reduces taxable income (IRS Publication 560)</li>
        </ul>

        <h2>Filing Deadline and Extensions</h2>
        <p>The federal income tax filing deadline is <strong>April 15</strong>. You can request an automatic six-month extension (to October 15) by filing <strong>Form 4868</strong> by April 15.</p>
        <p><strong>Important:</strong> An extension to file is not an extension to pay. If you owe taxes, you must estimate and pay by April 15 to avoid the failure-to-pay penalty (0.5% of unpaid tax per month, up to 25%) and interest.</p>
        <p>The failure-to-file penalty (5% of unpaid tax per month, up to 25%) is far larger, so file on time even if you cannot pay in full. If you cannot pay, set up a payment plan at <a href="https://www.irs.gov/payments/payment-plans-installment-agreements" target="_blank" rel="noopener noreferrer">irs.gov</a>.</p>

        <h2>State Taxes</h2>
        <p>Most states also tax self-employment income. State rules on estimated payments, deductions, and deadlines vary widely. Check your state&apos;s department of revenue website for specific requirements. Nine states have no individual income tax as of 2024: Alaska, Florida, Nevada, New Hampshire (wages only), South Dakota, Tennessee (wages only), Texas, Washington, and Wyoming.</p>

        <h2>Keeping Records</h2>
        <p>The IRS generally requires you to keep records for <strong>three years</strong> from the date you filed your return (or two years from the date you paid, whichever is later). Keep records for six years if you underreported income by more than 25% (IRS Publication 583).</p>
        <p>Keep all 1099s, mileage logs, receipts for deductible expenses, and records of estimated tax payments made.</p>
      </div>
    ),
  },

  // ── 5 (was 4) ───────────────────────────────────────────────
  "gig-worker-taxes-canada": {
    title: "Gig Worker Taxes in Canada: The Complete 2025–2026 Guide",
    description: "Driving for Uber or delivering for DoorDash? Here's everything you need to know about filing taxes as a gig worker in Canada.",
    category: "Canada",
    date: "May 5, 2026",
    readTime: "10 min read",
    content: (
      <div className="prose-content">
        <p className="lead">If you drive for Uber, Lyft, or a rideshare platform, deliver for DoorDash or Instacart, or do freelance work on Upwork or Fiverr, you are <strong>self-employed</strong> in the eyes of the Canada Revenue Agency. No employer withholds tax from your pay. You are responsible for reporting and remitting it yourself.</p>

        <blockquote>
          <strong>Disclaimer:</strong> This article reflects CRA rules as generally understood for 2025–2026 tax filings. Tax rules change; always verify at <a href="https://www.canada.ca/en/revenue-agency.html" target="_blank" rel="noopener noreferrer">canada.ca</a> and consult a qualified tax professional.
        </blockquote>

        <h2>You Are a Self-Employed Business Owner</h2>
        <p>Gig platforms do not classify their workers as employees. That means:</p>
        <ul>
          <li>No CPP contributions withheld; you pay both the employee and employer share</li>
          <li>No EI premiums withheld; you generally cannot claim EI as self-employed (unless you opted in)</li>
          <li>No income tax withheld at source</li>
          <li>You must report all income, including cash and platform income</li>
        </ul>

        <h2>Where to Report Your Income: T2125</h2>
        <p>Self-employment income is reported on the <strong>T2125 (Statement of Business or Professional Activities)</strong>, filed with your T1 personal income tax return. Your net business income (income minus expenses) flows to Line 13500 of your T1.</p>
        <p>Some platforms issue a <strong>T4A slip</strong> showing what they paid you. Even if you do not receive a T4A, you must still report all income earned.</p>

        <h2>GST/HST Registration</h2>
        <p>This is one of the most commonly missed obligations for gig workers.</p>
        <p>You must register for a GST/HST account when your <strong>total worldwide taxable supplies exceed $30,000</strong> in a single calendar quarter <em>or</em> over any four consecutive calendar quarters. Once you cross this threshold, you have 29 days to register.</p>
        <p><strong>Rideshare drivers (Uber, Lyft):</strong> The CRA has ruled that rideshare services are taxicab services, which means drivers must register for GST/HST regardless of their revenue level. The $30,000 threshold does not apply. Uber and Lyft typically collect and remit HST on your behalf in most provinces, but you should confirm the arrangement with your platform and file accordingly.</p>
        <p><strong>Delivery and freelance workers:</strong> The $30,000 threshold applies. Once registered, you charge GST/HST on your services, file GST/HST returns (quarterly or annually), and remit the net tax collected.</p>
        <p>Registration is done online through <a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/registering-your-business.html" target="_blank" rel="noopener noreferrer">CRA My Business Account</a>.</p>

        <h2>Canada Pension Plan (CPP) Contributions</h2>
        <p>Self-employed individuals contribute both the employee and employer portions of CPP on their net self-employment earnings, up to the year&apos;s maximum pensionable earnings. For 2025, check the CRA website for the current contribution rate and maximum. CPP contributions are claimed partly as a deduction and partly as a non-refundable tax credit on your T1 return (Schedule 8).</p>

        <h2>What You Can Deduct</h2>
        <p>As a self-employed gig worker, you can deduct reasonable expenses incurred to earn business income:</p>
        <ul>
          <li><strong>Vehicle expenses:</strong> fuel, insurance, maintenance, lease payments × business-use %</li>
          <li><strong>Phone:</strong> business-use portion of your monthly bill</li>
          <li><strong>Supplies:</strong> insulated bags for delivery, car accessories, etc.</li>
          <li><strong>Platform fees:</strong> any fees charged by the platform that reduce your earnings</li>
          <li><strong>Parking and tolls:</strong> for business trips</li>
          <li><strong>Accounting and software fees:</strong> including TaxSort Pro</li>
          <li><strong>Workspace-in-the-home:</strong> if applicable (see our home office guide)</li>
        </ul>

        <h2>Tax Filing Deadlines</h2>
        <table>
          <thead>
            <tr><th>Obligation</th><th>Deadline</th></tr>
          </thead>
          <tbody>
            <tr><td>File T1 return (self-employed)</td><td>June 15 of the following year</td></tr>
            <tr><td>Pay any balance owing</td><td>April 30 (even though filing is due June 15)</td></tr>
            <tr><td>GST/HST annual return</td><td>3 months after your fiscal year-end (June 15 if calendar year)</td></tr>
          </tbody>
        </table>
        <p><strong>Important:</strong> If you owe a balance, interest begins accruing on May 1 even if you file in June. Estimate what you owe and pay by April 30 to avoid interest charges.</p>

        <h2>Instalments</h2>
        <p>If you owe more than $3,000 in income tax in two consecutive years, the CRA will require you to make quarterly instalment payments. Instalment reminder notices arrive in February and August. Failing to pay instalments on time results in instalment interest charges.</p>
        <p>Instalment due dates: <strong>March 15, June 15, September 15, December 15</strong>.</p>

        <h2>Keeping Records</h2>
        <p>The CRA requires you to keep all records and supporting documents for <strong>six years</strong> from the end of the tax year they relate to. For gig workers, this includes trip records, receipts for vehicle expenses, and platform payment summaries.</p>
      </div>
    ),
  },

  // ── 5 ──────────────────────────────────────────────────────
  "receipt-scanning-tips": {
    title: "How to Never Lose a Business Receipt Again",
    description: "The simple system to capture every deductible expense automatically, using your phone.",
    category: "Tax Tips",
    date: "April 28, 2026",
    readTime: "4 min read",
    content: (
      <div className="prose-content">
        <p className="lead">A missing receipt at tax time means a deduction you cannot prove, and a deduction you cannot prove is a deduction you cannot claim. Here is how to build a system that captures every business expense as it happens, with almost no extra effort.</p>

        <blockquote>
          <strong>Note:</strong> Both the IRS and CRA accept digital records as supporting documentation, provided they are accurate, complete, and legible. CRA guidance is in <a href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/keeping-records.html" target="_blank" rel="noopener noreferrer">IC78-10R5</a>; IRS guidance is in <a href="https://www.irs.gov/publications/p583" target="_blank" rel="noopener noreferrer">Publication 583</a>.
        </blockquote>

        <h2>Why Receipts Get Lost</h2>
        <p>Paper receipts fade, get crumpled in pockets, and pile up in gloveboxes. Email receipts land in an inbox and get buried. The problem is not that receipts don&apos;t exist. It&apos;s that there is no consistent capture habit.</p>

        <h2>The One-Tap Rule</h2>
        <p>The most effective system is also the simplest: <strong>scan every receipt the moment you receive it</strong>, before you leave the counter, finish the meal, or close the email. Do not let a receipt touch your pocket without being scanned first.</p>
        <p>TaxSort lets you snap a photo in the app, and AI extracts the vendor name, amount, date, and tax category automatically. The original image is stored in the cloud, and the paper receipt can then be discarded.</p>

        <h2>What a Valid Receipt Needs</h2>
        <p>Both the IRS and CRA require receipts to show:</p>
        <ul>
          <li>The name of the vendor or supplier</li>
          <li>The date of the transaction</li>
          <li>The amount paid (including taxes)</li>
          <li>A description of the goods or services purchased</li>
        </ul>
        <p>For business meals, also note: who was present and the business purpose of the meeting.</p>

        <h2>Handling Email Receipts</h2>
        <p>For digital receipts (Amazon, software subscriptions, online purchases), forward them to a dedicated business email address or import them into your expense app immediately. Do not let them sit in your general inbox. Create a folder or filter that routes business receipts automatically.</p>

        <h2>Bank and Credit Card Imports</h2>
        <p>Connecting your bank or importing a CSV statement is useful for catching transactions you may have forgotten to receipt, but a bank statement alone is generally not sufficient documentation. It shows the amount and merchant, but not what was purchased. Pair it with receipts where possible.</p>
        <p>TaxSort supports bank statement and CSV imports to cross-check your transactions against your receipts.</p>

        <h2>How Long to Keep Records</h2>
        <ul>
          <li><strong>Canada (CRA):</strong> Six years from the end of the tax year the records relate to (IC78-10R5)</li>
          <li><strong>United States (IRS):</strong> Generally three years from the date you filed your return, or two years from when you paid the tax, whichever is later. Six years if you underreported income by more than 25% (IRS Publication 583)</li>
        </ul>

        <h2>The Weekly Review Habit</h2>
        <p>Once a week, spend five minutes reviewing new transactions in TaxSort. Confirm categories, add any receipts you missed, and note the business purpose for meals and travel. Staying on top of it weekly means zero scrambling at tax time.</p>
      </div>
    ),
  },

  // ── 6 ──────────────────────────────────────────────────────
  "freelancer-tax-mistakes": {
    title: "7 Tax Mistakes Freelancers Make (And How to Avoid Them)",
    description: "From missing instalment payments to forgetting the vehicle deduction. The most expensive mistakes self-employed people make at tax time.",
    category: "Tax Tips",
    date: "April 20, 2026",
    readTime: "7 min read",
    content: (
      <div className="prose-content">
        <p className="lead">Tax season is stressful enough without discovering that a preventable mistake has cost you money, or worse, triggered a penalty. Here are seven of the most common and expensive tax mistakes made by freelancers and self-employed individuals, and exactly how to avoid each one.</p>

        <blockquote>
          <strong>Disclaimer:</strong> This article reflects general tax principles for Canadian (CRA) and US (IRS) self-employed filers. Tax laws change; consult a qualified tax professional before filing.
        </blockquote>

        <h2>Mistake 1: Not Making Instalment Payments</h2>
        <p><strong>Canada:</strong> If you owe more than $3,000 in federal income tax two years in a row, the CRA requires quarterly instalment payments: March 15, June 15, September 15, and December 15. Failing to pay on time results in instalment interest, calculated daily at the prescribed rate, which is typically several percentage points above prime.</p>
        <p><strong>United States:</strong> The IRS requires quarterly estimated tax payments if you expect to owe at least $1,000 in taxes for the year after withholding and credits. Due dates: April 15, June 15, September 15, January 15. The penalty for underpayment is calculated based on the federal short-term rate plus 3 percentage points.</p>
        <p><strong>Fix:</strong> Set aside 25–35% of every invoice payment into a separate account. Pay quarterly instalments on time.</p>

        <h2>Mistake 2: Not Tracking Mileage</h2>
        <p>Vehicle expenses are often the largest deduction available to self-employed people who drive for work. Without a contemporaneous mileage logbook, the deduction is not claimable. Memory and estimates will not satisfy the CRA or IRS in an audit.</p>
        <p><strong>Fix:</strong> Enable GPS mileage tracking in TaxSort. It runs in the background and logs every trip automatically. Review and categorize trips as business or personal weekly.</p>

        <h2>Mistake 3: Mixing Personal and Business Finances</h2>
        <p>Using a single bank account or credit card for both personal and business expenses creates a bookkeeping nightmare and makes it easy to miss deductions, or accidentally claim personal expenses.</p>
        <p><strong>Fix:</strong> Open a dedicated business chequing account and use a business credit card for all work-related purchases. This creates a clean paper trail and makes expense review straightforward.</p>

        <h2>Mistake 4: Throwing Away Receipts</h2>
        <p>A bank or credit card statement shows that a transaction occurred but rarely shows what was purchased. Without the original receipt, many deductions cannot be substantiated.</p>
        <p><strong>Fix:</strong> Scan receipts immediately with TaxSort. Digital copies are accepted by both the CRA (IC78-10R5) and IRS (Rev. Proc. 98-25) as valid records.</p>

        <h2>Mistake 5: Missing the Home Office Deduction</h2>
        <p>Many freelancers working from home either don&apos;t know about this deduction or assume it is too complicated. For someone paying $1,800/month in rent and using a 10% home office, that is $2,160 per year in deductions they are missing.</p>
        <p><strong>Fix:</strong> Measure your workspace, keep your utility and rent receipts, and claim the workspace-in-the-home deduction on T2125 (Canada) or Form 8829 (US). See our full home office guide for the rules.</p>

        <h2>Mistake 6: Forgetting GST/HST Registration (Canada)</h2>
        <p>Many new freelancers and gig workers hit the $30,000 revenue threshold without realising they are legally required to register for and collect GST/HST. Failing to register results in penalties and interest on amounts that should have been collected and remitted.</p>
        <p>Rideshare drivers have no threshold and must register immediately (CRA technical interpretation).</p>
        <p><strong>Fix:</strong> Track your cumulative revenue throughout the year. Register via CRA My Business Account as soon as you reach $30,000. Once registered, add GST/HST to your invoices and set it aside. It is not your money.</p>

        <h2>Mistake 7: Filing Late</h2>
        <p><strong>Canada:</strong> Self-employed individuals have until June 15 to file their T1 return, but any balance owing is still due April 30. A late-filing penalty of 5% of the balance owing applies, plus 1% per month for up to 12 months. If you&apos;re late a second time within three years, the penalty doubles.</p>
        <p><strong>United States:</strong> The filing deadline is April 15 (October 15 with an extension). The failure-to-file penalty is 5% of unpaid taxes per month, up to 25%. An extension to file is not an extension to pay. Estimate and pay any owed tax by April 15.</p>
        <p><strong>Fix:</strong> File on time, even if you cannot pay in full. The failure-to-file penalty is far larger than the failure-to-pay penalty. If you cannot pay in full, the CRA and IRS both have payment arrangement options.</p>
      </div>
    ),
  },
};

// ─────────────────────────────────────────────────────────────
// Metadata
// ─────────────────────────────────────────────────────────────
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} – TaxSort Blog`,
    description: post.description,
  };
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

// ─────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────
export default async function BlogPost(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.date,
    "author": { "@type": "Organization", "name": "TaxSort" },
    "publisher": {
      "@type": "Organization",
      "name": "TaxSort",
      "url": "https://taxsort.app",
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://taxsort.app/blog/${slug}` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ background: "#e8f0e5" }} className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="text-sm font-medium mb-6 inline-flex items-center gap-1" style={{ color: "#2a7a3b" }}>
              ← Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-4 mt-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full text-white" style={{ background: "#2a7a3b" }}>{post.category}</span>
              <span className="text-xs text-gray-500">{post.date} · {post.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">{post.title}</h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <style>{`
              .prose-content { color: #374151; line-height: 1.8; }
              .prose-content p { margin-bottom: 1.25rem; }
              .prose-content p.lead { font-size: 1.125rem; color: #4b5563; margin-bottom: 2rem; }
              .prose-content h2 { font-size: 1.5rem; font-weight: 700; color: #111827; margin-top: 2.5rem; margin-bottom: 0.75rem; }
              .prose-content h3 { font-size: 1.125rem; font-weight: 600; color: #1f2937; margin-top: 1.5rem; margin-bottom: 0.5rem; }
              .prose-content ul { list-style: disc; padding-left: 1.5rem; margin-bottom: 1.25rem; }
              .prose-content ul li { margin-bottom: 0.4rem; }
              .prose-content blockquote { border-left: 4px solid #2a7a3b; padding: 1rem 1.25rem; background: #e8f0e5; border-radius: 0 0.5rem 0.5rem 0; margin: 1.5rem 0; font-size: 0.9rem; color: #374151; }
              .prose-content a { color: #2a7a3b; text-decoration: underline; }
              .prose-content table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 0.9rem; }
              .prose-content th { background: #e8f0e5; padding: 0.6rem 1rem; text-align: left; font-weight: 600; border: 1px solid #d1fae5; }
              .prose-content td { padding: 0.6rem 1rem; border: 1px solid #e5e7eb; }
              .prose-content strong { color: #111827; }
            `}</style>
            {post.content}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#e8f0e5" }} className="py-16 px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Track every deduction automatically</h2>
            <p className="text-gray-600 mb-6">TaxSort scans receipts, tracks mileage, and keeps your records organized year-round, so tax time is never stressful.</p>
            <Link href="/#download" className="px-8 py-3 rounded-xl font-semibold text-white inline-block" style={{ background: "#2a7a3b" }}>
              Download Free
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
