
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

interface LayoutProps {
  children: React.ReactNode;
  noAnimation?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, noAnimation = false }) => {
  const { pathname } = useLocation();

  // Scroll to top when pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (noAnimation) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ScrollToTop />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main 
          key={pathname}
          className="flex-grow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
