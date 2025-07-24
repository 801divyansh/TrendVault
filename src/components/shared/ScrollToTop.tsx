// src/components/shared/ScrollToTop.tsx
"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <motion.button
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 p-3 bg-primary text-white dark:text-black rounded-full shadow-lg hover:bg-primary/80 transition-colors"
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </motion.button>
  );
}
