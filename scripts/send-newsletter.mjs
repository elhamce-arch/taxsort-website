// Weekly newsletter: generates content with Gemini, sends via Resend Broadcasts
// Runs via GitHub Actions cron every Monday at 2pm UTC

const GEMINI_KEY = process.env.GEMINI_API_KEY;
const RESEND_KEY = process.env.RESEND_API_KEY;
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

// Rotate topics by week number so each send covers a different subject
const topics = [
  { subject: "5 mileage deductions most freelancers miss", angle: "US and Canada mileage deduction tips, IRS standard rate vs CRA actual expenses method" },
  { subject: "Is your home office actually deductible?", angle: "Home office rules for freelancers in both US (Form 8829) and Canada (T2125 Part 7)" },
  { subject: "Quarterly tax payments: avoid the penalty", angle: "How and when to pay quarterly estimated taxes, IRS and CRA deadlines" },
  { subject: "HST/GST: what Canadian freelancers need to know", angle: "GST/HST registration threshold, ITCs, and how TaxSort tracks it automatically" },
  { subject: "Never lose a receipt again", angle: "Receipt scanning habits, what a valid receipt needs, digital records accepted by IRS and CRA" },
  { subject: "The self-employment tax nobody warns you about", angle: "15.3% SE tax in the US, CPP contributions in Canada, how to plan for it" },
  { subject: "Top deductions for Uber and DoorDash drivers", angle: "Rideshare and delivery driver deductions: mileage, phone, cleaning, platform fees" },
  { subject: "RRSP vs SEP-IRA: saving on taxes while saving for retirement", angle: "Retirement contribution deductions for self-employed in Canada (RRSP) and US (SEP-IRA)" },
  { subject: "7 tax mistakes freelancers make every year", angle: "Common filing mistakes: no instalments, no mileage log, mixing finances, late filing" },
  { subject: "What realtors can deduct (most miss half the list)", angle: "Realtor-specific deductions: MLS fees, marketing, staging, E&O insurance, mileage" },
  { subject: "How to deduct your phone and internet bill", angle: "Business-use percentage rules, how to calculate and document phone and internet deductions" },
  { subject: "Tax time checklist for freelancers", angle: "End-of-year checklist: receipts organized, mileage log complete, estimated payments made" },
];

function getWeekNumber() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  return Math.ceil(((now - start) / 86400000 + start.getDay() + 1) / 7);
}

async function generateEmailContent(topic) {
  const prompt = `You are writing a weekly tax tips email newsletter for TaxSort, a tax app for freelancers and self-employed people in the US and Canada.

Write a helpful, friendly newsletter email about: "${topic.subject}"
Focus: ${topic.angle}

Requirements:
- Subject line: "${topic.subject}"
- Opening: warm, direct, one sentence
- Body: 3-4 short practical paragraphs with real actionable advice
- Mention TaxSort naturally once or twice (it scans receipts with AI, tracks GPS mileage, and organizes taxes automatically)
- Closing: one encouraging sentence
- Sign off: "The TaxSort Team"
- Tone: helpful friend, not corporate. Short sentences. No em dashes.
- Length: ~250-300 words total

Return ONLY a JSON object with this exact structure:
{
  "subject": "the subject line",
  "previewText": "one sentence preview shown in inbox (max 90 chars)",
  "html": "the full email HTML using simple inline styles, clean layout, green (#2a7a3b) for headings and links"
}`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.7, maxOutputTokens: 2048 },
      }),
    }
  );

  const data = await response.json();
  console.log("Gemini status:", response.status);
  console.log("Gemini response:", JSON.stringify(data).slice(0, 500));

  if (!response.ok) throw new Error("Gemini API error: " + JSON.stringify(data));

  const text = data.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
  if (!text) throw new Error("Empty Gemini response. Full data: " + JSON.stringify(data));

  // Extract JSON from response (Gemini sometimes wraps in markdown code block)
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error("No JSON in Gemini response: " + text);
  return JSON.parse(jsonMatch[0]);
}

async function createAndSendBroadcast(subject, previewText, html) {
  // Create broadcast
  const createRes = await fetch("https://api.resend.com/broadcasts", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${RESEND_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      audience_id: AUDIENCE_ID,
      from: "TaxSort <newsletter@taxsort.app>",
      subject,
      preview_text: previewText,
      html,
    }),
  });

  const broadcast = await createRes.json();
  if (!createRes.ok) throw new Error("Failed to create broadcast: " + JSON.stringify(broadcast));

  console.log("Broadcast created:", broadcast.id);

  // Send broadcast
  const sendRes = await fetch(`https://api.resend.com/broadcasts/${broadcast.id}/send`, {
    method: "POST",
    headers: { "Authorization": `Bearer ${RESEND_KEY}` },
  });

  const sendData = await sendRes.json();
  if (!sendRes.ok) throw new Error("Failed to send broadcast: " + JSON.stringify(sendData));

  console.log("Broadcast sent successfully:", broadcast.id);
}

async function main() {
  if (!GEMINI_KEY || !RESEND_KEY || !AUDIENCE_ID) {
    throw new Error("Missing required environment variables: GEMINI_API_KEY, RESEND_API_KEY, RESEND_AUDIENCE_ID");
  }

  const week = getWeekNumber();
  const topic = topics[week % topics.length];

  console.log(`Week ${week}: Generating email about "${topic.subject}"`);

  const { subject, previewText, html } = await generateEmailContent(topic);
  console.log("Email generated. Subject:", subject);

  await createAndSendBroadcast(subject, previewText, html);
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
