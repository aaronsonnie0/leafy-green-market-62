
import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/data/products";
import { motion } from "framer-motion";

interface ProductGridProps {
  products: Product[];
  title?: string;
  centered?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, title, centered = false }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <div className={`w-full ${centered ? "text-center" : ""}`}>
      {title && (
        <motion.h2 
          className={`text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 mb-6 ${centered ? "text-center" : ""}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
      )}
      <motion.div 
        className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 ${centered ? "mx-auto" : ""}`}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {products.map((product) => (
          <div key={product.id} className="h-full">
            <ProductCard product={product} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProductGrid;
