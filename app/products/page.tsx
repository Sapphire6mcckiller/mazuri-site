import { Sofa, MessageCircle } from "lucide-react";

export default function Products() {
  const products = [
    { name: "Cultural Dining Set", category: "Furniture", desc: "8-seater handcrafted dining table" },
    { name: "Heritage Bed Frame", category: "Furniture", desc: "King-size carved wooden bed" },
    { name: "African Wall Art", category: "Decor", desc: "Hand-painted canvas collection" },
    { name: "Woven Storage Baskets", category: "Decor", desc: "Traditional weaving techniques" },
    { name: "Carved Side Tables", category: "Furniture", desc: "Set of decorative side tables" },
    { name: "Maasai Pattern Cushions", category: "Decor", desc: "Vibrant traditional patterns" },
  ];

  return (
    <div className="pt-20">
      <section className="py-20 text-white" style={{ backgroundColor: "#3D2817" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-4">Our Products</h1>
          <p className="text-xl" style={{ color: "#F5C518" }}>Authentic Handcrafted Pieces</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <div key={i} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all">
                <div className="h-64 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #FAF6F0 0%, #F5C518 100%)" }}>
                  <Sofa className="w-24 h-24" style={{ color: "#3D2817", opacity: 0.5 }} />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase" style={{ color: "#3D2817" }}>{p.category}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-2" style={{ color: "#3D2817" }}>{p.name}</h3>
                  <p className="text-gray-700 mb-4">{p.desc}</p>
                  <a href={`https://wa.me/255673585034?text=I'm interested in ${p.name}`} target="_blank" className="inline-flex items-center gap-2 text-white px-4 py-2 rounded-md text-sm hover:opacity-90 transition-all" style={{ backgroundColor: "#3D2817" }}>
                    <MessageCircle className="w-4 h-4" />
                    Request Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}