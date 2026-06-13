"use client";
import { Trash2, Brush, House } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary"> Expert Cleaning and Junk Removal Solutions </h2>
          <p className="text-secondary max-w-2xl mx-auto"> Discover a cleaner, healthier, and more sustainable way of living with our comprehensive range of services, tailored to meet your unique needs and exceed your expectations. </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md transition-all duration-300 hover:scale-105 rounded-xl border border-gray-100 overflow-hidden">
            <div className="p-6">
              <House className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-primary"> Premium Residential Cleaning Services </h3>
              <p className="text-secondary text-sm leading-relaxed mb-4"> Our dedicated team of experts provides meticulous and efficient cleaning services for your home, ensuring a sparkling clean and hygienic environment that you and your loved ones deserve. </p>
              <Link className="inline-block mt-4 bg-accent hover:bg-accent/90 text-primary font-semibold py-2 px-4 rounded-lg transition-colors" href="#contact"> Get a Quote Today </Link>
            </div>
          </div>
          <div className="bg-white shadow-md transition-all duration-300 hover:scale-105 rounded-xl border border-gray-100 overflow-hidden">
            <div className="p-6">
              <Brush className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-primary"> Customized Commercial Cleaning Solutions </h3>
              <p className="text-secondary text-sm leading-relaxed mb-4"> We offer tailored cleaning services for your business or office, designed to enhance productivity, impress clients, and create a positive work environment that reflects your brand's values and commitment to excellence. </p>
              <Link className="inline-block mt-4 bg-accent hover:bg-accent/90 text-primary font-semibold py-2 px-4 rounded-lg transition-colors" href="#contact"> Schedule a Consultation </Link>
            </div>
          </div>
          <div className="bg-white shadow-md transition-all duration-300 hover:scale-105 rounded-xl border border-gray-100 overflow-hidden">
            <div className="p-6">
              <Trash2 className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-primary"> Eco-Friendly Junk Removal Services </h3>
              <p className="text-secondary text-sm leading-relaxed mb-4"> Our team provides efficient, reliable, and environmentally responsible junk removal services, ensuring a seamless and stress-free experience that not only clears your space but also contributes to a more sustainable future. </p>
              <Link className="inline-block mt-4 bg-accent hover:bg-accent/90 text-primary font-semibold py-2 px-4 rounded-lg transition-colors" href="#contact"> Book Your Appointment </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}