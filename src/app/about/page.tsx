import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "About Us | Institutional Overview & Mandate",
  description:
    "Learn about South Side International Resources, our 24/7 maritime consultancy model, and our institutional commitment to standardizing waterborne operations.",
  openGraph: {
    title: "About Us | South Side International Resources",
    description:
      "Strategic maritime consultancy serving governments, port authorities, and commercial shipping across 26,000 nautical miles of coastline.",
    images: [
      {
        url: "/images/about-hero.jpg",
        width: 1200,
        height: 630,
        alt: "About South Side International Resources",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header / Hero */}
      <section className="relative py-20 lg:py-24 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-hero.jpg"
            alt="International commercial fleet navigating oceanic trade lane"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-navy/85" aria-hidden="true" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="border-l-2 border-ocean pl-3">
              <span className="text-xs uppercase tracking-widest text-slate-300 font-semibold">
                About South Side International Resources
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
              Institutional Maritime Consultancy for Global Waterborne Industries
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Operating worldwide on a 24/7 basis to develop, standardize, and protect sovereign maritime domains, port infrastructure, and commercial fleets.
            </p>
          </div>
        </Container>
      </section>

      {/* Company Story & Founding Philosophy */}
      <section className="py-20 bg-white border-b border-steel-muted">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-navy tracking-tight">
                Our Institutional Mandate &amp; Pedigree
              </h2>

              <p className="text-base text-steel-dark leading-relaxed">
                South Side International Resources (SSIR) is an international maritime consultancy premised on the development, operational elevation, and international standardization of maritime-related entities. Our client roster spans sovereign Government Bodies, National Maritime Administrations, Port Authorities, Commercial Shipping Lines, Shipyards, Shipping Agents, Offshore Operators, and Naval Commands.
              </p>

              <p className="text-sm text-steel-dark leading-relaxed">
                Headquartered in Lagos, Nigeria, with an advisory footprint extending across international shipping capitals, SSIR bridges the gap between complex multilateral conventions—such as those ratified by the International Maritime Organization (IMO)—and the practical, day-to-day enforcement requirements of coastal states and commercial operators.
              </p>

              {/* Statistical Callout with Africa Map from Archive */}
              <div className="bg-surface-light border border-steel-muted p-6 my-6 space-y-4 rounded-[2px]">
                <div className="flex items-center space-x-3 border-b border-steel-muted pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-navy">
                    The Littoral Economic Imperative (AU Studies)
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  <div className="sm:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-steel-dark leading-relaxed">
                      Africa being the second largest continent in size with a coastline of approximately <strong>26,000 nautical miles</strong> and over one hundred ports interfacing with international shipping, only owns <strong>1.2% of world shipping</strong> by numbers and <strong>0.9% by gross tonnage</strong>, despite carrying <strong>6% of worldwide waterborne cargo</strong> and approximately <strong>3% of container traffic</strong>.
                    </p>
                    <p className="text-xs text-steel leading-relaxed">
                      Our strategic planners develop custom tools and procedures that address littoral states&apos; unique challenges so they can fully harness natural waterborne resources, sustain development, and remain competitive within international norms.
                    </p>
                  </div>
                  <div className="sm:col-span-5">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2px] border border-steel-muted bg-white p-2">
                      <Image
                        src="/images/about-africa-map.jpg"
                        alt="Map of Africa Coastline and Maritime Domain"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-[10px] text-steel text-center block mt-1">
                      26,000 NM African Littoral Perimeter
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-steel-dark leading-relaxed">
                We study our clients&apos; environments closely to proffer strategies within the ambit of the International Maritime Organization and local laws. Our aim is to generate maritime wealth from inland waterways to the oceans, enhancing employment opportunities and technical capacity across the sector.
              </p>
            </div>

            {/* Side Overview: Global Network Graphic & Advisory Principles */}
            <div className="lg:col-span-5 space-y-6">
              {/* Globe Network Graphic from Archive */}
              <div className="border border-steel-muted rounded-[2px] p-4 bg-surface-light space-y-3">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-white border border-steel-muted">
                  <Image
                    src="/images/about-globe-network.jpg"
                    alt="SSIR Global 24/7 Maritime Network and Connectivity"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-sm font-semibold text-navy">
                    Global 24/7 Operations &amp; Connectivity
                  </h3>
                  <p className="text-xs text-steel mt-1 leading-relaxed">
                    Recognizing time and language differences, our bilingual staff and maritime specialists operate on standby worldwide 24 hours a day, 7 days a week.
                  </p>
                </div>
              </div>

              {/* Core Advisory Principles */}
              <div className="border border-steel-muted rounded-[2px] p-6 bg-white space-y-4 shadow-sm">
                <h3 className="text-base font-semibold text-navy border-b border-steel-muted pb-3">
                  Core Advisory Principles
                </h3>
                <ul className="space-y-3 text-xs text-steel-dark">
                  <li className="flex items-start gap-2.5">
                    <span className="text-ocean font-bold mt-0.5">•</span>
                    <span>
                      <strong className="text-navy">Statutory Parity:</strong> Every solution aligns strictly with IMO conventions (SOLAS, MARPOL, STCW, ISPS, IMSAS).
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-ocean font-bold mt-0.5">•</span>
                    <span>
                      <strong className="text-navy">Littoral Sovereign Rights:</strong> Proffering policies that balance international navigation with coastal state economic rights.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-ocean font-bold mt-0.5">•</span>
                    <span>
                      <strong className="text-navy">Commercial Pragmatism:</strong> Ensuring regulatory frameworks enhance trade velocity, revenue collection, and vessel turnaround.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-ocean font-bold mt-0.5">•</span>
                    <span>
                      <strong className="text-navy">Continuous Readiness:</strong> 24/7 global advisory teams ready to deploy for casualty investigations or operational crises.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Multidisciplinary Team Overview */}
      <section className="py-20 bg-surface-light border-b border-steel-muted">
        <Container>
          <div className="max-w-3xl space-y-4 mb-14">
            <div className="border-l-2 border-ocean pl-3">
              <span className="text-xs uppercase tracking-widest text-steel font-semibold">
                Expertise &amp; Composition
              </span>
            </div>
            <h2 className="text-3xl font-semibold text-navy tracking-tight">
              Multidisciplinary Maritime Specialists
            </h2>
            <p className="text-sm sm:text-base text-steel-dark leading-relaxed">
              Our roster combines decades of command experience at sea, executive leadership at national maritime authorities, and recognized legal acumen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-t-2 border-navy pt-6 space-y-2">
              <h3 className="text-base font-semibold text-navy">
                Master Mariners &amp; Harbor Masters
              </h3>
              <p className="text-xs text-steel-dark leading-relaxed">
                Veterans of deep-sea commercial commands, pilotage services, and port vessel traffic management systems (VTS).
              </p>
            </div>

            <div className="border-t-2 border-navy pt-6 space-y-2">
              <h3 className="text-base font-semibold text-navy">
                Naval Architects &amp; Marine Engineers
              </h3>
              <p className="text-xs text-steel-dark leading-relaxed">
                Technical specialists handling dry dock oversight, vessel condition vetting, pre-purchase surveys, and green ship recycling.
              </p>
            </div>

            <div className="border-t-2 border-navy pt-6 space-y-2">
              <h3 className="text-base font-semibold text-navy">
                Maritime Lawyers &amp; Policy Analysts
              </h3>
              <p className="text-xs text-steel-dark leading-relaxed">
                Advisors skilled in drafting sovereign ocean legislation, IMO treaty transpositions, and port concession contracts.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Consultation CTA */}
      <ContactCTA />
    </>
  );
}
