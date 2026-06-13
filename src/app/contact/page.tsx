"use client";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  CheckCircle,
  ArrowRight,
  Send,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 md:py-40 bg-primary overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -left-32 -bottom-32 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <span className="inline-flex items-center space-x-2 bg-accent/20 border border-accent/30 text-accent font-bold py-1.5 px-4 rounded-full mb-6 text-sm backdrop-blur-md">
            <Send className="w-4 h-4" />
            <span>Get in Touch</span>
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">
              Grays Cleaning
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed">
            Request a free estimate or ask us anything. We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Form */}
            <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm">
              <span className="text-accent text-sm font-extrabold uppercase tracking-widest">
                Free Estimate
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mt-2 mb-3">
                Request an Estimate
              </h2>
              <p className="text-secondary/80 text-sm mb-8">
                Fill out the form below and we&apos;ll get back to you within 24
                hours with a custom quote.
              </p>

              <form
                className="space-y-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold text-primary uppercase tracking-wider mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      className="w-full bg-background border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent rounded-xl px-4 py-3 text-sm text-primary transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-bold text-primary uppercase tracking-wider mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      required
                      className="w-full bg-background border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent rounded-xl px-4 py-3 text-sm text-primary transition-all outline-none"
                      placeholder="(313) 555-0199"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold text-primary uppercase tracking-wider mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      className="w-full bg-background border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent rounded-xl px-4 py-3 text-sm text-primary transition-all outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-xs font-bold text-primary uppercase tracking-wider mb-2"
                    >
                      Service Type
                    </label>
                    <select
                      id="contact-service"
                      required
                      className="w-full bg-background border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent rounded-xl px-4 py-3 text-sm text-primary transition-all outline-none"
                    >
                      <option value="">Select a service...</option>
                      <option value="residential">Residential Cleaning</option>
                      <option value="commercial">Commercial Cleaning</option>
                      <option value="junk">Junk Removal & Hauling</option>
                      <option value="deep">Deep Cleaning</option>
                      <option value="moveinout">
                        Move-In / Move-Out Cleaning
                      </option>
                      <option value="postconstruction">
                        Post-Construction Cleanup
                      </option>
                      <option value="other">Other / Custom Request</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-address"
                    className="block text-xs font-bold text-primary uppercase tracking-wider mb-2"
                  >
                    Property Address
                  </label>
                  <input
                    type="text"
                    id="contact-address"
                    className="w-full bg-background border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent rounded-xl px-4 py-3 text-sm text-primary transition-all outline-none"
                    placeholder="123 Main St, Detroit, MI 48201"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold text-primary uppercase tracking-wider mb-2"
                  >
                    Message / Project Details
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    className="w-full bg-background border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent rounded-xl px-4 py-3 text-sm text-primary transition-all outline-none"
                    placeholder="Tell us about the space, items to haul, or any special requests..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white font-extrabold py-4 px-6 rounded-xl shadow-lg transition-all transform hover:scale-[1.01] flex items-center justify-center space-x-2"
                >
                  <span>Submit Estimate Request</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              {/* Contact Info Card */}
              <div className="bg-primary text-white p-8 md:p-10 rounded-3xl shadow-lg relative overflow-hidden">
                <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />

                <div className="relative z-10 space-y-8">
                  <div>
                    <span className="text-accent text-xs font-extrabold uppercase tracking-widest">
                      Contact Information
                    </span>
                    <h3 className="text-2xl font-extrabold mt-2 mb-2">
                      Get in Touch
                    </h3>
                  </div>

                  <div className="space-y-5">
                    <a
                      href="tel:3135550199"
                      className="flex items-start space-x-4 group"
                    >
                      <div className="bg-white/10 p-3 rounded-xl">
                        <Phone className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-white/90">
                          Phone
                        </h4>
                        <p className="text-accent font-extrabold text-lg mt-0.5 group-hover:text-accent/80 transition-colors">
                          (313) 555-0199
                        </p>
                      </div>
                    </a>

                    <a
                      href="mailto:info@grayscleaning.com"
                      className="flex items-start space-x-4 group"
                    >
                      <div className="bg-white/10 p-3 rounded-xl">
                        <Mail className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-white/90">
                          Email
                        </h4>
                        <p className="text-white/80 text-sm mt-0.5 group-hover:text-accent transition-colors">
                          info@grayscleaning.com
                        </p>
                      </div>
                    </a>

                    <div className="flex items-start space-x-4">
                      <div className="bg-white/10 p-3 rounded-xl">
                        <MapPin className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-white/90">
                          Service Area
                        </h4>
                        <p className="text-white/80 text-sm mt-0.5">
                          Detroit, Grosse Pointe, Royal Oak, Dearborn,
                          Southfield & surrounding areas
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-white/10 p-3 rounded-xl">
                        <Clock className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-white/90">
                          Business Hours
                        </h4>
                        <ul className="text-white/80 text-sm mt-1 space-y-0.5">
                          <li>Mon – Fri: 8:00 AM – 5:00 PM</li>
                          <li>Saturday: 9:00 AM – 1:00 PM</li>
                          <li>Sunday: Closed</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="border-t border-white/10 pt-6">
                    <h4 className="font-bold text-sm mb-3">Follow Us</h4>
                    <div className="flex space-x-4">
                      <Link
                        href="https://www.instagram.com/grayscleaning_junkremoval/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 hover:bg-accent/20 p-3 rounded-xl transition-colors"
                      >
                        <Instagram className="w-5 h-5 text-accent" />
                      </Link>
                      <Link
                        href="https://www.facebook.com/GraysCleaningAndJunkRemoval/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 hover:bg-accent/20 p-3 rounded-xl transition-colors"
                      >
                        <Facebook className="w-5 h-5 text-accent" />
                      </Link>
                      <Link
                        href="https://www.yelp.com/biz/grays-cleaning-and-junk-removal-detroit-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 hover:bg-accent/20 p-3 rounded-xl transition-colors"
                      >
                        <svg
                          className="w-5 h-5 text-accent"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 0 1 1.596-.206l2.042 1.726c.68.575.48 1.656-.372 1.985zm-1.88 5.69l-2.042 1.726c-.68.575-1.676.08-1.596-.795l.41-5.19c.08-1.008 1.37-1.274 1.85-.382l2.042 3.84c.37.69-.015 1.42-.663 1.8zM12.757 3.983l.06 5.256c0 1.01-1.37 1.363-1.93.496L7.464 4.57c-.37-.573-.16-1.335.467-1.672l2.506-1.342c.72-.387 1.58.095 1.58.9l-.002.001.742.526zm-1.016 9.5L7.19 15.39c-.905.376-1.8-.464-1.354-1.272l2.276-4.128c.525-.953 1.94-.608 1.973.48l.168 2.282-.51.73zM7.6 16.18l-1.14 5.018c-.18.792-1.168 1.09-1.735.525l-2.04-2.04c-.568-.567-.267-1.555.525-1.735l4.39-.768z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="bg-primary/5 p-8 flex flex-col items-center justify-center min-h-[200px]">
                  <MapPin className="w-12 h-12 text-accent mb-4" />
                  <h4 className="font-bold text-primary text-lg mb-1">
                    Serving Detroit & Metro Area
                  </h4>
                  <p className="text-secondary/70 text-sm text-center">
                    Detroit, Grosse Pointe, Royal Oak, Dearborn, Southfield, and
                    surrounding communities
                  </p>
                </div>
              </div>

              {/* Guarantees */}
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-primary text-sm mb-4 uppercase tracking-wider">
                  Our Guarantees
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-secondary/80 text-sm">
                      100% Satisfaction Guaranteed
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-secondary/80 text-sm">
                      Free, No-Obligation Estimates
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-secondary/80 text-sm">
                      Fully Licensed & Insured
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-secondary/80 text-sm">
                      Eco-Friendly Disposal Practices
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
