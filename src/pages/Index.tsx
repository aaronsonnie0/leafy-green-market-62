
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, CheckCircle2, Droplet } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ProductGrid from "@/components/products/ProductGrid";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { CategoryCard } from "@/components/ui/category-card";
import { getFeaturedProducts } from "@/data/products";

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-leaf-50/70 to-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-serif font-medium text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight tracking-wide">
                Bring Nature's Beauty <br className="hidden md:block" />
                <span className="text-leaf-600">Into Your Home</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg font-light">
                Discover our curated collection of beautiful plants, stylish pots, and essential accessories to create your own indoor oasis.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Button asChild size="lg" className="bg-leaf-600 hover:bg-leaf-700 text-white rounded-full">
                    <Link to="/category/plants">
                      Shop Plants
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Button asChild variant="outline" size="lg" className="rounded-full">
                    <Link to="/care-guides">
                      Care Guides
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="/placeholder.svg"
                  alt="Beautiful indoor plant in a decorative pot"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-leaf-50 mb-5">
                <Leaf className="h-8 w-8 text-leaf-600" />
              </div>
              <h3 className="font-serif text-xl mb-3">Expertly Curated</h3>
              <p>Each plant in our collection is carefully selected for beauty and resilience.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-leaf-50 mb-5">
                <CheckCircle2 className="h-8 w-8 text-leaf-600" />
              </div>
              <h3 className="font-serif text-xl mb-3">Quality Guaranteed</h3>
              <p>We guarantee healthy, thriving plants or your money back, no questions asked.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-leaf-50 mb-5">
                <Droplet className="h-8 w-8 text-leaf-600" />
              </div>
              <h3 className="font-serif text-xl mb-3">Care Support</h3>
              <p>Detailed care guides and ongoing support to help your plants thrive.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shop by Category Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Shop by Category" 
            description="Explore our wide range of categories to find the perfect addition to your indoor garden"
            center={true}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard
              title="Plants"
              description="Perfect for purifying air and adding life to your space"
              link="/category/plants"
              icon="plants"
              bgColor="bg-[#F2FCE2]"
              delay={0.1}
            />
            
            <CategoryCard
              title="Pots"
              description="Stylish containers that complement your home décor"
              link="/category/pots"
              icon="pots"
              bgColor="bg-[#FDE1D3]"
              delay={0.2}
            />
            
            <CategoryCard
              title="Accessories"
              description="Everything you need to keep your plants thriving"
              link="/category/accessories"
              icon="accessories"
              bgColor="bg-[#D3E4FD]"
              delay={0.3}
            />
            
            <CategoryCard
              title="Care Guides"
              description="Expert advice to help your plants flourish"
              link="/care-guides"
              icon="care"
              bgColor="bg-[#F1F0FB]"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center mb-12">
            <SectionTitle
              title="New Arrivals"
              description="Our latest additions to help you create your perfect indoor garden"
              center={true}
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-4"
            >
              <Link to="/new-arrivals" className="inline-flex items-center text-leaf-600 font-medium hover:text-leaf-800 transition-colors duration-300">
                View All
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </motion.div>
          </div>
          
          <ProductGrid products={featuredProducts} centered={true} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-leaf-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="What Our Customers Say"
            description="Don't just take our word for it - hear from our satisfied plant lovers"
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white p-6 rounded-2xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="italic mb-4 font-light">
                  "The plants I received were incredibly healthy and even more beautiful than the pictures. The care instructions were clear and helpful."
                </p>
                <div className="font-medium">Customer {i}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Join Our Newsletter</h2>
              <p className="text-gray-600 mb-8 font-light">
                Sign up to receive updates on new plants, care tips, and exclusive offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mx-auto justify-center">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-leaf-500 focus:border-transparent min-w-[250px]"
                />
                <Button className="bg-leaf-600 hover:bg-leaf-700 text-white">
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
