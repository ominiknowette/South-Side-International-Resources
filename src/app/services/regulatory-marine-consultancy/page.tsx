import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { ServiceDetailPageLayout } from "@/components/sections/ServiceDetailPageLayout";

const serviceSlug = "regulatory-marine-consultancy";
const service = servicesData.find((s) => s.slug === serviceSlug);

export const metadata: Metadata = {
  title: "Regulatory Marine Consultancy | IMO & Port State Compliance",
  description:
    "Advisory on IMO compliance, hydrography, coastal state responsibilities, port state control, and marine casualty investigations.",
  openGraph: {
    title: "Regulatory Marine Consultancy | South Side International Resources",
    description:
      "Comprehensive advisory on statutory compliance, IMO audit regimes, and coastal state maritime administration.",
    images: [
      {
        url: "/images/regulatory-marine.jpg",
        width: 1200,
        height: 630,
        alt: "Regulatory Marine Consultancy",
      },
    ],
  },
};

export default function RegulatoryMarinePage() {
  if (!service) notFound();
  return <ServiceDetailPageLayout service={service} />;
}
