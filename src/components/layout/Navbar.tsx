
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X, Search, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { items } = useCart();
  const { items: wishlistItems } = useWishlist();
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? "glassmorphism shadow-sm py-2" : "bg-background py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and brand - increased logo size */}
          <motion.div 
            className="flex-shrink-0 flex items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/d42305a7-055c-426a-9f7b-f2532c96f41c.png" 
                alt="Greens & Pots" 
                className="h-12" 
              />
            </Link>
          </motion.div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/category/plants">Plants</NavLink>
            <NavLink to="/category/pots">Pots</NavLink>
            <NavLink to="/category/accessories">Accessories</NavLink>
            <NavLink to="/care-guides">Care Guides</NavLink>
          </div>

          {/* Cart and search */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search size={20} />
            </Button>
            
            <Link to="/wishlist" className="relative">
              <Button variant="ghost" size="icon" className="relative">
                <Heart size={20} />
                {wishlistItems.length > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
                  >
                    {wishlistItems.length}
                  </motion.span>
                )}
              </Button>
            </Link>
            
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart size={20} />
                {items.length > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-leaf-500 dark:bg-leaf-400 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
                  >
                    {items.length}
                  </motion.span>
                )}
              </Button>
            </Link>
            
            <button 
              onClick={toggleMenu}
              className="md:hidden flex items-center"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden glassmorphism overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              <NavLink to="/category/plants" mobile>Plants</NavLink>
              <NavLink to="/category/pots" mobile>Pots</NavLink>
              <NavLink to="/category/accessories" mobile>Accessories</NavLink>
              <NavLink to="/care-guides" mobile>Care Guides</NavLink>
              <NavLink to="/wishlist" mobile>Wishlist</NavLink>
              <NavLink to="/about" mobile>About Us</NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  mobile?: boolean;
}

const NavLink = ({ to, children, mobile = false }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to || location.pathname.startsWith(`${to}/`);
  
  const baseClasses = "transition-colors duration-200";
  const mobileClasses = "block py-2 text-base";
  const desktopClasses = "inline-block animated-border text-foreground uppercase tracking-wide text-sm font-medium";
  const activeClasses = "text-leaf-600 dark:text-leaf-400 font-medium";
  const inactiveClasses = "text-gray-700 dark:text-gray-300 hover:text-leaf-600 dark:hover:text-leaf-400";
  
  return (
    <Link 
      to={to} 
      className={`
        ${baseClasses}
        ${mobile ? mobileClasses : desktopClasses}
        ${isActive ? activeClasses : inactiveClasses}
      `}
    >
      {children}
    </Link>
  );
};

export default Navbar;
