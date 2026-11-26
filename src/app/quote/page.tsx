import type { Metadata } from "next";
import React from "react";
import IntakeForm from "@/components/IntakeForm";

const SITE_URL = "https://truckercargoinsurance.com";

export const metadata: Metadata = {
  title: "Get a Trucking Insurance Quote",
  description:
    "Tell us about your trucking operation, vehicles, trailers and drivers in one short form and we will prepare your trucking insurance quote.",
  alternates: { canonical: "/quote" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/quote`,
    title: "Get a Trucking Insurance Quote",
    description: "One short form: your business, trucks, trailers, drivers and the coverage you want.",
    siteName: "Trucker Cargo Insurance",
    locale: "en_US",
  },
};

export default function QuotePage() {
  return (
    <>
      <section className="bg-primary px-6 py-12 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-headline text-4xl font-extrabold leading-[1.1] tracking-tighter text-white md:text-6xl">
            Get a trucking insurance quote
          </h1>
          <p className="mt-5 text-lg font-light leading-relaxed text-on-primary-container">
            Seven short steps: your business, trucks, trailers, drivers, the coverage you want, the
            standard underwriting questions and your current insurance. Skip anything you do not have handy.
          </p>
        </div>
      </section>
      <section className="px-6 py-8 md:py-12">
        <div className="mx-auto max-w-3xl rounded-xl bg-surface-container-lowest p-5 shadow-[0_8px_24px_rgba(28,20,16,0.06)] md:p-10">
          <IntakeForm />
        </div>
      </section>
    </>
  );
}
