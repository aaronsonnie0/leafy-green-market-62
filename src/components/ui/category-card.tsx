
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Package, Flower2, BookOpen } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  link: string;
  bgColor: string;
  icon: "plants" | "pots" | "accessories" | "care";
  delay?: number;
}

export function CategoryCard({ title, description, link, bgColor, icon, delay = 0 }: CategoryCardProps) {
  const renderIcon = () => {
    switch (icon) {
      case "plants":
        return <Leaf className="w-6 h-6 text-leaf-600" />;
      case "pots":
        return <Package className="w-6 h-6 text-soil-600" />;
      case "accessories":
        return <Flower2 className="w-6 h-6 text-blue-500" />;
      case "care":
        return <BookOpen className="w-6 h-6 text-purple-500" />;
      default:
        return <Leaf className="w-6 h-6 text-leaf-600" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay }}
      viewport={{ once: true, margin: "-100px" }}
      className={`category-card ${bgColor}`}
    >
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-full bg-white/50 mr-3">
          {renderIcon()}
        </div>
        <h3 className="text-xl font-medium">{title}</h3>
      </div>
      <p className="mb-5 text-gray-600 font-light">{description}</p>
      <Link to={link} className="shop-now-link group">
        Shop Now
        <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}
