// src/components/home/Footer.tsx
"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-xl font-bold">TrendVault</h2>
          <p className="text-sm text-muted-foreground mt-2">
            Personalized insights at your fingertips.
          </p>
          <div className="flex gap-4 mt-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com/801divyansh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://linkedin.com/in/divyansh-your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin size={20} />
            </motion.a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Navigation</h3>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/favorites">Favorites</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Contact</h3>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>Email: <a href="mailto:contact@trendvault.io" className="underline">contact@trendvault.io</a></li>
            <li>Location: India</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Subscribe to Newsletter</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing! 🚀");
            }}
            className="flex flex-col gap-2"
          >
            <Input type="email" placeholder="you@example.com" required />
            <Button type="submit" className="w-full">
              <Mail size={16} className="mr-2" />
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} TrendVault — All rights reserved.
      </div>
    </footer>
  );
}
