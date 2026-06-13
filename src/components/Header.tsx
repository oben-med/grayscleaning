"use client";
import { Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/95 shadow-lg backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
      <nav className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="bg-accent p-2 rounded-lg text-primary shadow-inner">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-white leading-none">GRAYS</span>
            <span className="text-[10px] font-bold text-accent tracking-widest uppercase mt-0.5">Cleaning & Removal</span>
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <Link href="#services" className="text-white/95 hover:text-accent font-semibold transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link href="#how-it-works" className="text-white/95 hover:text-accent font-semibold transition-colors">
              How It Works
            </Link>
          </li>
          <li>
            <Link href="#reviews" className="text-white/95 hover:text-accent font-semibold transition-colors">
              Reviews
            </Link>
          </li>
          <li>
            <Link href="#contact" className="bg-accent hover:bg-accent/90 text-white font-bold py-2.5 px-5 rounded-lg transition-all transform hover:scale-[1.03] shadow-md">
              Get Free Estimate
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburguer */}
        <button className="md:hidden text-white focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-lg border-t border-white/10 px-4 py-6 space-y-4 shadow-xl">
          <Link href="#services" onClick={() => setIsMenuOpen(false)} className="block text-white/90 hover:text-accent font-medium py-2">
            Services
          </Link>
          <Link href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="block text-white/90 hover:text-accent font-medium py-2">
            How It Works
          </Link>
          <Link href="#reviews" onClick={() => setIsMenuOpen(false)} className="block text-white/90 hover:text-accent font-medium py-2">
            Reviews
          </Link>
          <Link href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-center bg-accent text-white font-bold py-3 px-5 rounded-lg">
            Get Free Estimate
          </Link>
        </div>
      )}
    </header>
  );
}