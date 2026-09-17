import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Institutional Advisory Inquiries",
  description:
    "Engage with South Side International Resources. Headquartered in Lagos, Nigeria with 24/7 global advisory hotline for maritime administrations and shipowners.",
  openGraph: {
    title: "Contact Us | South Side International Resources",
    description:
      "Direct lines of communication for sovereign compliance, port operations, and commercial maritime inquiries.",
    images: [
      {
        url: "/images/ports-operations.jpg",
        width: 1200,
        height: 630,
        alt: "Contact South Side International Resources",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="py-20 lg:py-24 bg-navy text-white">
        <Container>
          <div className="max-w-3xl space-y-4">
            <div className="border-l-2 border-ocean pl-3">
              <span className="text-xs uppercase tracking-widest text-slate-300 font-semibold">
                Communications &amp; Engagement
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
              Contact South Side International Resources
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Our support hotline and senior advisory officers are available 24 hours a day and 7 days a week across global time zones.
            </p>
          </div>
        </Container>
      </section>

      {/* 2-Column Contact Layout */}
      <section className="py-16 lg:py-24 bg-surface-light border-b border-steel-muted">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Side: Company Information */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <div className="border-l-2 border-navy pl-3">
                  <span className="text-xs uppercase tracking-widest text-steel font-bold">
                    Official Headquarters
                  </span>
                </div>
                <h2 className="text-2xl font-semibold text-navy tracking-tight">
                  South Side International Resources
                </h2>
                <p className="text-sm text-steel-dark leading-relaxed">
                  Thank you for visiting our site. We would love to hear from you, kindly endeavour to use the form to your right to drop us a message. Be rest assured that we will get back to you within 24 hours.
                </p>
              </div>

              {/* Coordinates List */}
              <div className="border border-steel-muted rounded-[2px] bg-white p-6 space-y-6 shadow-sm">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-steel block mb-1">
                    Corporate Registration
                  </span>
                  <p className="text-sm font-semibold text-navy">
                    RC: SSIR 2535293
                  </p>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-steel block mb-1">
                    Physical &amp; Postal Address
                  </span>
                  <p className="text-sm text-steel-dark font-medium">
                    Lagos, Nigeria
                  </p>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-steel block mb-1">
                    24/7 Global Support Hotline
                  </span>
                  <a
                    href="tel:+2348097456789"
                    className="text-base font-semibold text-ocean hover:underline block"
                  >
                    +234 809 745 6789
                  </a>
                  <span className="text-[11px] text-steel">
                    Available 24 hours a day, 7 days a week
                  </span>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-steel block mb-1">
                    Electronic Mail
                  </span>
                  <a
                    href="mailto:info@southsideresources.com"
                    className="text-sm font-semibold text-ocean hover:underline block"
                  >
                    info@southsideresources.com
                  </a>
                </div>
              </div>

              {/* Authentic Location Map Visual from Archive */}
              <div className="border border-steel-muted rounded-[2px] bg-white p-4 space-y-2 shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-wider text-navy block">
                  Location Map &bull; Lagos Operations Hub
                </span>
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2px] border border-steel-muted bg-surface-light">
                  <Image
                    src="/images/contact-location-map.jpg"
                    alt="South Side International Resources Location Map in Lagos Nigeria"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-[11px] text-steel">
                  Lagos, Nigeria Headquarters &bull; Operations Worldwide 24/7
                </div>
              </div>

              {/* Institutional Protocol Notice */}
              <div className="bg-surface-light border-l-2 border-steel-dark p-4 text-xs text-steel leading-relaxed">
                <strong className="text-navy block mb-1">Confidentiality Protocol:</strong>
                All expressions of interest, casualty investigation briefings, and sovereign port data submitted are protected under strict international maritime nondisclosure standards.
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
