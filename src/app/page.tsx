"use client";
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { HowItWorks } from '../components/HowItWorks';
import { Reviews } from '../components/Reviews';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero 
        headline="Transform Your Space with Grays Cleaning & Junk Removal"
        subheadline="Experience the power of professional cleaning and junk removal services, tailored to your unique needs"
        body="At Grays Cleaning & Junk Removal, we pride ourselves on delivering exceptional results, ensuring your property shines like new. Our team of experts utilizes cutting-edge equipment and eco-friendly practices to provide a seamless experience."
        primaryCTA="Get Your Free Quote Today"
        secondaryText="Discover the Grays difference and enjoy a cleaner, healthier environment"
        trustBadges={[
          "Eco-Friendly Practices",
          "Fully Insured and Bonded",
          "5-Star Rated Customer Service"
        ]}
      />
      <Services 
        sectionHeader="Our Premium Services"
        subheader="Expert solutions for a cleaner, more organized you"
        body="From one-time deep cleans to regular maintenance, our services are designed to fit your lifestyle and budget. Explore our range of options and find the perfect fit for your needs."
        serviceCards={[
          {
            title: "Residential Cleaning",
            description: "Tailored cleaning solutions for your home, from move-in/move-out to regular maintenance"
          },
          {
            title: "Commercial Cleaning",
            description: "Expert cleaning services for your business, ensuring a healthy and productive environment"
          },
          {
            title: "Junk Removal",
            description: "Efficient and eco-friendly junk removal, handling everything from furniture to construction debris"
          }
        ]}
      />
      <HowItWorks 
        sectionHeader="How It Works"
        subheader="A simple, three-step process to a cleaner, more organized you"
        body="At Grays Cleaning & Junk Removal, we strive to make the process as seamless as possible. Here's how we work:"
        stepCards={[
          {
            title: "Step 1: Schedule Your Service",
            description: "Book your appointment online or over the phone, and we'll take care of the rest"
          },
          {
            title: "Step 2: Our Experts Arrive",
            description: "Our team of professionals will arrive on time, equipped with the latest equipment and a smile"
          },
          {
            title: "Step 3: Enjoy Your Clean Space",
            description: "Sit back, relax, and enjoy your newly cleaned and organized space, courtesy of Grays Cleaning & Junk Removal"
          }
        ]}
      />
      <Reviews 
        sectionHeader="What Our Customers Say"
        subheader="Real people, real results, and real satisfaction"
        body="Don't just take our word for it - hear from our satisfied customers and discover the Grays difference for yourself"
        reviewCards={[
          {
            rating: 5,
            text: "Grays Cleaning & Junk Removal exceeded my expectations in every way. Their team was professional, courteous, and efficient. I highly recommend their services!"
          },
          {
            rating: 5,
            text: "I was blown away by the level of service provided by Grays. From the initial consultation to the final walk-through, their team was exceptional. I'll definitely be using them again!"
          }
        ]}
      />
      <Contact 
        formTitle="Get in Touch with Grays Cleaning & Junk Removal"
        sidebarInfo="Ready to experience the power of professional cleaning and junk removal? Contact us today to schedule your service and discover a cleaner, healthier environment"
      />
      <Footer 
        brand="Grays Cleaning & Junk Removal"
        description="Your trusted partner for all your cleaning and junk removal needs"
        businessHours="Monday - Friday: 8am - 5pm, Saturday: 9am - 1pm, Sunday: Closed"
        serviceArea="Serving the greater metropolitan area"
        contactNumber="555-555-5555"
        socialLinks={[
          {
            platform: "Facebook",
            url: "https://www.facebook.com/grayscleaning"
          },
          {
            platform: "Twitter",
            url: "https://www.twitter.com/grayscleaning"
          }
        ]}
      />
    </div>
  );
}