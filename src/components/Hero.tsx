"use client";
import { ArrowRight, CheckCircle2, ShieldCheck, Star } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat pt-24" style={{ backgroundImage: "url('/images/hero_background.png')" }}>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 py-16 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-accent/20 border border-accent/30 text-accent font-bold py-1.5 px-4 rounded-full mb-6 text-sm backdrop-blur-md">
          <Star className="w-4 h-4 fill-accent" />
          <span>Detroit's #1 Rated Cleaning & Junk Removal Swarm</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mb-6">
          Transform Your Space With <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">Grays Cleaning</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl text-white/90 max-w-2xl mb-10 font-medium leading-relaxed">
          Experience the power of professional residential & commercial cleaning and eco-friendly junk removal. Insured, bonded, and trusted across Detroit.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full max-w-md">
          <Link href="#contact" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white font-extrabold py-4 px-8 rounded-xl text-center shadow-lg transition-all transform hover:scale-[1.03] flex items-center justify-center space-x-2">
            <span>Get Your Free Quote</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="#services" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/25 text-white font-extrabold py-4 px-8 rounded-xl text-center backdrop-blur-md transition-all">
            Explore Services
          </Link>
        </div>

        {/* Trust Badges Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full bg-primary/80 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl">
          <div className="flex items-center space-x-3 justify-center sm:justify-start border-b sm:border-b-0 sm:border-r border-white/10 pb-4 sm:pb-0 pr-0 sm:pr-4">
            <CheckCircle2 className="w-8 h-8 text-accent shrink-0" />
            <div className="text-left">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider">Eco-Friendly</h4>
              <p className="text-white/70 text-xs mt-0.5">Sustainably sorted & recycled junk</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 justify-center sm:justify-start border-b sm:border-b-0 sm:border-r border-white/10 pb-4 sm:pb-0 pr-0 sm:pr-4">
            <ShieldCheck className="w-8 h-8 text-accent shrink-0" />
            <div className="text-left">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider">Licensed & Insured</h4>
              <p className="text-white/70 text-xs mt-0.5">Full liability coverage & peace of mind</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 justify-center sm:justify-start">
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex space-x-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <div className="text-left">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider">5-Star Customer Rating</h4>
                <p className="text-white/70 text-xs mt-0.5">Voted best local service provider</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}