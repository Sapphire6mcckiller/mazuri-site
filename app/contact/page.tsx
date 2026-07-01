"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Navigation } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/mdardbrz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="py-20 text-white" style={{ backgroundColor: "#3D2817" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-4">Contact Us</h1>
          <p className="text-xl" style={{ color: "#F5C518" }}>We&apos;d Love to Hear From You</p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-light mb-8" style={{ color: "#3D2817" }}>Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 rounded-full mr-4" style={{ backgroundColor: "#F5C518" }}>
                  <Phone className="w-6 h-6" style={{ color: "#3D2817" }} />
                </div>
                <div>
                  <h3 className="font-semibold" style={{ color: "#3D2817" }}>Phone</h3>
                  <a href="tel:+255673585034" className="hover:underline" style={{ color: "#3D2817" }}>+255 673 585 034</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-full mr-4" style={{ backgroundColor: "#F5C518" }}>
                  <Mail className="w-6 h-6" style={{ color: "#3D2817" }} />
                </div>
                <div>
                  <h3 className="font-semibold" style={{ color: "#3D2817" }}>Email</h3>
                  <a href="mailto:mazuriculturaldesignsglobal@gmail.com" className="hover:underline text-sm break-all" style={{ color: "#3D2817" }}>mazuriculturaldesignsglobal@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-full mr-4" style={{ backgroundColor: "#F5C518" }}>
                  <MapPin className="w-6 h-6" style={{ color: "#3D2817" }} />
                </div>
                <div>
                  <h3 className="font-semibold" style={{ color: "#3D2817" }}>Address</h3>
                  <p className="text-gray-700">Ipagala, Dodoma<br/>Near Upland Hotel<br/>P.O. Box 1841, Tanzania</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-full mr-4" style={{ backgroundColor: "#F5C518" }}>
                  <Clock className="w-6 h-6" style={{ color: "#3D2817" }} />
                </div>
                <div>
                  <h3 className="font-semibold" style={{ color: "#3D2817" }}>Business Hours</h3>
                  <p className="text-gray-700">Mon - Fri: 8:00 AM - 6:00 PM<br/>Sat: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-light mb-8" style={{ color: "#3D2817" }}>Send Us a Message</h2>
            
            {status === "success" && (
              <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-green-800">Message sent successfully!</p>
                  <p className="text-sm text-green-700">We&apos;ll get back to you within 24 hours.</p>
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-800">Something went wrong</p>
                  <p className="text-sm text-red-700">Please try again or contact us via WhatsApp.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2" 
                  placeholder="Your Name" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2" 
                  placeholder="+255 ..." 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2" 
                  placeholder="you@example.com" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2" 
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status === "loading"}
                className="text-white px-8 py-3 rounded-md font-semibold transition-all w-full flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed" 
                style={{ backgroundColor: "#3D2817" }}
              >
                {status === "loading" ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-16" style={{ backgroundColor: "#FAF6F0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-light mb-3" style={{ color: "#3D2817" }}>Find Us On The Map</h2>
            <p className="text-gray-700 text-lg">Visit our workshop in Ipagala, Dodoma — near Upland Hotel</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: "#F5C518" }}>
                <MapPin className="w-7 h-7" style={{ color: "#3D2817" }} />
              </div>
              <h3 className="font-semibold mb-1" style={{ color: "#3D2817" }}>Our Location</h3>
              <p className="text-sm text-gray-700">Ipagala, Dodoma<br/>Near Upland Hotel</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: "#F5C518" }}>
                <Navigation className="w-7 h-7" style={{ color: "#3D2817" }} />
              </div>
              <h3 className="font-semibold mb-1" style={{ color: "#3D2817" }}>Get Directions</h3>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Upland+Hotel+Ipagala+Dodoma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm hover:underline font-medium"
                style={{ color: "#3D2817" }}
              >
                Open in Google Maps →
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: "#F5C518" }}>
                <Phone className="w-7 h-7" style={{ color: "#3D2817" }} />
              </div>
              <h3 className="font-semibold mb-1" style={{ color: "#3D2817" }}>Call Before Visiting</h3>
              <a href="tel:+255673585034" className="text-sm hover:underline font-medium" style={{ color: "#3D2817" }}>+255 673 585 034</a>
            </div>
          </div>

          {/* The Actual Map */}
          <div className="rounded-lg overflow-hidden shadow-2xl border-4" style={{ borderColor: "#F5C518" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.567894!2d35.7397!3d-6.1722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sUpland+Hotel%2C+Ipagala%2C+Dodoma!5e0!3m2!1sen!2stz!4v1700000000000!5m2!1sen!2stz"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mazuri Cultural Designs Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}