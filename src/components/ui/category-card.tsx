
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  link: string;
  bgColor: string;
  delay?: number;
}

export function CategoryCard({ title, description, link, bgColor, delay = 0 }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay }}
      viewport={{ once: true, margin: "-100px" }}
      className={`category-card ${bgColor}`}
    >
      <h3 className="text-2xl font-serif font-semibold mb-3">{title}</h3>
      <p className="mb-5 text-gray-600">{description}</p>
      <Link to={link} className="shop-now-link group">
        Shop Now
        <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}
