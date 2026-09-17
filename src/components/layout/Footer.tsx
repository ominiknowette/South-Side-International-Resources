import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { servicesData } from "@/data/services";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white border-t border-navy-800">
      {/* Strategic Intelligence Alliance Showcase */}
      <div className="border-b border-navy-800 bg-[#06121E] py-8 sm:py-10 lg:py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Institutional Partnership Identity & Brand Marks */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-ocean/15 border border-ocean/40 text-[10px] font-bold uppercase tracking-[0.2em] text-ocean-light rounded-[2px]">
                  Strategic Intelligence Alliance
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  African Maritime Domain Awareness
                </span>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight leading-snug">
                  South Side International Resources &amp; Lloyd&apos;s List Intelligence
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2 max-w-xl">
                  Deploying joint technical intelligence, vessel tracking infrastructure, and statutory risk forensics for littoral states, naval commands, and port authorities across West Africa and the Gulf of Guinea.
                </p>
              </div>

              {/* Partner Brand Vector Badge (Seamless Dark Blend, Prominent & Sharp) */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-6">
                <div className="flex items-center bg-navy-900/90 border border-slate-700/80 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-[2px]">
                  <Image
                    src="/images/lloyds-list-intelligence-white.svg"
                    alt="Lloyd's List Intelligence"
                    width={240}
                    height={36}
                    className="h-7 sm:h-9 w-auto object-contain max-w-[180px] sm:max-w-none"
                  />
                </div>
                <div className="text-[11px] text-slate-400 leading-tight">
                  <span className="font-semibold text-slate-200 block">Accredited Data Integration</span>
                  Real-time AIS, SeaSearcher &amp; APEX Channels
                </div>
              </div>
            </div>

            {/* Right: 3 Core Alliance Operational Pillars */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 lg:pt-0">
              <div className="bg-navy-900/60 border border-navy-800 p-4 rounded-[2px] space-y-1.5">
                <div className="text-[10px] font-bold uppercase tracking-wider text-ocean-light">
                  Surveillance
                </div>
                <h4 className="text-xs font-semibold text-white">
                  SeaSearcher Tracking
                </h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Persistent satellite and terrestrial AIS coverage across 26,000 NM littoral perimeter.
                </p>
              </div>

              <div className="bg-navy-900/60 border border-navy-800 p-4 rounded-[2px] space-y-1.5">
                <div className="text-[10px] font-bold uppercase tracking-wider text-ocean-light">
                  Commodity Flows
                </div>
                <h4 className="text-xs font-semibold text-white">
                  APEX Petroleum
                </h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Forensic cargo tracking, offshore STS transfer detection, and crude origin validation.
                </p>
              </div>

              <div className="bg-navy-900/60 border border-navy-800 p-4 rounded-[2px] space-y-1.5">
                <div className="text-[10px] font-bold uppercase tracking-wider text-ocean-light">
                  Enforcement
                </div>
                <h4 className="text-xs font-semibold text-white">
                  Port Risk Screening
                </h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Automated ISPS pre-entry risk profiling and interdiction metrics for security commands.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer Links */}
      <div className="py-12 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Column 1: Organization Logo & Creds (Seamless Blend) */}
            <div className="space-y-4">
              <Link href="/" className="inline-block focus:outline-none" aria-label="South Side International Resources">
                <Image
                  src="/images/ssir-official-logo-white.png"
                  alt="South Side International Resources"
                  width={240}
                  height={65}
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <p className="text-xs text-slate-300 leading-relaxed pt-1">
                Premised on the development, improvement, and international standardization of maritime operations for government bodies, port authorities, shipping companies, and naval commands.
              </p>
              <div className="text-xs text-slate-400 space-y-1">
                <p>Registration: SSIR 2535293</p>
                <p>Lagos, Nigeria</p>
              </div>
            </div>

            {/* Column 2: Core Services */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4 border-b border-navy-800 pb-2">
                Consultancy Disciplines
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {servicesData.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="hover:text-white transition-colors block py-0.5"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Institutional Navigation */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4 border-b border-navy-800 pb-2">
                Institutional
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>
                  <Link href="/" className="hover:text-white transition-colors block py-0.5">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors block py-0.5">
                    About the Organization
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors block py-0.5">
                    Consultancy Scope &amp; Deliverables
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="hover:text-white transition-colors block py-0.5">
                    News &amp; Intelligence Briefings
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors block py-0.5">
                    Advisory Inquiries &amp; RFPs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Operational Coordinates */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4 border-b border-navy-800 pb-2">
                Advisory Coordinates
              </h4>
              <div className="space-y-3 text-xs text-slate-300">
                <div>
                  <strong className="text-white block font-medium">Headquarters</strong>
                  <p>Lagos, Nigeria</p>
                </div>
                <div>
                  <strong className="text-white block font-medium">Direct Telephone</strong>
                  <a href="tel:+2348097456789" className="hover:text-white transition-colors">
                    +234 809 745 6789
                  </a>
                </div>
                <div>
                  <strong className="text-white block font-medium">Official Dispatch</strong>
                  <a href="mailto:info@southsideresources.com" className="hover:text-white transition-colors">
                    info@southsideresources.com
                  </a>
                </div>
                <div className="pt-1">
                  <span className="inline-block px-2.5 py-1 bg-navy-800 text-slate-200 text-[10px] uppercase tracking-wider rounded-[2px] border border-navy-700">
                    24/7 Global Standby
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Governance Bar */}
          <div className="mt-12 pt-8 border-t border-navy-800/80 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
            <p>
              &copy; 2026 South Side International Resources. All rights reserved.
            </p>
            <p className="text-slate-400 text-center sm:text-right">
              IMO Member State Compliance &bull; African Integrated Maritime Strategy (AIMS)
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};
