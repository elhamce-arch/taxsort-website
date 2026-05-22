"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bg = dark
    ? scrolled
      ? "backdrop-blur-md border-b border-white/10"
      : "bg-transparent"
    : "border-b border-black/5";

  const textColor = dark ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900";
  const logoText = dark ? "text-white" : "text-gray-900";
  const mobileBg = dark ? "" : "";

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${bg}`}
      style={dark && scrolled ? { background: "rgba(15,46,24,0.95)" } : !dark ? { background: "#e8f0e5" } : undefined}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="TaxSort logo" width={36} height={36} className="rounded-lg" />
            <span className={`text-xl font-semibold ${logoText}`}>TaxSort</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/features" className={`text-sm font-medium transition-colors ${textColor}`}>Features</Link>
            <Link href="/#how-it-works" className={`text-sm font-medium transition-colors ${textColor}`}>How it works</Link>
            <Link href="/pricing" className={`text-sm font-medium transition-colors ${textColor}`}>Pricing</Link>
            <Link href="/testimonials" className={`text-sm font-medium transition-colors ${textColor}`}>Testimonials</Link>
            <Link href="/blog" className={`text-sm font-medium transition-colors ${textColor}`}>Blog</Link>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#download"
              className="px-5 py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: "#2a7a3b" }}
            >
              Download
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 ${dark ? "text-white" : "text-gray-900"}`}
            onClick={() => setOpen(!open)}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-4 pb-4 flex flex-col gap-3"
          style={dark ? { background: "#0f2e18" } : { background: "#e8f0e5" }}
        >
          <Link href="/features" className={`py-2 text-sm font-medium ${dark ? "text-gray-300" : "text-gray-700"}`}>Features</Link>
          <Link href="/how-it-works" className={`py-2 text-sm font-medium ${dark ? "text-gray-300" : "text-gray-700"}`}>How it works</Link>
          <Link href="/pricing" className={`py-2 text-sm font-medium ${dark ? "text-gray-300" : "text-gray-700"}`}>Pricing</Link>
          <Link href="/testimonials" className={`py-2 text-sm font-medium ${dark ? "text-gray-300" : "text-gray-700"}`}>Testimonials</Link>
          <Link href="/blog" className={`py-2 text-sm font-medium ${dark ? "text-gray-300" : "text-gray-700"}`}>Blog</Link>
          <Link
            href="#download"
            className="py-2 px-4 rounded-lg text-sm font-semibold text-white text-center"
            style={{ background: "#2a7a3b" }}
          >
            Download
          </Link>
        </div>
      )}
    </nav>
  );
}
