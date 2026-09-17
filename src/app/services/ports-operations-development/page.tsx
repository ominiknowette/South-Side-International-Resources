import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { ServiceDetailPageLayout } from "@/components/sections/ServiceDetailPageLayout";

const serviceSlug = "ports-operations-development";
const service = servicesData.find((s) => s.slug === serviceSlug);

export const metadata: Metadata = {
  title: "Ports Operations & Port Development | Terminal Engineering & Logistics",
  description:
    "Advisory on efficient port operations, quayside logistics optimization, new port master-planning, and port authority revenue generation.",
  openGraph: {
    title: "Ports Operations & Port Development | South Side International Resources",
    description:
      "Deep-sea terminal master-planning, concession structuring, and quayside throughput optimization.",
    images: [
      {
        url: "/images/ports-operations.jpg",
        width: 1200,
        height: 630,
        alt: "Ports Operations and Port Development",
      },
    ],
  },
};

export default function PortsOperationsPage() {
  if (!service) notFound();
  return <ServiceDetailPageLayout service={service} />;
}
