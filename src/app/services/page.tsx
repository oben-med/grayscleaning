"use client";
import {
  House,
  Building2,
  Trash2,
  Sparkles,
  PackageOpen,
  HardHat,
  ArrowRight,
  Phone,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: House,
    title: "Residential Cleaning",
    image: "/images/residential_cleaning.png",
    description:
      "From routine upkeep to top-to-bottom deep cleans, our residential team brings professional-grade tools and eco-friendly products into your home. We handle kitchens, bathrooms, bedrooms, living areas, and everything in between — leaving every surface spotless and every room refreshed.",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    image: "/images/commercial_cleaning.png",
    description:
      "Keep your workspace pristine and productive. We provide scheduled and on-demand cleaning for offices, retail spaces, warehouses, and commercial facilities. Our crew works around your business hours to minimize disruption while maximizing cleanliness.",
  },
  {
    icon: Trash2,
    title: "Junk Removal & Hauling",
    image: "/images/junk_removal.png",
    description:
      "Old furniture, appliances, yard waste, or renovation debris — we haul it all. Our eco-friendly disposal process prioritizes donation and recycling, keeping usable items out of landfills. Fast, efficient, and fully insured hauling you can trust.",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    image: "/images/deep_cleaning.png",
    description:
      "Go beyond the surface with our intensive deep-cleaning service. We tackle grout, baseboards, behind appliances, light fixtures, and all the hidden areas that accumulate grime over time. Ideal for seasonal refreshes or preparing your home for guests.",
  },
  {
    icon: PackageOpen,
    title: "Move-In / Move-Out Cleaning",
    image: null,
    description:
      "Moving is stressful enough. Let us handle the cleaning so you can focus on settling in — or getting your deposit back. We leave every room, cabinet, and closet move-in ready with detailed scrubbing and sanitization from top to bottom.",
  },
  {
    icon: HardHat,
    title: "Post-Construction Cleanup",
    image: null,
    description:
      "Renovations leave behind dust, debris, and chaos. Our post-construction cleanup crew removes all construction waste, wipes down every surface, and polishes your newly built or remodeled space until it's ready for move-in or business operations.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section
        className="relative py-32 md:py-40 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/deep_cleaning.png')" }}
      >
        <div className="absolute inset-0 bg-primary/75" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <span className="inline-flex items-center space-x-2 bg-accent/20 border border-accent/30 text-accent font-bold py-1.5 px-4 rounded-full mb-6 text-sm backdrop-blur-md">
            <ShieldCheck className="w-4 h-4" />
            <span>Licensed & Insured • Free Estimates</span>
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">
              Professional Services
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed">
            Comprehensive cleaning and junk removal solutions for homes and
            businesses across Detroit and the Metro Area.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-extrabold uppercase tracking-widest">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mt-2 mb-4">
              Tailored Solutions for Every Space
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-6 rounded-full" />
            <p className="text-secondary/80 text-lg leading-relaxed max-w-2xl mx-auto">
              From a single room refresh to a full commercial deep clean, we
              bring the expertise, equipment, and dedication to exceed your
              expectations every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col"
                >
                  {/* Image or Icon Header */}
                  {service.image ? (
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                      <div className="absolute top-4 left-4 bg-primary text-white p-3 rounded-xl shadow-lg">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-52 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center overflow-hidden">
                      <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-accent/10 rounded-full blur-2xl" />
                      <div className="absolute -left-4 -top-4 w-24 h-24 bg-accent/5 rounded-full blur-xl" />
                      <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/10 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="w-12 h-12 text-accent" />
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-secondary/80 text-sm leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center space-x-2 text-accent font-extrabold hover:text-accent/80 transition-colors group/link"
                    >
                      <span>Get a Quote</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <CheckCircle2 className="w-8 h-8 text-accent mx-auto" />
              <h4 className="font-bold text-primary">Eco-Friendly</h4>
              <p className="text-secondary/70 text-sm">
                Green products & responsible disposal
              </p>
            </div>
            <div className="space-y-2">
              <ShieldCheck className="w-8 h-8 text-accent mx-auto" />
              <h4 className="font-bold text-primary">Licensed & Insured</h4>
              <p className="text-secondary/70 text-sm">
                Full coverage for your peace of mind
              </p>
            </div>
            <div className="space-y-2">
              <Sparkles className="w-8 h-8 text-accent mx-auto" />
              <h4 className="font-bold text-primary">Satisfaction Guaranteed</h4>
              <p className="text-secondary/70 text-sm">
                We don&apos;t leave until you&apos;re thrilled
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="relative py-20 md:py-24 bg-primary overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Ready to Transform Your Space?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Get a free, no-obligation estimate today. Our team is standing by to
            help you reclaim your home or office.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:3135550199"
              className="inline-flex items-center space-x-3 bg-accent hover:bg-accent/90 text-white font-extrabold py-4 px-8 rounded-xl shadow-lg transition-all transform hover:scale-[1.03]"
            >
              <Phone className="w-5 h-5" />
              <span>Call (313) 555-0199</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-extrabold py-4 px-8 rounded-xl backdrop-blur-md transition-all"
            >
              <span>Request Online Estimate</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
