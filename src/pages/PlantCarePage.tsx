
import React from "react";
import { motion } from "framer-motion";
import { Leaf, Droplet, Sun, Wind, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PlantCarePage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const plantTypes = [
    {
      type: "succulents",
      name: "Succulents & Cacti",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      light: "Bright, direct sunlight for 6+ hours daily. South or west-facing windows are ideal.",
      water: "Allow soil to completely dry between waterings. Water thoroughly but infrequently, approximately every 2-3 weeks.",
      soil: "Well-draining cactus or succulent mix with added perlite or sand. Good drainage is crucial to prevent root rot.",
      care: "Minimal care needed. Watch for signs of overwatering, which is the most common issue. Rotate occasionally for even growth."
    },
    {
      type: "tropical",
      name: "Tropical Plants",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
      light: "Bright, indirect light. Avoid direct sun which can scorch leaves. East or filtered west-facing windows work well.",
      water: "Keep soil consistently moist but not soggy. Water when the top inch of soil feels dry. Increase humidity with misting.",
      soil: "Rich, well-draining potting mix with organic matter. Many tropicals benefit from added peat moss for moisture retention.",
      care: "Maintain high humidity (50%+). Regular misting or a humidifier helps. Wipe leaves occasionally to remove dust."
    },
    {
      type: "ferns",
      name: "Ferns & Shade Plants",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
      light: "Low to medium indirect light. Can thrive in north-facing windows or several feet away from brighter windows.",
      water: "Keep soil consistently moist. Ferns rarely tolerate drying out completely. Mist regularly to maintain humidity.",
      soil: "Rich, loamy soil with good moisture retention. Adding peat moss or coconut coir helps maintain proper moisture levels.",
      care: "High humidity is essential. Consider placing on a pebble tray with water or using a humidifier nearby."
    },
    {
      type: "lowlight",
      name: "Low Light Plants",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      light: "Can tolerate dim conditions with minimal natural light. Flourish in north-facing windows or interior spaces.",
      water: "Allow the top inch of soil to dry between waterings. Typically water once every 1-2 weeks, less in winter.",
      soil: "Standard potting mix with good drainage. Nothing specialized needed, though adding some perlite can help prevent overwatering.",
      care: "Very forgiving plants. Water less during winter months. Wipe leaves occasionally to maximize light absorption."
    }
  ];

  const careBasics = [
    {
      icon: <Sun className="h-8 w-8 text-yellow-500" />,
      title: "Light",
      description: "Most houseplants need bright, indirect light. Direct sunlight can burn leaves, while too little light leads to leggy growth and fewer leaves."
    },
    {
      icon: <Droplet className="h-8 w-8 text-blue-500" />,
      title: "Water",
      description: "Water thoroughly when the top 1-2 inches of soil are dry. Ensure pots have drainage holes to prevent root rot from standing water."
    },
    {
      icon: <Leaf className="h-8 w-8 text-leaf-500" />,
      title: "Soil",
      description: "Use well-draining potting mix appropriate for your plant type. Most plants benefit from repotting every 1-2 years as they grow."
    },
    {
      icon: <Wind className="h-8 w-8 text-gray-500" />,
      title: "Environment",
      description: "Most houseplants prefer temperatures between 65-75°F and moderate humidity. Keep away from drafts, heaters, and air conditioners."
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Plant Care Basics</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover everything you need to help your plants thrive. From watering tips to light requirements, we've got you covered.
          </p>
        </motion.div>

        {/* Care Basics Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {careBasics.map((item, idx) => (
            <Card key={idx} className="hover:shadow-md transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="bg-gray-50 p-3 rounded-full">{item.icon}</div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Plant Types Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Care by Plant Type</h2>
          <Tabs defaultValue="succulents" className="w-full">
            <TabsList className="w-full flex justify-center mb-8 bg-transparent">
              {plantTypes.map((plant) => (
                <TabsTrigger 
                  key={plant.type} 
                  value={plant.type}
                  className="data-[state=active]:bg-leaf-50 data-[state=active]:text-leaf-600 data-[state=active]:border-b-2 data-[state=active]:border-leaf-500 rounded-none px-6"
                >
                  {plant.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {plantTypes.map((plant) => (
              <TabsContent key={plant.type} value={plant.type} className="mt-0">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="rounded-lg overflow-hidden h-64">
                      <img 
                        src={plant.image} 
                        alt={plant.name} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <h3 className="text-2xl font-bold mb-4">{plant.name} Care Guide</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="flex items-center text-lg font-semibold mb-1">
                          <Sun className="h-5 w-5 text-yellow-500 mr-2" /> Light Requirements
                        </h4>
                        <p className="text-gray-600">{plant.light}</p>
                      </div>
                      <div>
                        <h4 className="flex items-center text-lg font-semibold mb-1">
                          <Droplet className="h-5 w-5 text-blue-500 mr-2" /> Watering Schedule
                        </h4>
                        <p className="text-gray-600">{plant.water}</p>
                      </div>
                      <div>
                        <h4 className="flex items-center text-lg font-semibold mb-1">
                          <Leaf className="h-5 w-5 text-leaf-500 mr-2" /> Soil Preferences
                        </h4>
                        <p className="text-gray-600">{plant.soil}</p>
                      </div>
                      <div>
                        <h4 className="flex items-center text-lg font-semibold mb-1">
                          <Wind className="h-5 w-5 text-gray-500 mr-2" /> General Care
                        </h4>
                        <p className="text-gray-600">{plant.care}</p>
                      </div>
                    </div>
                    <Button className="mt-6 bg-leaf-500 hover:bg-leaf-600">
                      Shop {plant.name} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Seasonal Care Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Seasonal Care Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-leaf-50 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Spring & Summer</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-leaf-200 text-leaf-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">1</span>
                  <p><span className="font-medium">Increase watering</span> as plants enter active growth phase and use more water.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-leaf-200 text-leaf-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">2</span>
                  <p><span className="font-medium">Start fertilizing</span> regularly during the growing season, typically every 2-4 weeks.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-leaf-200 text-leaf-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">3</span>
                  <p><span className="font-medium">Monitor for pests</span> more frequently as they tend to proliferate in warmer weather.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-leaf-200 text-leaf-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">4</span>
                  <p><span className="font-medium">Repot rootbound plants</span> early in the growing season to give them space to thrive.</p>
                </li>
              </ul>
            </div>
            <div className="bg-soil-50 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Fall & Winter</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-soil-200 text-soil-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">1</span>
                  <p><span className="font-medium">Reduce watering</span> as plants enter dormancy and growth slows significantly.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-soil-200 text-soil-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">2</span>
                  <p><span className="font-medium">Stop fertilizing</span> most plants during winter months to avoid nutrient buildup.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-soil-200 text-soil-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">3</span>
                  <p><span className="font-medium">Maintain humidity</span> as indoor heating can create dry air that stresses plants.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-soil-200 text-soil-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">4</span>
                  <p><span className="font-medium">Clean leaves</span> periodically to remove dust and help plants absorb more light.</p>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Video Tutorials Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Video Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Watering Techniques", duration: "4:25" },
              { title: "Repotting Your Plants", duration: "6:12" },
              { title: "Dealing with Common Pests", duration: "5:37" }
            ].map((video, idx) => (
              <div key={idx} className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="aspect-video bg-gray-200 relative flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-leaf-500 border-b-8 border-b-transparent ml-1"></div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg">{video.title}</h3>
                  <p className="text-gray-500 text-sm">{video.duration}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="border-leaf-500 text-leaf-600 hover:bg-leaf-50">
              View All Tutorials
            </Button>
          </div>
        </motion.div>

        {/* Personal Care Schedule */}
        <motion.div 
          className="bg-gradient-to-r from-leaf-500 to-leaf-600 text-white rounded-xl p-8 md:p-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Get a Custom Care Schedule</h2>
            <p className="text-lg opacity-90 mb-8">
              Tell us about your plants and your home environment, and we'll create a personalized care schedule to help your plants thrive.
            </p>
            <Button className="bg-white text-leaf-600 hover:bg-gray-100 px-8 py-6 text-lg h-auto font-medium">
              Create My Plant Care Plan
            </Button>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default PlantCarePage;
