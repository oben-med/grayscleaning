"use client";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/images/logo.png"
                alt="Grays Cleaning & Junk Removal"
                className="h-8 w-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-white leading-none">
                  GRAYS
                </span>
                <span className="text-[9px] font-bold text-accent tracking-widest uppercase mt-0.5">
                  Cleaning & Removal
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed pt-2">
              Detroit&apos;s trusted family-owned cleaning and hauling service.
              Committed to immaculate quality, absolute safety, and eco-friendly
              disposal methods.
            </p>
            <div className="text-xs text-white/50 pt-2">
              Licensed • Bonded • Fully Insured
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-accent mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link
                  href="/"
                  className="hover:text-accent transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-accent transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-accent transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact / Free Estimate
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact details */}
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-accent mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <a
                  href="tel:3135550199"
                  className="font-bold text-white hover:text-accent transition-colors"
                >
                  (313) 555-0199
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <a
                  href="mailto:info@grayscleaning.com"
                  className="hover:text-accent transition-colors"
                >
                  info@grayscleaning.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>Detroit, MI & surrounding areas</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Business hours */}
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-accent mb-6">
              Business Hours
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Mon – Fri:</span>
                <span className="font-semibold text-white">
                  8:00 AM – 5:00 PM
                </span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Saturday:</span>
                <span className="font-semibold text-white">
                  9:00 AM – 1:00 PM
                </span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-semibold text-white/60">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Grays Cleaning & Junk Removal LLC.
            All rights reserved. Detroit, MI.
          </p>
          <div className="flex space-x-5">
            <Link
              href="https://www.instagram.com/grayscleaning_junkremoval/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.facebook.com/GraysCleaningAndJunkRemoval/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-accent transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.yelp.com/biz/grays-cleaning-and-junk-removal-detroit-2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-accent transition-colors"
              aria-label="Yelp"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 0 1 1.596-.206l2.042 1.726c.68.575.48 1.656-.372 1.985zm-1.88 5.69l-2.042 1.726c-.68.575-1.676.08-1.596-.795l.41-5.19c.08-1.008 1.37-1.274 1.85-.382l2.042 3.84c.37.69-.015 1.42-.663 1.8zM12.757 3.983l.06 5.256c0 1.01-1.37 1.363-1.93.496L7.464 4.57c-.37-.573-.16-1.335.467-1.672l2.506-1.342c.72-.387 1.58.095 1.58.9l-.002.001.742.526zm-1.016 9.5L7.19 15.39c-.905.376-1.8-.464-1.354-1.272l2.276-4.128c.525-.953 1.94-.608 1.973.48l.168 2.282-.51.73zM7.6 16.18l-1.14 5.018c-.18.792-1.168 1.09-1.735.525l-2.04-2.04c-.568-.567-.267-1.555.525-1.735l4.39-.768z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}