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

  // ── USA 2026 ────────────────────────────────────────────────
  "freelancer-taxes-usa-2026": {
    title: "Freelancer Taxes in the US: The Complete 2026 Guide",
    description: "Everything US freelancers and independent contractors need to know for the 2025 tax year: Schedule C, self-employment tax, quarterly payments, and every deduction you can claim.",
    category: "USA",
    date: "May 29, 2026",
    readTime: "11 min read",
    content: (
      <div className="prose-content">
        <p className="lead">If you freelance, consult, drive for a rideshare platform, or run any self-employed business in the United States, you are responsible for tracking your own taxes. Unlike W-2 employees, no employer withholds anything on your behalf. The upside: you can deduct every legitimate business expense and significantly reduce what you owe. This guide covers everything you need to know for the <strong>2025 tax year</strong> (filed in 2026).</p>

        <blockquote>
          <strong>Disclaimer:</strong> Tax law changes annually. Always verify current rates and rules at <a href="https://www.irs.gov" target="_blank" rel="noopener noreferrer">irs.gov</a> or with a qualified CPA before filing.
        </blockquote>

        <h2>Who Needs to File as Self-Employed?</h2>
        <p>You must file Schedule SE and report self-employment income if your net earnings from self-employment are <strong>$400 or more</strong> in a tax year. This applies to freelancers, independent contractors, gig workers, sole proprietors, and single-member LLCs.</p>
        <p>You will receive a <strong>1099-NEC</strong> from any client who paid you $600 or more during the year. However, you must report all self-employment income regardless of whether you receive a 1099 — the IRS gets copies of all 1099s and cross-references them against your return.</p>

        <h2>Schedule C: Your Business Tax Return</h2>
        <p>Self-employed individuals report business income and expenses on <strong>Schedule C (Profit or Loss from Business)</strong>, which is attached to your Form 1040. Schedule C calculates your net profit — the figure that flows into your income tax calculation and self-employment tax calculation.</p>
        <p>Net profit = Total revenue − Total deductible business expenses</p>
        <p>The lower your net profit, the less tax you owe. This is why tracking every legitimate expense matters.</p>

        <h2>Self-Employment Tax</h2>
        <p>Self-employed individuals pay <strong>self-employment (SE) tax</strong> of <strong>15.3%</strong> on net earnings, which covers Social Security (12.4%) and Medicare (2.9%). For 2025, Social Security tax applies to the first <strong>$176,100</strong> of net self-employment earnings. There is no cap on the 2.9% Medicare portion.</p>
        <p>The good news: you can deduct <strong>half of your SE tax</strong> (the employer-equivalent portion) as an above-the-line deduction on your Form 1040, reducing your adjusted gross income (AGI).</p>
        <ul>
          <li>Net SE earnings × 92.35% = SE tax base (the 7.65% reduction mirrors the employer deduction W-2 employees receive)</li>
          <li>SE tax base × 15.3% = SE tax owed</li>
          <li>SE tax ÷ 2 = deductible amount on Form 1040</li>
        </ul>

        <h2>Quarterly Estimated Tax Payments</h2>
        <p>Because no employer withholds taxes for you, the IRS requires self-employed individuals to pay <strong>estimated taxes quarterly</strong>. Failing to do so results in an underpayment penalty, even if you pay in full by April 15.</p>
        <p>2026 quarterly due dates (for the 2025 tax year):</p>
        <ul>
          <li><strong>Q1 (Jan–Mar):</strong> April 15, 2025</li>
          <li><strong>Q2 (Apr–May):</strong> June 16, 2025</li>
          <li><strong>Q3 (Jun–Aug):</strong> September 15, 2025</li>
          <li><strong>Q4 (Sep–Dec):</strong> January 15, 2026</li>
        </ul>
        <p>Use <strong>Form 1040-ES</strong> to calculate and submit estimated payments. A safe harbour rule: pay at least 100% of last year's tax liability (110% if AGI exceeded $150,000) and you will avoid the underpayment penalty regardless of your final bill.</p>

        <h2>The Biggest Tax Deductions for US Freelancers</h2>

        <h3>1. Mileage and Vehicle Expenses</h3>
        <p>The IRS standard mileage rate for 2025 is <strong>70 cents per mile</strong> for business use (check irs.gov for updated 2026 rates). Track every business mile: client visits, networking events, post office runs for business packages, and supply pickups all qualify. You may alternatively deduct actual vehicle expenses (fuel, insurance, maintenance, depreciation) based on your business-use percentage — whichever method yields a larger deduction.</p>
        <p>TaxSort's GPS mileage tracker automatically logs every trip and calculates your deduction, so you never undercount miles.</p>

        <h3>2. Home Office Deduction</h3>
        <p>If you use part of your home <strong>regularly and exclusively</strong> for business, you can deduct it. The simplified method allows <strong>$5 per square foot</strong> (up to 300 sq ft, so a maximum of $1,500). The regular method deducts the business-use percentage of actual home expenses: rent/mortgage interest, utilities, insurance, and repairs.</p>

        <h3>3. Health Insurance Premiums</h3>
        <p>Self-employed individuals who are not eligible for employer-sponsored health insurance through a spouse can deduct <strong>100% of health, dental, and vision insurance premiums</strong> for themselves and their family as an above-the-line deduction. This is one of the most valuable deductions exclusive to the self-employed.</p>

        <h3>4. Retirement Contributions</h3>
        <p>Contributing to a <strong>SEP-IRA</strong> allows you to deduct up to 25% of net self-employment income, with a 2025 maximum of <strong>$70,000</strong>. A <strong>Solo 401(k)</strong> allows even higher combined contributions as both employee and employer. Retirement contributions reduce your taxable income dollar-for-dollar — one of the most powerful tax planning tools available.</p>

        <h3>5. Qualified Business Income (QBI) Deduction</h3>
        <p>Under the Tax Cuts and Jobs Act (currently in effect through 2025; Congress is expected to address its expiration), most self-employed individuals can deduct up to <strong>20% of qualified business income</strong>. For 2025, income limits phase in at $197,300 (single) and $394,600 (married filing jointly) for specified service trades. For most freelancers below these thresholds, this deduction applies automatically.</p>

        <h3>6. Software, Subscriptions, and Tools</h3>
        <p>Any software or subscription you use for business is fully deductible: project management tools, accounting software, design apps, cloud storage, professional memberships, and industry publications. Keep receipts using TaxSort's AI scanner — photograph each receipt the moment you pay and it is automatically categorised under Software & Subscriptions.</p>

        <h3>7. Phone and Internet</h3>
        <p>Deduct the business-use percentage of your phone plan and home internet. If your phone is used 70% for business, deduct 70% of your monthly bill. Freelancers who work exclusively from home commonly deduct 50–80% of their internet bill.</p>

        <h3>8. Professional Development</h3>
        <p>Online courses, books, certifications, conferences, and workshops directly related to your current business are fully deductible. Note: costs for training in a new career are not deductible — only education that maintains or improves skills in your existing trade qualifies.</p>

        <h3>9. Business Insurance</h3>
        <p>Professional liability (E&O) insurance, general liability insurance, and business property insurance premiums are fully deductible as ordinary business expenses.</p>

        <h3>10. Meals (50% Deductible)</h3>
        <p>Business meals with clients, prospects, or business partners are <strong>50% deductible</strong>. Document the date, attendees, business purpose, and amount. The meal must have a direct business purpose — a general networking lunch qualifies; a personal lunch where you discuss work does not.</p>

        <h2>How TaxSort Simplifies US Tax Filing</h2>
        <p>TaxSort is built for US freelancers and independent contractors. The app automatically categorises every expense under the correct IRS Schedule C line items, tracks GPS mileage, and generates a <strong>Schedule C-ready export</strong> you can hand directly to your CPA or import into tax software. Switch on AI receipt scanning and every receipt is captured, totalled, and sorted before you even open your laptop.</p>
        <p>At tax time, export your full year as a CSV or PDF summary — organised by IRS category, with deductible amounts pre-calculated.</p>

        <h2>Key Deadlines for US Freelancers (2025 Tax Year)</h2>
        <ul>
          <li><strong>January 15, 2026:</strong> Q4 2025 estimated payment due</li>
          <li><strong>January 31, 2026:</strong> 1099-NEC forms due from clients</li>
          <li><strong>April 15, 2026:</strong> Federal tax return due (or extension request + payment)</li>
          <li><strong>October 15, 2026:</strong> Extended return due</li>
        </ul>

        <h2>Bottom Line</h2>
        <p>The US tax system for self-employed individuals is detailed, but the deductions are generous. The key is documentation: every expense, every mile, every receipt. Track them throughout the year — not just in April — and you will arrive at tax time prepared, with the maximum deductions already calculated.</p>
        <p>Download TaxSort and let AI handle the tracking so you can focus on your business.</p>
      </div>
    ),
  },

  // ── Canada 2026 ─────────────────────────────────────────────
  "self-employed-taxes-canada-2026": {
    title: "Self-Employed Taxes in Canada: The Complete 2026 Guide",
    description: "Everything Canadian freelancers and independent contractors need to know: T2125, CRA rules, CPP contributions, GST/HST, and every deduction you can claim for the 2025 tax year.",
    category: "Canada",
    date: "May 29, 2026",
    readTime: "11 min read",
    content: (
      <div className="prose-content">
        <p className="lead">Working as a freelancer, independent contractor, or sole proprietor in Canada means you are responsible for your own tax filings. You report business income on <strong>Form T2125</strong>, pay CPP contributions on both the employer and employee side, and may need to collect and remit GST/HST. The complexity is manageable — and the deductions are significant. This guide covers the <strong>2025 tax year</strong> (filed by April 30, 2026, or June 15, 2026 for the self-employed).</p>

        <blockquote>
          <strong>Disclaimer:</strong> Canadian tax law changes every year. Verify all figures with the <a href="https://www.canada.ca/en/revenue-agency.html" target="_blank" rel="noopener noreferrer">CRA</a> or a qualified accountant before filing.
        </blockquote>

        <h2>Who Is Considered Self-Employed in Canada?</h2>
        <p>The CRA considers you self-employed if you work as a freelancer, independent contractor, sole proprietor, or in a business partnership. The distinction between employee and contractor has significant tax implications. The CRA uses a four-factor test (control, ownership of tools, chance of profit/risk of loss, integration) to assess the relationship. If there is a dispute, the CRA may reclassify a contractor as an employee — a serious issue for both parties.</p>

        <h2>T2125: Statement of Business or Professional Activities</h2>
        <p>Self-employed Canadians report business income and expenses on <strong>Form T2125</strong>, attached to their personal T1 return. T2125 calculates your net business income, which flows into Line 13500 (business income) or Line 13700 (professional income) of your T1.</p>
        <p>Net business income = Gross business income − Allowable business expenses</p>
        <p>This net figure is used to calculate income tax, CPP contributions, and any applicable provincial taxes.</p>

        <h2>CPP Contributions for the Self-Employed</h2>
        <p>Self-employed individuals pay <strong>both the employee and employer portions of CPP</strong>, effectively doubling the contribution. For 2025:</p>
        <ul>
          <li>CPP1 contribution rate: <strong>5.95%</strong> each side (11.9% total) on pensionable earnings</li>
          <li>CPP1 maximum pensionable earnings: <strong>$71,300</strong> (2025; check CRA for updated figures)</li>
          <li>Basic exemption: $3,500 (not subject to CPP)</li>
          <li>CPP2 (second additional) also applies above a second earnings ceiling — check CRA for current thresholds</li>
        </ul>
        <p>Half of your CPP contribution (the employer-equivalent portion) is deductible as a business expense on T2125. The other half generates a non-refundable tax credit on your T1.</p>

        <h2>GST/HST: When You Must Register</h2>
        <p>Once your worldwide taxable supplies exceed <strong>$30,000 in any single calendar quarter or in four consecutive calendar quarters</strong>, you must register for GST/HST. At that point you must charge GST/HST on your services and remit it to the CRA (less input tax credits for GST/HST you paid on business expenses).</p>
        <p>Even below the threshold, voluntary registration can be advantageous: it allows you to claim input tax credits on your business expenses. Many accountants recommend registering early if you have significant business expenses.</p>
        <p>Rates by province vary: Ontario charges 13% HST, British Columbia charges 5% GST + 7% PST separately, Alberta is 5% GST only. Always confirm the applicable rate for your province and your clients' provinces.</p>

        <h2>2025 Federal Income Tax Brackets</h2>
        <p>Federal tax applies to your net income after deductions (including the basic personal amount of approximately <strong>$16,129</strong> for 2025):</p>
        <ul>
          <li><strong>15%</strong> on the first $57,375</li>
          <li><strong>20.5%</strong> on $57,375 to $114,750</li>
          <li><strong>26%</strong> on $114,750 to $158,519</li>
          <li><strong>29%</strong> on $158,519 to $220,000</li>
          <li><strong>33%</strong> on income over $220,000</li>
        </ul>
        <p>Provincial income tax is added on top. Combined federal and provincial marginal rates range from approximately 20% at the low end to 53%+ at the top bracket in high-tax provinces.</p>

        <h2>Filing Deadlines</h2>
        <ul>
          <li><strong>April 30, 2026:</strong> Payment deadline — any balance owing must be paid by this date to avoid interest</li>
          <li><strong>June 15, 2026:</strong> T1 filing deadline for self-employed individuals and their spouses</li>
        </ul>
        <p>Note: interest on any balance owing still accrues from May 1, 2026 even if you file by June 15. Pay your estimated balance by April 30 even if you have not yet filed your return.</p>

        <h2>Top Tax Deductions for Self-Employed Canadians</h2>

        <h3>1. Business-Use Vehicle Expenses</h3>
        <p>You can deduct vehicle expenses based on the percentage of kilometres driven for business versus personal use. Eligible expenses include fuel, oil, insurance, maintenance, registration, and capital cost allowance (CCA) on the vehicle.</p>
        <p>The CRA also allows a simplified <strong>per-kilometre rate</strong> for employees receiving a taxable vehicle allowance, but self-employed individuals generally must use the actual-cost method. Keep a detailed mileage log — the CRA frequently audits vehicle claims. TaxSort's GPS tracker automatically logs every trip with the date, distance, and purpose, creating a CRA-compliant log throughout the year.</p>

        <h3>2. Home Office Expenses (T2200 / T777S)</h3>
        <p>If you work from home, you can deduct the business-use portion of your home expenses. The CRA's detailed method allows deduction of rent, utilities, internet, insurance, and maintenance based on the percentage of your home used exclusively for work (calculated by area). The simplified flat rate is available for employees but not sole proprietors — self-employed individuals must use the detailed method.</p>

        <h3>3. Business Travel and Meals</h3>
        <p>Travel costs for business purposes — flights, hotels, taxis, parking — are fully deductible. Meals and entertainment with clients are <strong>50% deductible</strong>. Document the business purpose, attendees, and amount for every meal claim. The CRA routinely disallows meals without documentation.</p>

        <h3>4. Professional Fees and Memberships</h3>
        <p>Accounting fees, legal fees, professional association dues, and licensing costs are fully deductible. Your accountant's fee for preparing your business return is deductible in the year following (when you pay it).</p>

        <h3>5. Software, Subscriptions, and Technology</h3>
        <p>Business software, cloud tools, subscriptions, and technology used for work are 100% deductible. Use TaxSort to scan and categorise every software receipt instantly — receipts are stored securely and exportable as a T2125-ready summary at year end.</p>

        <h3>6. Capital Cost Allowance (CCA)</h3>
        <p>Large purchases — computers, equipment, furniture — are typically deducted over time through CCA rather than in a single year. Different asset classes have different CCA rates. Class 10 (30%) covers vehicles; Class 8 (20%) covers general equipment; Class 12 (100%) covers tools under $500 and certain software. The <strong>Accelerated Investment Incentive</strong> and the <strong>Immediate Expensing Incentive</strong> (up to $1.5 million for eligible depreciable property for certain businesses) may allow faster write-offs — confirm eligibility with your accountant.</p>

        <h3>7. Marketing and Advertising</h3>
        <p>Website costs, online advertising, business cards, promotional materials, and social media advertising are fully deductible. Note: advertising placed in non-Canadian media may have restrictions — consult the CRA guidelines on advertising deductibility.</p>

        <h3>8. Phone and Internet</h3>
        <p>The business-use portion of your cell phone plan and home internet is deductible. If your phone is used 60% for business, deduct 60% of the annual cost.</p>

        <h2>How TaxSort Helps Canadian Freelancers</h2>
        <p>TaxSort is designed around CRA rules and T2125 categories. Every expense you scan is sorted into the correct T2125 line item — Office Expenses, Motor Vehicle, Travel, Telephone, and more. At tax time, export a complete T2125-ready breakdown your accountant can use directly. The mileage log meets CRA's recordkeeping requirements, and the cloud backup means your records are safe if you are ever audited.</p>

        <h2>Bottom Line</h2>
        <p>Self-employment in Canada offers genuine tax advantages through deductions, but those deductions require documentation. The CRA expects you to have records for every claim. Start tracking on day one of your fiscal year — not in March when you are rushing to file. TaxSort makes that habit effortless.</p>
      </div>
    ),
  },

  // ── UK 2025/26 ──────────────────────────────────────────────
  "self-employment-tax-uk-2025-26": {
    title: "Self-Employment Tax in the UK: HMRC Self Assessment & SA103F Guide 2025/26",
    description: "Complete guide for UK freelancers and sole traders: HMRC Self Assessment, SA103F, allowable expenses, National Insurance, and how to reduce your 2025/26 tax bill.",
    category: "UK",
    date: "May 29, 2026",
    readTime: "10 min read",
    content: (
      <div className="prose-content">
        <p className="lead">If you are self-employed in the UK — whether as a freelancer, sole trader, consultant, or contractor — you must complete a <strong>Self Assessment tax return</strong> with HMRC each year. You report your trading income on <strong>SA103</strong> (the self-employment supplementary pages) and claim allowable expenses against your profits. Done correctly, this significantly reduces your tax and National Insurance bill. This guide covers the <strong>2025/26 tax year</strong> (6 April 2025 to 5 April 2026).</p>

        <blockquote>
          <strong>Disclaimer:</strong> UK tax law changes each tax year. Always verify figures at <a href="https://www.gov.uk/government/organisations/hm-revenue-customs" target="_blank" rel="noopener noreferrer">gov.uk/hmrc</a> or with a qualified accountant before filing.
        </blockquote>

        <h2>Do You Need to Complete a Self Assessment?</h2>
        <p>You must register for Self Assessment and complete a tax return if you are self-employed and your trading income exceeds <strong>£1,000</strong> in a tax year (the trading allowance). If your trading income is £1,000 or less, you may be able to use the trading allowance and not register — but you cannot then claim expenses against that income. Most working freelancers will exceed £1,000 and must register.</p>
        <p>Register with HMRC by <strong>5 October</strong> following the end of the tax year in which you became self-employed. For 2025/26, register by 5 October 2026.</p>

        <h2>SA103S vs SA103F: Which Form Do You Use?</h2>
        <p>The self-employment pages come in two versions:</p>
        <ul>
          <li><strong>SA103S (Short):</strong> For annual turnover below the VAT registration threshold (£90,000 for 2024/25, check gov.uk for the current figure). Simpler, with fewer boxes.</li>
          <li><strong>SA103F (Full):</strong> Required if your annual turnover exceeds the VAT threshold, if you have more complex affairs, or if you want to claim certain detailed expenses. Most established freelancers will use SA103F.</li>
        </ul>
        <p>TaxSort exports expenses pre-categorised to SA103F line items — Office costs, Travel, Premises, Staff, Legal and financial, Marketing, and more — making it straightforward to complete either form.</p>

        <h2>2025/26 Income Tax Rates and Allowances (England, Wales, Northern Ireland)</h2>
        <ul>
          <li><strong>Personal allowance:</strong> £12,570 (frozen until April 2028)</li>
          <li><strong>Basic rate (20%):</strong> £12,571 to £50,270</li>
          <li><strong>Higher rate (40%):</strong> £50,271 to £125,140</li>
          <li><strong>Additional rate (45%):</strong> Over £125,140</li>
        </ul>
        <p>The personal allowance tapers away by £1 for every £2 earned over £100,000, reaching zero at £125,140.</p>
        <p>Scottish income tax rates differ and are set by the Scottish Parliament — Scottish taxpayers should check the current Scottish rates at gov.scot.</p>

        <h2>National Insurance for the Self-Employed</h2>
        <p>From <strong>6 April 2024</strong>, Class 2 National Insurance was abolished. Self-employed individuals now only pay:</p>
        <ul>
          <li><strong>Class 4 NIC:</strong> 6% on profits between £12,570 and £50,270; 2% on profits above £50,270 (2024/25 rates — confirm 2025/26 rates at gov.uk)</li>
        </ul>
        <p>Class 4 NIC is calculated automatically on your Self Assessment return based on your taxable profits. Note that abolishing Class 2 NIC means you may need to make voluntary Class 3 NIC payments to protect your State Pension entitlement if your profits are below the Small Profits Threshold (£6,845 for 2024/25) — HMRC will notify you if this applies.</p>

        <h2>Payments on Account</h2>
        <p>If your Self Assessment tax bill exceeds £1,000 and less than 80% of your tax is collected at source (e.g., via PAYE on other income), HMRC requires <strong>payments on account</strong> — advance payments towards your next year's tax bill.</p>
        <ul>
          <li>Each payment on account = 50% of the previous year's Self Assessment bill</li>
          <li><strong>First payment on account:</strong> 31 January (same deadline as the balancing payment)</li>
          <li><strong>Second payment on account:</strong> 31 July</li>
        </ul>
        <p>For the 2025/26 return: balancing payment + first payment on account due <strong>31 January 2027</strong>; second payment on account due <strong>31 July 2027</strong>.</p>

        <h2>Allowable Expenses for UK Sole Traders</h2>

        <h3>1. Business Travel and Mileage</h3>
        <p>HMRC's approved mileage rates for using your own vehicle:</p>
        <ul>
          <li><strong>Cars and vans:</strong> 45p per mile for the first 10,000 business miles in the tax year; 25p per mile above 10,000 miles</li>
          <li><strong>Motorcycles:</strong> 24p per mile</li>
          <li><strong>Bicycles:</strong> 20p per mile</li>
        </ul>
        <p>Alternatively, claim actual vehicle running costs (fuel, insurance, servicing, road tax) based on the business-use percentage. The mileage method is simpler for most freelancers. TaxSort's GPS tracker logs every journey automatically, so you have a complete, HMRC-compliant mileage record at year end without manual spreadsheets.</p>

        <h3>2. Office Costs</h3>
        <p>Stationery, printer ink, postage, and small equipment used exclusively for business are fully deductible. If you work from a dedicated office outside your home, the full rent and running costs are deductible.</p>

        <h3>3. Use of Home as Office</h3>
        <p>If you work from home, HMRC allows two approaches:</p>
        <ul>
          <li><strong>Flat rate:</strong> £10/month (25–50 hours), £18/month (51–100 hours), £26/month (101+ hours). Simple but modest.</li>
          <li><strong>Actual costs method:</strong> Calculate the proportion of your home costs (mortgage interest, rent, utilities, council tax, insurance) attributable to business use based on the number of rooms and hours used. Yields a larger deduction but requires more record-keeping. Be cautious: claiming a room exclusively for business could trigger a Capital Gains Tax charge on that portion when you sell your home.</li>
        </ul>

        <h3>4. Phone and Internet</h3>
        <p>The business-use proportion of your phone and broadband is deductible. If you have a dedicated business line, 100% is deductible. For mixed-use phones, estimate your business usage (e.g., 70%) and deduct that percentage of the annual cost.</p>

        <h3>5. Software and Subscriptions</h3>
        <p>Business software, cloud tools, professional membership fees, and industry subscriptions are allowable expenses. Scan and store every receipt with TaxSort — expenses are automatically categorised under the correct SA103F line item.</p>

        <h3>6. Professional Fees</h3>
        <p>Accountancy fees, legal fees related to your business, and professional indemnity insurance premiums are fully deductible. Note: legal fees for buying or selling a business asset are capital in nature and not deductible as a revenue expense.</p>

        <h3>7. Training and Development</h3>
        <p>Costs of training that <strong>updates or improves skills used in your existing trade</strong> are allowable. A web designer paying for an advanced CSS course qualifies. Training to start a new business or career does not.</p>

        <h3>8. Advertising and Marketing</h3>
        <p>Website costs, online advertising, business cards, and promotional materials are allowable expenses. Client entertainment (meals, events) is generally <strong>not</strong> allowable under UK rules — HMRC does not permit deduction of business entertainment costs.</p>

        <h3>9. Capital Allowances</h3>
        <p>Equipment, computers, and tools above the annual investment threshold are claimed via capital allowances rather than as direct expenses. The <strong>Annual Investment Allowance (AIA)</strong> allows 100% of eligible capital expenditure up to <strong>£1 million</strong> per year to be deducted in the year of purchase. First-year allowances may also apply to certain qualifying items.</p>

        <h2>VAT Registration</h2>
        <p>You must register for VAT once your VAT-taxable turnover exceeds <strong>£90,000</strong> in any rolling 12-month period (2024/25 threshold — confirm the current threshold at gov.uk). Once registered, you charge VAT on your services and can reclaim VAT on business purchases. The <strong>Flat Rate Scheme</strong> simplifies VAT accounting for many freelancers with low VAT-able purchases — worth exploring with your accountant.</p>

        <h2>Self Assessment Filing Deadlines</h2>
        <ul>
          <li><strong>5 October 2026:</strong> Register for Self Assessment (if new to self-employment in 2025/26)</li>
          <li><strong>31 October 2026:</strong> Paper return deadline for 2025/26</li>
          <li><strong>31 January 2027:</strong> Online return deadline + balancing payment + first payment on account due</li>
          <li><strong>31 July 2027:</strong> Second payment on account due</li>
        </ul>

        <h2>How TaxSort Supports UK Freelancers</h2>
        <p>TaxSort is fully configured for HMRC rules and SA103F categories. Scan receipts with the AI camera and they are instantly sorted under the correct HMRC expense category. The mileage tracker uses HMRC approved rates automatically (45p/25p per mile). At tax time, export a complete SA103F-ready breakdown your accountant can use, or use it to complete your own return via HMRC's online Self Assessment service.</p>

        <h2>Bottom Line</h2>
        <p>Self Assessment does not have to be stressful. The key is keeping accurate records throughout the year — not scrambling in January. With TaxSort, every receipt and every business mile is captured automatically, so your tax return is built in real time, not under pressure.</p>
      </div>
    ),
  },

  // ── Australia 2025-26 ────────────────────────────────────────
  "freelancer-tax-australia-2025-26": {
    title: "Freelancer Tax in Australia: ATO myTax & Sole Trader Guide 2025-26",
    description: "Complete guide for Australian freelancers and sole traders: ATO tax obligations, myTax filing, GST registration, BAS, allowable deductions, and how to reduce your 2025-26 tax bill.",
    category: "Australia",
    date: "May 29, 2026",
    readTime: "10 min read",
    content: (
      <div className="prose-content">
        <p className="lead">Working as a freelancer, sole trader, or independent contractor in Australia means you are running a business — which comes with real tax obligations and real tax advantages. You must lodge an annual <strong>income tax return</strong> with the ATO, may need to register for and remit <strong>GST</strong>, and are responsible for your own <strong>superannuation</strong>. This guide covers everything for the <strong>2025-26 financial year</strong> (1 July 2025 to 30 June 2026).</p>

        <blockquote>
          <strong>Disclaimer:</strong> Australian tax law and ATO rates are updated annually. Always verify current figures at <a href="https://www.ato.gov.au" target="_blank" rel="noopener noreferrer">ato.gov.au</a> or with a registered tax agent before lodging your return.
        </blockquote>

        <h2>Are You a Sole Trader or Running a Business?</h2>
        <p>If you provide services as a freelancer or contractor and are not employed under a PAYG arrangement, you are most likely operating as a <strong>sole trader</strong> — the simplest business structure in Australia. Your business income is reported on your personal income tax return (not a separate company return), and you are personally liable for all business debts.</p>
        <p>The ATO distinguishes between a <strong>hobby</strong> and a <strong>business</strong> based on factors including profit intention, commercial manner of operation, and regularity of activity. If you are genuinely running a business, you must register for an <strong>Australian Business Number (ABN)</strong> and lodge tax returns accordingly.</p>

        <h2>Getting an ABN</h2>
        <p>An ABN is essential for Australian freelancers. Without one, clients who pay you more than $75 are required to withhold 47% of your payment and remit it to the ATO. Register for free at abr.business.gov.au. You can register as a sole trader or under a business name.</p>

        <h2>2024-25 Individual Income Tax Rates (Apply to Business Income)</h2>
        <p>As a sole trader, your business profit is taxed at individual income tax rates (plus the 2% Medicare Levy). The following rates applied from 1 July 2024 following the Stage 3 tax cuts:</p>
        <ul>
          <li><strong>$0 – $18,200:</strong> Nil (tax-free threshold)</li>
          <li><strong>$18,201 – $45,000:</strong> 19 cents per dollar over $18,200</li>
          <li><strong>$45,001 – $120,000:</strong> $5,092 + 32.5 cents per dollar over $45,000</li>
          <li><strong>$120,001 – $180,000:</strong> $29,467 + 37 cents per dollar over $120,000</li>
          <li><strong>$180,001+:</strong> $51,667 + 45 cents per dollar over $180,000</li>
        </ul>
        <p>Plus <strong>Medicare Levy: 2%</strong> on your taxable income (low-income reductions apply below certain thresholds). Verify 2025-26 rates at ato.gov.au as they may be updated.</p>

        <h2>PAYG Instalments</h2>
        <p>Once your tax liability exceeds a threshold (typically $1,000 after offsets), the ATO will enter you into the <strong>PAYG instalments</strong> system. You pay tax in quarterly instalments throughout the year rather than one lump sum at lodgement. The ATO calculates your instalment amount based on the previous year's income, but you can vary it if your current year income is significantly different.</p>
        <p>PAYG instalment quarters for 2025-26:</p>
        <ul>
          <li>Q1 (Jul–Sep 2025): due 28 October 2025</li>
          <li>Q2 (Oct–Dec 2025): due 28 February 2026</li>
          <li>Q3 (Jan–Mar 2026): due 28 April 2026</li>
          <li>Q4 (Apr–Jun 2026): due 28 July 2026</li>
        </ul>

        <h2>GST Registration and BAS</h2>
        <p>You must register for <strong>GST</strong> once your GST turnover reaches or is expected to reach <strong>$75,000</strong> in any 12-month period (or $150,000 for non-profits). Once registered, you add 10% GST to your invoices and lodge a <strong>Business Activity Statement (BAS)</strong> — usually quarterly — reporting the GST you collected and the GST credits you are entitled to claim on business purchases.</p>
        <p>You may voluntarily register below $75,000 to claim GST credits on your business expenses — useful if you have significant input costs. Register at ato.gov.au or through a registered BAS agent.</p>

        <h2>Tax Lodgement Deadlines</h2>
        <ul>
          <li><strong>31 October 2026:</strong> Individual tax return lodgement deadline for 2025-26 (if lodging yourself)</li>
          <li><strong>Later (varies):</strong> If you use a registered tax agent, extended deadlines apply — often into March or May 2027 depending on your agent's lodgement program</li>
          <li><strong>21 days after quarter end:</strong> BAS lodgement and payment deadlines (generally)</li>
        </ul>

        <h2>Key Tax Deductions for Australian Sole Traders</h2>

        <h3>1. Motor Vehicle Expenses</h3>
        <p>If you use your car for business (travel to clients, supplier visits, business errands — not home-to-office commuting), you can claim vehicle expenses using one of two methods:</p>
        <ul>
          <li><strong>Cents per kilometre:</strong> A flat rate per business kilometre (88 cents/km for 2023-24; check ato.gov.au for the 2025-26 rate), up to 5,000 km per year. Simple and requires minimal records.</li>
          <li><strong>Logbook method:</strong> Keep a 12-week logbook to establish your business-use percentage, then apply that percentage to actual vehicle running costs (fuel, insurance, registration, maintenance, depreciation). No kilometre limit, and usually yields a larger deduction for high-mileage drivers.</li>
        </ul>
        <p>TaxSort's GPS mileage tracker automatically records every trip with date, distance, and start/end locations, making logbook compliance effortless throughout the year.</p>

        <h3>2. Home Office Expenses</h3>
        <p>The ATO offers two methods for home office claims:</p>
        <ul>
          <li><strong>Fixed rate method:</strong> 70 cents per hour for each hour worked from home (as of 2023-24; verify the current rate at ato.gov.au). Covers electricity, internet, phone, stationery, and computer consumables. You must keep a record of your work hours.</li>
          <li><strong>Actual costs method:</strong> Calculate the actual business-use proportion of home expenses (electricity, rent/mortgage interest, internet) based on dedicated workspace floor area. More complex but can yield a larger deduction for those with a dedicated home office.</li>
        </ul>

        <h3>3. Phone and Internet</h3>
        <p>The work-related proportion of your phone and internet expenses is deductible. If you use your phone 60% for work, deduct 60% of the annual cost. Keep records showing how you calculated the work-use percentage.</p>

        <h3>4. Tools, Equipment, and Technology</h3>
        <p>Computers, software, tools, and equipment used for business are deductible. Assets costing less than the <strong>instant asset write-off threshold</strong> can be deducted in full in the year of purchase — check ato.gov.au for the current threshold, as it has changed significantly in recent years. Assets above the threshold are depreciated over their effective life using the diminishing value or prime cost method.</p>

        <h3>5. Professional Development and Education</h3>
        <p>Courses, workshops, books, and conferences that maintain or improve skills used in your current work are deductible. Training for a new career or profession is not deductible under self-education rules.</p>

        <h3>6. Business Insurance</h3>
        <p>Professional indemnity insurance, public liability insurance, and business property insurance premiums are fully deductible as business expenses.</p>

        <h3>7. Accounting and Tax Agent Fees</h3>
        <p>Fees paid to your accountant or registered tax agent for preparing your tax return and BAS are deductible. This includes TaxSort's subscription — it is a deductible business expense.</p>

        <h3>8. Marketing and Advertising</h3>
        <p>Website costs, Google Ads, social media advertising, business cards, and branding expenses are all deductible. Keep receipts using TaxSort — photograph each receipt and it is automatically filed under Advertising & Marketing.</p>

        <h3>9. Superannuation Contributions</h3>
        <p>As a sole trader, you are not legally required to pay yourself superannuation, but <strong>voluntary super contributions</strong> (concessional contributions) are deductible. For 2025-26, the concessional contributions cap is <strong>$30,000</strong> per year (check ato.gov.au for the current cap). Contributions within the cap are taxed at 15% inside the fund — much lower than most individuals' marginal tax rate — making this one of the most tax-effective strategies available to self-employed Australians.</p>
        <p>Lodge a <strong>Notice of Intent to Claim a Deduction</strong> with your super fund before lodging your tax return to claim the deduction.</p>

        <h3>10. Meals and Travel</h3>
        <p>Meals consumed while travelling away from home overnight for business purposes are deductible. Day-to-day meal costs are generally not deductible. Accommodation, flights, and transport costs for business travel are fully deductible.</p>

        <h2>Sole Trader vs Company: A Quick Note</h2>
        <p>At higher income levels (above roughly $120,000–$150,000 of business profit), incorporating as a Pty Ltd company may reduce your tax rate — the company tax rate is 25% for base rate entities (turnover under $50 million). However, company structure adds compliance cost and complexity. Speak to a registered tax agent or accountant about the right structure for your situation.</p>

        <h2>How TaxSort Supports Australian Freelancers</h2>
        <p>TaxSort is configured for ATO rules and myTax categories. The AI receipt scanner captures and categorises every business expense under the correct ATO expense type. The GPS mileage tracker supports both the cents per km and logbook methods. At tax time, export your full year as a structured summary — sorted by ATO category, with deductible amounts calculated — ready for myTax or your tax agent. Your subscription to TaxSort is itself a deductible business expense.</p>

        <h2>Bottom Line</h2>
        <p>The Australian tax system rewards self-employed individuals who keep good records. The ATO expects documentation for every deduction claimed. With TaxSort running in the background throughout the financial year, you arrive at 30 June with organised, audit-ready records — and every deduction you are entitled to already captured.</p>
        <p>Download TaxSort free and start tracking today.</p>
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
    alternates: { canonical: `https://www.taxsort.app/blog/${slug}` },
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
