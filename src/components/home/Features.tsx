// src/components/home/Features.tsx
"use client";

import { Newspaper, Film, HeartHandshake, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Personalized News",
    description: "Get top headlines tailored to your interests and preferences.",
    icon: Newspaper,
  },
  {
    title: "Trending Movies",
    description: "Discover popular movies curated just for you from TMDB.",
    icon: Film,
  },
  {
    title: "Favorites Dashboard",
    description: "Bookmark your favorite articles and movies in one place.",
    icon: HeartHandshake,
  },
  {
    title: "Modern UI & Auth",
    description: "Powered by Clerk, Redux Toolkit, Framer Motion & Shadcn UI.",
    icon: Sparkles,
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-background text-foreground px-4">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Why Choose <span className="text-primary">TrendVault?</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition-all bg-muted/50"
              >
                <div className="flex items-center justify-center mb-4 bg-primary/10 text-primary rounded-full w-12 h-12 mx-auto">
                  <Icon size={24} />
                </div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
