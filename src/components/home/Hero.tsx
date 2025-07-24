"use client";

import HeroHeader from "./HeroHeader";
import Features from "./Features";
import CTA from "./CTA";
import ScrollToTop from "../shared/ScrollToTop";
import Testimonials from "./Testimonials";

export default function HomePage() {
  return (
    <main>
      <HeroHeader />
      <Features />
      <Testimonials />
      <CTA />
      <ScrollToTop />
    </main>
  );
}
