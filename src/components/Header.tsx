"use client";
import { Phone } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar — Phone */}
      <div className="bg-primary text-white text-xs py-1.5 text-center z-[60] relative">
        <a
          href="tel:3135550199"
          className="inline-flex items-center space-x-2 hover:text-accent transition-colors"
        >
          <Phone className="w-3 h-3" />
          <span className="font-semibold">(313) 555-0199</span>
        </a>
        <span className="hidden sm:inline text-white/50 mx-3">|</span>
        <span className="hidden sm:inline text-white/70">
          Proudly serving Detroit & the Metro Area • Free estimates • Licensed &
          insured
        </span>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-primary/95 shadow-lg backdrop-blur-md py-3"
            : "bg-primary py-4"
        }`}
      >
        <nav className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/images/logo.png"
              alt="Grays Cleaning & Junk Removal"
              className="h-9 w-auto"
              onError={(e) => {
                // Fallback if logo not yet generated
                (e.target as HTMLImageElement).style.display = "none";
                (
                  e.target as HTMLImageElement
                ).nextElementSibling?.classList.remove("hidden");
              }}
            />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white leading-none">
                GRAYS
              </span>
              <span className="text-[10px] font-bold text-accent tracking-widest uppercase mt-0.5">
                Cleaning & Removal
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/95 hover:text-accent font-semibold transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="bg-accent hover:bg-accent/90 text-white font-bold py-2.5 px-5 rounded-lg transition-all transform hover:scale-[1.03] shadow-md"
              >
                Get Free Estimate
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Drawer */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary/95 backdrop-blur-lg border-t border-white/10 px-4 py-6 space-y-4 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-white/90 hover:text-accent font-medium py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block text-center bg-accent text-white font-bold py-3 px-5 rounded-lg"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:3135550199"
              className="flex items-center justify-center space-x-2 text-accent font-bold py-2"
            >
              <Phone className="w-4 h-4" />
              <span>(313) 555-0199</span>
            </a>
          </div>
        )}
      </header>
    </>
  );
}