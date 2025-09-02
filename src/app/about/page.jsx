"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
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
            <Link href="/" className="text-gray-700 hover:text-blue-900 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-blue-900 font-semibold">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-900 transition-colors">
              Services
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-blue-900 transition-colors">
              Gallery
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-900 transition-colors">
              Contact
            </Link>
          </div>

          {/* Call to Action (Desktop only) */}
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
              <Link href="/" className="text-gray-700 hover:text-blue-900" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="text-blue-900 font-semibold" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-900" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link href="/gallery" className="text-gray-700 hover:text-blue-900" onClick={() => setIsOpen(false)}>
                Gallery
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-900" onClick={() => setIsOpen(false)}>
                Contact
              </Link>

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
      <section className="relative h-80 sm:h-96 w-full overflow-hidden">
        <Image
          src="/hero2.jpg"
          alt="Shivam PG Building"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            About Shivam PG
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center text-white space-x-2 text-sm sm:text-base"
          >
            <Link href="/" className="hover:text-orange-400">
              Home
            </Link>
            <span>/</span>
            <span>About Us</span>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 text-sm sm:text-base">
                <p>
                  Founded in 2010, Shivam PG began with a simple vision: to create a safe, comfortable, and 
                  supportive living environment for students pursuing their dreams in Kolkata.
                </p>
                <p>
                  What started as a small facility with just 10 rooms has now grown into one of Salt Lake's 
                  most trusted PG accommodations, housing over 100 students from prestigious institutions 
                  like IEM and Techno India.
                </p>
                <p>
                  For more than a decade, we've been the preferred choice for students and their parents 
                  who value safety, hygiene, and a conducive study environment.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/img/1 (8).jpeg"
                alt="Shivam PG Founder"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

       

      {/* Mission & Vision Section */}
      <section className="py-16 px-6 md:px-16 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-bold text-center text-blue-900 mb-12"
          >
            Our Mission & Vision
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-orange-500"
            >
              <div className="text-4xl text-blue-900 mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To provide students with a secure, hygienic, and comfortable living space that feels like 
                home, while supporting their academic journey with nutritious food, high-speed internet, 
                and a study-friendly environment.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-blue-500"
            >
              <div className="text-4xl text-blue-900 mb-4">🔭</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To become Kolkata's most trusted student accommodation provider, known for excellence in 
                service, safety standards, and creating an environment where students can thrive both 
                academically and personally.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-bold text-center text-blue-900 mb-12"
          >
            Our Values
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
                icon: "🛡️",
                title: "Safety First",
                description: "We prioritize the safety and security of our students above all else, with 24/7 security, CCTV surveillance, and separate buildings for boys and girls."
              },
              {
                icon: "🧹",
                title: "Cleanliness",
                description: "Maintaining impeccable hygiene standards is non-negotiable. Our facilities are cleaned daily, and we follow strict hygiene protocols."
              },
              {
                icon: "📚",
                title: "Academic Focus",
                description: "We create an environment conducive to studying with quiet hours, high-speed Wi-Fi, and dedicated study areas."
              },
              {
                icon: "❤️",
                title: "Care & Support",
                description: "We treat our students like family, providing emotional support and guidance when they're away from home."
              },
              {
                icon: "🍽️",
                title: "Nutrition",
                description: "We believe healthy food fuels academic success. Our meals are nutritious, balanced, and prepared with care."
              },
              {
                icon: "🤝",
                title: "Community",
                description: "We foster a sense of community where students from diverse backgrounds can connect, share experiences, and grow together."
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-blue-50 p-6 rounded-2xl border border-blue-100 hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 md:px-16 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-bold text-center mb-4"
          >
            Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center text-blue-200 max-w-2xl mx-auto mb-12"
          >
            Meet the dedicated team that makes Shivam PG a home away from home for our students
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Sharma",
                role: "Founder & Manager",
                image: "/team-founder.jpg", // Add this image
                description: "With over 12 years of experience in student accommodation, Rajesh ensures every aspect of Shivam PG meets the highest standards."
              },
              {
                name: "Priya Singh",
                role: "Head of Hospitality",
                image: "/team-hospitality.jpg", // Add this image
                description: "Priya oversees daily operations, food service, and ensures our students' comfort and needs are always prioritized."
              },
              {
                name: "Security Team",
                role: "Safety & Security",
                image: "/team-security.jpg", // Add this image
                description: "Our trained security personnel work 24/7 to ensure a safe environment for all our residents."
              }
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center"
              >
                <div className="relative h-64 w-64 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-orange-300 mb-4">{member.role}</p>
                <p className="text-blue-200">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-bold text-center text-blue-900 mb-12"
          >
            Why Choose Shivam PG?
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="space-y-6">
                {[
                  {
                    title: "Proven Track Record",
                    description: "10+ years of experience with hundreds of satisfied students and parents"
                  },
                  {
                    title: "Prime Location",
                    description: "Walking distance to IEM, Techno India, and other educational institutions"
                  },
                  {
                    title: "Safety Assurance",
                    description: "Separate buildings for boys and girls with 24/7 security personnel"
                  },
                  {
                    title: "Homely Environment",
                    description: "Carefully designed spaces that feel like home, not just a lodging facility"
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 + 0.3, duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex items-start"
                  >
                    <div className="bg-orange-100 p-2 rounded-lg mr-4 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-blue-900 mb-1">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-blue-900 text-white p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold mb-6">Our Numbers Speak</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "10+", label: "Years Experience" },
                  { number: "100+", label: "Happy Students" },
                  { number: "24/7", label: "Security" },
                  { number: "2", label: "Campuses" }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 + 0.5, duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-orange-400 mb-2">{stat.number}</div>
                    <div className="text-blue-200">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
            Experience the Shivam PG Difference
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xl mb-8"
          >
            Book a visit today and see for yourself why we're the preferred choice for students in Kolkata
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
    </div>
  );
}
