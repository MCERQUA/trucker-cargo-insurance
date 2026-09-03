import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { CheckCircle, Phone, Shield, VerifiedUser, SupportAgent, Speed } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";

const SITE_URL = "https://truckercargoinsurance.com";

export const metadata: Metadata = {
  title: "About Us — Trucker Cargo Insurance Specialists",
  description:
    "We're trucking insurance specialists based in Chandler, AZ. Learn about our mission to protect owner-operators and fleets with precision cargo coverage.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/about`,
    title: "About Trucker Cargo Insurance",
    description:
      "Insurance specialists dedicated exclusively to the trucking industry. Serving owner-operators and fleets across 48 states.",
    siteName: "Trucker Cargo Insurance",
    locale: "en_US",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
  ],
};

const stats = [
  { label: "States Covered", value: "48" },
  { label: "Years of Experience", value: "15+" },
  { label: "Carriers Served", value: "12,000+" },
  { label: "Avg Quote Time", value: "5 min" },
];

const values = [
  {
    icon: Shield,
    title: "Industry Expertise",
    body: "We work exclusively with trucking and logistics operations. That focus means we understand your risks better than any generalist broker.",
  },
  {
    icon: Speed,
    title: "Speed Without Sacrifice",
    body: "Fast quotes don't mean cut corners. Our bindable quotes deliver real coverage in minutes, backed by A+ rated carriers.",
  },
  {
    icon: VerifiedUser,
    title: "Compliance-First",
    body: "FMCSA filings, MCS-90 endorsements, state filings — we handle the compliance paperwork so you can focus on the road.",
  },
  {
    icon: SupportAgent,
    title: "Claims Advocacy",
    body: "When you have a claim, we're in your corner. Our claims team knows cargo disputes and fights to get you paid.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={schema} />

      {/* Hero */}
      <section className="kinetic-gradient py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold font-headline text-white mb-6 tracking-tight">
            Built for Truckers,<br />
            <span className="text-secondary-container">By Industry Specialists</span>
          </h1>
          <p className="text-on-primary-container text-xl leading-relaxed max-w-2xl mx-auto">
            Trucker Cargo Insurance is a dedicated trucking insurance agency based in Chandler, Arizona.
            We serve owner-operators, small fleets, and freight brokers across 48 states with precision
            cargo coverage and FMCSA-compliant filings.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16 border-b border-outline-variant">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-black text-secondary mb-2">{stat.value}</p>
                <p className="text-on-surface-variant text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold font-headline text-primary mb-6">
                Our Mission
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                The trucking industry is the backbone of the American economy — moving over 70% of
                all freight in the United States. Yet truckers are consistently underserved by
                insurance markets that don't understand their unique risks.
              </p>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                We built Trucker Cargo Insurance to change that. By focusing exclusively on
                commercial trucking, we can offer faster quotes, better coverage, and deeper
                expertise than any generalist broker.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                Our founder, Josh Cotner, is a commercial insurance specialist with over 15 years
                of experience serving the trucking industry. Every policy we write is backed by
                that expertise.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "A+ rated insurance carriers",
                "FMCSA-compliant filings included",
                "48-state coverage",
                "Bindable quotes in 5 minutes",
                "Dedicated claims advocates",
                "No hidden fees or brokerages",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="text-secondary text-xl flex-shrink-0" />
                  <span className="text-on-surface font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold font-headline text-primary mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">
              We don't compete on price alone — we compete on expertise, speed, and advocacy.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div key={val.title} className="bg-surface-container-low p-8 rounded-2xl">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="text-secondary text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold font-headline text-primary mb-3">{val.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{val.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-surface-container-lowest border-t border-outline-variant">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold font-headline text-primary mb-12 text-center">
            Leadership
          </h2>
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-outline-variant">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-white text-3xl font-black">JC</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-headline text-primary mb-1">Josh Cotner</h3>
                <p className="text-secondary font-medium mb-4">Founder & Commercial Insurance Specialist</p>
                <p className="text-on-surface-variant leading-relaxed mb-4">
                  Josh has spent over 15 years in the commercial insurance industry with a focus
                  on transportation and logistics. He founded Trucker Cargo Insurance after seeing
                  firsthand how poorly the traditional insurance market served independent truckers
                  and small fleets.
                </p>
                <p className="text-on-surface-variant leading-relaxed">
                  Josh holds multiple commercial lines licenses and maintains relationships with
                  the leading specialty markets for trucking cargo coverage. He's personally
                  involved in underwriting complex accounts and claims advocacy for his clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 kinetic-gradient">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold font-headline text-white mb-6">
            Ready to work with a real trucking insurance specialist?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="safety-gradient text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+18449675247"
              className="bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
            >
              <Phone className="text-xl" />
              844-967-5247
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
