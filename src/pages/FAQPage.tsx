
import React from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const FAQPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const faqCategories = [
    {
      category: "Shopping & Ordering",
      questions: [
        {
          question: "How do I place an order?",
          answer: "You can place an order by browsing our collection, adding items to your cart, and proceeding to checkout. Follow the on-screen instructions to complete your purchase."
        },
        {
          question: "Do you ship internationally?",
          answer: "Currently, we only ship within the continental United States. We're working on expanding our shipping capabilities to serve international customers in the future."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and Apple Pay. All transactions are secure and encrypted."
        },
        {
          question: "Can I modify or cancel my order?",
          answer: "You can modify or cancel your order within 2 hours of placing it. Please contact our customer service team immediately if you need to make changes after this window."
        }
      ]
    },
    {
      category: "Shipping & Delivery",
      questions: [
        {
          question: "How long will it take to receive my order?",
          answer: "Standard shipping typically takes 3-5 business days. Expedited shipping options are available at checkout for 1-2 day delivery. Please note that extreme weather conditions may affect plant deliveries."
        },
        {
          question: "How do you ship live plants?",
          answer: "We use specialized packaging to ensure plants arrive healthy and undamaged. Each plant is securely wrapped to prevent soil spillage and protect foliage during transit. Plants are shipped in their nursery pots."
        },
        {
          question: "What if my plant arrives damaged?",
          answer: "We have a 14-day guarantee on all plants. If your plant arrives damaged, please take photos and contact us within 48 hours of delivery, and we'll arrange a replacement or refund."
        },
        {
          question: "Do you offer free shipping?",
          answer: "We offer free standard shipping on all orders over $75. Orders under this amount have a flat shipping rate of $9.95."
        }
      ]
    },
    {
      category: "Plant Care & Maintenance",
      questions: [
        {
          question: "How often should I water my new plant?",
          answer: "Watering frequency depends on the specific plant, your home environment, and the season. Check our care guides for detailed information on your specific plant, or refer to the care card included with your purchase."
        },
        {
          question: "Why are the leaves on my plant turning yellow?",
          answer: "Yellowing leaves often indicate overwatering, but could also be caused by insufficient light, nutrient deficiencies, or pests. Check the soil moisture level first, and refer to our troubleshooting guide for more detailed advice."
        },
        {
          question: "When should I repot my plant?",
          answer: "Generally, most houseplants need repotting every 12-18 months. Signs that your plant needs repotting include roots growing through drainage holes, water running straight through the pot, or stunted growth despite proper care."
        },
        {
          question: "Do your plants come with pots?",
          answer: "Our plants come in their nursery pots (black plastic pots). Decorative pots shown in product photos are sold separately, but you can easily add them to your order during checkout."
        }
      ]
    },
    {
      category: "Returns & Refunds",
      questions: [
        {
          question: "What is your return policy?",
          answer: "We offer a 14-day guarantee on all plants. If you're not satisfied with your purchase, contact us within 14 days of delivery, and we'll help arrange a replacement or refund. Note that pots and accessories must be unused and in original packaging to be eligible for return."
        },
        {
          question: "How do I return a product?",
          answer: "To initiate a return, please contact our customer service team with your order number and reason for return. We'll provide you with return instructions and a prepaid shipping label for eligible returns."
        },
        {
          question: "How long do refunds take to process?",
          answer: "Once we receive your return, refunds typically take 3-5 business days to process. The time it takes for the refund to appear in your account depends on your payment method and financial institution."
        },
        {
          question: "Can I exchange an item instead of returning it?",
          answer: "Yes, we're happy to process exchanges for items of equal value. For items of different values, we'll refund the difference or charge for the additional amount as needed. Please contact customer service to arrange an exchange."
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our products, shipping, plant care, and more.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          className="max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input 
              placeholder="Search for a question..." 
              className="pl-10 py-6 text-lg rounded-lg shadow-sm"
            />
            <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-leaf-500 hover:bg-leaf-600">
              Search
            </Button>
          </div>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-12 mb-16">
          {faqCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="bg-leaf-100 text-leaf-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">
                  {idx + 1}
                </span>
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="w-full border rounded-lg overflow-hidden">
                {category.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`${idx}-item-${index}`} className="border-b last:border-b-0">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50">
                      <span className="text-lg font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 bg-gray-50">
                      <p className="text-gray-700">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions Section */}
        <motion.div 
          className="bg-leaf-50 rounded-xl p-8 md:p-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our team is here to help with any questions you might have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-leaf-500 hover:bg-leaf-600 px-6 py-6 text-lg h-auto">
              Contact Support
            </Button>
            <Button variant="outline" className="border-leaf-500 text-leaf-600 hover:bg-leaf-50 px-6 py-6 text-lg h-auto">
              Live Chat
            </Button>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default FAQPage;
