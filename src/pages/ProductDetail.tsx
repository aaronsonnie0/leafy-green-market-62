
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf, Droplet, Sun, ArrowLeft, Heart, ShoppingCart, Plus, Minus, Check } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";
import { getProductById, getProductsByCategory, Product } from "@/data/products";
import ProductGrid from "@/components/products/ProductGrid";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const { addItem } = useCart();
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  
  // Handle case where product is not found
  if (!product) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl font-serif font-semibold text-gray-800 mb-6">Product Not Found</h1>
          <p className="text-gray-600 mb-6">Sorry, we couldn't find the product you're looking for.</p>
          <Button asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  // Get related products
  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);
  
  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.salePrice || product.price,
      image: product.image,
      category: product.category
    });
  };
  
  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };
  
  const incrementQuantity = () => setQuantity(q => q + 1);
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(q => q - 1);
    }
  };
  
  const getCareIcon = (level: string) => {
    switch (level) {
      case "easy":
        return <span className="text-green-500">●●○</span>;
      case "moderate":
        return <span className="text-amber-500">●●●</span>;
      case "hard":
        return <span className="text-red-500">●●●●</span>;
      default:
        return null;
    }
  };
  
  return (
    <Layout>
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-800">
            <ArrowLeft size={16} className="mr-1" />
            <span>Back to shopping</span>
          </Link>
        </div>
      </div>
      
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="sticky top-24">
                <div className="aspect-square rounded-xl overflow-hidden bg-white shadow-sm mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {product.gallery && product.gallery.length > 0 && (
                  <div className="grid grid-cols-4 gap-4">
                    {product.gallery.map((img, idx) => (
                      <div key={idx} className="aspect-square rounded-lg overflow-hidden bg-white shadow-sm">
                        <img
                          src={img}
                          alt={`${product.name} - View ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
            
            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <h1 className="font-serif text-3xl md:text-4xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h1>
                <div className="text-sm mb-4 capitalize text-gray-500">
                  <Link to={`/category/${product.category}`} className="hover:text-leaf-600 transition-colors">
                    {product.category}
                  </Link>
                </div>
                
                <div className="flex items-center mb-6">
                  {product.salePrice ? (
                    <div className="flex items-center">
                      <span className="text-xl font-semibold text-red-500">
                        ${product.salePrice.toFixed(2)}
                      </span>
                      <span className="ml-2 text-gray-500 line-through">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                  ) : (
                    <span className="text-xl font-semibold text-gray-800">
                      ${product.price.toFixed(2)}
                    </span>
                  )}
                  
                  {product.inStock ? (
                    <span className="ml-4 text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                      In Stock
                    </span>
                  ) : (
                    <span className="ml-4 text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                      Out of Stock
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Plant Care Info (only for plants) */}
                {product.category === "plants" && (
                  <div className="bg-leaf-50 rounded-lg p-6 mb-8">
                    <h3 className="font-serif text-lg font-semibold mb-4">Plant Care</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <div className="flex items-center mb-1">
                          <Leaf size={18} className="text-leaf-600 mr-2" />
                          <span className="text-gray-700 font-medium">Care Level</span>
                        </div>
                        <div className="text-gray-600 capitalize ml-7">
                          {product.careDifficulty} {getCareIcon(product.careDifficulty || "")}
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center mb-1">
                          <Sun size={18} className="text-yellow-500 mr-2" />
                          <span className="text-gray-700 font-medium">Light</span>
                        </div>
                        <div className="text-gray-600 capitalize ml-7">
                          {product.lightRequirements}
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center mb-1">
                          <Droplet size={18} className="text-blue-500 mr-2" />
                          <span className="text-gray-700 font-medium">Water</span>
                        </div>
                        <div className="text-gray-600 capitalize ml-7">
                          {product.wateringFrequency}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Dimensions & Material (for pots and accessories) */}
                {(product.category === "pots" || product.category === "accessories") && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {product.dimensions && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-800 mb-1">Dimensions</h4>
                        <p className="text-gray-600">{product.dimensions}</p>
                      </div>
                    )}
                    
                    {product.material && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-800 mb-1">Material</h4>
                        <p className="text-gray-600">{product.material}</p>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Action Buttons */}
                <div className="mb-8">
                  {product.inStock && (
                    <div className="flex flex-col sm:flex-row items-stretch gap-4">
                      <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                        <button 
                          onClick={decrementQuantity}
                          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <div className="flex items-center justify-center px-6 border-l border-r border-gray-300 min-w-[60px]">
                          {quantity}
                        </div>
                        <button 
                          onClick={incrementQuantity}
                          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      
                      <Button 
                        onClick={handleAddToCart} 
                        className="flex items-center justify-center gap-2 bg-leaf-600 hover:bg-leaf-700 text-white flex-grow"
                      >
                        <ShoppingCart size={18} />
                        Add to Cart
                      </Button>
                      
                      <Button
                        onClick={handleWishlistToggle}
                        variant="outline"
                        className="px-4"
                      >
                        <Heart 
                          size={18} 
                          fill={isInWishlist(product.id) ? "#ef4444" : "none"} 
                          color={isInWishlist(product.id) ? "#ef4444" : "currentColor"} 
                        />
                      </Button>
                    </div>
                  )}
                </div>
                
                {/* Tags */}
                {product.tags && product.tags.length > 0 && (
                  <div className="mb-8">
                    <h3 className="font-serif text-lg font-semibold mb-3">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Shipping & Returns */}
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Check size={18} className="text-leaf-600 mr-2" />
                    <span className="text-gray-600">Free shipping on orders over $50</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={18} className="text-leaf-600 mr-2" />
                    <span className="text-gray-600">30-day returns on all orders</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={18} className="text-leaf-600 mr-2" />
                    <span className="text-gray-600">Quality guarantee on all plants</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Product Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="care">Care Instructions</TabsTrigger>
                <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="text-gray-600">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc eget ultricies ultricies, nisl nisl 
                  aliquam nisl, eget aliquam nisl nisl eget nisl. Nullam auctor, nunc eget ultricies ultricies, nisl nisl aliquam 
                  nisl, eget aliquam nisl nisl eget nisl.
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Premium quality, carefully sourced and selected</li>
                  <li>Perfect for homes, offices, or as a thoughtful gift</li>
                  <li>Comes with detailed care instructions</li>
                </ul>
              </TabsContent>
              <TabsContent value="care" className="text-gray-600">
                <p>
                  To keep your {product.name} thriving, follow these simple care instructions:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li><strong>Light:</strong> Place in {product.lightRequirements} light, ideally near a window with filtered sunlight.</li>
                  <li><strong>Water:</strong> Water {product.wateringFrequency}, allowing the top inch of soil to dry out between waterings.</li>
                  <li><strong>Humidity:</strong> Most houseplants enjoy a humid environment. Consider misting or using a humidifier.</li>
                  <li><strong>Temperature:</strong> Keep in room temperature between 65-80°F (18-27°C). Avoid cold drafts and hot air vents.</li>
                </ul>
              </TabsContent>
              <TabsContent value="shipping" className="text-gray-600">
                <h4 className="font-serif text-lg font-semibold mb-3">Shipping Policy</h4>
                <p className="mb-4">
                  We ship all orders within 1-2 business days. Orders over $50 qualify for free shipping. 
                  For orders under $50, shipping costs are calculated at checkout based on your location.
                </p>
                <h4 className="font-serif text-lg font-semibold mb-3">Return Policy</h4>
                <p>
                  We stand behind the quality of our products. If you're not satisfied with your purchase, 
                  you can return it within 30 days for a full refund or exchange. Please note that plants must 
                  be returned in their original condition.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
              You May Also Like
            </h2>
            <ProductGrid products={relatedProducts} />
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProductDetail;
