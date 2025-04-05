
import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/data/products";
import { motion } from "framer-motion";

interface ProductGridProps {
  products: Product[];
  title?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, title }) => {
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
    <div className="w-full">
      {title && (
        <motion.h2 
          className="text-2xl font-serif font-semibold text-gray-800 dark:text-gray-200 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
      )}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
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
