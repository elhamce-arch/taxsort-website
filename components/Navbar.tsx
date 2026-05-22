"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ background: "#e8f0e5" }} className="sticky top-0 z-50 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" strokeWidth="0" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-gray-900">TaxSort</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/features" className="text-sm text-gray-700 hover:text-gray-900 font-medium">Features</Link>
            <Link href="/how-it-works" className="text-sm text-gray-700 hover:text-gray-900 font-medium">How it works</Link>
            <Link href="/pricing" className="text-sm text-gray-700 hover:text-gray-900 font-medium">Pricing</Link>
            <Link href="/testimonials" className="text-sm text-gray-700 hover:text-gray-900 font-medium">Testimonials</Link>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#download"
              className="px-5 py-2 rounded-lg text-sm font-semibold text-white"
              style={{ background: "#2a7a3b" }}
            >
              Download
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
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
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3" style={{ background: "#e8f0e5" }}>
          <Link href="/features" className="py-2 text-sm font-medium text-gray-700">Features</Link>
          <Link href="/how-it-works" className="py-2 text-sm font-medium text-gray-700">How it works</Link>
          <Link href="/pricing" className="py-2 text-sm font-medium text-gray-700">Pricing</Link>
          <Link href="/testimonials" className="py-2 text-sm font-medium text-gray-700">Testimonials</Link>
          <Link href="#download" className="py-2 px-4 rounded-lg text-sm font-semibold text-white text-center" style={{ background: "#2a7a3b" }}>
            Download
          </Link>
        </div>
      )}
    </nav>
  );
}
