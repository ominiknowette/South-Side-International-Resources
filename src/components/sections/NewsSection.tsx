import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { newsArticles } from "@/data/news";

export const NewsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-surface-light border-b border-steel-muted">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div className="max-w-2xl space-y-4">
            <div className="border-l-2 border-ocean pl-3">
              <span className="text-xs uppercase tracking-widest text-steel font-semibold">
                Strategic Briefings
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-navy tracking-tight leading-tight">
              News, Directives &amp; Intelligence Updates
            </h2>
            <p className="text-base text-steel-dark leading-relaxed">
              Timely analysis on international maritime regulations, surveillance operations, and littoral economic policy.
            </p>
          </div>
          <div>
            <Link
              href="/news"
              className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-ocean hover:text-navy border-b border-ocean hover:border-navy pb-0.5"
            >
              All Publications &rarr;
            </Link>
          </div>
        </div>

        {/* Editorial List Layout (No Cards) */}
        <div className="divide-y divide-steel-muted border-t border-b border-steel-muted">
          {newsArticles.slice(0, 3).map((article) => (
            <article
              key={article.id}
              className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-white/60 transition-colors px-2"
            >
              {/* Meta / Date Column */}
              <div className="md:col-span-3 space-y-1">
                <time
                  dateTime={article.isoDate}
                  className="text-xs font-mono text-steel uppercase block tracking-wider"
                >
                  {article.date}
                </time>
                <span className="inline-block text-[11px] font-semibold text-ocean bg-ocean-light px-2 py-0.5 rounded-[2px]">
                  {article.category}
                </span>
                {article.partner && (
                  <div className="text-[10px] text-slate-500 font-medium pt-1">
                    Alliance: {article.partner}
                  </div>
                )}
              </div>

              {/* Title & Summary Column */}
              <div className="md:col-span-7 space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold text-navy leading-snug">
                  <Link
                    href="/news"
                    className="hover:text-ocean transition-colors"
                  >
                    {article.title}
                  </Link>
                </h3>
                <p className="text-xs sm:text-sm text-steel-dark leading-relaxed">
                  {article.summary}
                </p>
              </div>

              {/* Link Column */}
              <div className="md:col-span-2 md:text-right pt-1">
                <Link
                  href="/news"
                  className="inline-flex items-center text-xs font-medium text-ocean hover:text-navy group"
                >
                  <span>Read Briefing</span>
                  <span className="ml-1 transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
