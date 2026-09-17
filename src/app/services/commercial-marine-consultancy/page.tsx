import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { ServiceDetailPageLayout } from "@/components/sections/ServiceDetailPageLayout";

const serviceSlug = "commercial-marine-consultancy";
const service = servicesData.find((s) => s.slug === serviceSlug);

export const metadata: Metadata = {
  title: "Commercial Marine Consultancy | Shipyard, Vetting & Fleet Advisory",
  description:
    "Expert services covering shipyard dry dock management, vessel acquisition, ship building supervision, green demolition, and seaborne trade forecasting.",
  openGraph: {
    title: "Commercial Marine Consultancy | South Side International Resources",
    description:
      "Full lifecycle commercial maritime advisory from pre-purchase vetting to green ship demolition.",
    images: [
      {
        url: "/images/commercial-marine.jpg",
        width: 1200,
        height: 630,
        alt: "Commercial Marine Consultancy",
      },
    ],
  },
};

export default function CommercialMarinePage() {
  if (!service) notFound();
  return <ServiceDetailPageLayout service={service} />;
}
