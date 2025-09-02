"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Gallery() {
  // Generate image paths
  const images = Array.from({ length: 10 }, (_, i) => `/img/1 (${i + 1}).jpeg`);
  
  // State for lightbox
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Open lightbox with selected image
  const openLightbox = (index) => {
    setSelectedImage(index);
    setLightboxOpen(true);
    // Disable body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
    // Re-enable body scroll
    document.body.style.overflow = 'unset';
  };

  // Navigate to next image in lightbox
  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  // Navigate to previous image in lightbox
  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  // Categorize images (you can modify this based on your actual image content)
  const categories = [
    { name: "All", count: images.length },
    { name: "Rooms", count: 40 },
    { name: "Common Areas", count: 25 },
    { name: "Facilities", count: 20 },
    { name: "Food", count: 18 },
    { name: "Events", count: 20 },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="min-h-screen" onKeyDown={handleKeyDown} tabIndex={0}>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-900">
            Shivam <span className="text-orange-500">PG</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-900 transition-colors">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-900 transition-colors">About</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-900 transition-colors">Services</Link>
            <Link href="/gallery" className="text-blue-900 font-semibold ">Gallery</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-900 transition-colors">Contact</Link>
          </div>

          {/* CTA (Desktop only) */}
          <a
            href="tel:+916289972173"
            className="hidden md:inline-block px-4 py-2 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-colors"
          >
            Call Now
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-blue-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
            <div className="flex flex-col px-6 py-4 space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-900" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-900" onClick={() => setIsOpen(false)}>About</Link>
              <Link href="/services" className="text-blue-900 font-semibold" onClick={() => setIsOpen(false)}>Services</Link>
              <Link href="/gallery" className="text-gray-700 hover:text-blue-900" onClick={() => setIsOpen(false)}>Gallery</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-900" onClick={() => setIsOpen(false)}>Contact</Link>

              {/* CTA in mobile */}
              <a
                href="tel:+916289972173"
                className="px-4 py-2 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-colors text-center"
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-96 w-full overflow-hidden">
        <Image
          src="/hero2.jpg" // Add this image to your public folder
          alt="Shivam PG Gallery"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Our Gallery
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center text-white space-x-2"
          >
            <Link href="/" className="hover:text-orange-400">Home</Link>
            <span>/</span>
            <span>Gallery</span>
          </motion.div>
        </div>
      </section>

      {/* Gallery Intro */}
      <section className="py-12 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-bold text-blue-900 mb-6"
          >
            Explore Shivam PG Through Our Lens
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xl text-gray-700 max-w-3xl mx-auto mb-8"
          >
            Take a visual tour of our facilities, rooms, common areas, and the vibrant community life at Shivam PG.
          </motion.p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-6 px-6 md:px-16 bg-blue-50 sticky top-16 z-30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeCategory === category.name
                    ? "bg-blue-900 text-white"
                    : "bg-white text-blue-900 hover:bg-blue-100"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {images.map((src, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="relative group overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-all"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={src}
                  alt={`Shivam PG Image ${index + 1}`}
                  width={300}
                  height={200}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3-3H7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white text-3xl z-10 hover:text-orange-400 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-10 hover:text-orange-400 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-10 hover:text-orange-400 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute -top-12 left-0 text-white text-lg">
                {selectedImage + 1} / {images.length}
              </div>

              {/* Main Image */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={images[selectedImage]}
                  alt={`Shivam PG Image ${selectedImage + 1}`}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>

              {/* Thumbnail Strip */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center overflow-x-auto py-2">
                <div className="flex space-x-2">
                  {images.slice(
                    Math.max(0, selectedImage - 3),
                    Math.min(images.length, selectedImage + 4)
                  ).map((src, idx) => {
                    const actualIndex = Math.max(0, selectedImage - 3) + idx;
                    return (
                      <div
                        key={actualIndex}
                        onClick={() => setSelectedImage(actualIndex)}
                        className={`w-16 h-16 cursor-pointer border-2 rounded overflow-hidden ${
                          actualIndex === selectedImage ? "border-orange-500" : "border-transparent"
                        }`}
                      >
                        <Image
                          src={src}
                          alt={`Thumbnail ${actualIndex + 1}`}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-bold mb-6"
          >
            See It For Yourself
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xl mb-8"
          >
            Pictures speak a thousand words, but seeing our facilities in person is even better.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="tel:+916289972173"
              className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transition-colors"
            >
              Schedule a Visit
            </a>
            <a
              href="/contact"
              className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              Ask Questions
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}