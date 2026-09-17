import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { ServiceDetailPageLayout } from "@/components/sections/ServiceDetailPageLayout";

const serviceSlug = "maritime-policy-development";
const service = servicesData.find((s) => s.slug === serviceSlug);

export const metadata: Metadata = {
  title: "Maritime Policy Development Consultancy | Sovereign Ocean Strategy",
  description:
    "Formulating coastal state maritime policy, economic threat response frameworks, and fisheries legislation aligned with UNCLOS and AIMS.",
  openGraph: {
    title: "Maritime Policy Development | South Side International Resources",
    description:
      "Strategic blue economy governance, coastal state policy design, and legislative drafting.",
    images: [
      {
        url: "/images/maritime-policy.jpg",
        width: 1200,
        height: 630,
        alt: "Maritime Policy Development",
      },
    ],
  },
};

export default function MaritimePolicyPage() {
  if (!service) notFound();
  return <ServiceDetailPageLayout service={service} />;
}
