"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
  ];

  const isActive = (href: string) => {
    if (href === "/#how-it-works") return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-md" : "shadow-sm"}`}
      style={
        dark
          ? scrolled
            ? { background: "rgba(15,46,24,0.97)", borderBottom: "1px solid rgba(255,255,255,0.08)" }
            : { background: "transparent" }
          : { background: "#ffffff", borderBottom: "1px solid #e5e7eb" }
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="TaxSort logo" width={40} height={40} className="rounded-xl" />
            <span className={`text-xl font-bold tracking-tight ${dark ? "text-white" : "text-gray-900"}`}>TaxSort</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  dark
                    ? isActive(href)
                      ? "text-white bg-white/10"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                    : isActive(href)
                      ? "text-white"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                }`}
                style={!dark && isActive(href) ? { background: "#16a34a" } : undefined}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="/dashboard"
              className="px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105"
              style={{ background: "#4ade80", color: "#0f2e18" }}
            >
              Launch App
            </a>
            <Link
              href="#download"
              className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:scale-105"
              style={{ background: "#16a34a" }}
            >
              Download
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded-lg ${dark ? "text-white hover:bg-white/10" : "text-gray-700 hover:bg-gray-100"}`}
            onClick={() => setOpen(!open)}
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
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
          className="md:hidden px-4 pb-5 pt-2 flex flex-col gap-1 border-t"
          style={dark ? { background: "#0f2e18", borderColor: "rgba(255,255,255,0.08)" } : { background: "#ffffff", borderColor: "#e5e7eb" }}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`px-3 py-2.5 rounded-lg text-sm font-medium ${
                dark ? "text-gray-300 hover:text-white hover:bg-white/10" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-2">
            <a
              href="/dashboard"
              className="py-2.5 px-4 rounded-lg text-sm font-semibold text-center"
              style={{ background: "#4ade80", color: "#0f2e18" }}
            >
              Launch App
            </a>
            <Link
              href="#download"
              className="py-2.5 px-4 rounded-lg text-sm font-semibold text-white text-center"
              style={{ background: "#16a34a" }}
            >
              Download
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
