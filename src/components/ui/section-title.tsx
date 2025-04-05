
import React from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  description?: string;
  center?: boolean;
  delay?: number;
}

export function SectionTitle({ title, description, center = false, delay = 0 }: SectionTitleProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-100px" }}
      className={`mb-16 ${center ? "text-center" : ""}`}
    >
      <h2 className="font-serif font-medium text-3xl md:text-4xl mb-4 tracking-wide">{title}</h2>
      {description && (
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
          {description}
        </p>
      )}
      <div className={`h-0.5 w-16 bg-leaf-500 mt-6 ${center ? "mx-auto" : ""}`}></div>
    </motion.div>
  );
}
