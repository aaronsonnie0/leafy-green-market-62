
import React from "react";
import Layout from "@/components/layout/Layout";
import ProductGrid from "@/components/products/ProductGrid";
import { products } from "@/data/products";
import { motion } from "framer-motion";

const NewArrivalsPage = () => {
  // Filter products that are newer (assuming the first 8 products are the newest)
  const newArrivals = products.slice(0, 8);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">New Arrivals</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our latest collection of beautiful plants and pots that have just arrived. 
              Be the first to bring these fresh additions into your home.
            </p>
          </div>

          <ProductGrid products={newArrivals} />
        </motion.div>
      </div>
    </Layout>
  );
};

export default NewArrivalsPage;
