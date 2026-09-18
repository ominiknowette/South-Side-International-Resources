import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { servicesData } from "@/data/services";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white border-t border-navy-800">
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
