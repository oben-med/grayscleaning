"use client";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-[#F7F7F7]">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:px-24 xl:px-32">
        <h1 className="text-5xl font-bold text-[#032B44] mb-4">Transform Your Space with Expert Cleaning & Junk Removal Solutions</h1>
        <p className="text-2xl text-[#032B44] mb-8">Experience the Grays Cleaning & Junk Removal difference - where precision, reliability, and exceptional customer service come together to elevate your property's potential.</p>
        <p className="text-lg text-[#032B44] mb-12">Our seasoned team of professionals is passionate about delivering unparalleled cleaning and junk removal services, ensuring your property is not only immaculate but also safe, healthy, and perfectly tailored to your unique needs.</p>
        <Link href="/contact" className="bg-[#FFA07A] hover:bg-[#FF8C00] text-white font-bold py-2 px-4 rounded transition-all duration-300 hover:scale-105"> Discover Your Dream Space - Get a Quote Today <ArrowRight size={20} className="inline-block ml-2" /> </Link>
        <p className="text-lg text-[#032B44] mt-8">For your complete peace of mind, we are fully Licensed, Bonded, and Insured - because your trust and satisfaction are our utmost priority.</p>
        <div className="flex flex-wrap justify-center mt-8">
          <div className="bg-[#FFFFFF] p-4 m-4 rounded shadow-md"><img src="/images/badge1.png" alt="Industry-Leading Badge 1" className="w-12 h-12" /></div>
          <div className="bg-[#FFFFFF] p-4 m-4 rounded shadow-md"><img src="/images/badge2.png" alt="Elite Badge 2" className="w-12 h-12" /></div>
          <div className="bg-[#FFFFFF] p-4 m-4 rounded shadow-md"><img src="/images/badge3.png" alt="Top-Rated Badge 3" className="w-12 h-12" /></div>
        </div>
      </div>
    </section>
  );
}