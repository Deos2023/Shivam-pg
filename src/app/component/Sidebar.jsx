"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 focus:outline-none fixed top-4 left-4 z-50 bg-orange-500 rounded-md"
      >
        {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-orange-500 text-white shadow-lg transform transition-transform duration-300 z-40 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col items-start p-6 space-y-6">
          <h2 className="text-2xl font-bold border-b pb-2 pt-20 w-full">Shivam PG</h2>
          <nav className="flex flex-col space-y-4 text-lg font-medium">
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-gray-200">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-gray-200">About</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-gray-200">Services</Link>
            <Link href="/gallery" onClick={() => setIsOpen(false)} className="hover:text-gray-200">Gallery</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-gray-200">Contact Us</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
