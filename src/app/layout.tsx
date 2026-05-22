import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "@fontsource/material-symbols-outlined";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import JsonLd from "@/components/JsonLd";

const SITE_URL = "https://truckercargoinsurance.com";

const insuranceAgencySchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "@id": `${SITE_URL}/#organization`,
  name: "Trucker Cargo Insurance",
  url: SITE_URL,
  description:
    "High-performance insurance infrastructure for the trucking industry. Precision underwriting for modern fleets with bindable quotes in minutes.",
  email: "underwriting@truckercargoinsurance.com",
  telephone: "+1-800-543-8424",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4500 Authority Blvd, Suite 200",
    addressLocality: "Chicago",
    addressRegion: "IL",
    postalCode: "60607",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  knowsAbout: [
    "cargo insurance",
    "trucker insurance",
    "motor truck cargo",
    "primary liability insurance",
    "physical damage insurance",
    "general liability insurance",
    "fleet insurance",
    "FMCSA compliance",
    "reefer breakdown coverage",
    "trailer interchange",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "06:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Trucker Cargo Insurance",
  description:
    "Trucking cargo insurance with 48-state coverage, 5-minute bindable quotes, and FMCSA-compliant filings.",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  inLanguage: "en-US",
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Trucker Cargo Insurance | Trucking Cargo Insurance",
    template: "%s | Trucker Cargo Insurance",
  },
  description:
    "High-performance insurance infrastructure for the trucking industry. Precision underwriting for modern fleets. Get bindable quotes in minutes.",
  keywords: [
    "trucking insurance",
    "cargo insurance",
    "motor truck cargo",
    "fleet insurance",
    "logistics insurance",
    "FMCSA compliance",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Trucker Cargo Insurance | Trucking Cargo Insurance",
    description:
      "High-performance insurance infrastructure for the trucking industry. 48-state coverage. Bindable quotes in 5 minutes.",
    siteName: "Trucker Cargo Insurance",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Trucker Cargo Insurance — 48-state trucking and cargo coverage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trucker Cargo Insurance | Trucking Cargo Insurance",
    description:
      "48-state trucking & cargo insurance — bindable quotes in 5 minutes. Motor truck cargo, primary liability, physical damage, general liability.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <JsonLd data={[insuranceAgencySchema, websiteSchema]} />
      </head>
      <body className="min-h-screen flex flex-col bg-surface font-body antialiased">
        <Header />
        <main className="flex-1 pt-20 pb-20 md:pb-32">{children}</main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
