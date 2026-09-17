import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Navigation } from "./Navigation";
import { Button } from "@/components/ui/Button";

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-steel-muted shadow-sm">
      {/* Institutional Top Bar */}
      <div className="bg-navy text-white text-xs border-b border-navy-800 py-1.5 hidden md:block">
        <Container>
          <div className="flex justify-between items-center tracking-wide">
            <div className="flex items-center space-x-3 lg:space-x-5 text-slate-300 text-[11px] lg:text-xs">
              <span>
                <strong className="text-white font-medium">SSIR</strong> — International Maritime Consultancy
              </span>
              <span className="text-slate-400">|</span>
              <span>Lagos (RC 2535293)</span>
              <span className="text-slate-400 hidden xl:inline">|</span>
              <span className="hidden xl:inline">AIMS Aligned</span>
            </div>
            <div className="flex items-center space-x-4 text-slate-300 text-[11px] lg:text-xs shrink-0">
              <span>
                24/7 Hotline:{" "}
                <a
                  href="tel:+2348097456789"
                  className="text-white hover:underline font-medium"
                >
                  +234 809 745 6789
                </a>
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Header Bar */}
      <div className="py-2.5 sm:py-3">
        <Container>
          <div className="flex items-center justify-between">
            {/* Official Institutional Brandmark Logo (Transparent) */}
            <Link
              href="/"
              className="flex items-center py-1 group focus:outline-none focus:ring-1 focus:ring-navy shrink-0"
              aria-label="South Side International Resources Home"
            >
              <Image
                src="/images/ssir-official-logo.png"
                alt="South Side International Resources Logo"
                width={260}
                height={75}
                priority
                className="h-9 sm:h-11 md:h-12 w-auto object-contain max-w-[170px] sm:max-w-none"
              />
            </Link>

            {/* Desktop Navigation & Action Button */}
            <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
              <Navigation />
              <div className="hidden lg:block border-l border-steel-muted pl-5">
                <Button href="/contact" variant="primary" size="sm">
                  Consultation
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};
