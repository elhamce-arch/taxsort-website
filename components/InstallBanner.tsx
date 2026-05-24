"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants";

type Platform = "ios" | "android" | null;

function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return null;
  const ua = navigator.userAgent;
  if (/iPad|iPhone|iPod/.test(ua) && !(ua as string & { MSStream?: unknown }).MSStream) return "ios";
  if (/Android/.test(ua)) return "android";
  return null;
}

export default function InstallBanner() {
  const [visible, setVisible] = useState(false);
  const [platform, setPlatform] = useState<Platform>(null);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("taxsort_banner_dismissed");
    if (dismissed) return;
    const p = detectPlatform();
    if (!p) return; // desktop: don't show
    setPlatform(p);
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    setVisible(false);
    sessionStorage.setItem("taxsort_banner_dismissed", "1");
  }

  if (!visible || !platform) return null;

  const storeUrl = platform === "ios" ? APP_STORE_URL : PLAY_STORE_URL;
  const storeLabel = platform === "ios" ? "App Store" : "Google Play";

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pointer-events-none"
      style={{ animation: "slideUp 0.35s ease-out" }}
    >
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
      `}</style>
      <div
        className="max-w-md mx-auto flex items-center gap-3 px-4 py-3 rounded-2xl pointer-events-auto"
        style={{
          background: "#1a1a2e",
          boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
        }}
      >
        {/* App icon */}
        <div className="shrink-0">
          <Image
            src="/logo.png"
            alt="TaxSort"
            width={44}
            height={44}
            className="rounded-xl"
          />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-white text-sm font-semibold leading-tight">TaxSort</p>
          <p className="text-gray-400 text-xs leading-tight mt-0.5">
            {platform === "ios" ? "Free on the App Store" : "Free on Google Play"}
          </p>
        </div>

        {/* Install button */}
        <a
          href={storeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-4 py-2 rounded-xl text-sm font-bold text-white"
          style={{ background: "#2a7a3b" }}
          onClick={dismiss}
        >
          {storeLabel}
        </a>

        {/* Dismiss */}
        <button
          onClick={dismiss}
          className="shrink-0 text-gray-500 hover:text-gray-300 transition-colors p-1"
          aria-label="Dismiss"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
