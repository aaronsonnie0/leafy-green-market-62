
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Leaf, Package, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductGrid from "@/components/products/ProductGrid";
import { getFeaturedProducts } from "@/data/products";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-leaf-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
                Bring Nature <span className="text-leaf-600">Indoors</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Transform your space with our handpicked collection of beautiful indoor plants and designer pots.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button 
                  asChild
                  className="bg-leaf-600 hover:bg-leaf-700 text-white"
                >
                  <Link to="/category/plants">
                    Browse Plants
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  className="border-leaf-600 text-leaf-600 hover:bg-leaf-50"
                >
                  <Link to="/category/pots">
                    View Pots
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-video md:aspect-square bg-white p-4 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Beautiful indoor plants"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-serif font-semibold text-gray-800">
              Featured Products
            </h2>
            <Link to="/shop" className="text-leaf-600 hover:text-leaf-700 flex items-center">
              View all <ChevronRight size={16} />
            </Link>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-16 bg-leaf-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-semibold text-gray-800 mb-8 text-center">
            Shop By Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="aspect-video bg-gray-100 relative">
                <img
                  src="/placeholder.svg"
                  alt="Indoor Plants"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <h3 className="text-white text-3xl font-serif font-semibold">Plants</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Discover our selection of beautiful, easy-care indoor plants for any space.
                </p>
                <Button 
                  asChild
                  variant="outline" 
                  className="w-full border-leaf-600 text-leaf-600 hover:bg-leaf-50"
                >
                  <Link to="/category/plants">
                    Browse Plants
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="aspect-video bg-gray-100 relative">
                <img
                  src="/placeholder.svg"
                  alt="Plant Pots"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <h3 className="text-white text-3xl font-serif font-semibold">Pots</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Stylish pots and planters to complement your plants and home décor.
                </p>
                <Button 
                  asChild
                  variant="outline" 
                  className="w-full border-leaf-600 text-leaf-600 hover:bg-leaf-50"
                >
                  <Link to="/category/pots">
                    Browse Pots
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="aspect-video bg-gray-100 relative">
                <img
                  src="/placeholder.svg"
                  alt="Plant Accessories"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <h3 className="text-white text-3xl font-serif font-semibold">Accessories</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Essential tools and accessories to help your plants thrive.
                </p>
                <Button 
                  asChild
                  variant="outline" 
                  className="w-full border-leaf-600 text-leaf-600 hover:bg-leaf-50"
                >
                  <Link to="/category/accessories">
                    Browse Accessories
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-semibold text-gray-800 mb-2 text-center">
            What Our Customers Say
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We're proud to have helped thousands of customers bring nature into their homes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-leaf-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-leaf-200 rounded-full flex items-center justify-center text-leaf-700 font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-800">Happy Customer {i}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, j) => (
                        <span key={j}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-leaf-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-semibold text-white mb-4">
            Ready to transform your space?
          </h2>
          <p className="text-leaf-100 mb-8 max-w-2xl mx-auto">
            Join thousands of happy plant parents. Free shipping on orders over $50.
          </p>
          <Button 
            asChild
            className="bg-white text-leaf-600 hover:bg-leaf-50"
          >
            <Link to="/shop">
              Shop Now
            </Link>
          </Button>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-leaf-100 text-leaf-600 mb-4">
                <Leaf size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Plants</h3>
              <p className="text-gray-600">
                All our plants are carefully selected and nurtured before they reach your home.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-leaf-100 text-leaf-600 mb-4">
                <Package size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Safe Shipping</h3>
              <p className="text-gray-600">
                Special packaging ensures your plants arrive healthy and happy.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-leaf-100 text-leaf-600 mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">30-Day Guarantee</h3>
              <p className="text-gray-600">
                If your plant arrives damaged or dies within 30 days, we'll replace it for free.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
