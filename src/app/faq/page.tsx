import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

const SITE_URL = "https://truckercargoinsurance.com";

export const metadata: Metadata = {
  title: "Motor Truck Cargo Insurance FAQ",
  description:
    "Plain answers to common questions about motor truck cargo insurance: what it covers, who needs it, what brokers and shippers usually require, what affects price, and how to get a quote.",
  alternates: { canonical: "/faq" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/faq`,
    title: "Motor Truck Cargo Insurance FAQ",
    description:
      "Common questions about motor truck cargo insurance: coverage, who needs it, contract requirements, price factors, and getting a quote.",
    siteName: "Trucker Cargo Insurance",
    locale: "en_US",
  },
};

// Single source of truth: the visible list and the FAQPage JSON-LD are both
// built from this array, so the schema text always equals the page text.
const FAQS: { q: string; a: string }[] = [
  {
    q: "What does motor truck cargo insurance cover?",
    a: "Motor truck cargo insurance pays for loss of or damage to the freight you haul for others while it is in your care, for example from a wreck, fire, or theft. What is covered depends on the policy, and policies list exclusions and limits, so read the policy wording before you rely on it.",
  },
  {
    q: "Who needs motor truck cargo insurance?",
    a: "Anyone who hauls freight that belongs to someone else, such as owner-operators and small and large fleets, may be asked to carry it. Brokers, shippers, and receivers often require proof of it before they will hand you a load.",
  },
  {
    q: "What do brokers and shippers usually require?",
    a: "Contracts commonly set a minimum cargo limit and ask for a certificate of insurance naming them as certificate holder. Some also set a maximum deductible or require coverage for specific freight types. Requirements differ by contract, so check the one you are signing.",
  },
  {
    q: "What affects the price of cargo insurance?",
    a: "Insurers generally look at what you haul, the value of a typical load, the limit you choose, how many trucks you run, your driving and claims history, and where and how far you operate. The deductible you choose can change the price too.",
  },
  {
    q: "Is cargo insurance the same as primary liability insurance?",
    a: "No. Cargo insurance is about the freight you carry. Primary liability insurance is about injury or property damage you cause to other people with your truck. They are separate coverages, and many carriers need both.",
  },
  {
    q: "How do I get a cargo insurance quote?",
    a: "Contact us and tell us about your operation: what you haul, how many trucks you run, and where you operate. We will go through the coverage and limits that fit and come back to you with options.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/faq#faqpage`,
  url: `${SITE_URL}/faq`,
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "FAQ", item: `${SITE_URL}/faq` },
  ],
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={[faqSchema, breadcrumbSchema]} />

      <section className="px-6 py-16 md:py-24 bg-primary">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 rounded-full bg-secondary/10 text-secondary-container text-xs font-black tracking-widest uppercase font-label">
            FAQ
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-headline text-white leading-[1.1] tracking-tighter mb-6">
            Motor truck cargo insurance, answered
          </h1>
          <p className="text-on-primary-container text-lg font-light leading-relaxed">
            Short, plain answers to the questions truckers ask most.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <dl className="space-y-6">
            {FAQS.map(({ q, a }) => (
              <div
                key={q}
                className="bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-[0_8px_24px_rgba(28,20,16,0.06)]"
              >
                <dt>
                  <h2 className="text-xl md:text-2xl font-extrabold font-headline text-primary tracking-tight">
                    {q}
                  </h2>
                </dt>
                <dd className="mt-3 text-on-surface-variant text-base md:text-lg leading-relaxed">
                  {a}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-block bg-secondary hover:bg-secondary-container text-white px-8 py-3 rounded-xl font-bold text-sm tracking-tight shadow-md"
            >
              GET A QUOTE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
