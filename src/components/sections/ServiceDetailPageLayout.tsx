import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ServiceDetail } from "@/types";
import { ContactCTA } from "@/components/sections/ContactCTA";

interface ServiceDetailPageLayoutProps {
  service: ServiceDetail;
}

export const ServiceDetailPageLayout: React.FC<ServiceDetailPageLayoutProps> = ({
  service,
}) => {
  return (
    <>
      {/* Header Section */}
      <section className="py-16 lg:py-20 bg-navy text-white border-b border-navy-800">
        <Container>
          {/* Breadcrumb */}
          <nav className="text-xs text-slate-400 mb-6 flex items-center space-x-2">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-slate-200">{service.shortTitle}</span>
          </nav>

          <div className="max-w-4xl space-y-4">
            <div className="border-l-2 border-ocean pl-3">
              <span className="text-xs uppercase tracking-widest text-slate-300 font-semibold">
                Consultancy Practice
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-3xl">
              {service.editorialOverview}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content Area */}
      <section className="py-16 lg:py-20 bg-white">
        <Container>
          <div className="space-y-12 max-w-5xl">
            {/* 1. Large Service Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2px] border border-steel-muted shadow-sm bg-surface-light">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover"
              />
            </div>

            {/* 2. Introduction Paragraph & Detailed Service Information */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-4">
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-2xl font-semibold text-navy tracking-tight">
                  Consultancy Scope &amp; Statutory Framework
                </h2>

                <p className="text-base text-steel-dark leading-relaxed">
                  {service.detailedDescription}
                </p>

                {service.caseContext && (
                  <div className="bg-surface-light border-l-2 border-ocean p-5">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-navy mb-1">
                      Advisory Focus
                    </h3>
                    <p className="text-xs sm:text-sm text-steel-dark leading-relaxed">
                      {service.caseContext}
                    </p>
                  </div>
                )}

                {/* Scopes Breakdown */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-navy">
                    Core Technical Capacities &amp; Services
                  </h3>
                  <ul className="space-y-2.5">
                    {service.scopes.map((scope, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-steel-dark bg-surface-light p-3 rounded-[2px] border border-steel-muted/60"
                      >
                        <span className="text-ocean font-bold mt-0.5">•</span>
                        <span className="font-medium text-navy">{scope}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 3. Industry Relevance & Key Deliverables Sidebar */}
              <div className="lg:col-span-5 space-y-8">
                {/* Industry Relevance */}
                <div className="border border-steel-muted rounded-[2px] p-6 bg-surface-light space-y-4">
                  <div className="border-l-2 border-navy pl-3">
                    <h3 className="text-xs uppercase tracking-widest text-navy font-bold">
                      Industry Relevance
                    </h3>
                  </div>
                  <p className="text-xs text-steel leading-relaxed">
                    This practice directly serves and advises the following institutional stakeholders:
                  </p>
                  <ul className="space-y-2 text-xs text-steel-dark">
                    {service.industryRelevance.map((entity, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-ocean font-bold">•</span>
                        <span>{entity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Deliverables */}
                {service.keyDeliverables && (
                  <div className="border border-steel-muted rounded-[2px] p-6 bg-white space-y-4">
                    <div className="border-l-2 border-ocean pl-3">
                      <h3 className="text-xs uppercase tracking-widest text-navy font-bold">
                        Institutional Deliverables
                      </h3>
                    </div>
                    <ul className="space-y-2.5 text-xs text-steel-dark">
                      {service.keyDeliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-steel font-bold">&rarr;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Direct Consultation Trigger */}
                <div className="bg-navy text-white rounded-[2px] p-6 space-y-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                    Request Practice Consultation
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Contact our practice directors to discuss statutory audits, operational assignments, or formal expressions of interest.
                  </p>
                  <div className="pt-2">
                    <Button href="/contact" variant="white" size="sm" className="w-full">
                      Initiate Advisory Inquiry
                    </Button>
                  </div>
                  <p className="text-[10px] text-slate-400 text-center">
                    Confidential &bull; 24/7 Global Dispatch
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Contact Consultation Section */}
      <ContactCTA />
    </>
  );
};
