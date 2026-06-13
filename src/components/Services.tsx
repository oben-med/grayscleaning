"use client";
import { Trash2, Brush, House, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#F7F9F8]">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent text-sm font-extrabold uppercase tracking-widest">Our Premium Offerings</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mt-2 mb-4">
            Expert Cleaning & Removal Solutions
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6 rounded-full" />
          <p className="text-secondary/80 text-lg leading-relaxed">
            From deep cleaning your residence to hauling heavy debris, we provide professional, eco-conscious, and fully insured services tailored to your space.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="group bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col">
            <div className="relative h-56 overflow-hidden">
              <img src="/images/residential_cleaning.png" alt="Residential Cleaning" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute top-4 left-4 bg-primary text-white p-3 rounded-xl shadow-lg">
                <House className="w-6 h-6" />
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-primary mb-3">Residential Cleaning</h3>
              <p className="text-secondary/80 text-sm leading-relaxed mb-6 flex-grow">
                Deep cleans, move-in/out, and routine maintenance for homes. Our crew uses top-grade equipment to sanitize and revitalize your space.
              </p>
              <Link href="#contact" className="inline-flex items-center space-x-2 text-accent font-extrabold hover:text-accent-dark transition-colors group/link">
                <span>Request Residential Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col">
            <div className="relative h-56 overflow-hidden">
              <img src="/images/commercial_cleaning.png" alt="Commercial Cleaning" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute top-4 left-4 bg-primary text-white p-3 rounded-xl shadow-lg">
                <Brush className="w-6 h-6" />
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-primary mb-3">Commercial Services</h3>
              <p className="text-secondary/80 text-sm leading-relaxed mb-6 flex-grow">
                Office buildings, retail stores, and commercial workspaces. Meticulous sanitation services to ensure a healthy and productive work environment.
              </p>
              <Link href="#contact" className="inline-flex items-center space-x-2 text-accent font-extrabold hover:text-accent-dark transition-colors group/link">
                <span>Book Office Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col">
            <div className="relative h-56 overflow-hidden">
              <img src="/images/junk_removal.png" alt="Junk Removal" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute top-4 left-4 bg-primary text-white p-3 rounded-xl shadow-lg">
                <Trash2 className="w-6 h-6" />
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-primary mb-3">Junk Removal & Hauling</h3>
              <p className="text-secondary/80 text-sm leading-relaxed mb-6 flex-grow">
                Eco-friendly hauling of old furniture, appliances, and renovation debris. We prioritize donating and recycling items to minimize landfill waste.
              </p>
              <Link href="#contact" className="inline-flex items-center space-x-2 text-accent font-extrabold hover:text-accent-dark transition-colors group/link">
                <span>Schedule Hauling Service</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}