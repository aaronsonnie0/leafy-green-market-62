
import React from "react";
import { motion } from "framer-motion";
import { Leaf, Droplet, Recycle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-leaf-50 to-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Bringing nature's beauty into your living spaces since 2018.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="aspect-video md:aspect-square bg-white shadow-xl rounded-lg overflow-hidden"
            >
              <img
                src="/placeholder.svg"
                alt="Greenhouse with plants"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl font-serif font-semibold text-gray-800 mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600">
                  At Greens & Pots, our mission is to reconnect people with nature by bringing the beauty and benefits of plants into everyday living spaces. We believe that everyone deserves access to high-quality, sustainably sourced plants that improve wellbeing and enhance interior environments.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-serif font-semibold text-gray-800 mb-4">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-600">
                  We envision a world where urban spaces are transformed into green sanctuaries, where sustainable practices are the norm, and where the therapeutic benefits of plants are accessible to all. We strive to be leaders in promoting environmental consciousness through beautiful, thoughtfully curated botanical products.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Section */}
      <section className="py-20 bg-leaf-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to making a positive environmental impact through our business practices. Here's what we've accomplished so far:
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Plants Delivered */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-leaf-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-12 h-12 text-leaf-600" />
              </div>
              <motion.h3 
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  delay: 0.4
                }}
                viewport={{ once: true }}
                className="text-5xl font-bold text-gray-800 mb-3"
              >
                25,000+
              </motion.h3>
              <p className="text-lg text-gray-600">Plants Delivered</p>
            </motion.div>
            
            {/* Oxygen Produced */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-leaf-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplet className="w-12 h-12 text-leaf-600" />
              </div>
              <motion.h3 
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  delay: 0.5
                }}
                viewport={{ once: true }}
                className="text-5xl font-bold text-gray-800 mb-3"
              >
                44,000+
              </motion.h3>
              <p className="text-lg text-gray-600">Liters of Oxygen Produced</p>
            </motion.div>
            
            {/* Pots Recycled */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-leaf-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Recycle className="w-12 h-12 text-leaf-600" />
              </div>
              <motion.h3 
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  delay: 0.6
                }}
                viewport={{ once: true }}
                className="text-5xl font-bold text-gray-800 mb-3"
              >
                16,500+
              </motion.h3>
              <p className="text-lg text-gray-600">Pots Recycled</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold text-gray-800 mb-4">
              Our Values
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-leaf-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to environmentally responsible practices throughout our business, from sourcing to packaging.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-leaf-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality</h3>
              <p className="text-gray-600">
                We carefully select and nurture each plant, ensuring that only the healthiest specimens reach your home.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-leaf-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Education</h3>
              <p className="text-gray-600">
                We believe in empowering our customers with knowledge to help their plants thrive for years to come.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-leaf-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold text-gray-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our passionate team of plant experts and designers work together to bring you the best botanical experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square bg-gray-200">
                  <img 
                    src="/placeholder.svg" 
                    alt={`Team Member ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">Team Member {i}</h3>
                  <p className="text-leaf-600 mb-3">Plant Specialist</p>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-leaf-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-semibold text-white mb-4">
              Join our green revolution
            </h2>
            <p className="text-leaf-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for plant care tips, new arrivals, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-leaf-400"
              />
              <button className="bg-white text-leaf-600 hover:bg-leaf-50 px-6 py-3 rounded-md font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
