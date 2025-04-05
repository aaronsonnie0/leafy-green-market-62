
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-leaf-50 pt-12 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand and description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-serif font-bold text-leaf-600">Greens</span>
              <span className="ml-1 text-xl font-serif text-soil-500">& Pots</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Bringing nature indoors with our curated collection of beautiful plants and pots.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-leaf-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-leaf-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-leaf-600 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/category/plants" className="text-gray-600 hover:text-leaf-600 transition-colors text-sm">
                  Plants
                </Link>
              </li>
              <li>
                <Link to="/category/pots" className="text-gray-600 hover:text-leaf-600 transition-colors text-sm">
                  Pots
                </Link>
              </li>
              <li>
                <Link to="/category/accessories" className="text-gray-600 hover:text-leaf-600 transition-colors text-sm">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-gray-600 hover:text-leaf-600 transition-colors text-sm">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Help links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Help</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/plant-care" className="text-gray-600 hover:text-leaf-600 transition-colors text-sm">
                  Plant Care
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-leaf-600 transition-colors text-sm">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-600 hover:text-leaf-600 transition-colors text-sm">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-leaf-600 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-leaf-600 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-gray-600 hover:text-leaf-600 transition-colors text-sm">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-leaf-600 transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-leaf-600 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 mt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Greens & Pots. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
