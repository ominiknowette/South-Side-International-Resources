import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const IntelligenceSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-navy text-white relative overflow-hidden border-b border-navy-800">
      <Container>
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          {/* Strategic Alliance Partner Badge */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 bg-navy-900/90 border border-slate-700/80 px-4 sm:px-5 py-2.5 sm:py-3 rounded-[2px] w-full sm:w-fit">
            <div className="flex items-center">
              <Image
                src="/images/lloyds-list-intelligence-white.svg"
                alt="Lloyd's List Intelligence"
                width={220}
                height={32}
                className="h-6 sm:h-8 w-auto object-contain max-w-[170px] sm:max-w-none"
              />
            </div>
            <div className="hidden sm:block h-5 w-px bg-slate-700" />
            <div className="text-[11px] sm:text-xs text-slate-300 font-medium tracking-wide">
              Official Maritime Intelligence Alliance &bull; African Domain Awareness
            </div>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white">
            Maritime Intelligence, Vessel Surveillance &amp; Threat Forensics
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed max-w-3xl">
            In partnership with Lloyd&apos;s List Intelligence, South Side International Resources equips sovereign administrations, naval headquarters, and port operators with real-time domain awareness to safeguard coastal economic zones, detect illicit operations, and enforce international maritime standards.
          </p>

          {/* Tactical Surveillance Visual & Details (High-Def RHIB Interceptor) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-2">
            <div className="md:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2px] border border-slate-700 bg-slate-900 shadow-md">
                <Image
                  src="/images/maritime-security-hd.jpg"
                  alt="High-speed tactical maritime security interceptor vessel on open water"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-2 text-[11px] text-slate-400">
                Tactical Security Interceptor &bull; Domain Enforcement
              </div>
            </div>

            <div className="md:col-span-7 space-y-4">
              <div className="space-y-1">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
                  Continuous Domain Tracking &amp; APEX Channel
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Persistent monitoring of domestic waters and international transit corridors, tracking inbound crude, refined petroleum, and LNG cargo.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
                  Targeted Port State Pre-Entry Boarding
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Automated risk assessment matrices under ISPS and Paris/Tokyo/Abuja MoUs, enabling security commands to interdict high-risk vessels prior to territorial landfall.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
                  Dedicated 24/7 Intelligence Analyst Support
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Deploying personal intelligence analysts providing daily vessel profiling, surveillance briefings, and threat mitigation recommendations.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
            <Button href="/services/maritime-security-intelligence" variant="white" size="lg" className="w-full sm:w-auto text-center">
              Maritime Intelligence Consultation &rarr;
            </Button>
            <span className="text-xs text-slate-400">
              Access to SeaSearcher &amp; APEX Channels
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};
