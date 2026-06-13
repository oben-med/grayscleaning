"use client";
import { Star, Quote } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    location: 'Detroit, MI',
    text: 'I was absolutely delighted with the exceptional service and professionalism displayed by Grays. They cleaned my house move-out, and it looked brand new. They truly exceeded my expectations in every way!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus Brody',
    location: 'Grosse Pointe, MI',
    text: 'Prompt, courteous, and highly efficient. The team handled a garage cleanout and appliance haul-away. Their commitment to customer satisfaction and eco-friendly sorting is outstanding.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Elena Rostova',
    location: 'Royal Oak, MI',
    text: 'As a commercial property manager, I can confidently attest to the outstanding quality and reliability of Grays. They clean our offices regularly and handle bulk trash removal with ease. Highly recommended!',
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-[#F7F9F8]">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent text-sm font-extrabold uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mt-2 mb-4">
            What Our Clients Say
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6 rounded-full" />
          <p className="text-secondary/80 text-lg leading-relaxed">
            Customer satisfaction is our ultimate focus. Here is what local homeowners and businesses say about our cleaning and hauling.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 flex flex-col relative group">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-100 group-hover:text-accent/10 transition-colors" />
              
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-secondary/85 text-sm leading-relaxed mb-6 flex-grow italic">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-primary">{review.name}</h4>
                  <p className="text-secondary/60 text-xs mt-0.5">{review.location}</p>
                </div>
                <div className="bg-accent/10 text-accent text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
                  Verified Client
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}