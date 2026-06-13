"use client";
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}