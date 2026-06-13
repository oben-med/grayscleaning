"use client";
import {
  Leaf,
  ShieldCheck,
  Heart,
  Users,
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Leaf,
    title: "Eco-Friendly Practices",
    description:
      "We use green cleaning products and prioritize recycling and donation in our junk removal process — keeping our community and planet healthier.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description:
      "Every job is backed by full liability insurance and proper licensing. Your property and our crew are always protected.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Your satisfaction drives everything we do. From the first call to the final walkthrough, we tailor our services to your unique needs and expectations.",
  },
  {
    icon: Users,
    title: "Community Focused",
    description:
      "As a Detroit-born business, we're invested in the neighborhoods we serve. We hire locally, support local causes, and treat every client like a neighbor.",
  },
];

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

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 md:py-40 bg-primary overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -left-32 -bottom-32 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <span className="inline-flex items-center space-x-2 bg-accent/20 border border-accent/30 text-accent font-bold py-1.5 px-4 rounded-full mb-6 text-sm backdrop-blur-md">
            <Users className="w-4 h-4" />
            <span>Our Story</span>
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">
              Grays Cleaning & Junk Removal
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed">
            Proudly serving Detroit & the Metro Area • Free estimates • Licensed
            & insured
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <span className="text-accent text-sm font-extrabold uppercase tracking-widest">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mt-2 mb-6">
                Built on Hard Work, Driven by Community
              </h2>
              <div className="h-1 w-20 bg-accent mb-8 rounded-full" />
              <div className="space-y-5 text-secondary/80 leading-relaxed">
                <p>
                  Founded in Detroit, MI, Grays Cleaning & Junk Removal has been
                  serving the greater metropolitan area with pride. Our mission
                  is to deliver exceptional cleaning and junk removal services
                  while prioritizing eco-friendly practices and community values.
                </p>
                <p>
                  What started as a small neighborhood cleaning service has grown
                  into a full-scale operation covering residential and commercial
                  cleaning, junk hauling, post-construction cleanup, and more.
                  Every member of our team is trained, vetted, and committed to
                  the same standard of excellence that built our reputation.
                </p>
                <p>
                  We believe in honest pricing, transparent communication, and
                  delivering results that speak for themselves. When you choose
                  Grays, you&apos;re choosing a partner who cares about your
                  space as much as you do.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center space-x-2 bg-primary/5 px-4 py-2 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span className="text-sm font-semibold text-primary">
                    Licensed & Insured
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-primary/5 px-4 py-2 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span className="text-sm font-semibold text-primary">
                    Free Estimates
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-primary/5 px-4 py-2 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span className="text-sm font-semibold text-primary">
                    Eco-Friendly
                  </span>
                </div>
              </div>
            </div>

            {/* Team Photo */}
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/10 rounded-3xl -z-10 transform rotate-2" />
              <img
                src="/images/about_team.png"
                alt="Grays Cleaning & Junk Removal Team"
                className="w-full h-auto rounded-2xl shadow-xl object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-xl shadow-lg">
                <p className="text-accent font-extrabold text-2xl">Detroit</p>
                <p className="text-white/80 text-xs font-medium">
                  Born & Raised
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-extrabold uppercase tracking-widest">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mt-2 mb-4">
              Our Core Values
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-6 rounded-full" />
            <p className="text-secondary/80 text-lg leading-relaxed max-w-2xl mx-auto">
              These principles guide every job we take on and every relationship
              we build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group bg-background p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-secondary/70 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="bg-primary rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-accent text-sm font-extrabold uppercase tracking-widest">
                  Service Area
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
                  Proudly Serving Detroit & Metro Area
                </h2>
                <p className="text-white/80 leading-relaxed mb-6">
                  We cover Detroit and the surrounding metropolitan communities.
                  If you&apos;re nearby, we&apos;re just a phone call away.
                </p>
                <a
                  href="tel:3135550199"
                  className="inline-flex items-center space-x-2 bg-accent hover:bg-accent/90 text-white font-extrabold py-3 px-6 rounded-xl shadow-lg transition-all transform hover:scale-[1.03]"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (313) 555-0199</span>
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3">
                {serviceAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/5"
                  >
                    <MapPin className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-white font-medium text-sm">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-secondary/80 text-lg mb-8">
            Get in touch for a free, no-obligation estimate. We&apos;d love to
            hear about your project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-accent hover:bg-accent/90 text-white font-extrabold py-4 px-8 rounded-xl shadow-lg transition-all transform hover:scale-[1.03]"
          >
            <span>Request Free Estimate</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
