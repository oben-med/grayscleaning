"use client";
import { Phone, Mail, MapPin, Sparkles, Facebook, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Brand info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-accent p-2 rounded-lg text-primary shadow-inner">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-white leading-none">GRAYS</span>
                <span className="text-[9px] font-bold text-accent tracking-widest uppercase mt-0.5">Cleaning & Removal</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed pt-2">
              Detroit's trusted family-owned cleaning and hauling service. Committed to immaculate quality, absolute safety, and eco-friendly disposal methods.
            </p>
            <div className="text-xs text-white/50 pt-2">
              Licensed • Bonded • Fully Insured
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-accent mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="#services" className="hover:text-accent transition-colors">Residential Cleaning</Link></li>
              <li><Link href="#services" className="hover:text-accent transition-colors">Commercial Deep Clean</Link></li>
              <li><Link href="#services" className="hover:text-accent transition-colors">Junk Removal & Hauling</Link></li>
              <li><Link href="#services" className="hover:text-accent transition-colors">Appliance Disposal</Link></li>
              <li><Link href="#services" className="hover:text-accent transition-colors">Post-Construction Cleanup</Link></li>
            </ul>
          </div>

          {/* Col 3: Contact details */}
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-accent mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="font-bold text-white">(313) 555-0199</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>info@grayscleaning.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>Detroit, MI & surrounding areas</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Business hours */}
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-accent mb-6">Business Hours</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Mon - Fri:</span>
                <span className="font-semibold text-white">8:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Saturday:</span>
                <span className="font-semibold text-white">9:00 AM - 1:00 PM</span>
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
            &copy; {new Date().getFullYear()} Grays Cleaning & Junk Removal LLC. All rights reserved. Built for Detroit, MI.
          </p>
          <div className="flex space-x-6">
            <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-accent transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-accent transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-accent transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}