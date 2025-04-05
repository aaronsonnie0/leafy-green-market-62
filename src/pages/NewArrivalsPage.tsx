
import React from "react";
import Layout from "@/components/layout/Layout";
import ProductGrid from "@/components/products/ProductGrid";
import { products } from "@/data/products";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const NewArrivalsPage = () => {
  // Filter products that are newer (assuming the first 8 products are the newest)
  const newArrivals = products.slice(0, 8);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center mb-4"
            >
              <span className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-leaf-50 dark:bg-leaf-900/30">
                <Sparkles className="h-8 w-8 text-leaf-600 dark:text-leaf-400" />
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl font-serif font-bold text-gray-800 dark:text-gray-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              New Arrivals
            </motion.h1>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Discover our latest collection of beautiful plants and pots that have just arrived. 
              Be the first to bring these fresh additions into your home.
            </motion.p>
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-center"
          >
            <ProductGrid products={newArrivals} centered={true} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-20 glassmorphism p-8 rounded-xl text-center"
          >
            <h2 className="text-2xl font-serif font-semibold mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Want to be the first to know about our newest arrivals? Join our newsletter to receive updates about new products, special offers, and plant care tips.
            </p>
            <div className="flex max-w-md mx-auto flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-leaf-500 dark:bg-gray-800"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-leaf-600 hover:bg-leaf-700 dark:bg-leaf-700 dark:hover:bg-leaf-600 text-white font-medium px-6 py-3 rounded-lg"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default NewArrivalsPage;
