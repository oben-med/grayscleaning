"use client";
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center gap-10 py-20">
      <div className="lg:w-1/2 xl:w-1/3 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Experience Exceptional Service: Get in Touch with Us</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
            <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email Address</label>
            <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Your Phone Number</label>
            <input type="tel" id="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
            <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
          </div>
          <button type="submit" className="py-2 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-300">Send Your Message Today</button>
        </form>
      </div>
      <div className="lg:w-1/2 xl:w-1/3 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Stay Connected: Contact Information</h2>
        <div className="flex items-center mb-4">
          <Phone size={24} className="mr-2" />
          <span>Call Us: (123) 456-7890</span>
        </div>
        <div className="flex items-center mb-4">
          <Mail size={24} className="mr-2" />
          <span>Email Us: <a href="mailto:info@example.com">info@example.com</a></span>
        </div>
        <div className="flex items-center mb-4">
          <MapPin size={24} className="mr-2" />
          <span>Visit Us: 123 Main St, Anytown, USA</span>
        </div>
      </div>
    </section>
  );
}