"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Mazuri Cultural Designs" width={50} height={50} className="h-12 w-auto" />
            <span className="text-lg font-bold hidden sm:inline" style={{ color: "#3D2817" }}></span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
  <Link href="/" className="text-sm font-semibold transition-colors hover:opacity-70" style={{ color: "#2D1810" }}>Home</Link>
  <Link href="/about" className="text-sm font-semibold transition-colors hover:opacity-70" style={{ color: "#2D1810" }}>About</Link>
  <Link href="/services" className="text-sm font-semibold transition-colors hover:opacity-70" style={{ color: "#2D1810" }}>Services</Link>
  <Link href="/portfolio" className="text-sm font-semibold transition-colors hover:opacity-70" style={{ color: "#2D1810" }}>Portfolio</Link>
  <Link href="/products" className="text-sm font-semibold transition-colors hover:opacity-70" style={{ color: "#2D1810" }}>Products</Link>
  <Link href="/contact" className="text-sm font-semibold transition-colors hover:opacity-70" style={{ color: "#2D1810" }}>Contact</Link>
</div>

          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className="block h-0.5 w-6" style={{ backgroundColor: "#3D2817" }}></span>
              <span className="block h-0.5 w-6" style={{ backgroundColor: "#3D2817" }}></span>
              <span className="block h-0.5 w-6" style={{ backgroundColor: "#3D2817" }}></span>
            </div>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block py-2 hover:opacity-70" style={{ color: "#2D1810" }} onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className="block py-2 hover:opacity-70" style={{ color: "#2D1810" }} onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/services" className="block py-2 hover:opacity-70" style={{ color: "#2D1810" }} onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/portfolio" className="block py-2 hover:opacity-70" style={{ color: "#2D1810" }} onClick={() => setIsOpen(false)}>Portfolio</Link>
            <Link href="/products" className="block py-2 hover:opacity-70" style={{ color: "#2D1810" }} onClick={() => setIsOpen(false)}>Products</Link>
            <Link href="/contact" className="block py-2 hover:opacity-70" style={{ color: "#2D1810" }} onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}