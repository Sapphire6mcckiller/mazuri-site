import Link from "next/link";
import Image from "next/image";
import { Sofa, Home, Palette, ArrowRight } from "lucide-react";
import Testimonials from "./components/Testimonials";
import Counter from "./components/Counter";

export default function HomePage() {
  const whatsappNumber = "255673585034";
  const whatsappMessage = "Hello! I'm interested in your cultural designs.";

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="min-h-screen relative flex items-center justify-center text-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="African Interior Design"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(45,24,16,0.85) 0%, rgba(61,40,23,0.75) 50%, rgba(184,155,122,0.65) 100%)" }}></div>
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 z-10 pt-20">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text-white mb-6 drop-shadow-2xl leading-tight">
            Authentic African Heritage
            <span className="block mt-2 font-semibold" style={{ color: "#F5C518" }}>
              Crafted For Your Home
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 font-light mb-10 max-w-3xl mx-auto drop-shadow-lg">
            Handmade furniture & interior design that celebrates African craftsmanship in Tanzania.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/products" 
              className="px-8 py-4 rounded-md font-bold transition-all transform hover:scale-105 shadow-lg"
              style={{ backgroundColor: "#F5C518", color: "#2D1810" }}
            >
              View Our Products
            </Link>
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} 
              target="_blank" 
              className="bg-green-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Request a Quote
            </a>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-gray-900 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20" style={{ backgroundColor: "#FAF6F0" }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-sm font-semibold tracking-wider uppercase mb-2" style={{ color: "#B8860B" }}>About Us</h2>
          <h3 className="text-3xl md:text-5xl font-light mb-6" style={{ color: "#3D2817" }}>Feel The Difference</h3>
          <p className="max-w-3xl mx-auto text-gray-700 text-lg mb-8">
            Transform your space with Mazuri Cultural Designs. We create exceptional handmade products that celebrate African heritage.
          </p>
          <Link 
            href="/about" 
            className="inline-flex items-center gap-2 text-white px-8 py-3 rounded-md transition-all hover:opacity-90"
            style={{ backgroundColor: "#3D2817" }}
          >
            Learn More About Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

                 {/* Services Preview with Images */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-light mb-16" style={{ color: "#3D2817" }}>Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2 border-b-4 relative" style={{ borderColor: "#F5C518" }}>
              <div className="relative h-56 overflow-hidden rounded-t-lg">
                <Image src="/images/service-furniture.jpg" alt="Handmade Furniture" fill className="object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto border-4 border-white shadow-lg absolute left-1/2 -translate-x-1/2" style={{ backgroundColor: "#F5C518", top: "12rem" }}>
                <Sofa className="w-8 h-8" style={{ color: "#3D2817" }} />
              </div>
              <div className="p-6 pt-12">
                <h3 className="text-xl font-semibold mb-3" style={{ color: "#3D2817" }}>Handmade Furniture</h3>
                <p className="text-gray-700">Unique pieces blending African heritage with contemporary design.</p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2 border-b-4 relative" style={{ borderColor: "#F5C518" }}>
              <div className="relative h-56 overflow-hidden rounded-t-lg">
                <Image src="/images/service-interior.jpg" alt="Interior Design" fill className="object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto border-4 border-white shadow-lg absolute left-1/2 -translate-x-1/2" style={{ backgroundColor: "#F5C518", top: "12rem" }}>
                <Home className="w-8 h-8" style={{ color: "#3D2817" }} />
              </div>
              <div className="p-6 pt-12">
                <h3 className="text-xl font-semibold mb-3" style={{ color: "#3D2817" }}>Interior Design</h3>
                <p className="text-gray-700">Professional consultation that celebrates cultural authenticity.</p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2 border-b-4 relative" style={{ borderColor: "#F5C518" }}>
              <div className="relative h-56 overflow-hidden rounded-t-lg">
                <Image src="/images/service-decor.jpg" alt="Cultural Home Decor" fill className="object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto border-4 border-white shadow-lg absolute left-1/2 -translate-x-1/2" style={{ backgroundColor: "#F5C518", top: "12rem" }}>
                <Palette className="w-8 h-8" style={{ color: "#3D2817" }} />
              </div>
              <div className="p-6 pt-12">
                <h3 className="text-xl font-semibold mb-3" style={{ color: "#3D2817" }}>Cultural Home Decor</h3>
                <p className="text-gray-700">Authentic accessories that tell the story of African artistry.</p>
              </div>
            </div>
          </div>
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 mt-12 font-semibold hover:opacity-70 transition-opacity"
            style={{ color: "#3D2817" }}
          >
            See All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 text-white" style={{ backgroundColor: "#3D2817" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: "#F5C518" }}>
                <Counter end={100} suffix="+" />
              </div>
              <div className="text-white/80">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: "#F5C518" }}>
                <Counter end={5} suffix="+" />
              </div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: "#F5C518" }}>
                <Counter end={200} suffix="+" />
              </div>
              <div className="text-white/80">Projects Done</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: "#F5C518" }}>
                <Counter end={100} suffix="%" />
              </div>
              <div className="text-white/80">Handcrafted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
    </>
  );
}