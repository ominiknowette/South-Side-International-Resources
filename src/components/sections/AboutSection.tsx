import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const AboutSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-white border-b border-steel-muted">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Editorial Text Column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div className="border-l-2 border-ocean pl-3">
              <span className="text-xs uppercase tracking-widest text-steel font-semibold">
                Institutional Mandate
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy tracking-tight leading-tight">
              Standardizing &amp; Advancing Waterborne Operations Across Sovereign Waters
            </h2>

            <p className="text-sm sm:text-base text-steel-dark leading-relaxed">
              South Side International Resources is founded on the development, operational improvement, and international standardization of maritime-related entities—including sovereign government bodies, maritime administrations, port authorities, commercial shipping lines, shipyards, and offshore operators.
            </p>

            <div className="bg-surface-light border-l-2 border-navy p-4 sm:p-5 my-4 space-y-2">
              <p className="text-sm text-navy font-semibold leading-relaxed">
                26,000 Nautical Miles of Sovereign Coastline &bull; 100+ International Ports
              </p>
              <p className="text-xs sm:text-sm text-steel-dark leading-relaxed">
                Africa being the second largest continent with a coastline of approximately 26,000 nautical miles and over one hundred ports interfacing with international shipping, currently commands only 1.2% of world shipping by numbers and 0.9% by gross tonnage, according to reports by the African Union.
              </p>
            </div>

            <p className="text-xs sm:text-sm text-steel leading-relaxed">
              As strategic planners with extensively experienced personnel in the waterborne industry, South Side International Resources develops custom tools, administrative policies, and surveillance procedures within the ambit of the International Maritime Organization (IMO) to create sustainable waterborne wealth and build littoral capacity.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
              <Button href="/about" variant="primary" size="md" className="w-full sm:w-auto text-center">
                About the Organization &rarr;
              </Button>
              <span className="text-xs text-steel font-medium">
                24/7 Global Advisory Standby &bull; Bilingual Directorate
              </span>
            </div>
          </div>

          {/* Authentic High-Definition Maritime Image Column */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-[2px] border border-steel-muted shadow-sm bg-surface-light">
              <Image
                src="/images/company-intro.jpg"
                alt="Harbor tug escorting commercial cargo vessel into littoral terminal"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="mt-3 flex justify-between text-[11px] text-steel">
              <span>Port &amp; Littoral Water Operations</span>
              <span>Lagos Advisory Directorate</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
