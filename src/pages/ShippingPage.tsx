
import React from "react";
import Layout from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const ShippingPage = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">Shipping Information</h1>
          <p className="text-gray-600">
            Everything you need to know about our shipping process and policies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-sm p-6 mb-8"
        >
          <h2 className="text-2xl font-serif font-semibold mb-4 text-leaf-700">Shipping Methods</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-800 mb-2">Standard Shipping</h3>
                <p className="text-sm text-gray-600 mb-2">5-7 Business Days</p>
                <p className="font-semibold text-leaf-600">$5.99</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 bg-leaf-50">
                <h3 className="font-medium text-gray-800 mb-2">Express Shipping</h3>
                <p className="text-sm text-gray-600 mb-2">2-3 Business Days</p>
                <p className="font-semibold text-leaf-600">$12.99</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-gray-800 mb-2">Free Shipping</h3>
                <p className="text-sm text-gray-600 mb-2">5-7 Business Days</p>
                <p className="font-semibold text-leaf-600">On orders over $75</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-lg shadow-sm p-6 mb-8"
        >
          <h2 className="text-2xl font-serif font-semibold mb-4 text-leaf-700">Shipping Areas</h2>
          <p className="text-gray-600 mb-4">
            We currently ship to all 50 US states and select international destinations. Please note that shipping times may vary for Alaska, Hawaii, and international orders.
          </p>
          <div className="bg-leaf-50 border border-leaf-100 rounded-lg p-4">
            <p className="text-sm text-leaf-700">
              <strong>International Shipping:</strong> Additional customs fees, taxes, and duties may apply for international orders and are the responsibility of the recipient.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-serif font-semibold mb-4 text-leaf-700">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="mb-8">
            <AccordionItem value="item-1">
              <AccordionTrigger>When will my order ship?</AccordionTrigger>
              <AccordionContent>
                Orders are typically processed within 1-2 business days. Once your order ships, you'll receive a confirmation email with tracking information. Please note that orders placed after 12 PM may not be processed until the following business day.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How do you ship plants?</AccordionTrigger>
              <AccordionContent>
                We take great care in packaging our plants for safe transit. Each plant is carefully wrapped with breathable materials, secured in its pot, and placed in a sturdy box with appropriate padding to minimize movement. For larger plants, we use specialized boxes to ensure they arrive in perfect condition.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Will extreme weather affect my plant delivery?</AccordionTrigger>
              <AccordionContent>
                Yes, we monitor weather conditions across shipping routes. During extreme temperature conditions (below 32°F or above 90°F), we may delay shipping to ensure your plants arrive healthy. If a weather delay occurs, we'll notify you via email.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Can I change my shipping address after placing an order?</AccordionTrigger>
              <AccordionContent>
                Address changes can only be accommodated if requested before your order ships. Please contact our customer service team as soon as possible with your order number and new shipping details.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Do you offer local pickup?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer local pickup at our store location. Select "Local Pickup" during checkout and you'll receive an email when your order is ready for collection, typically within 24 hours.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-soil-50 rounded-lg p-6 border border-soil-100"
        >
          <h2 className="text-xl font-serif font-semibold mb-3 text-soil-800">Need more help?</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about shipping or your order, our customer service team is here to help.
          </p>
          <div className="flex gap-4">
            <a 
              href="/contact" 
              className="text-soil-600 hover:text-soil-800 font-medium"
            >
              Contact Us
            </a>
            <span className="text-gray-400">|</span>
            <a 
              href="mailto:shipping@greensandpots.com" 
              className="text-soil-600 hover:text-soil-800 font-medium"
            >
              shipping@greensandpots.com
            </a>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default ShippingPage;
