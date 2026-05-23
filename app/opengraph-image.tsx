import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "TaxSort – AI Tax App for Freelancers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const logoSrc = "https://taxsort.app/logo.png";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(160deg, #1a4d28 0%, #0f2e18 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(74,222,128,0.15) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            background: "rgba(74,222,128,0.15)",
            border: "1px solid rgba(74,222,128,0.4)",
            borderRadius: "100px",
            padding: "8px 24px",
            color: "#4ade80",
            fontSize: "18px",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "32px",
            display: "flex",
          }}
        >
          AI-Powered Tax Management
        </div>

        {/* Headline */}
        <div
          style={{
            color: "white",
            fontSize: "72px",
            fontWeight: 800,
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span>Snap, Sort, and Save on</span>
          <span style={{ color: "#4ade80" }}>Taxes.</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            color: "#9ca3af",
            fontSize: "28px",
            textAlign: "center",
            marginBottom: "48px",
            display: "flex",
          }}
        >
          Free receipt scanning · GPS mileage · Audit-ready exports
        </div>

        {/* Bottom branding */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "16px",
            padding: "14px 32px",
          }}
        >
          <img
            src={logoSrc}
            width={40}
            height={40}
            style={{ borderRadius: "8px" }}
          />
          <span style={{ color: "white", fontSize: "24px", fontWeight: 700, display: "flex" }}>
            TaxSort
          </span>
          <span style={{ color: "#6b7280", fontSize: "20px", display: "flex" }}>·</span>
          <span style={{ color: "#9ca3af", fontSize: "20px", display: "flex" }}>taxsort.app</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
