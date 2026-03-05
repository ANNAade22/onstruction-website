import type { Metadata } from "next";
import { Outfit, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

import Script from "next/script";

export const metadata: Metadata = {
  title: "Silverline Engineering - Quality Construction & Engineering Services",
  description: "Zambian owned Construction Company specializing in Civil, Electrical, Mechanical, and Solar Engineering services.",
  keywords: ["Construction", "Engineering", "Zambia", "Civil Engineering", "Electrical Engineering", "Mechanical Engineering", "Solar Energy", "Silverline"],
  authors: [{ name: "Silverline Engineering" }],
  creator: "Silverline Engineering",
  publisher: "Silverline Engineering",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Silverline Engineering - Quality Construction & Engineering Services",
    description: "Leading construction and engineering firm in Zambia delivering excellence.",
    url: "https://silverline-engineering.com",
    siteName: "Silverline Engineering",
    images: [
      {
        url: "https://silverline-engineering.com/og-image.jpg", // Ensure this image exists or use a relevant placeholder path
        width: 1200,
        height: 630,
        alt: "Silverline Engineering Projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Silverline Engineering",
    description: "Zambian owned Construction Company specializing in Civil, Electrical, Mechanical, and Solar Engineering services.",
    images: ["https://silverline-engineering.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ConstructionBusiness",
  "name": "Silverline Engineering",
  "image": "https://silverline-engineering.com/og-image.jpg",
  "@id": "https://silverline-engineering.com",
  "url": "https://silverline-engineering.com",
  "telephone": "+260977467664", // Update with real number if different
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plot 397a/40/d Off Kafue Road, Makeni",
    "addressLocality": "Lusaka",
    "addressRegion": "Lusaka",
    "postalCode": "10101",
    "addressCountry": "ZM"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -15.416667, // Update with actual coordinates
    "longitude": 28.283333
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "17:00"
  },
  "sameAs": [
    "https://www.facebook.com/silverlineengineering",
    "https://www.linkedin.com/company/silverline-engineering"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} ${outfit.variable} antialiased`}
      >
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
