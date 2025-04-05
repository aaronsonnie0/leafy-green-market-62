
import React from "react";
import { motion } from "framer-motion";
import { CategoryCard } from "./category-card";
import { SectionTitle } from "./section-title";

export function CategoryGrid() {
  const categories = [
    {
      title: "Featured Collections",
      description: "Our most popular and curated plant selections",
      link: "/featured",
      bgColor: "bg-[#F2FCE2]",
      iconName: "featured" as const
    },
    {
      title: "Indoor Plants",
      description: "Perfect for purifying air and adding life to your space",
      link: "/category/plants",
      bgColor: "bg-[#E2F1FC]",
      iconName: "plant" as const
    },
    {
      title: "Designer Pots",
      description: "Stylish containers that complement your home décor",
      link: "/category/pots",
      bgColor: "bg-[#FDE1D3]",
      iconName: "pot" as const
    },
    {
      title: "Plant Accessories",
      description: "Everything you need to keep your plants thriving",
      link: "/category/accessories",
      bgColor: "bg-[#F1F0FB]",
      iconName: "accessory" as const
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionTitle 
            title="Shop by Category" 
            description="Explore our wide range of categories to find the perfect addition to your indoor garden"
            center={true}
          />
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              description={category.description}
              link={category.link}
              bgColor={category.bgColor}
              iconName={category.iconName}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
