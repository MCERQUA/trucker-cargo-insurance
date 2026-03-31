import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "@fontsource/material-symbols-outlined";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

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
  title: "The Kinetic Authority | Trucking Cargo Insurance",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-surface font-body antialiased">
        <Header />
        <main className="flex-1 pt-20 pb-20 md:pb-32">{children}</main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
