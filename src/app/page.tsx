import React from "react";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhySSIRSection } from "@/components/sections/WhySSIRSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: Company Introduction */}
      <AboutSection />

      {/* Section 3: Maritime Consultancy Services */}
      <ServicesSection />

      {/* Section 4: Why South Side International Resources */}
      <WhySSIRSection />

      {/* Section 5: News and Insights */}
      <NewsSection />

      {/* Section 6: Contact Call To Action */}
      <ContactCTA />
    </>
  );
}
