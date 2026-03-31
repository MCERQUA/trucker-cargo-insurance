"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Security,
  FactCheck,
  MenuBook,
  Download,
  ExpandMore,
  OpenInNew,
  Link as LinkIcon,
} from "@/components/Icons";

const faqs = [
  {
    question: "How is my cargo premium calculated?",
    answer:
      "Premiums are calculated based on commodity type, average load value, haul radius, and the safety history of your motor carrier authority. We use precision analytics to ensure your rate reflects your actual risk profile.",
  },
  {
    question: "What is the difference between General Liability and Cargo Insurance?",
    answer:
      "General Liability covers bodily injury or property damage to third parties, while Cargo Insurance specifically covers the goods being transported in the event of theft, fire, or accidental damage.",
  },
  {
    question: "Does my policy cover Reefer breakdown?",
    answer:
      "Yes, we offer specialized endorsements for Reefer Breakdown that cover cargo spoilage due to mechanical failure of the refrigeration unit, provided maintenance schedules have been met.",
  },
  {
    question: "How quickly can I get a Certificate of Insurance (COI)?",
    answer:
      "Our 24/7 digital portal generates COIs instantly. For complex bind requests, our team typically responds within 2 hours during business hours.",
  },
  {
    question: "What is the minimum deductible for cargo coverage?",
    answer:
      "Deductibles start at $2,500 and can be structured to match your risk tolerance. Higher deductibles often result in lower premiums.",
  },
];

export default function ToolsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <header className="relative px-6 py-16 md:py-24 kinetic-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-6xl font-headline font-extrabold text-white tracking-tight mb-6">
              Resource Intelligence Hub
            </h1>
            <p className="text-lg md:text-xl text-on-primary-container leading-relaxed max-w-2xl">
              Access high-performance tools, safety manuals, and compliance documentation
              engineered for the modern logistics professional.
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-20 hidden lg:block">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM8B3OeHXKyH8AtIXDwgL4ug_4svpyq4EB2JiwrqRAz5ttNqvL765unQeilq7QGv3H2Iw2eDEhiU89w2fnJ5tSgjus6QSogeZSoJzt7FR1_oD6n_8fMUjQBFvpUYMAao4y0eVCpUqyKE4RKtUYdJDLg2bngn6xM5gblnHhQPdX52lSkYPn3VBJ_-_a0hHQnyt7fAlOR554AmNBI_EB5_uVEwD2PF3r6lqEix1w6SCGDiBFcLK6_bhDgL_sqKS7Ao0THMvYoMJqD1qq"
            alt="Modern logistics warehouse interior"
            fill
            className="object-cover"
          />
        </div>
      </header>

      {/* Search & Filter Area */}
      <section className="bg-surface-container-low py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" />
              <input
                className="w-full pl-12 pr-4 py-3 bg-surface-container-high border-none border-b-2 border-outline focus:border-secondary transition-all rounded-t-lg"
                placeholder="Search resources, guides, or FAQs..."
                type="text"
              />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <button className="bg-primary text-on-primary px-6 py-3 rounded-xl font-bold whitespace-nowrap w-full md:w-auto">
                Find Resource
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Guides Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-headline font-bold text-primary mb-2">Essential Guides</h2>
          <p className="text-on-surface-variant">
            Industry-standard documentation for fleet safety and risk management.
          </p>
        </div>

        {/* Bento Grid for Downloads */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Driver Safety Guide */}
          <div className="group bg-surface-container-lowest p-8 rounded-3xl flex flex-col justify-between hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-outline-variant/20">
            <div>
              <div className="w-12 h-12 bg-tertiary-fixed text-on-tertiary-fixed rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Security className="text-xl" />
              </div>
              <h3 className="text-xl font-headline font-bold mb-3">Driver Safety Guide</h3>
              <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">
                Comprehensive protocols for maintaining safety standards during long-haul transit and
                cargo handling.
              </p>
            </div>
            <a
              href="#"
              className="flex items-center gap-2 text-secondary font-bold group-hover:underline"
            >
              <Download />
              DOWNLOAD PDF (4.2 MB)
            </a>
          </div>

          {/* FMCSA Compliance Checklist */}
          <div className="group bg-surface-container-lowest p-8 rounded-3xl flex flex-col justify-between hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-outline-variant/20">
            <div>
              <div className="w-12 h-12 bg-primary-fixed text-on-primary-fixed rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FactCheck className="text-xl" />
              </div>
              <h3 className="text-xl font-headline font-bold mb-3">FMCSA Compliance</h3>
              <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">
                Stay up to date with the latest Federal Motor Carrier Safety Administration
                regulations and requirements.
              </p>
            </div>
            <a
              href="#"
              className="flex items-center gap-2 text-secondary font-bold group-hover:underline"
            >
              <Download />
              DOWNLOAD PDF (2.8 MB)
            </a>
          </div>

          {/* Cargo Liability Whitepaper */}
          <div className="group bg-surface-container-lowest p-8 rounded-3xl flex flex-col justify-between hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-outline-variant/20">
            <div>
              <div className="w-12 h-12 bg-secondary-fixed text-on-secondary-fixed rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MenuBook className="text-xl" />
              </div>
              <h3 className="text-xl font-headline font-bold mb-3">Liability Framework</h3>
              <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">
                An in-depth look at cargo liability insurance and how to protect your fleet from
                unforeseen claims.
              </p>
            </div>
            <a
              href="#"
              className="flex items-center gap-2 text-secondary font-bold group-hover:underline"
            >
              <Download />
              DOWNLOAD PDF (6.1 MB)
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-surface-container-low py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-headline font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-on-surface-variant">
              Quick answers to the most common cargo insurance queries.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
                <button
                  className="w-full px-8 py-6 flex items-center justify-between text-left font-bold text-primary hover:bg-surface-container transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <ExpandMore
                    className={`text-secondary transition-transform duration-200 ${
                      openFaqIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`px-8 pb-6 text-on-surface-variant text-sm leading-relaxed ${
                    openFaqIndex === index ? "block" : "hidden"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External Links Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="bg-primary-container rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-headline font-bold text-white mb-6">
                Government & Regulatory Access
              </h2>
              <p className="text-on-primary-container mb-8">
                Access official federal portals for licensing, safety records, and regulatory filings
                directly from the Authority hub.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.fmcsa.dot.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-secondary hover:text-white transition-all"
                >
                  <OpenInNew />
                  FMCSA Portal
                </a>
                <a
                  href="https://www.transportation.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 text-white border border-white/20 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-white/20 transition-all"
                >
                  <LinkIcon />
                  DOT Regulations
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-sm rounded-xl shadow-2xl rotate-3 group-hover:rotate-0 transition-transform overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQW3Km47wi_RFVCh7F9pRkyOoUiowV3Vs6bUGDtAryCF10X6BZ5_tszQgGgzslxq_F1z55PEHybDTpEVwbqmnP_u9raizAlLusvCtLp5s3yp_NQs2i8ysZm3o_loFB8T6MXWiteqpULzvtQFsFQh2Stl0om79rKEBm64eU69ZJr3wRHso-p1EOUsXSsS1IUDLbKZ1QXwAq1l3nvNgAxKyJtKRik7_UCVgTmDjgISHO_Pop7uVD0iMLZYedPgCovpIK3-VhUl6HSQrU"
                  alt="A clean white semi-truck driving on a scenic highway at dusk"
                  width={400}
                  height={250}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
