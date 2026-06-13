import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grays Cleaning & Junk Removal | Detroit, MI | Licensed & Insured",
  description:
    "Professional residential & commercial cleaning and eco-friendly junk removal in Detroit, MI. Licensed, insured, free estimates. Call (313) 555-0199.",
  keywords:
    "cleaning service Detroit, junk removal Detroit, commercial cleaning Detroit MI, residential cleaning, eco-friendly junk removal",
  openGraph: {
    title: "Grays Cleaning & Junk Removal | Detroit, MI",
    description:
      "Professional residential & commercial cleaning and eco-friendly junk removal in Detroit, MI. Licensed, insured, free estimates.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Grays Cleaning & Junk Removal",
  description:
    "Professional residential & commercial cleaning and eco-friendly junk removal in Detroit, MI. Licensed, insured, free estimates.",
  telephone: "(313) 555-0199",
  email: "info@grayscleaning.com",
  url: "https://www.grayscleaning.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Detroit",
    addressRegion: "MI",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/grayscleaning_junkremoval/",
    "https://www.facebook.com/GraysCleaningAndJunkRemoval/",
    "https://www.yelp.com/biz/grays-cleaning-and-junk-removal-detroit-2",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
