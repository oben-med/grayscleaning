"use client";
import { Star } from 'lucide-react';
import { useState } from 'react';

interface Review {
  id: number;
  name: string;
  review: string;
  rating: number;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'John Doe',
    review: 'I was absolutely delighted with the exceptional service and professionalism displayed by Grays Cleaning & Junk Removal. They truly exceeded my expectations in every way, providing a seamless and stress-free experience from start to finish.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jane Smith',
    review: 'The team at Grays Cleaning & Junk Removal were prompt, courteous, and highly efficient. Their attention to detail and commitment to customer satisfaction are truly impressive, making them my go-to choice for all my cleaning and junk removal needs.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Bob Johnson',
    review: 'As a repeat customer, I can confidently attest to the reliability, affordability, and outstanding quality of service provided by Grays Cleaning & Junk Removal. Their dedication to excellence is evident in every aspect of their work, and I highly recommend them to anyone seeking top-notch cleaning and junk removal services.',
    rating: 5,
  },
];

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);

  const handlePrevReview = () => {
    if (currentReview > 0) {
      setCurrentReview(currentReview - 1);
    }
  };

  const handleNextReview = () => {
    if (currentReview < reviews.length - 1) {
      setCurrentReview(currentReview + 1);
    }
  };

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-4">Real People, Real Stories: Hear from Our Satisfied Customers</h2>
        <p className="text-lg text-secondary mb-8">Don't just take our word for it - discover why Grays Cleaning & Junk Removal is the trusted choice for cleaning and junk removal services. Read genuine reviews from our delighted customers who have experienced the difference we can make.</p>
        <div className="flex flex-col items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="flex items-center mb-4">
              <span className="text-lg font-bold text-primary mr-2">{reviews[currentReview].name}</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((rating, index) => (
                  <Star key={index} className={`text-orange-500 ${index < reviews[currentReview].rating ? 'fill-current' : ''}`} size={20} />
                ))}
              </div>
            </div>
            <p className="text-lg text-secondary">{reviews[currentReview].review}</p>
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-l-lg transition-all duration-300" onClick={handlePrevReview}> Previous Testimonial </button>
            <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-r-lg transition-all duration-300" onClick={handleNextReview}> Next Testimonial </button>
          </div>
        </div>
      </div>
    </section>
  );
}