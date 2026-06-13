"use client";
import { Briefcase, Calendar, Truck } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-12">
        <h2 className="text-3xl font-bold text-primary mb-4">Experience the Grays Cleaning & Junk Removal Difference: A Seamless 3-Step Process</h2>
        <p className="text-lg text-secondary mb-8">Discover how our streamlined approach makes it effortless to transform your space with our top-notch cleaning and junk removal services, tailored to meet your unique needs and exceed your expectations</p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <div className="w-full md:w-1/3 xl:w-1/3 bg-secondary p-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105">
            <Briefcase size={40} className="text-primary mb-4" />
            <h3 className="text-xl font-bold text-primary mb-2">Step 1: Schedule Your Appointment with Ease</h3>
            <p className="text-lg text-secondary">Book your appointment online or over the phone, and our dedicated team will work with you to find a time that fits your busy schedule, ensuring a hassle-free experience from start to finish</p>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/3 bg-secondary p-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105">
            <Calendar size={40} className="text-primary mb-4" />
            <h3 className="text-xl font-bold text-primary mb-2">Step 2: Our Team Arrives On Time, Every Time</h3>
            <p className="text-lg text-secondary">Our reliable and experienced team will arrive promptly at your scheduled time, fully equipped and ready to tackle your cleaning or junk removal project with precision and care, guaranteeing a job well done</p>
          </div>
          <div className="w-full md:w-1/3 xl:w-1/3 bg-secondary p-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105">
            <Truck size={40} className="text-primary mb-4" />
            <h3 className="text-xl font-bold text-primary mb-2">Step 3: We Deliver Exceptional Results, Every Time</h3>
            <p className="text-lg text-secondary">Our skilled team will work efficiently to complete your project, leaving you with a clean, clutter-free, and revitalized space that exceeds your expectations, and reflects our unwavering commitment to quality and customer satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}