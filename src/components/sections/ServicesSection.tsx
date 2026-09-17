import React from "react";
import { Container } from "@/components/ui/Container";
import { servicesData } from "@/data/services";
import { ServiceEditorialItem } from "./ServiceEditorialItem";

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-surface-light border-b border-steel-muted">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="border-l-2 border-ocean pl-3">
            <span className="text-xs uppercase tracking-widest text-steel font-semibold">
              Practices &amp; Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy tracking-tight leading-tight">
            Comprehensive Maritime Consultancy Services
          </h2>
          <p className="text-base text-steel-dark leading-relaxed">
            Delivering technical, operational, and statutory excellence across five specialized marine disciplines. We assist state authorities and private enterprise in achieving compliance, operational efficiency, and commercial growth.
          </p>
        </div>

        {/* Editorial Alternating List (No Generic Cards) */}
        <div className="divide-y divide-steel-muted">
          {servicesData.map((service, index) => (
            <ServiceEditorialItem
              key={service.slug}
              title={service.title}
              description={service.editorialOverview}
              image={service.image}
              imageAlt={service.imageAlt}
              reverse={index % 2 === 1}
              scopes={service.scopes}
              slug={service.slug}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
