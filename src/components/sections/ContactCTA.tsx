import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const ContactCTA: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-navy text-white relative">
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-5 sm:space-y-6">
          <span className="inline-block text-xs uppercase tracking-widest text-slate-400 font-semibold border-b border-ocean pb-1">
            Institutional Advisory Inquiries
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white">
            Engage With Our Senior Maritime Advisory Directorate
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Whether addressing sovereign IMO compliance audits, establishing coastal surveillance grids, or optimizing terminal operations, our senior mariners and policy specialists operate 24/7.
          </p>

          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 items-center w-full sm:w-auto">
            <Button href="/contact" variant="white" size="lg" className="w-full sm:w-auto text-center">
              Submit Formal Inquiry &rarr;
            </Button>
            <Button href="tel:+2348097456789" variant="outline-white" size="lg" className="w-full sm:w-auto text-center">
              Call Hotline: +234 809 745 6789
            </Button>
          </div>

          <div className="pt-6 text-xs text-slate-400">
            Headquarters: Lagos, Nigeria &bull; Operating globally on a 24-hour, 7-day schedule.
          </div>
        </div>
      </Container>
    </section>
  );
};
