import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B1F33",
};

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://southsideresources.com"),
  title: {
    default: "South Side International Resources | Strategic Maritime Consultancy",
    template: "%s | South Side International Resources",
  },
  description:
    "Strategic maritime consultancy solutions for global waterborne industries. Serving governments, maritime administrations, port authorities, and shipping companies.",
  keywords: [
    "Maritime Consultancy",
    "IMO Compliance",
    "Port State Control",
    "Flag State Inspection",
    "Maritime Security Intelligence",
    "African Integrated Maritime Strategy",
    "Ports Operations",
    "Commercial Marine",
    "Lagos Nigeria Maritime",
  ],
  authors: [{ name: "South Side International Resources" }],
  creator: "South Side International Resources",
  openGraph: {
    title: "South Side International Resources | Strategic Maritime Consultancy",
    description:
      "Strategic maritime consultancy solutions for global waterborne industries.",
    url: "https://southsideresources.com",
    siteName: "South Side International Resources",
    images: [
      {
        url: "/images/ports-operations.jpg",
        width: 1200,
        height: 630,
        alt: "South Side International Resources - Maritime Consultancy",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ibmPlexSans.variable} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans bg-white text-navy selection:bg-navy selection:text-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
