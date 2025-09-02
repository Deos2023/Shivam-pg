"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const images = ["/hero1.jpg"];
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  // Auto change background every 4s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle WhatsApp message sending
  const sendWhatsAppMessage = (e) => {
    e.preventDefault();
    const phoneNumber = "916289972173"; // Your WhatsApp number
    const message = `Hello, I'm ${formData.name}. My phone number is ${formData.phone}. ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

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
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: current === index ? 1 : 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0"
            >
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/40"></div>
            </motion.div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
          >
            Welcome to <span className="text-orange-400">Shivam PG</span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl"
          >
            Comfortable, Secure & Luxury PG Accommodation in Salt Lake, Kolkata
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.a
              href="tel:+916289972173"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600"
            >
              Call Now
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-full shadow-lg hover:bg-gray-100"
            >
              Book a Visit
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="animate-bounce w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>

      {/* About Us */}
      <section className="bg-white py-16 px-6 md:px-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl font-bold text-blue-900 mb-6"
        >
          About Us
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          At <span className="text-orange-500 font-semibold">Shivam PG</span>,
          we believe in providing not just accommodation, but a true{" "}
          <span className="font-semibold">home away from home</span>. With 10+
          years of experience and over 100 IEM students staying with us, we are
          known for our{" "}
          <span className="text-blue-700 font-medium">
            safety, hygiene, quality food
          </span>{" "}
          and{" "}
          <span className="text-orange-500 font-medium">
            study-friendly environment
          </span>
          .
        </motion.p>
      </section>

      {/* Services Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 py-16 px-6 md:px-16 text-white">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl font-bold text-center mb-4"
        >
          Our Premium Services
        </motion.h2>
        <motion.p 
          className="text-center text-blue-100 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Experience luxury living with our comprehensive range of amenities designed for student comfort
        </motion.p>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { 
              title: "Secure Accommodation", 
              desc: "24/7 security, CCTV surveillance, and separate buildings for boys and girls",
              icon: "🔒"
            },
            { 
              title: "Nutritious Meals", 
              desc: "Home-cooked meals with weekly menu planning and special diet options",
              icon: "🍽️"
            },
            { 
              title: "Study Environment", 
              desc: "Dedicated study areas, high-speed Wi-Fi, and peaceful atmosphere",
              icon: "📚"
            },
            { 
              title: "Housekeeping", 
              desc: "Daily cleaning services, laundry facilities, and regular maintenance",
              icon: "🧹"
            }
          ].map((service, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-blue-100">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* What We Offer */}
      <section className="bg-blue-50 py-16 px-6 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl font-bold text-center text-blue-900 mb-12"
        >
          What We Offer
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            "Separate buildings for Boys & Girls",
            "Special security for female guests",
            "Nutritious home-cooked meals",
            "Daily Cleaning & Hygiene",
            "High-speed Wi-Fi & Study Environment",
            "Close to IEM & Techno India",
            "Regular Power Backup",
            "Recreational Common Areas",
            "Affordable Pricing Packages"
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-orange-400 hover:shadow-xl flex items-start"
            >
              <div className="bg-orange-100 p-2 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-lg font-medium text-gray-700">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section 1 */}
      <section className="py-16 px-6 md:px-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-bold mb-6"
          >
            Ready to Experience Premium PG Living?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Join our community of satisfied students and focus on what matters most - your studies
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600"
            >
              Book Now
            </motion.a>
            <motion.a
              href="tel:+916289972173"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-full shadow-lg hover:bg-gray-100"
            >
              Call for Inquiry
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white py-16 px-6 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl font-bold text-center text-blue-900 mb-12"
        >
          Gallery
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {["/img/1 (1).jpeg", "/img/1 (2).jpeg", "/img/1 (3).jpeg", "/img/1 (4).jpeg", "/img/1 (5).jpeg", "/img/1 (6).jpeg"].map((img, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn}
              whileHover={{ y: -10, scale: 1.02 }}
              className="overflow-hidden rounded-xl shadow-lg group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3-3H7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Link
            href="/gallery"
            className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-full font-medium shadow hover:bg-orange-600 group"
          >
            View More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
      </section>

     {/* Food Menu Section */}
<section className="bg-blue-50 py-16 px-6 md:px-16 text-center">
  <motion.h2
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, margin: "-100px" }}
    className="text-3xl font-bold text-blue-900 mb-6"
  >
    Food Menu
  </motion.h2>

  <motion.p
    className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.3, duration: 0.8 }}
    viewport={{ once: true, margin: "-100px" }}
  >
    We Provide <span className="text-orange-500 font-semibold">Breakfast & Dinner</span> 
    from Monday to Friday. On{" "}
    <span className="text-blue-700 font-medium">Saturday & Sunday</span>,
    we serve Breakfast, Lunch & Dinner.
    <br />
    <strong>Time Schedule:</strong> <br />
    Breakfast: 8 AM – 10 AM | Lunch: 12.30 PM – 2.30 PM | Dinner: 8 PM – 10 PM
  </motion.p>

  {/* Food Chart Image */}
  <motion.div
    className="flex justify-center mt-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 0.8 }}
    viewport={{ once: true, margin: "-100px" }}
  >
    <div className="rounded-xl shadow-lg overflow-hidden max-w-sm sm:max-w-md">
      <Image
        src="/menu.png"
        alt="Food Chart"
        width={500}
        height={700}
        className="object-contain w-full h-auto"
      />
    </div>
  </motion.div>
</section>


      {/* Testimonials Section */}
      <section className="py-16 px-6 md:px-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl font-bold text-center mb-12"
        >
          What Our Students Say
        </motion.h2>
        
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                text: "Shivam PG has been my home for 2 years. The food is homely, environment is perfect for studies, and the wardens are very supportive.",
                author: "Rahul Sharma",
                college: "IEM Kolkata"
              },
              {
                text: "As a female student, safety was my priority. Shivam PG exceeded my expectations with their security measures and separate accommodation.",
                author: "Priya Singh",
                college: "Techno India"
              },
              {
                text: "The best decision I made for my college life. Made great friends, focused on studies, and enjoyed the nutritious food every day.",
                author: "Amit Kumar",
                college: "IEM Kolkata"
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
              >
                <div className="flex items-center mb-4">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="italic mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-blue-200 text-sm">{testimonial.college}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section 2 */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-bold text-blue-900 mb-6"
          >
            Limited Seats Available
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Don't miss out on the opportunity to secure your spot in Kolkata's most preferred PG
          </motion.p>
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-blue-800 p-1 rounded-2xl inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-white py-2 px-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between">
              <span className="font-semibold text-blue-900 mb-2 sm:mb-0">Special Offer: Get 10% off on first month</span>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600"
              >
                Claim Offer
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 px-6 md:px-16 bg-blue-50">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-bold text-center text-blue-900 mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="text-center text-gray-700 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Have questions or want to book a visit? Send us a message directly on WhatsApp
          </motion.p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Contact Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Phone Number</h4>
                    <a href="tel:+916289972173" className="text-blue-600 hover:text-blue-800">+91 6289972173</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Location</h4>
                    <p className="text-gray-600">Mb 217 , Mahishbathan , Saltlake, Sector V , <br /> Kolkata 700102 ( Landmark: Shani Mandir ) , North 24 Parganas,
West Bengal, 700102</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Visiting Hours</h4>
                    <p className="text-gray-600">10:00 AM - 6:00 PM<br />Monday to Saturday</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <motion.a 
                    href="#" 
                    whileHover={{ y: -5 }}
                    className="bg-blue-100 h-10 w-10 rounded-full flex items-center justify-center"
                  >
                    <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    whileHover={{ y: -5 }}
                    className="bg-blue-100 h-10 w-10 rounded-full flex items-center justify-center"
                  >
                    <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    whileHover={{ y: -5 }}
                    className="bg-blue-100 h-10 w-10 rounded-full flex items-center justify-center"
                  >
                    <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-blue-900 mb-6">Send us a Message via WhatsApp</h3>
              
              <form onSubmit={sendWhatsAppMessage}>
                <div className="space-y-4 text-neutral-700">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                    </svg>
                    Send via WhatsApp
                  </motion.button>
                </div>
              </form>
              
              <p className="text-sm text-gray-500 mt-4">
                By clicking the button, you will be redirected to WhatsApp to send us your message directly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
    
    </div>
  );
}