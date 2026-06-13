"use client";
import { useState } from "react";
import { Camera, ArrowRight } from "lucide-react";
import Link from "next/link";

type Category = "All" | "Residential" | "Commercial" | "Junk Removal";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  category: Category;
  tall?: boolean;
}

const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery_kitchen.png",
    alt: "Sparkling clean kitchen",
    caption: "Kitchen Deep Clean — Detroit, MI",
    category: "Residential",
    tall: true,
  },
  {
    src: "/images/gallery_bathroom.png",
    alt: "Spotless bathroom",
    caption: "Bathroom Sanitization & Polish",
    category: "Residential",
  },
  {
    src: "/images/gallery_office.png",
    alt: "Professional office cleaning",
    caption: "Office Suite Cleaning — Southfield",
    category: "Commercial",
  },
  {
    src: "/images/gallery_garage.png",
    alt: "Garage cleanout",
    caption: "Full Garage Cleanout & Hauling",
    category: "Junk Removal",
    tall: true,
  },
  {
    src: "/images/gallery_yard.png",
    alt: "Yard waste removal",
    caption: "Yard Debris Removal — Grosse Pointe",
    category: "Junk Removal",
  },
  {
    src: "/images/residential_cleaning.png",
    alt: "Residential living room cleaning",
    caption: "Living Room Refresh — Royal Oak",
    category: "Residential",
  },
  {
    src: "/images/commercial_cleaning.png",
    alt: "Commercial space cleaning",
    caption: "Retail Space Deep Clean — Dearborn",
    category: "Commercial",
    tall: true,
  },
  {
    src: "/images/junk_removal.png",
    alt: "Junk removal and hauling",
    caption: "Appliance & Furniture Haul-Away",
    category: "Junk Removal",
  },
];

const categories: Category[] = ["All", "Residential", "Commercial", "Junk Removal"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 md:py-40 bg-primary overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -left-32 -bottom-32 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <span className="inline-flex items-center space-x-2 bg-accent/20 border border-accent/30 text-accent font-bold py-1.5 px-4 rounded-full mb-6 text-sm backdrop-blur-md">
            <Camera className="w-4 h-4" />
            <span>Before & After Results</span>
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Our Work
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium">
            See the Grays difference in action
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-accent text-white shadow-md"
                    : "bg-white text-secondary border border-gray-200 hover:border-accent hover:text-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className="group relative break-inside-avoid overflow-hidden rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    image.tall ? "h-80 md:h-96" : "h-56 md:h-72"
                  }`}
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/70 transition-all duration-300 flex items-end">
                  <div className="p-5 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-bold text-sm">
                      {image.caption}
                    </p>
                    <span className="inline-block mt-1 text-accent text-xs font-semibold uppercase tracking-wider">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-secondary/60 text-lg">
                No photos in this category yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
            Like What You See?
          </h2>
          <p className="text-secondary/80 text-lg mb-8">
            Let us deliver the same results for your home or business. Get a
            free estimate today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-accent hover:bg-accent/90 text-white font-extrabold py-4 px-8 rounded-xl shadow-lg transition-all transform hover:scale-[1.03]"
          >
            <span>Get Your Free Estimate</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
