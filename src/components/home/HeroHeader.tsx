// src/components/home/Hero.tsx
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center text-center px-6 bg-gradient-to-br from-background to-muted">
      <div className="max-w-3xl space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold leading-tight"
        >
          Your Personalized Window into the World
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-muted-foreground text-lg sm:text-xl"
        >
          Stay ahead with curated news, trending movies, and personalized content — all in one dashboard.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <Link href="/dashboard">
            <Button size="lg">Get Started</Button>
          </Link>
          <Button size="lg" variant="secondary">
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
