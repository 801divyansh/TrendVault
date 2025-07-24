// src/components/home/CTA.tsx
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="bg-primary/5 py-20 px-4 text-center">
      <motion.div
        className="max-w-3xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold">
          Ready to Personalize Your Feed?
        </h2>
        <p className="text-muted-foreground text-lg">
          Join TrendVault today and stay ahead with curated news and trending entertainment.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/dashboard">
            <Button size="lg">Explore Dashboard</Button>
          </Link>
          <Link href="/sign-up">
            <Button size="lg" variant="secondary">Create Account</Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
