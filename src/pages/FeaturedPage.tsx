
import React from "react";
import Layout from "@/components/layout/Layout";
import ProductGrid from "@/components/products/ProductGrid";
import { SectionTitle } from "@/components/ui/section-title";
import { getFeaturedProducts } from "@/data/products";

const FeaturedPage = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <Layout>
      <div className="page-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="page-title">Featured Collections</h1>
          <p className="page-description">
            Our carefully curated selection of premium plants and accessories
          </p>
        </div>
      </div>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Staff Picks" 
            description="Handpicked by our plant experts for exceptional beauty and quality"
          />
          
          <ProductGrid products={featuredProducts} />
        </div>
      </section>
    </Layout>
  );
};

export default FeaturedPage;
