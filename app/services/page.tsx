import { Sofa, Home, Palette, Sparkles, Building2, Ruler } from "lucide-react";

export default function Services() {
  const services = [
    { icon: Sofa, title: "Handmade Furniture", desc: "Custom-crafted chairs, tables, beds, and storage solutions made from premium local materials. Each piece is unique and built to last generations." },
    { icon: Home, title: "Interior Design Consultation", desc: "Professional design services to transform your home or office space with culturally-rich, modern aesthetics tailored to your taste." },
    { icon: Palette, title: "Cultural Home Decor", desc: "Authentic African accessories including wall art, textiles, sculptures, and decorative pieces that bring warmth and character to any space." },
    { icon: Sparkles, title: "Custom Design Solutions", desc: "Bespoke design projects from concept to completion. We work closely with clients to bring their vision to life." },
    { icon: Building2, title: "Commercial Projects", desc: "Specialized design solutions for restaurants, hotels, offices, and retail spaces seeking authentic African aesthetics." },
    { icon: Ruler, title: "Space Planning", desc: "Expert planning and layout design to maximize functionality and beauty in residential and commercial spaces." },
  ];

  return (
    <div className="pt-20">
      <section className="py-20 text-white" style={{ backgroundColor: "#3D2817" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-4">Our Services</h1>
          <p className="text-xl" style={{ color: "#F5C518" }}>Crafting Beautiful Spaces, Telling African Stories</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="p-8 rounded-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-t-4" style={{ backgroundColor: "#FAF6F0", borderColor: "#F5C518" }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "#F5C518" }}>
                    <Icon className="w-8 h-8" style={{ color: "#3D2817" }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: "#3D2817" }}>{s.title}</h3>
                  <p className="text-gray-700">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}