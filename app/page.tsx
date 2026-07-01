import Link from "next/link";
import { Sofa, Home, Palette, ArrowRight } from "lucide-react";
import Testimonials from "./components/Testimonials";
import Counter from "./components/Counter";

export default function HomePage() {
  const whatsappNumber = "255673585034";
  const whatsappMessage = "Hello! I'm interested in your cultural designs.";

  return (
    <>
      {/* Hero Section */}
      <section 
        className="min-h-screen relative flex items-center justify-center text-center"
        style={{ background: "linear-gradient(135deg, #2D1810 0%, #3D2817 50%, #B89B7A 100%)" }}
      >
        <div className="relative max-w-6xl mx-auto px-6 z-10 pt-20">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text-white mb-6 drop-shadow-2xl leading-tight">
            Authentic African Heritage
            <span className="block mt-2 font-semibold" style={{ color: "#F5C518" }}>
              Crafted For Your Home
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light mb-10 max-w-3xl mx-auto">
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
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white transition-all"
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

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-light mb-16" style={{ color: "#3D2817" }}>Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="p-8 rounded-lg hover:shadow-xl transition-all border-t-4"
              style={{ backgroundColor: "#FAF6F0", borderColor: "#F5C518" }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#F5C518" }}
              >
                <Sofa className="w-8 h-8" style={{ color: "#3D2817" }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#3D2817" }}>Handmade Furniture</h3>
              <p className="text-gray-700">Unique pieces blending African heritage with contemporary design.</p>
            </div>
            <div 
              className="p-8 rounded-lg hover:shadow-xl transition-all border-t-4"
              style={{ backgroundColor: "#FAF6F0", borderColor: "#F5C518" }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#F5C518" }}
              >
                <Home className="w-8 h-8" style={{ color: "#3D2817" }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#3D2817" }}>Interior Design</h3>
              <p className="text-gray-700">Professional consultation that celebrates cultural authenticity.</p>
            </div>
            <div 
              className="p-8 rounded-lg hover:shadow-xl transition-all border-t-4"
              style={{ backgroundColor: "#FAF6F0", borderColor: "#F5C518" }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#F5C518" }}
              >
                <Palette className="w-8 h-8" style={{ color: "#3D2817" }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "#3D2817" }}>Cultural Home Decor</h3>
              <p className="text-gray-700">Authentic accessories that tell the story of African artistry.</p>
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

      {/* Testimonials Section */}
      <Testimonials />
    </>
  );
}