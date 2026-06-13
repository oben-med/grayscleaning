"use client";
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Form Column */}
          <div className="lg:col-span-7 bg-[#F7F9F8] p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-accent text-sm font-extrabold uppercase tracking-widest">Get Started</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mt-2 mb-3">Request a Free Estimate</h2>
              <p className="text-secondary/80 text-sm mb-8">
                Tell us about your project and we'll get back to you within 24 hours with a custom estimate.
              </p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">Your Name</label>
                    <input type="text" id="name" required className="w-full bg-white border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent rounded-xl px-4 py-3 text-sm text-primary transition-all outline-none" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">Phone Number</label>
                    <input type="tel" id="phone" required className="w-full bg-white border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent rounded-xl px-4 py-3 text-sm text-primary transition-all outline-none" placeholder="(555) 555-5555" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">Email Address</label>
                    <input type="email" id="email" required className="w-full bg-white border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent rounded-xl px-4 py-3 text-sm text-primary transition-all outline-none" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">Service Needed</label>
                    <select id="service" required className="w-full bg-white border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent rounded-xl px-4 py-3 text-sm text-primary transition-all outline-none">
                      <option value="">Select a service...</option>
                      <option value="residential">Residential Cleaning</option>
                      <option value="commercial">Commercial Cleaning</option>
                      <option value="junk">Junk Removal & Hauling</option>
                      <option value="other">Other / Custom Request</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">Project Details</label>
                  <textarea id="message" rows={4} required className="w-full bg-white border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent rounded-xl px-4 py-3 text-sm text-primary transition-all outline-none" placeholder="Please describe the size of the space, items to haul, or any special requests..." />
                </div>

                <button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white font-extrabold py-4 px-6 rounded-xl shadow-lg transition-all transform hover:scale-[1.01]">
                  Submit Request
                </button>
              </form>
            </div>
          </div>

          {/* Info Column */}
          <div className="lg:col-span-5 bg-primary text-white p-8 md:p-10 rounded-3xl shadow-lg flex flex-col justify-between relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="space-y-8">
              <div>
                <span className="text-accent text-xs font-extrabold uppercase tracking-widest">Contact Information</span>
                <h3 className="text-3xl font-extrabold mt-2 mb-4">Let's Discuss Your Project</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Have questions or need a fast, custom cleanup? Get in touch with our team directly.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white/90">Call or Text Us</h4>
                    <p className="text-accent font-extrabold text-lg mt-0.5">(313) 555-0199</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white/90">Email Us</h4>
                    <p className="text-white/80 text-sm mt-0.5">info@grayscleaning.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white/90">Service Area</h4>
                    <p className="text-white/80 text-sm mt-0.5">Greater Detroit, MI & Surrounding Metro Areas</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 mt-8">
              <h4 className="font-bold text-sm mb-3">Our Guarantees:</h4>
              <ul className="space-y-2.5">
                <li className="flex items-center space-x-2 text-xs text-white/80">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  <span>100% Satisfaction Guaranteed</span>
                </li>
                <li className="flex items-center space-x-2 text-xs text-white/80">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  <span>Eco-conscious sorting & dumping</span>
                </li>
                <li className="flex items-center space-x-2 text-xs text-white/80">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  <span>Fully Bonded & Insured Crew</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}