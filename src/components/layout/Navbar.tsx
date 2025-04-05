
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Search, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();
  const { items: wishlistItems } = useWishlist();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-serif font-bold text-leaf-600">Greens</span>
              <span className="ml-1 text-2xl font-serif text-soil-500">& Pots</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/category/plants" className="text-gray-700 hover:text-leaf-600 transition-colors">Plants</Link>
            <Link to="/category/pots" className="text-gray-700 hover:text-leaf-600 transition-colors">Pots</Link>
            <Link to="/category/accessories" className="text-gray-700 hover:text-leaf-600 transition-colors">Accessories</Link>
            <Link to="/care-guides" className="text-gray-700 hover:text-leaf-600 transition-colors">Care Guides</Link>
            <Link to="/new-arrivals" className="text-gray-700 hover:text-leaf-600 transition-colors">New Arrivals</Link>
            <Link to="/about" className="text-gray-700 hover:text-leaf-600 transition-colors">About Us</Link>
          </div>

          {/* Cart and search */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search size={20} />
            </Button>
            
            <Link to="/wishlist" className="relative">
              <Button variant="ghost" size="icon">
                <Heart size={20} />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {wishlistItems.length}
                  </span>
                )}
              </Button>
            </Link>
            
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart size={20} />
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-leaf-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {items.length}
                  </span>
                )}
              </Button>
            </Link>
            
            <button 
              onClick={toggleMenu}
              className="md:hidden flex items-center"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/category/plants" className="text-gray-700 py-2 border-b border-gray-100">Plants</Link>
            <Link to="/category/pots" className="text-gray-700 py-2 border-b border-gray-100">Pots</Link>
            <Link to="/category/accessories" className="text-gray-700 py-2 border-b border-gray-100">Accessories</Link>
            <Link to="/care-guides" className="text-gray-700 py-2 border-b border-gray-100">Care Guides</Link>
            <Link to="/new-arrivals" className="text-gray-700 py-2 border-b border-gray-100">New Arrivals</Link>
            <Link to="/about" className="text-gray-700 py-2 border-b border-gray-100">About Us</Link>
            <Link to="/wishlist" className="text-gray-700 py-2">Wishlist</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
