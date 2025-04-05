
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
      className={`mb-12 ${center ? "text-center" : ""}`}
    >
      <h2 className="font-serif font-semibold text-3xl md:text-4xl mb-4">{title}</h2>
      {description && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
