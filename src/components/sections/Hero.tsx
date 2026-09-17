"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface SlideData {
  image: string;
  alt: string;
  label: string;
}

const slides: SlideData[] = [
  {
    image: "/images/ports-operations.jpg",
    alt: "Deepwater container terminal with gantry cranes handling freight",
    label: "Ports Operations & Logistics Infrastructure",
  },
  {
    image: "/images/maritime-security-hd.jpg",
    alt: "High-speed tactical maritime security interceptor vessel on open water",
    label: "Maritime Security & Domain Awareness",
  },
  {
    image: "/images/commercial-marine.jpg",
    alt: "Commercial dry dock shipyard facility with cargo vessel undergoing overhaul",
    label: "Commercial Marine & Shipyard Operations",
  },
  {
    image: "/images/regulatory-marine-hd.jpg",
    alt: "Marine safety officers conducting vessel statutory compliance inspection",
    label: "Regulatory Marine & Port State Control Compliance",
  },
  {
    image: "/images/about-hero.jpg",
    alt: "Commercial container fleet underway on international oceanic shipping lane",
    label: "Global Waterborne Trade & Littoral Fleet Governance",
  },
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full min-h-[520px] sm:min-h-[600px] lg:min-h-[720px] flex items-center bg-navy text-white overflow-hidden">
      {/* Background Slideshow Images with Smooth Crossfade */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}

        {/* Restrained dark institutional overlay for readability */}
        <div
          className="absolute inset-0 bg-navy/80 mix-blend-multiply z-20"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40 z-20"
          aria-hidden="true"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-30 w-full py-14 sm:py-20 lg:py-28">
        <Container>
          <div className="max-w-3xl space-y-5 sm:space-y-6">
            <div className="inline-block border-l-2 border-ocean pl-3">
              <span className="text-xs sm:text-sm uppercase tracking-widest text-slate-300 font-medium">
                South Side International Resources
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.2] sm:leading-[1.15] text-white">
              Strategic Maritime Consultancy for Global Waterborne Industries
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl">
              Delivering institutional advisory, statutory compliance, maritime intelligence, and operational governance across littoral states, port facilities, and international fleets.
            </p>

            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Button href="/services" variant="white" size="lg" className="w-full sm:w-auto text-center">
                Explore Services
              </Button>
              <Button href="/contact" variant="outline-white" size="lg" className="w-full sm:w-auto text-center">
                Contact Us
              </Button>
            </div>

            {/* Institutional Credentials Footnote */}
            <div className="pt-6 sm:pt-8 border-t border-slate-400/20 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 text-xs text-slate-300">
              <div>
                <div className="font-semibold text-white text-sm">26,000 NM</div>
                <div className="text-slate-400 mt-0.5">Littoral Economic Scope</div>
              </div>
              <div>
                <div className="font-semibold text-white text-sm">IMO &amp; AIMS</div>
                <div className="text-slate-400 mt-0.5">Statutory Governance</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="font-semibold text-white text-sm">24/7 Global</div>
                <div className="text-slate-400 mt-0.5">Advisory Standby</div>
              </div>
            </div>
          </div>

          {/* Slideshow Controller & Caption Cue */}
          <div className="pt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-400/10 mt-10">
            <div className="text-xs text-slate-300 flex items-center space-x-2">
              <span className="font-mono text-ocean-light font-bold">
                0{currentSlide + 1} / 0{slides.length}
              </span>
              <span>&bull;</span>
              <span className="text-slate-300 font-medium">
                {slides[currentSlide].label}
              </span>
            </div>

            {/* Navigation Dots & Chevrons */}
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous slide"
                className="w-7 h-7 rounded-[2px] border border-white/30 hover:border-white text-xs flex items-center justify-center text-white/80 hover:text-white transition-colors"
              >
                &larr;
              </button>

              <div className="flex space-x-1.5">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => goToSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-1.5 transition-all duration-300 rounded-none ${
                      idx === currentSlide ? "w-8 bg-white" : "w-3 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="w-7 h-7 rounded-[2px] border border-white/30 hover:border-white text-xs flex items-center justify-center text-white/80 hover:text-white transition-colors"
              >
                &rarr;
              </button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
