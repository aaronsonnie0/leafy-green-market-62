
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactPage = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally send the form data to a server
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
      duration: 5000,
    });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-5xl font-serif font-bold text-gray-800 dark:text-gray-100 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Have questions or need assistance? We're here to help! Reach out to our friendly team using any of the methods below.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <Card className="text-center h-full premium-card border-0 hover-lift">
              <CardContent className="pt-8 pb-8">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-leaf-100 dark:bg-leaf-900/30 text-leaf-600 dark:text-leaf-400">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-medium mb-3">Email Us</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-3">Our friendly team is here to help.</p>
                <a href="mailto:hello@greensandpots.com" className="text-leaf-600 dark:text-leaf-400 hover:text-leaf-700 dark:hover:text-leaf-300 font-medium transition-colors">
                  hello@greensandpots.com
                </a>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="text-center h-full premium-card border-0 hover-lift">
              <CardContent className="pt-8 pb-8">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-leaf-100 dark:bg-leaf-900/30 text-leaf-600 dark:text-leaf-400">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-medium mb-3">Call Us</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-3">Mon-Fri from 8am to 5pm.</p>
                <a href="tel:+1234567890" className="text-leaf-600 dark:text-leaf-400 hover:text-leaf-700 dark:hover:text-leaf-300 font-medium transition-colors">
                  +1 (234) 567-890
                </a>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="text-center h-full premium-card border-0 hover-lift">
              <CardContent className="pt-8 pb-8">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-leaf-100 dark:bg-leaf-900/30 text-leaf-600 dark:text-leaf-400">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-medium mb-3">Visit Us</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-3">Come say hello at our store.</p>
                <span className="text-leaf-600 dark:text-leaf-400 font-medium">
                  123 Green Street, Plantville, PL 12345
                </span>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glassmorphism rounded-xl p-8"
          >
            <h2 className="text-2xl font-serif font-semibold mb-8 flex items-center">
              <MessageSquare className="mr-3 text-leaf-500 dark:text-leaf-400" /> 
              <span>Send us a message</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">Name</label>
                  <Input id="name" required placeholder="Your name" className="rounded-lg" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">Email</label>
                  <Input id="email" type="email" required placeholder="your@email.com" className="rounded-lg" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
                <Input id="subject" required placeholder="How can we help you?" className="rounded-lg" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                <Textarea 
                  id="message" 
                  required 
                  placeholder="Your message here..." 
                  rows={5}
                  className="rounded-lg resize-none"
                />
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit" 
                  className="bg-leaf-600 hover:bg-leaf-700 dark:bg-leaf-700 dark:hover:bg-leaf-600 w-full flex gap-2 items-center justify-center rounded-lg py-6"
                >
                  <Send size={16} />
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-xl overflow-hidden h-[500px] lg:h-auto glassmorphism p-2"
            whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573036728!2d-73.9877139!3d40.7571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258ff34c13039%3A0x14d99d24d64bf6fb!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Greens & Pots Store Location"
              className="rounded-lg"
            ></iframe>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glassmorphism rounded-xl p-10 text-center"
        >
          <h2 className="text-2xl font-serif font-semibold mb-3">Join Our Community</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Follow us on social media for care tips, inspiration, and to be part of our growing community of plant lovers.
          </p>
          <div className="flex justify-center gap-8">
            <SocialLink icon="facebook" />
            <SocialLink icon="instagram" />
            <SocialLink icon="twitter" />
            <SocialLink icon="youtube" />
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

interface SocialLinkProps {
  icon: "facebook" | "instagram" | "twitter" | "youtube";
}

const SocialLink = ({ icon }: SocialLinkProps) => {
  let iconJsx;
  
  switch (icon) {
    case "facebook":
      iconJsx = (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      );
      break;
    case "instagram":
      iconJsx = (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
        </svg>
      );
      break;
    case "twitter":
      iconJsx = (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      );
      break;
    case "youtube":
      iconJsx = (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      );
      break;
  }
  
  return (
    <motion.a 
      href="#" 
      className="text-gray-600 dark:text-gray-400 hover:text-leaf-600 dark:hover:text-leaf-400 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {iconJsx}
    </motion.a>
  );
};

export default ContactPage;
