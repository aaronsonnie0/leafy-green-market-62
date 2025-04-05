
import React from "react";
import { motion } from "framer-motion";
import { Leaf, Droplet, Sun, Wind } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CareGuidesPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const careCards = [
    {
      icon: <Sun className="h-8 w-8 text-yellow-500" />,
      title: "Light Requirements",
      description: "Learn about the perfect lighting conditions for your plants",
      content: [
        { title: "Low Light Plants", text: "Snake plants, ZZ plants, and pothos thrive in low light conditions, making them perfect for darker corners or rooms with few windows." },
        { title: "Medium Light Plants", text: "Peace lilies, philodendrons, and ferns prefer bright, indirect light without direct sun exposure." },
        { title: "Bright Light Plants", text: "Succulents, cacti, and fiddle leaf figs need several hours of direct sunlight daily to thrive." }
      ]
    },
    {
      icon: <Droplet className="h-8 w-8 text-blue-500" />,
      title: "Watering Tips",
      description: "Master the art of proper watering for healthy plants",
      content: [
        { title: "When to Water", text: "Most plants should be watered when the top 1-2 inches of soil feel dry to the touch. Avoid watering on a strict schedule." },
        { title: "How to Water", text: "Water thoroughly until it drains from the bottom, then empty the saucer. Never let plants sit in standing water." },
        { title: "Common Mistakes", text: "Overwatering is the number one cause of plant death. Yellowing leaves often indicate overwatering, while brown tips suggest underwatering." }
      ]
    },
    {
      icon: <Leaf className="h-8 w-8 text-leaf-500" />,
      title: "Soil & Nutrition",
      description: "Find the right soil mix and fertilization schedule",
      content: [
        { title: "Soil Types", text: "Different plants need different soil mixes. Succulents need well-draining cactus mix, while tropical plants thrive in nutrient-rich, moisture-retaining soil." },
        { title: "Fertilizing", text: "Most houseplants benefit from fertilizing during the growing season (spring and summer). Use a balanced, water-soluble fertilizer at half strength." },
        { title: "Repotting", text: "Repot plants when they become root-bound, typically every 1-2 years. Choose a pot 1-2 inches larger than the current one." }
      ]
    },
    {
      icon: <Wind className="h-8 w-8 text-gray-500" />,
      title: "Environment & Humidity",
      description: "Create the perfect environment for your plants to thrive",
      content: [
        { title: "Humidity Levels", text: "Tropical plants like ferns and calatheas need high humidity. Use a humidifier, pebble tray, or group plants together to increase humidity." },
        { title: "Temperature", text: "Most houseplants prefer temperatures between 65-75°F (18-24°C). Avoid placing plants near drafts, heaters, or air conditioners." },
        { title: "Air Circulation", text: "Good air circulation helps prevent pest infestations and fungal diseases. Avoid cramming plants together without any space between them." }
      ]
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Plant Care Guides</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to know to help your plants thrive. From watering schedules to light requirements, we've got you covered.
          </p>
        </motion.div>

        {/* Care Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {careCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-leaf-50 p-3 rounded-full">{card.icon}</div>
                  <div>
                    <CardTitle>{card.title}</CardTitle>
                    <CardDescription>{card.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {card.content.map((item, idx) => (
                      <AccordionItem key={idx} value={`item-${idx}`}>
                        <AccordionTrigger className="text-left font-medium">
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-600">{item.text}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Seasonal Care Section */}
        <motion.div
          className="bg-leaf-50 rounded-xl p-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Seasonal Care Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { season: "Spring", tips: "Increase watering as growth accelerates. Repot rootbound plants. Start fertilizing." },
              { season: "Summer", tips: "Protect from intense afternoon sun. Increase humidity. Watch for pests in warm weather." },
              { season: "Fall", tips: "Reduce watering as growth slows. Bring outdoor plants inside before frost. Stop fertilizing." },
              { season: "Winter", tips: "Water sparingly. Move plants away from cold drafts and heating vents. Clean dust from leaves." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{item.season}</h3>
                <p className="text-gray-600">{item.tips}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Common Issues Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Troubleshooting Common Issues</h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {[
                { 
                  issue: "Yellow Leaves", 
                  solution: "Usually indicates overwatering. Check soil moisture and reduce watering frequency. Make sure your pot has drainage holes and never let plants sit in standing water." 
                },
                { 
                  issue: "Brown Leaf Tips", 
                  solution: "Often caused by low humidity or inconsistent watering. Increase humidity around the plant with a humidifier or pebble tray. Ensure you're watering thoroughly but only when the top inch of soil is dry." 
                },
                { 
                  issue: "Drooping Leaves", 
                  solution: "Could signal either overwatering or underwatering. Check soil moisture: if wet, hold off on watering and ensure good drainage; if dry, give your plant a good soak." 
                },
                { 
                  issue: "Leggy Growth", 
                  solution: "Indicates insufficient light. Move your plant to a brighter location, but avoid direct sunlight unless the plant specifically requires it. Rotate plants regularly for even growth." 
                },
                { 
                  issue: "Pests (Spider Mites, Mealybugs, etc.)", 
                  solution: "Isolate affected plants immediately. Treat with insecticidal soap, neem oil, or a diluted alcohol solution. For severe infestations, you may need to repeat treatments weekly until resolved." 
                }
              ].map((item, idx) => (
                <AccordionItem key={idx} value={`issue-${idx}`}>
                  <AccordionTrigger className="text-lg font-medium">
                    {item.issue}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">{item.solution}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default CareGuidesPage;
