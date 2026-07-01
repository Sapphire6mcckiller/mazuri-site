import { Target, Globe, Sparkles } from "lucide-react";

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="py-20 text-white" style={{ backgroundColor: "#3D2817" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-4">About Us</h1>
          <p className="text-xl" style={{ color: "#F5C518" }}>Our Story, Our Heritage, Our Craft</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div>
            <h2 className="text-3xl font-light mb-4" style={{ color: "#3D2817" }}>Our Story</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Mazuri Cultural Designs was founded with a passion for preserving and celebrating African heritage through exceptional craftsmanship. Based in Dodoma, Tanzania, we have grown into a leading cultural design company recognized for our unique blend of traditional artistry and modern design.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4" style={{ color: "#3D2817" }}>Our Mission</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              To create exceptional handmade products and interior design services that celebrate African heritage while embracing contemporary design aesthetics. Every piece we create tells a story of our rich cultural legacy.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-4" style={{ color: "#3D2817" }}>Our Vision</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              To become the leading cultural design company in Africa, celebrated for our unique craftsmanship, innovation, and commitment to cultural preservation for future generations.
            </p>
          </div>

          {/* Values Cards */}
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="text-center p-8 rounded-lg border-t-4" style={{ backgroundColor: "#FAF6F0", borderColor: "#F5C518" }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#F5C518" }}>
                <Target className="w-8 h-8" style={{ color: "#3D2817" }} />
              </div>
              <h3 className="font-semibold mb-2 text-lg" style={{ color: "#3D2817" }}>Quality</h3>
              <p className="text-sm text-gray-700">Premium materials and craftsmanship in every piece</p>
            </div>
            <div className="text-center p-8 rounded-lg border-t-4" style={{ backgroundColor: "#FAF6F0", borderColor: "#F5C518" }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#F5C518" }}>
                <Globe className="w-8 h-8" style={{ color: "#3D2817" }} />
              </div>
              <h3 className="font-semibold mb-2 text-lg" style={{ color: "#3D2817" }}>Heritage</h3>
              <p className="text-sm text-gray-700">Celebrating and preserving African culture</p>
            </div>
            <div className="text-center p-8 rounded-lg border-t-4" style={{ backgroundColor: "#FAF6F0", borderColor: "#F5C518" }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#F5C518" }}>
                <Sparkles className="w-8 h-8" style={{ color: "#3D2817" }} />
              </div>
              <h3 className="font-semibold mb-2 text-lg" style={{ color: "#3D2817" }}>Innovation</h3>
              <p className="text-sm text-gray-700">Blending tradition with modern design</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}