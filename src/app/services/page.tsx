import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { servicesData } from "@/data/services";
import { ServiceEditorialItem } from "@/components/sections/ServiceEditorialItem";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Maritime Consultancy Services | Technical & Statutory Practice Areas",
  description:
    "Explore the five core maritime consultancy disciplines of South Side International Resources: Regulatory, Security & Intelligence, Policy Development, Ports Operations, and Commercial Marine.",
  openGraph: {
    title: "Maritime Consultancy Services | South Side International Resources",
    description:
      "Comprehensive maritime consultancy solutions for sovereign littoral states, port operators, and commercial shipowners.",
    images: [
      {
        url: "/images/ports-operations.jpg",
        width: 1200,
        height: 630,
        alt: "SSIR Maritime Consultancy Services",
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="py-20 lg:py-24 bg-navy text-white">
        <Container>
          <div className="max-w-3xl space-y-4">
            <div className="border-l-2 border-ocean pl-3">
              <span className="text-xs uppercase tracking-widest text-slate-300 font-semibold">
                Practice Areas
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
              Specialized Maritime Advisory Disciplines
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We provide authoritative counsel across five core practices, combining statutory compliance with commercial acumen to resolve complex waterborne challenges.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Breakdown */}
      <section className="py-16 bg-surface-light border-b border-steel-muted">
        <Container>
          <div className="divide-y divide-steel-muted">
            {servicesData.map((service, index) => (
              <ServiceEditorialItem
                key={service.slug}
                title={service.title}
                description={service.detailedDescription}
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

      {/* Consultation Call to Action */}
      <ContactCTA />
    </>
  );
}
