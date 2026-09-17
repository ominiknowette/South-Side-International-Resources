import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export interface ServiceEditorialItemProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  scopes: string[];
  slug: string;
  index: number;
}

export const ServiceEditorialItem: React.FC<ServiceEditorialItemProps> = ({
  title,
  description,
  image,
  imageAlt,
  reverse = false,
  scopes,
  slug,
  index,
}) => {
  return (
    <article
      className="py-10 sm:py-14 lg:py-20 border-b border-steel-muted last:border-0"
      aria-labelledby={`service-heading-${index}`}
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Text Content */}
        <div
          className={`space-y-4 sm:space-y-5 ${
            reverse
              ? "lg:col-span-6 lg:col-start-7 lg:row-start-1"
              : "lg:col-span-6"
          }`}
        >
          <h3
            id={`service-heading-${index}`}
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-navy tracking-tight leading-snug"
          >
            {title}
          </h3>

          <p className="text-sm sm:text-base text-steel-dark leading-relaxed">
            {description}
          </p>

          {/* Authentic Scopes / Sub-items */}
          <div className="pt-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-navy mb-3">
              Consultancy Scope Includes:
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-steel-dark">
              {scopes.slice(0, 6).map((scope, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <span className="text-ocean font-bold mt-0.5">•</span>
                  <span>{scope}</span>
                </li>
              ))}
            </ul>
            {scopes.length > 6 && (
              <p className="text-xs text-steel italic mt-2">
                + {scopes.length - 6} additional statutory capabilities detailed in full specification.
              </p>
            )}
          </div>

          <div className="pt-3">
            <Button
              href={`/services/${slug}`}
              variant="secondary"
              size="sm"
            >
              Detailed Specification &rarr;
            </Button>
          </div>
        </div>

        {/* Photography */}
        <div
          className={`${
            reverse
              ? "lg:col-span-6 lg:col-start-1 lg:row-start-1"
              : "lg:col-span-6"
          }`}
        >
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-[2px] border border-steel-muted shadow-sm bg-surface-light group">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
          <div className="mt-2 text-[11px] text-steel flex justify-between">
            <span>Official SSIR Practice Area</span>
            <Link
              href={`/services/${slug}`}
              className="text-ocean hover:underline font-medium"
            >
              View Service Briefing
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
