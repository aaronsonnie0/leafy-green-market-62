
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/products/ProductGrid";
import { getProductsByCategory, Product } from "@/data/products";
import { Button } from "@/components/ui/button";

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [sortBy, setSortBy] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);
  
  // Get the products for this category
  const allProducts = categoryId 
    ? getProductsByCategory(categoryId) 
    : [];
  
  // Sort products based on selection
  const sortProducts = (products: Product[]) => {
    switch (sortBy) {
      case "price-low":
        return [...products].sort((a, b) => a.price - b.price);
      case "price-high":
        return [...products].sort((a, b) => b.price - a.price);
      case "name-asc":
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return [...products].sort((a, b) => b.name.localeCompare(a.name));
      case "featured":
      default:
        return products;
    }
  };
  
  const products = sortProducts(allProducts);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Category Header */}
        <div className="bg-leaf-50 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-3xl font-serif font-bold text-gray-800 mb-4 capitalize">
                {categoryId || "All Products"}
              </h1>
              <p className="text-gray-600 max-w-xl">
                {categoryId === "plants" 
                  ? "Discover our selection of beautiful, easy-care indoor plants for any space."
                  : categoryId === "pots"
                  ? "Stylish pots and planters to complement your plants and home décor."
                  : categoryId === "accessories"
                  ? "Essential tools and accessories to help your plants thrive."
                  : "Browse our entire collection of quality products."}
              </p>
            </div>
          </div>
        </div>
        
        {/* Filters and Sorting */}
        <div className="border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center">
                <Button 
                  variant="ghost" 
                  onClick={() => setFiltersOpen(!filtersOpen)}
                  className="md:hidden flex items-center text-gray-700 mr-4"
                >
                  Filters <ChevronDown size={16} className="ml-1" />
                </Button>
                <div className="hidden md:block">
                  <span className="text-gray-700 mr-2">Filters:</span>
                  <div className="inline-flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-xs"
                    >
                      Price Range
                    </Button>
                    {categoryId === "plants" && (
                      <>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-xs"
                        >
                          Care Level
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-xs"
                        >
                          Light Needs
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center">
                <span className="text-gray-700 mr-2">Sort by:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-md text-sm px-2 py-1 bg-white"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name-asc">Name: A to Z</option>
                  <option value="name-desc">Name: Z to A</option>
                </select>
              </div>
            </div>
            
            {/* Mobile filters */}
            {filtersOpen && (
              <div className="mt-4 p-4 bg-gray-50 rounded-md md:hidden">
                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-xs"
                  >
                    Price Range
                  </Button>
                  {categoryId === "plants" && (
                    <>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-xs"
                      >
                        Care Level
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-xs"
                      >
                        Light Needs
                      </Button>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Products */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {products.length > 0 ? (
              <ProductGrid products={products} />
            ) : (
              <div className="text-center py-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">No products found</h2>
                <p className="text-gray-600 mb-6">
                  We couldn't find any products in this category.
                </p>
                <Button asChild>
                  <Link to="/">Back to Home</Link>
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
