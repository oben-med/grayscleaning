"use client";
import { Calendar, ClipboardList, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent text-sm font-extrabold uppercase tracking-widest">Simple & Seamless</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mt-2 mb-4">
            Our Streamlined Process
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6 rounded-full" />
          <p className="text-secondary/80 text-lg leading-relaxed">
            Getting your space cleaned or cleared shouldn't be stressful. We make the entire process effortless for you in 3 simple steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gray-100 -z-10" />

          {/* Step 1 */}
          <div className="bg-[#F7F9F8] border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 text-8xl font-black text-gray-200/50 select-none transition-transform duration-300 group-hover:scale-110">
              01
            </div>
            <div className="bg-primary text-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-md">
              <ClipboardList className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3">1. Get a Quote</h3>
            <p className="text-secondary/80 text-sm leading-relaxed">
              Fill out our simple estimate form or give us a call. We'll assess your cleaning or junk removal needs and give you a clear, honest quote.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-[#F7F9F8] border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 text-8xl font-black text-gray-200/50 select-none transition-transform duration-300 group-hover:scale-110">
              02
            </div>
            <div className="bg-primary text-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-md">
              <Calendar className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3">2. Schedule Time</h3>
            <p className="text-secondary/80 text-sm leading-relaxed">
              Pick a date and time that fits your schedule. Our prompt, professional crew will arrive fully equipped and ready to work.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-[#F7F9F8] border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 text-8xl font-black text-gray-200/50 select-none transition-transform duration-300 group-hover:scale-110">
              03
            </div>
            <div className="bg-primary text-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-md">
              <CheckCircle className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3">3. Enjoy Clean Space</h3>
            <p className="text-secondary/80 text-sm leading-relaxed">
              Sit back and relax. We'll handle all the cleaning and heavy lifting, haul away the debris, and leave your property sparkling and organized.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}