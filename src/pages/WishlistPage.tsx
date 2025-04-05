
import React from "react";
import { useWishlist } from "@/hooks/use-wishlist";
import Layout from "@/components/layout/Layout";
import ProductGrid from "@/components/products/ProductGrid";
import { Button } from "@/components/ui/button";
import { Heart, Trash2, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const WishlistPage = () => {
  const { items, clearWishlist } = useWishlist();

  const emptyStateVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 dark:text-gray-100 flex items-center gap-3">
              <Heart className="text-red-500" />
              My Wishlist
            </h1>
            {items.length > 0 && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  onClick={clearWishlist}
                  className="text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-700 flex items-center gap-2"
                >
                  <Trash2 size={16} />
                  Clear Wishlist
                </Button>
              </motion.div>
            )}
          </div>

          {items.length === 0 ? (
            <motion.div 
              className="text-center py-20 glassmorphism rounded-xl"
              variants={emptyStateVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <Heart className="mx-auto h-16 w-16 text-gray-300 dark:text-gray-600 mb-6" />
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-3">
                Your wishlist is empty
              </motion.h2>
              <motion.p variants={itemVariants} className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
                Save your favorite items to find them easily later and be notified when they go on sale.
              </motion.p>
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="bg-leaf-600 hover:bg-leaf-700 dark:bg-leaf-700 dark:hover:bg-leaf-600 text-white flex items-center gap-2"
                  onClick={() => window.location.href = "/"}
                >
                  <ShoppingBag size={16} />
                  Continue Shopping
                </Button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProductGrid products={items} />
            </motion.div>
          )}
          
          {items.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 flex justify-center"
            >
              <Button asChild className="bg-leaf-600 hover:bg-leaf-700 dark:bg-leaf-700 dark:hover:bg-leaf-600 text-white">
                <Link to="/">Continue Shopping</Link>
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </Layout>
  );
};

export default WishlistPage;
