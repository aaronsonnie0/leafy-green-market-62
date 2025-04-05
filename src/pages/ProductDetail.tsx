
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Minus, Plus, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/data/products";
import { useCart } from "@/hooks/use-cart";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/products/ProductGrid";
import { getProductsByCategory } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = React.useState(1);
  const { addItem } = useCart();
  
  const product = id ? getProductById(id) : undefined;
  
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-semibold mb-4">Product not found</h2>
        <Button onClick={() => navigate("/")}>Back to Home</Button>
      </div>
    );
  }
  
  const relatedProducts = getProductsByCategory(product.category).filter(p => p.id !== id).slice(0, 4);
  
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.salePrice || product.price,
        image: product.image,
        category: product.category,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Link to="/" className="hover:text-leaf-600">Home</Link>
              <span>/</span>
              <Link to={`/category/${product.category}`} className="hover:text-leaf-600 capitalize">
                {product.category}
              </Link>
              <span>/</span>
              <span className="text-gray-700">{product.name}</span>
            </div>
          </div>
        </div>
        
        {/* Product */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
              {/* Product image */}
              <div className="md:flex-1 px-4 mb-6 md:mb-0">
                <div className="rounded-lg overflow-hidden border border-gray-200 bg-white h-96">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Thumbnail gallery - if we had multiple images */}
                {product.gallery && product.gallery.length > 0 && (
                  <div className="flex mt-4 space-x-2">
                    {product.gallery.map((img, idx) => (
                      <div 
                        key={idx} 
                        className="w-20 h-20 border border-gray-200 rounded-md overflow-hidden cursor-pointer"
                      >
                        <img src={img} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Product details */}
              <div className="md:flex-1 px-4">
                <h1 className="text-3xl font-serif font-semibold text-gray-800 mb-2">{product.name}</h1>
                
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    {product.salePrice ? (
                      <div>
                        <span className="text-gray-400 line-through text-lg mr-2">
                          ${product.price.toFixed(2)}
                        </span>
                        <span className="text-2xl font-bold text-red-500">
                          ${product.salePrice.toFixed(2)}
                        </span>
                      </div>
                    ) : (
                      <span className="text-2xl font-bold text-gray-800">
                        ${product.price.toFixed(2)}
                      </span>
                    )}
                  </div>
                  
                  <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-6">{product.description}</p>
                
                {/* Tags */}
                {product.tags && product.tags.length > 0 && (
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Care info - for plants */}
                {product.category === "plants" && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Plant Care</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="border border-gray-200 rounded-lg p-3">
                        <h4 className="font-medium text-sm text-gray-700">Difficulty</h4>
                        <p className="text-gray-600 capitalize">{product.careDifficulty}</p>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-3">
                        <h4 className="font-medium text-sm text-gray-700">Light</h4>
                        <p className="text-gray-600 capitalize">{product.lightRequirements}</p>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-3">
                        <h4 className="font-medium text-sm text-gray-700">Water</h4>
                        <p className="text-gray-600 capitalize">{product.wateringFrequency}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Product specs - for pots */}
                {(product.category === "pots" || product.category === "accessories") && product.dimensions && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Specifications</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {product.dimensions && (
                        <div className="border border-gray-200 rounded-lg p-3">
                          <h4 className="font-medium text-sm text-gray-700">Dimensions</h4>
                          <p className="text-gray-600">{product.dimensions}</p>
                        </div>
                      )}
                      {product.material && (
                        <div className="border border-gray-200 rounded-lg p-3">
                          <h4 className="font-medium text-sm text-gray-700">Material</h4>
                          <p className="text-gray-600">{product.material}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {/* Quantity */}
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-gray-700">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button 
                      className="px-3 py-1 text-leaf-600 hover:bg-gray-100"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-3 py-1">{quantity}</span>
                    <button 
                      className="px-3 py-1 text-leaf-600 hover:bg-gray-100"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-6">
                  <Button 
                    className="flex-grow bg-leaf-600 hover:bg-leaf-700 text-white"
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                  >
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="flex-grow-0">
                    <Heart size={18} className="mr-2" />
                    Wishlist
                  </Button>
                  <Button variant="outline" className="flex-grow-0">
                    <Share2 size={18} className="mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-6">
                You might also like
              </h2>
              <ProductGrid products={relatedProducts} />
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
