"use client";
import { House } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary text-secondary sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <Link href="/" className="flex items-center">
          <House size={24} className="text-secondary mr-2" />
          <span className="text-lg font-bold">Grays Cleaning & Junk Removal - Your Trusted Partner for a Cleaner Tomorrow</span>
        </Link>
        <button className="lg:hidden flex justify-center w-8 h-8 bg-primary hover:bg-secondary hover:text-primary transition-all duration-300 rounded-full" onClick={handleMenuToggle} >
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ul className={`lg:flex lg:items-center lg:justify-end lg:space-x-8 lg:space-y-0 flex flex-col items-start justify-start space-y-4 space-x-0 lg:space-x-8 transition-all duration-300 ${ isMenuOpen ? 'block' : 'hidden lg:block' }`} >
          <li>
            <Link href="/services" className="text-secondary hover:text-accent transition-all duration-300" >
              Expert Cleaning Services for a Healthier Home
            </Link>
          </li>
          <li>
            <Link href="/how-it-works" className="text-secondary hover:text-accent transition-all duration-300" >
              Discover How We Make Cleaning Easy and Efficient
            </Link>
          </li>
          <li>
            <Link href="/reviews" className="text-secondary hover:text-accent transition-all duration-300" >
              Real Stories from Satisfied Customers
            </Link>
          </li>
          <li>
            <Link href="/contact" className="bg-accent text-primary py-2 px-4 rounded-lg hover:scale-105 transition-all duration-300" >
              Get Your Personalized Quote Today
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}