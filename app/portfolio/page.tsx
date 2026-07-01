"use client";
import Image from "next/image";
import { useState } from "react";
import { MapPin, Calendar, Tag, X, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Modern African Living Room",
    category: "Residential",
    location: "Dodoma, Tanzania",
    year: "2026",
    image: "/images/service-interior.jpg",
    description: "Complete transformation of a modern family living room, blending contemporary design with traditional African elements.",
  },
  {
    id: 2,
    title: "Boutique Hotel Suite",
    category: "Commercial",
    location: "Arusha, Tanzania",
    year: "2025",
    image: "/images/product-2.jpg",
    description: "Designed 12 luxury suites for a boutique hotel, incorporating authentic African aesthetics with modern comfort.",
  },
  {
    id: 3,
    title: "Executive Office Space",
    category: "Commercial",
    location: "Dar es Salaam",
    year: "2023",
    image: "/images/service-furniture.jpg",
    description: "Elegant office design combining modern functionality with cultural pride, featuring handcrafted desks and meeting tables.",
  },
  {
    id: 4,
    title: "Traditional Dining Space",
    category: "Residential",
    location: "Dodoma, Tanzania",
    year: "2024",
    image: "/images/product-1.jpg",
    description: "Custom 8-seater dining set with intricate carvings and complementary wall art celebrating Tanzanian heritage.",
  },
  {
    id: 5,
    title: "Cultural Restaurant",
    category: "Commercial",
    location: "Mwanza, Tanzania",
    year: "2023",
    image: "/images/service-decor.jpg",
    description: "Complete interior design for an upscale restaurant featuring authentic African cuisine and warm earth tones.",
  },
  {
    id: 6,
    title: "Master Bedroom Retreat",
    category: "Residential",
    location: "Morogoro, Tanzania",
    year: "2024",
    image: "/images/product-6.jpg",
    description: "Serene master bedroom design with a custom king-size bed frame and coordinating textiles.",
  },
  {
    id: 7,
    title: "Art Gallery Interior",
    category: "Commercial",
    location: "Dodoma, Tanzania",
    year: "2023",
    image: "/images/product-3.jpg",
    description: "Interior design for a cultural art gallery with custom display shelving and ambient lighting.",
  },
  {
    id: 8,
    title: "Family Living Space",
    category: "Residential",
    location: "Dodoma, Tanzania",
    year: "2024",
    image: "/images/hero-bg.jpg",
    description: "Full family home transformation with custom furniture and cultural accessories.",
  },
];

const categories = ["All", "Residential", "Commercial"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const nextProject = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
  };

  const prevProject = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1;
    setSelectedProject(filteredProjects[prevIndex]);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 text-white" style={{ backgroundColor: "#3D2817" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-4">Our Portfolio</h1>
          <p className="text-xl" style={{ color: "#F5C518" }}>Explore Our Completed Projects</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold" style={{ color: "#3D2817" }}>200+</div>
              <div className="text-sm text-gray-600">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: "#3D2817" }}>50+</div>
              <div className="text-sm text-gray-600">Commercial</div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: "#3D2817" }}>150+</div>
              <div className="text-sm text-gray-600">Residential</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="px-6 py-2 rounded-full font-semibold transition-all"
                style={{
                  backgroundColor: selectedCategory === cat ? "#3D2817" : "#FAF6F0",
                  color: selectedCategory === cat ? "#F5C518" : "#3D2817",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => openModal(project)}
                className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#F5C518", color: "#3D2817" }}>
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: "#3D2817" }}>{project.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#FAF6F0" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: "#3D2817" }}>
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            Let&apos;s bring your vision to life with authentic African design
          </p>
          <a
            href="https://wa.me/255673585034?text=Hi! I'd like to discuss a project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-all"
            style={{ backgroundColor: "#3D2817", color: "white" }}
          >
            Start Your Project
          </a>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white p-2 rounded-full shadow-lg hover:opacity-80"
              aria-label="Close"
            >
              <X className="w-5 h-5" style={{ color: "#3D2817" }} />
            </button>

            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:opacity-80"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" style={{ color: "#3D2817" }} />
            </button>

            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:opacity-80"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" style={{ color: "#3D2817" }} />
            </button>

            <div className="relative h-96 w-full">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>

            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1" style={{ backgroundColor: "#F5C518", color: "#3D2817" }}>
                  <Tag className="w-3 h-3" />
                  {selectedProject.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1" style={{ backgroundColor: "#FAF6F0", color: "#3D2817" }}>
                  <MapPin className="w-3 h-3" />
                  {selectedProject.location}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1" style={{ backgroundColor: "#FAF6F0", color: "#3D2817" }}>
                  <Calendar className="w-3 h-3" />
                  {selectedProject.year}
                </span>
              </div>

              <h2 className="text-3xl font-light mb-4" style={{ color: "#3D2817" }}>
                {selectedProject.title}
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <a
                href={`https://wa.me/255673585034?text=Hi! I'm interested in a project like "${selectedProject.title}"`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-all"
                style={{ backgroundColor: "#3D2817", color: "white" }}
              >
                Request Similar Project
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}