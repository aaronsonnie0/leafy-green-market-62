
import React from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Leaf, Recycle, Award, TreeDeciduous } from "lucide-react";

const SustainabilityPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const commitments = [
    {
      icon: <Leaf className="h-8 w-8 text-leaf-500" />,
      title: "Eco-Friendly Packaging",
      description: "We've eliminated single-use plastics from our packaging, using only recycled and biodegradable materials to ship our plants and pots."
    },
    {
      icon: <Recycle className="h-8 w-8 text-leaf-500" />,
      title: "Sustainable Sourcing",
      description: "Our pots are made from either recycled materials or sustainable sources like bamboo and natural clay, reducing environmental impact."
    },
    {
      icon: <TreeDeciduous className="h-8 w-8 text-leaf-500" />,
      title: "Reforestation Program",
      description: "For every 10 plants sold, we plant a tree in deforested areas through our partnership with global reforestation initiatives."
    },
    {
      icon: <Award className="h-8 w-8 text-leaf-500" />,
      title: "Fair Labor Practices",
      description: "We only work with suppliers who maintain fair labor standards and provide safe working conditions for their employees."
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <span className="inline-block bg-leaf-100 text-leaf-600 rounded-full px-4 py-1 text-sm font-medium mb-4">Our Green Promise</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Commitment to Sustainability</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Greens & Pots, we believe that selling plants is just one part of our mission. 
            We're committed to making sure our business practices are as green as the products we sell.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          className="relative h-96 mb-16 rounded-xl overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
            alt="Lush green landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
            <div className="text-white p-8 md:p-16 max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">Nurturing the Planet, One Plant at a Time</h2>
              <p className="text-lg">
                We're on a mission to make the world greener, not just through the plants we sell, 
                but through every aspect of our business operations.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Our Impact Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Our Impact So Far</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                metric: "50,000+", 
                description: "Plants Sold", 
                detail: "Each adding more oxygen to homes across the country."
              },
              { 
                metric: "5,000+", 
                description: "Trees Planted", 
                detail: "Through our reforestation partnerships around the world."
              },
              { 
                metric: "30 Tons", 
                description: "Plastic Saved", 
                detail: "By using sustainable packaging solutions."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className="bg-leaf-50 rounded-lg p-8 text-center hover:shadow-md transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <p className="text-4xl font-bold text-leaf-600 mb-2">{item.metric}</p>
                <p className="text-xl font-medium mb-2">{item.description}</p>
                <p className="text-gray-600">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Commitments Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Our Commitments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commitments.map((item, idx) => (
              <motion.div 
                key={idx}
                className="flex gap-6 p-6 border border-gray-100 rounded-lg hover:border-leaf-200 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="flex-shrink-0 bg-leaf-50 p-4 rounded-full self-start">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certification Section */}
        <motion.div 
          className="bg-soil-50 p-8 rounded-xl mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Our Certifications</h2>
              <p className="text-gray-600 mb-6">
                We're proud to be recognized by leading environmental organizations for our commitment to sustainable business practices.
                Our certifications reflect our ongoing dedication to minimizing our environmental footprint.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Climate Neutral Certified", "B Corp", "1% For The Planet", "Forest Stewardship Council"].map((cert, idx) => (
                  <span key={idx} className="inline-block bg-white text-soil-700 rounded-full px-4 py-2 text-sm font-medium">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3" 
                alt="Sustainable certification" 
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        </motion.div>

        {/* Future Goals Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Our Future Goals</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="space-y-6">
              {[
                { year: "2025", goal: "Carbon-neutral shipping for all orders" },
                { year: "2026", goal: "100% renewable energy across all operations" },
                { year: "2027", goal: "Zero waste facilities and distribution centers" },
                { year: "2030", goal: "Plant 1 million trees through our reforestation initiatives" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="bg-leaf-500 text-white font-bold rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                    {item.year}
                  </div>
                  <p className="text-lg">{item.goal}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Every plant you purchase helps us further our sustainability mission. 
            Together, we can create a greener, healthier planet for generations to come.
          </p>
          <button className="bg-leaf-500 hover:bg-leaf-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200">
            Shop Our Sustainable Collection
          </button>
        </motion.div>
      </div>
    </Layout>
  );
};

export default SustainabilityPage;
