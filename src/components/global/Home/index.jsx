import React from "react";
import { Hero } from "@/components/general/Hero";
import StickyMobileCTA from "@/components/general/StickyMobileCTA";
import WhyChooseUs from "@/components/general/WhyChooseUs";
import PainSection from "@/components/general/PainSection";

import HowItWorks from "@/components/general/HowItWorks";
import Pricing from "@/components/general/Pricing";

import Testimonials from "@/components/general/Reviews";
import Faqs from "@/components/general/Faqs";

export default function Home() {
  return (
    <div className="w-full pb-16 text-neutral-900 transition-colors duration-300 dark:text-white">
      <Hero />
      <PainSection />
      <WhyChooseUs />

      <HowItWorks />
      <StickyMobileCTA />
      <Pricing />

      <Testimonials />
      <Faqs />
    </div>
  );
}
