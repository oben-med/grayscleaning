"use client";
import { Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-secondary p-8 md:p-12 lg:p-16">
      <div className="container mx-auto flex flex-wrap justify-center md:justify-between">
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 md:p-6 lg:p-8">
          <h2 className="text-2xl font-bold mb-4">Expert Cleaning & Junk Removal Solutions</h2>
          <p className="text-lg mb-4">Trust Grays Cleaning & Junk Removal for top-notch, reliable services tailored to your unique needs, whether you're a homeowner or business owner.</p>
          <div className="flex items-center mb-4">
            <Phone size={24} className="mr-2" />
            <span className="text-lg">Get in touch: 123-456-7890</span>
          </div>
          <div className="flex items-center mb-4">
            <MapPin size={24} className="mr-2" />
            <span className="text-lg">Visit us: 123 Main St, Anytown, USA</span>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 md:p-6 lg:p-8">
          <h2 className="text-2xl font-bold mb-4">Our Business Hours</h2>
          <ul className="list-none mb-4">
            <li className="mb-2">Monday: 8am - 5pm</li>
            <li className="mb-2">Tuesday: 8am - 5pm</li>
            <li className="mb-2">Wednesday: 8am - 5pm</li>
            <li className="mb-2">Thursday: 8am - 5pm</li>
            <li className="mb-2">Friday: 8am - 5pm</li>
            <li className="mb-2">Saturday: 9am - 1pm</li>
            <li className="mb-2">Sunday: Closed</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 md:p-6 lg:p-8">
          <h2 className="text-2xl font-bold mb-4">Our Service Area</h2>
          <p className="text-lg mb-4">We proudly serve Anytown, Othertown, and the surrounding communities, providing exceptional cleaning and junk removal services.</p>
          <div className="flex items-center mb-4">
            <Link href="https://www.facebook.com/grayscleaning" target="_blank" rel="noopener noreferrer" className="mr-4 transition-all duration-300 hover:scale-105">
              <Facebook size={24} />
            </Link>
            <Link href="https://www.twitter.com/grayscleaning" target="_blank" rel="noopener noreferrer" className="mr-4 transition-all duration-300 hover:scale-105">
              <Twitter size={24} />
            </Link>
            <Link href="https://www.instagram.com/grayscleaning" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-105">
              <Instagram size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}