
import React from "react";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Plus } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlist();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.salePrice || product.price,
      image: product.image,
      category: product.category
    });
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Link to={`/product/${product.id}`} className="premium-card group block h-full">
        <div className="aspect-square overflow-hidden relative rounded-t-xl">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          
          {product.salePrice && (
            <div className="absolute top-2 right-2 glassmorphism text-red-500 text-xs font-medium px-2.5 py-0.5 rounded-full">
              SALE
            </div>
          )}
          
          <motion.button 
            onClick={handleWishlistToggle}
            className="absolute top-2 left-2 glassmorphism rounded-full p-1.5 hover:bg-white/80 dark:hover:bg-black/50 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart 
              size={16} 
              fill={isInWishlist(product.id) ? "#ef4444" : "none"} 
              color={isInWishlist(product.id) ? "#ef4444" : "#71717a"} 
            />
          </motion.button>

          <motion.div 
            className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"
            initial={false}
            whileHover={{ backgroundColor: "rgba(0,0,0,0.1)" }}
          />
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div className="text-left">
              <h3 className="font-medium text-sm text-gray-800 dark:text-gray-100 group-hover:text-leaf-600 dark:group-hover:text-leaf-400 transition-colors duration-300 font-sans">{product.name}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 font-sans">{product.category}</p>
            </div>
            <div className="text-right">
              {product.salePrice ? (
                <div>
                  <span className="text-gray-400 line-through text-xs mr-1.5">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="font-medium text-sm text-red-500 dark:text-red-400">
                    ${product.salePrice.toFixed(2)}
                  </span>
                </div>
              ) : (
                <span className="font-medium text-sm text-gray-800 dark:text-gray-200">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>
          </div>
          
          <div className="mt-3">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                onClick={handleAddToCart}
                className="w-full bg-leaf-600 hover:bg-leaf-700 dark:bg-leaf-700 dark:hover:bg-leaf-600 text-white flex items-center justify-center gap-1.5 rounded-lg text-xs py-2 h-auto"
                size="sm"
              >
                <Plus size={14} className="opacity-75" />
                Add to Cart
              </Button>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
