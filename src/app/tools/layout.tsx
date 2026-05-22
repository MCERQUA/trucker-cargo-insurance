import type { Metadata } from "next";

const SITE_URL = "https://truckercargoinsurance.com";

export const metadata: Metadata = {
  title: "Cargo Insurance FAQ & Resources — Trucker Cargo Insurance",
  description:
    "FAQ, FMCSA checklists, and resource downloads for trucking and cargo insurance. Plain-English answers on premiums, BOC-3, COIs, and federal compliance.",
  alternates: { canonical: "/tools" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/tools`,
    title: "Cargo Insurance FAQ & Resources — Trucker Cargo Insurance",
    description:
      "FAQ + FMCSA compliance resources for trucking and cargo insurance. Premiums, BOC-3, COIs, federal regs.",
    siteName: "Trucker Cargo Insurance",
    locale: "en_US",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Trucker Cargo Insurance — Tools & resources" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cargo Insurance FAQ & Resources",
    description: "FAQ + FMCSA compliance resources for trucking and cargo insurance.",
    images: ["/og-image.jpg"],
  },
};

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
