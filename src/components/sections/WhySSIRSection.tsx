import React from "react";
import { Container } from "@/components/ui/Container";
import { whySSIRPillars } from "@/data/services";

export const WhySSIRSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-steel-muted">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="border-l-2 border-ocean pl-3">
            <span className="text-xs uppercase tracking-widest text-steel font-semibold">
              Institutional Strengths
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-navy tracking-tight leading-tight">
            Why South Side International Resources
          </h2>
          <p className="text-base text-steel-dark leading-relaxed">
            Our advisory practice bridges international regulatory treaties with the commercial and physical realities of local waterborne environments.
          </p>
        </div>

        {/* Clean Information Layout (No Icon-Based Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whySSIRPillars.map((pillar, index) => (
            <div
              key={index}
              className="border-t-2 border-navy pt-6 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-navy leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-steel-dark leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {pillar.metric && (
                <div className="pt-4 mt-4 border-t border-steel-muted/60">
                  <div className="text-xl font-bold text-navy font-sans">
                    {pillar.metric}
                  </div>
                  <div className="text-[11px] text-steel font-medium">
                    {pillar.metricLabel}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
