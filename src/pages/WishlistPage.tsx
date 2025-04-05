
import React from "react";
import { useWishlist } from "@/hooks/use-wishlist";
import Layout from "@/components/layout/Layout";
import ProductGrid from "@/components/products/ProductGrid";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const WishlistPage = () => {
  const { items, clearWishlist } = useWishlist();

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-gray-800 flex items-center gap-2">
              <Heart className="text-red-500" />
              My Wishlist
            </h1>
            {items.length > 0 && (
              <Button 
                variant="outline" 
                onClick={clearWishlist}
                className="text-gray-600 border-gray-300"
              >
                Clear Wishlist
              </Button>
            )}
          </div>

          {items.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="mx-auto h-12 w-12 text-gray-300 mb-4" />
              <h2 className="text-xl font-medium text-gray-600 mb-2">Your wishlist is empty</h2>
              <p className="text-gray-500 mb-6">Save your favorite items to find them easily later</p>
              <Button 
                className="bg-leaf-600 hover:bg-leaf-700 text-white"
                onClick={() => window.location.href = "/"}
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <ProductGrid products={items} />
          )}
        </motion.div>
      </div>
    </Layout>
  );
};

export default WishlistPage;
