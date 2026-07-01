import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://mazuri-site.vercel.app"),
  title: {
    default: "Mazuri Cultural Designs | African Heritage Furniture & Interior Design Tanzania",
    template: "%s | Mazuri Cultural Designs",
  },
  description: "Leading cultural design company in Tanzania. Handcrafted African furniture, interior design services, and authentic home decor in Dodoma. Celebrating African heritage through exceptional craftsmanship.",
  keywords: [
    "African furniture Tanzania",
    "cultural design Dodoma",
    "handmade furniture Tanzania",
    "interior design Dodoma",
    "African home decor",
    "handcrafted furniture Tanzania",
    "cultural furniture Africa",
    "Mazuri Cultural Designs",
    "Tanzania interior design",
    "African heritage design",
    "custom furniture Dodoma",
    "Dodoma craftsmen",
  ],
  authors: [{ name: "Mazuri Cultural Designs Company Ltd" }],
  creator: "Mazuri Cultural Designs Company Ltd",
  publisher: "Mazuri Cultural Designs Company Ltd",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mazuri-site.vercel.app",
    siteName: "Mazuri Cultural Designs",
    title: "Mazuri Cultural Designs | African Heritage Through Design",
    description: "Handcrafted African furniture and interior design services in Tanzania. Celebrating heritage through exceptional craftsmanship.",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Mazuri Cultural Designs - African Heritage Furniture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mazuri Cultural Designs | African Heritage Design",
    description: "Handcrafted African furniture and interior design services in Tanzania.",
    images: ["/images/hero-bg.jpg"],
    creator: "@mazuricultural",
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
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://mazuri-site.vercel.app",
  },
  category: "Furniture & Interior Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://mazuri-site.vercel.app",
              name: "Mazuri Cultural Designs Company Ltd",
              image: "https://mazuri-site.vercel.app/logo.png",
              description: "Leading cultural design company in Tanzania specializing in handcrafted African furniture, interior design, and home decor.",
              url: "https://mazuri-site.vercel.app",
              telephone: "+255673585034",
              email: "mazuriculturaldesignsglobal@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Ipagala, Near Upland Hotel",
                addressLocality: "Dodoma",
                postalCode: "1841",
                addressCountry: "TZ",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -6.1722,
                longitude: 35.7397,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "16:00",
                },
              ],
              sameAs: [
                "https://www.instagram.com/mazuriculturaldesigns",
              ],
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "100",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}