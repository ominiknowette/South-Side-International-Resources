"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { servicesData } from "@/data/services";

export const Navigation: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown and mobile menu on route change
  useEffect(() => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Keyboard navigation for dropdown
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsServicesOpen(false);
      buttonRef.current?.focus();
    } else if (event.key === "ArrowDown" && !isServicesOpen) {
      event.preventDefault();
      setIsServicesOpen(true);
    }
  };

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav
      className="relative flex items-center"
      aria-label="Main Navigation"
      onKeyDown={handleKeyDown}
    >
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
        <Link
          href="/"
          className={`px-3.5 py-2 text-sm font-medium transition-colors ${
            isActive("/")
              ? "text-navy font-semibold border-b-2 border-ocean"
              : "text-steel-dark hover:text-navy"
          }`}
        >
          Home
        </Link>

        <Link
          href="/about"
          className={`px-3.5 py-2 text-sm font-medium transition-colors ${
            isActive("/about")
              ? "text-navy font-semibold border-b-2 border-ocean"
              : "text-steel-dark hover:text-navy"
          }`}
        >
          About Us
        </Link>

        {/* Services Dropdown */}
        <div
          ref={dropdownRef}
          className="relative"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <button
            ref={buttonRef}
            type="button"
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium transition-colors ${
              isActive("/services")
                ? "text-navy font-semibold border-b-2 border-ocean"
                : "text-steel-dark hover:text-navy"
            }`}
            aria-expanded={isServicesOpen}
            aria-haspopup="true"
            onClick={() => setIsServicesOpen(!isServicesOpen)}
          >
            <span>Services</span>
            <span
              className={`text-[10px] transform transition-transform duration-200 ${
                isServicesOpen ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            >
              ▼
            </span>
          </button>

          {/* Clean White Dropdown Panel */}
          {isServicesOpen && (
            <div
              className="absolute left-0 top-full mt-1 w-80 bg-white border border-steel-muted shadow-md rounded-[2px] py-2 z-50 transition-opacity duration-150"
              role="menu"
              aria-label="Consultancy Services"
            >
              <div className="px-4 py-2 border-b border-steel-muted bg-surface-light">
                <Link
                  href="/services"
                  className="text-xs font-semibold uppercase tracking-wider text-steel-dark hover:text-navy block"
                >
                  All Consultancy Capabilities &rarr;
                </Link>
              </div>

              {servicesData.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  role="menuitem"
                  className="block px-4 py-2.5 text-sm text-navy hover:bg-surface-light hover:text-ocean transition-colors border-b border-steel-muted/40 last:border-0"
                >
                  <div className="font-medium">{service.title}</div>
                  <div className="text-xs text-steel line-clamp-1 mt-0.5">
                    {service.editorialOverview}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link
          href="/news"
          className={`px-3.5 py-2 text-sm font-medium transition-colors ${
            isActive("/news")
              ? "text-navy font-semibold border-b-2 border-ocean"
              : "text-steel-dark hover:text-navy"
          }`}
        >
          News
        </Link>

        <Link
          href="/contact"
          className={`px-3.5 py-2 text-sm font-medium transition-colors ${
            isActive("/contact")
              ? "text-navy font-semibold border-b-2 border-ocean"
              : "text-steel-dark hover:text-navy"
          }`}
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex md:hidden">
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="min-w-[44px] min-h-[44px] p-2 flex items-center justify-center rounded-[2px] border border-steel-muted text-navy hover:text-ocean hover:border-ocean transition-colors focus:outline-none"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Panel with Full-Screen Backdrop */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-navy/60 backdrop-blur-xs z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Menu */}
          <div className="fixed inset-x-0 top-0 bg-white border-b border-steel-muted shadow-2xl z-50 md:hidden max-h-[92vh] overflow-y-auto flex flex-col animate-in fade-in slide-in-from-top-4 duration-200">
            {/* Top Bar with Logo & Close Button */}
            <div className="flex items-center justify-between p-4 border-b border-steel-muted bg-surface-light">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center focus:outline-none"
              >
                <Image
                  src="/images/ssir-official-logo.png"
                  alt="South Side International Resources"
                  width={200}
                  height={55}
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="min-w-[44px] min-h-[44px] p-2 flex items-center justify-center rounded-[2px] border border-steel-muted text-navy hover:text-ocean focus:outline-none"
                aria-label="Close navigation menu"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Links List */}
            <div className="p-5 space-y-4">
              <div className="space-y-1">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 px-3 text-base font-medium rounded-[2px] ${
                    isActive("/") ? "bg-surface-light text-navy font-semibold border-l-2 border-ocean" : "text-steel-dark hover:bg-surface-light"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 px-3 text-base font-medium rounded-[2px] ${
                    isActive("/about") ? "bg-surface-light text-navy font-semibold border-l-2 border-ocean" : "text-steel-dark hover:bg-surface-light"
                  }`}
                >
                  About the Organization
                </Link>
              </div>

              {/* Consultancy Services Category */}
              <div className="pt-2 border-t border-steel-muted/60">
                <div className="px-3 py-1 flex justify-between items-center">
                  <Link
                    href="/services"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xs font-bold uppercase tracking-widest text-ocean"
                  >
                    Consultancy Practices &rarr;
                  </Link>
                </div>
                <div className="mt-2 space-y-1 pl-2">
                  {servicesData.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2.5 px-3 text-sm text-steel-dark hover:text-navy hover:bg-surface-light rounded-[2px]"
                    >
                      &bull; {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Remaining Institutional Links */}
              <div className="pt-2 border-t border-steel-muted/60 space-y-1">
                <Link
                  href="/news"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 px-3 text-base font-medium rounded-[2px] ${
                    isActive("/news") ? "bg-surface-light text-navy font-semibold border-l-2 border-ocean" : "text-steel-dark hover:bg-surface-light"
                  }`}
                >
                  News &amp; Intelligence Briefings
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 px-3 text-base font-medium rounded-[2px] ${
                    isActive("/contact") ? "bg-surface-light text-navy font-semibold border-l-2 border-ocean" : "text-steel-dark hover:bg-surface-light"
                  }`}
                >
                  Contact &amp; Advisory Inquiries
                </Link>
              </div>

              {/* Action Buttons & Hotline */}
              <div className="pt-4 border-t border-steel-muted space-y-3">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full py-3 bg-navy text-white text-center font-medium text-sm rounded-[2px] hover:bg-navy-800 transition-colors"
                >
                  Request Formal Consultation
                </Link>
                <a
                  href="tel:+2348097456789"
                  className="block w-full py-2.5 border border-steel-muted text-navy text-center text-xs font-medium rounded-[2px] hover:bg-surface-light transition-colors"
                >
                  Direct Advisory Hotline: +234 809 745 6789
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};
