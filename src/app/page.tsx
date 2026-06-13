"use client";
import Hero from "../components/Hero";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const serviceAreas = [
  "Detroit",
  "Grosse Pointe",
  "Royal Oak",
  "Dearborn",
  "Southfield",
  "Warren",
  "Livonia",
  "Troy",
];

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Services />
      <HowItWorks />
      <Reviews />

      {/* Service Area Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-extrabold uppercase tracking-widest">
              Where We Work
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mt-2 mb-4">
              Serving Detroit & the Metro Area
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-6 rounded-full" />
            <p className="text-secondary/80 text-lg leading-relaxed max-w-2xl mx-auto">
              From downtown Detroit to the surrounding suburbs, our team brings
              premium cleaning and junk removal services right to your door.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="flex items-center space-x-2 bg-background px-4 py-3 rounded-xl border border-gray-100 hover:border-accent/30 hover:shadow-sm transition-all"
              >
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                <span className="text-primary font-medium text-sm">
                  {area}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 text-accent font-extrabold hover:text-accent/80 transition-colors group"
            >
              <span>Not listed? Contact us to check coverage</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}