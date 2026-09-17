import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { ServiceDetailPageLayout } from "@/components/sections/ServiceDetailPageLayout";

const serviceSlug = "maritime-security-intelligence";
const service = servicesData.find((s) => s.slug === serviceSlug);

export const metadata: Metadata = {
  title: "Maritime Security & Intelligence Consultancy | Domain Awareness",
  description:
    "Shipping activity analysis, IUU fishing mitigation, ISPS compliance, and maritime intelligence powered by Lloyd's List Intelligence.",
  openGraph: {
    title: "Maritime Security & Intelligence | South Side International Resources",
    description:
      "Vessel surveillance, domain awareness, and threat countermeasures for littoral states and critical energy infrastructure.",
    images: [
      {
        url: "/images/maritime-security-hd.jpg",
        width: 1200,
        height: 630,
        alt: "Maritime Security & Intelligence",
      },
    ],
  },
};

export default function MaritimeSecurityPage() {
  if (!service) notFound();
  return <ServiceDetailPageLayout service={service} />;
}
