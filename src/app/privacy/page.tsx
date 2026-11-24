import type { Metadata } from "next";
import React from "react";
import Link from "next/link";

const SITE_URL = "https://truckercargoinsurance.com";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "What information the Trucker Cargo Insurance quote form asks for and how it is used.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/privacy`,
    title: "Privacy Notice",
    description: "What information the Trucker Cargo Insurance quote form asks for and how it is used.",
    siteName: "Trucker Cargo Insurance",
    locale: "en_US",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-primary px-6 py-12 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-headline text-4xl font-extrabold leading-[1.1] tracking-tighter text-white md:text-5xl">
            Privacy notice
          </h1>
        </div>
      </section>
      <section className="px-6 py-10 md:py-14">
        <div className="mx-auto max-w-3xl space-y-8 text-on-surface-variant leading-relaxed">
          <div>
            <h2 className="mb-2 font-headline text-2xl font-bold text-primary">What the quote form asks for</h2>
            <p>
              The <Link href="/quote" className="font-bold text-secondary underline">quote form</Link> asks
              about your business, your trucks and trailers, your drivers and the coverage you want. For
              drivers it can include a date of birth and a license number. These are only needed to prepare
              a quote and you can leave any field blank.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-headline text-2xl font-bold text-primary">What we do not ask for</h2>
            <p>
              The form does not ask for Social Security numbers, bank account details or payment card
              numbers. Please do not type them into any field.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-headline text-2xl font-bold text-primary">How it is used</h2>
            <p>
              What you send is delivered to the agency behind this site so it can prepare your quote and
              contact you about it. It is sent over an encrypted (HTTPS) connection.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-headline text-2xl font-bold text-primary">Questions</h2>
            <p>
              Call 844-967-5247 or write to the office at 12220 E Riggs Road, Suite #104, Chandler, AZ
              85249.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
