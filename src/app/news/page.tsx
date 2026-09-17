import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { newsArticles } from "@/data/news";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "News & Intelligence Briefings | Regulatory & Maritime Updates",
  description:
    "Official bulletins, maritime domain awareness reports, and strategic partnership briefings from South Side International Resources.",
  openGraph: {
    title: "News & Intelligence Updates | South Side International Resources",
    description:
      "Authoritative maritime briefings on African littoral security, IMO compliance, and commercial shipping trends.",
    images: [
      {
        url: "/images/ports-operations.jpg",
        width: 1200,
        height: 630,
        alt: "SSIR Maritime News & Briefings",
      },
    ],
  },
};

export default function NewsPage() {
  return (
    <>
      {/* Header */}
      <section className="py-20 lg:py-24 bg-navy text-white">
        <Container>
          <div className="max-w-3xl space-y-4">
            <div className="border-l-2 border-ocean pl-3">
              <span className="text-xs uppercase tracking-widest text-slate-300 font-semibold">
                Intelligence &amp; Publications
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
              News, Directives &amp; Strategic Briefings
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Institutional dispatches, statutory analyses, and operational intelligence updates covering waterborne commerce and sovereign ocean governance.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Strategic Partnership Banner */}
      <section className="bg-surface-light border-b border-steel-muted py-8">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-6 border border-steel-muted rounded-[2px] shadow-sm max-w-5xl">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="pr-2 sm:border-r sm:border-steel-muted">
                <Image
                  src="/images/lloyds-list-intelligence-navy.svg"
                  alt="Lloyd's List Intelligence"
                  width={220}
                  height={34}
                  className="h-7 sm:h-9 w-auto object-contain max-w-[180px] sm:max-w-none"
                />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-ocean">
                  Strategic Alliance Special Bulletin
                </span>
                <h2 className="text-base font-semibold text-navy mt-0.5">
                  Strategies for Securing the African Maritime Domain
                </h2>
                <p className="text-xs text-steel-dark mt-1">
                  Joint advisory framework on dark vessel interdiction, AIS gap mitigation, and EEZ surveillance.
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <span className="inline-block text-xs font-semibold text-ocean bg-ocean/10 border border-ocean/30 px-3 py-1.5 rounded-[2px]">
                Special Intelligence Briefing
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Editorial Article Listing (Strictly Avoiding Card Layouts) */}
      <section className="py-16 lg:py-20 bg-white">
        <Container>
          <div className="max-w-4xl space-y-16">
            {newsArticles.map((article) => (
              <article
                key={article.id}
                id={article.slug}
                className="border-b border-steel-muted pb-14 last:border-0 space-y-6"
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <time
                    dateTime={article.isoDate}
                    className="font-mono text-steel uppercase font-medium"
                  >
                    {article.date}
                  </time>
                  <span className="text-steel">&bull;</span>
                  <span className="font-semibold text-ocean bg-surface-light px-2.5 py-0.5 rounded-[2px] border border-steel-muted">
                    {article.category}
                  </span>
                  {article.partner && (
                    <>
                      <span className="text-steel">&bull;</span>
                      <span className="text-navy font-medium">
                        Alliance: {article.partner}
                      </span>
                    </>
                  )}
                </div>

                {/* Headline */}
                <h3 className="text-2xl sm:text-3xl font-semibold text-navy tracking-tight leading-snug">
                  {article.title}
                </h3>

                {/* Executive Summary */}
                <p className="text-base text-steel-dark font-medium leading-relaxed bg-surface-light p-4 border-l-2 border-ocean">
                  {article.summary}
                </p>

                {/* Article Body */}
                <div className="space-y-4 text-sm text-steel-dark leading-relaxed">
                  {article.content.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {/* Key Points / Strategic Highlights */}
                {article.highlights && (
                  <div className="pt-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-navy mb-2">
                      Strategic Highlights &amp; Channel Coverage:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-steel-dark">
                      {article.highlights.map((point, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <span className="text-ocean font-bold mt-0.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Consultation CTA */}
      <ContactCTA />
    </>
  );
}
