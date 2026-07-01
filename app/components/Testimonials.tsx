"use client";
import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Amina Hassan",
    location: "Dodoma, Tanzania",
    role: "Homeowner",
    rating: 5,
    text: "Mazuri Cultural Designs transformed our living room into a stunning space that truly celebrates our African heritage. The craftsmanship is exceptional and every piece tells a beautiful story.",
    initials: "AH",
  },
  {
    name: "John Mwakasege",
    location: "Dar es Salaam",
    role: "Restaurant Owner",
    rating: 5,
    text: "We hired Mazuri to design our restaurant interior. The result exceeded all expectations! Our customers constantly compliment the authentic African ambiance. Highly recommended!",
    initials: "JM",
  },
  {
    name: "Sarah Kimaro",
    location: "Arusha, Tanzania",
    role: "Interior Designer",
    rating: 5,
    text: "As a professional designer, I'm very particular about quality. Mazuri's handcrafted furniture pieces are simply outstanding. The attention to detail and cultural authenticity is unmatched.",
    initials: "SK",
  },
  {
    name: "David Mushi",
    location: "Mwanza, Tanzania",
    role: "Hotel Manager",
    rating: 5,
    text: "We furnished our entire boutique hotel with Mazuri pieces. Guests love the unique African aesthetic. The team was professional, timely, and the quality is built to last.",
    initials: "DM",
  },
  {
    name: "Grace Mollel",
    location: "Dodoma, Tanzania",
    role: "Customer",
    rating: 5,
    text: "I ordered a custom dining set and it arrived perfectly crafted. The team listened to my ideas and brought them to life beautifully. Worth every shilling!",
    initials: "GM",
  },
  {
    name: "Peter Sanga",
    location: "Morogoro, Tanzania",
    role: "Business Owner",
    rating: 5,
    text: "Professional service from start to finish. Mazuri Cultural Designs understands the importance of preserving our heritage while delivering modern functionality. Excellent work!",
    initials: "PS",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const currentPage = Math.floor(currentIndex / itemsPerPage);

  const next = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0 ? testimonials.length - itemsPerPage : prev - itemsPerPage
    );
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="py-20" style={{ backgroundColor: "#FAF6F0" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold tracking-wider uppercase mb-2" style={{ color: "#B8860B" }}>
            Testimonials
          </h2>
          <h3 className="text-3xl md:text-5xl font-light mb-4" style={{ color: "#3D2817" }}>
            What Our Customers Say
          </h3>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from the people who&apos;ve experienced our work
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-12 py-6 px-8 bg-white rounded-lg shadow-md">
          <div className="text-center">
            <div className="text-4xl font-bold" style={{ color: "#3D2817" }}>4.9</div>
            <div className="flex justify-center mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" style={{ color: "#F5C518" }} />
              ))}
            </div>
            <div className="text-sm text-gray-600 mt-1">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold" style={{ color: "#3D2817" }}>100+</div>
            <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold" style={{ color: "#3D2817" }}>98%</div>
            <div className="text-sm text-gray-600 mt-1">Recommend Us</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {visibleTestimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all relative">
              <div className="absolute -top-4 left-6 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#F5C518" }}>
                <Quote className="w-5 h-5" style={{ color: "#3D2817" }} />
              </div>

              <div className="flex mb-4 pt-2">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" style={{ color: "#F5C518" }} />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic leading-relaxed">
                &quot;{t.text}&quot;
              </p>

              <div className="flex items-center pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold mr-3" style={{ backgroundColor: "#3D2817", color: "#F5C518" }}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-semibold" style={{ color: "#3D2817" }}>{t.name}</h4>
                  <p className="text-xs text-gray-600">{t.role} • {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4">
          <button
            onClick={prev}
            className="p-3 rounded-full hover:opacity-80 transition-all shadow-md"
            style={{ backgroundColor: "#3D2817", color: "white" }}
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * itemsPerPage)}
                className="w-3 h-3 rounded-full transition-all"
                style={{
                  backgroundColor: i === currentPage ? "#3D2817" : "#D4C5B0",
                  transform: i === currentPage ? "scale(1.3)" : "scale(1)",
                }}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-3 rounded-full hover:opacity-80 transition-all shadow-md"
            style={{ backgroundColor: "#3D2817", color: "white" }}
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">Ready to join our happy customers?</p>
          <a
            href="https://wa.me/255673585034?text=Hello! I'd like to discuss a project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-md font-semibold transition-all hover:opacity-90 shadow-lg"
            style={{ backgroundColor: "#3D2817", color: "white" }}
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
}