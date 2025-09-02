"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Services() {
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
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header with Navigation */}
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
            <Link href="/services" className="text-blue-900 font-semibold">Services</Link>
            <Link href="/gallery" className="text-gray-700 hover:text-blue-900 transition-colors">Gallery</Link>
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

      {/* ✅ All your existing sections remain the same below */}
      {/* Hero, Intro, Accommodation Options, Meal Services, Amenities, Security, Additional Services, Pricing, CTA */}

      {/* Hero Section */}
      <section className="relative h-[24rem] w-full overflow-hidden">
        <Image src="/hero2.jpg" alt="Shivam PG Services" fill className="object-cover" />
        <div className="absolute inset-0 bg-blue-900/30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Our Services & Amenities
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center text-white space-x-2 text-sm sm:text-base"
          >
            <Link href="/" className="hover:text-orange-400">Home</Link>
            <span>/</span>
            <span>Services</span>
          </motion.div>
        </div>
      </section>

      
      {/* Introduction Section */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-bold text-blue-900 mb-6"
          >
            Comprehensive Student Living Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            At Shivam PG, we provide more than just accommodation. We offer a complete living experience designed to support students' academic success and personal well-being.
          </motion.p>
        </div>
      </section>

      {/* Accommodation Options */}
      <section className="py-16 px-6 md:px-16 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-bold text-center text-blue-900 mb-12"
          >
            Accommodation Options
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Single Occupancy",
                price: "₹8,500/month",
                image: "/single-room.jpg",
                features: ["Private room", "Study table & chair", "Attached bathroom", "Cupboard", "High-speed Wi-Fi"]
              },
              {
                title: "Double Sharing",
                price: "₹6,500/month",
                image: "/double-room.jpg",
                features: ["Spacious room for two", "Individual beds", "Study tables", "Attached bathroom", "High-speed Wi-Fi"]
              },
              {
                title: "Triple Sharing",
                price: "₹5,500/month",
                image: "/triple-room.jpg",
                features: ["Economical option", "Three separate beds", "Study tables", "Shared bathroom", "High-speed Wi-Fi"]
              }
            ].map((option, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={option.image}
                    alt={option.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{option.title}</h3>
                  <p className="text-orange-500 font-semibold mb-4">{option.price}</p>
                  <ul className="space-y-2">
                    {option.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full bg-blue-900 text-white py-2 rounded-lg font-medium hover:bg-blue-800 transition-colors">
                    Enquire Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meal Services */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/food-service.jpg" // Add this image
                alt="Shivam PG Food Service"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Nutritious Meal Service</h2>
              <p className="text-gray-700 mb-6">
                We understand that proper nutrition is essential for academic performance. Our in-house kitchen serves hygienic, balanced meals prepared with fresh ingredients.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-blue-900 mb-1">Three Meals Daily</h3>
                    <p className="text-gray-700">Breakfast, lunch, and dinner served at fixed timings</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-blue-900 mb-1">Varied Menu</h3>
                    <p className="text-gray-700">Regular rotation of dishes with North and South Indian options</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-blue-900 mb-1">Special Dietary Needs</h3>
                    <p className="text-gray-700">We accommodate special dietary requirements with prior notice</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 px-6 md:px-16 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-bold text-center text-blue-900 mb-12"
          >
            Premium Amenities
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                icon: "📶",
                title: "High-Speed Internet",
                description: "Uninterrupted Wi-Fi throughout the facility for study and entertainment"
              },
              {
                icon: "🧼",
                title: "Housekeeping",
                description: "Daily cleaning of rooms and common areas to maintain hygiene"
              },
              {
                icon: "🧺",
                title: "Laundry Service",
                description: "Regular laundry service for all residents at no extra cost"
              },
              {
                icon: "📚",
                title: "Study Room",
                description: "Dedicated quiet study area with ample seating and lighting"
              },
              {
                icon: "📺",
                title: "Common TV Lounge",
                description: "Spacious lounge with television for relaxation and socializing"
              },
              {
                icon: "💧",
                title: "24/7 Water Supply",
                description: "Round-the-clock hot and cold water availability"
              },
              {
                icon: "⚡",
                title: "Power Backup",
                description: "Generator backup for uninterrupted power supply"
              },
              {
                icon: "🚪",
                title: "Secure Access",
                description: "Biometric access control systems for enhanced security"
              },
              {
                icon: "🏥",
                title: "First Aid",
                description: "Basic medical assistance and first aid available on premises"
              }
            ].map((amenity, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white p-6 rounded-2xl border border-blue-100 hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-4">{amenity.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{amenity.title}</h3>
                <p className="text-gray-700">{amenity.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-bold text-center text-blue-900 mb-12"
          >
            Safety & Security
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">Your Safety is Our Priority</h3>
              <div className="space-y-6">
                {[
                  "24/7 security personnel with regular patrols",
                  "CCTV surveillance in common areas and entry points",
                  "Separate buildings for male and female students",
                  "Biometric access control for entry",
                  "Fire safety equipment and emergency protocols",
                  "Visitor management system with registration"
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 + 0.3, duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex items-start"
                  >
                    <div className="bg-green-100 p-2 rounded-lg mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-lg">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/security.jpg" // Add this image
                alt="Security at Shivam PG"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6 md:px-16 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-bold text-center mb-12"
          >
            Additional Services
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-3xl mr-3">🎓</span> Academic Support
              </h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>Quiet study hours enforced after 9 PM</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>Group study sessions organized</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>Exam time special arrangements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>Library book exchange program</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-3xl mr-3">🚗</span> Transportation & Local Support
              </h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>Guidance on local transportation options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>Help with local documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>Emergency support system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>Parent communication portal</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-bold text-center text-blue-900 mb-4"
          >
            Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center text-gray-700 max-w-2xl mx-auto mb-12"
          >
            No hidden charges. Our all-inclusive pricing covers everything you need for a comfortable stay.
          </motion.p>
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-blue-200">
                    <th className="pb-4 text-blue-900">Room Type</th>
                    <th className="pb-4 text-blue-900">Monthly Rent</th>
                    <th className="pb-4 text-blue-900">Security Deposit</th>
                    <th className="pb-4 text-blue-900">Included Services</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-blue-100">
                    <td className="py-4 font-medium">Single Occupancy</td>
                    <td className="py-4">₹8,500</td>
                    <td className="py-4">₹10,000</td>
                    <td className="py-4">All meals, Wi-Fi, laundry, utilities</td>
                  </tr>
                  <tr className="border-b border-blue-100">
                    <td className="py-4 font-medium">Double Sharing</td>
                    <td className="py-4">₹6,500</td>
                    <td className="py-4">₹8,000</td>
                    <td className="py-4">All meals, Wi-Fi, laundry, utilities</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium">Triple Sharing</td>
                    <td className="py-4">₹5,500</td>
                    <td className="py-4">₹6,000</td>
                    <td className="py-4">All meals, Wi-Fi, laundry, utilities</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-sm text-gray-600">* Security deposit refundable at the time of vacating after deduction for any damages</p>
          </div>
        </div>
      </section>

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
            Ready to Experience Shivam PG?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xl mb-8"
          >
            Book a tour today and see our facilities for yourself
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
              Call to Book a Visit
            </a>
            <a
              href="/contact"
              className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              Send a Message
            </a>
          </motion.div>
        </div>
      </section>

      {/* 🔽 Keep all your sections here (unchanged from your code) 🔽 */}
      {/* Introduction, Accommodation Options, Meal Services, Amenities, Security Features, Additional Services, Pricing, CTA */}
    </div>
  );
}
