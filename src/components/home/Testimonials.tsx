// src/components/home/Testimonials.tsx
"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ananya Singh",
    role: "Product Manager at MediaTech",
    comment:
      "TrendVault is my go-to dashboard. It saves me hours every week by curating only what matters. Love the design too!",
  },
  {
    name: "Rahul Mehra",
    role: "Frontend Engineer",
    comment:
      "A beautifully built dashboard — smooth UX, accurate data, and super personalized. This feels like magic!",
  },
  {
    name: "Aarav Shah",
    role: "Startup Founder",
    comment:
      "The perfect content aggregation tool. I use it daily to stay updated on news and movies, all in one place.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-muted text-foreground">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold"
        >
          What People Are Saying
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-background rounded-xl shadow-sm p-6 border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground mb-4">“{t.comment}”</p>
              <div className="text-sm font-semibold">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
