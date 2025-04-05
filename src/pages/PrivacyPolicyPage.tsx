
import React from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">Privacy Policy</h1>
            <p className="text-gray-600">
              Last updated: April 5, 2025
            </p>
          </div>

          <div className="prose prose-green max-w-none">
            <p>
              At Greens & Pots, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.
            </p>

            <h2 className="text-2xl font-serif font-semibold mt-8 mb-4 text-gray-800">Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when you:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Create an account</li>
              <li>Make a purchase</li>
              <li>Sign up for our newsletter</li>
              <li>Contact our customer service</li>
              <li>Participate in surveys, contests, or promotions</li>
            </ul>

            <p>
              This information may include your name, email address, postal address, phone number, and payment information. We also automatically collect certain information about your device and how you interact with our website.
            </p>

            <Separator className="my-8" />

            <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-800">How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about products, services, and promotions</li>
              <li>Personalize your shopping experience</li>
              <li>Improve our website and customer service</li>
              <li>Comply with legal obligations</li>
              <li>Detect and prevent fraud</li>
            </ul>

            <Separator className="my-8" />

            <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-800">Sharing Your Information</h2>
            <p>
              We may share your information with:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Service providers who help with our business operations (payment processors, shipping companies, etc.)</li>
              <li>Third-party partners for marketing purposes (with your consent)</li>
              <li>Legal authorities when required by law</li>
            </ul>
            <p>
              We do not sell your personal information to third parties.
            </p>

            <Separator className="my-8" />

            <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-800">Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies to collect information about your browsing activities. These technologies help us analyze website traffic, personalize content, and deliver targeted advertisements.
            </p>
            <p className="mt-4">
              You can manage your cookie preferences through your browser settings. Please note that disabling cookies may affect your experience on our website.
            </p>

            <Separator className="my-8" />

            <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-800">Your Rights and Choices</h2>
            <p>
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Access the personal information we have about you</li>
              <li>Correct inaccurate information</li>
              <li>Delete your personal information</li>
              <li>Object to certain processing activities</li>
              <li>Withdraw consent (where applicable)</li>
              <li>Opt out of marketing communications</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided at the end of this policy.
            </p>

            <Separator className="my-8" />

            <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-800">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no internet or electronic storage system is 100% secure, and we cannot guarantee absolute security.
            </p>

            <Separator className="my-8" />

            <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-800">Children's Privacy</h2>
            <p>
              Our website is not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you believe we have collected information from a child under 16, please contact us immediately.
            </p>

            <Separator className="my-8" />

            <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-800">Changes to Our Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last updated" date and will be effective as soon as it is accessible. We encourage you to review this Privacy Policy frequently to stay informed about how we are protecting your information.
            </p>

            <Separator className="my-8" />

            <h2 className="text-2xl font-serif font-semibold mb-4 text-gray-800">Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg my-4">
              <p>Greens & Pots</p>
              <p>123 Green Street</p>
              <p>Plantville, PL 12345</p>
              <p>Email: privacy@greensandpots.com</p>
              <p>Phone: +1 (234) 567-890</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage;
