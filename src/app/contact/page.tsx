import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RequestQuote, Call, LocationOn, Mail, Schedule, SupportAgent } from "@/components/Icons";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="px-6 py-12 md:py-20 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="font-headline font-extrabold text-5xl md:text-7xl text-primary tracking-tight leading-[0.9] mb-6">
            Connect with <span className="text-secondary">Authority.</span>
          </h1>
          <p className="text-on-surface-variant text-xl max-w-xl leading-relaxed">
            Our team of cargo specialists is standing by to protect your fleet. Precision logistics
            require precision coverage. Let's get moving.
          </p>
        </div>
      </section>

      {/* Bento Grid Contact Section */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Quote Request Form Card */}
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-[0_20px_40px_rgba(0,14,36,0.04)]">
            <h2 className="font-headline font-bold text-2xl mb-8 flex items-center gap-3">
              <RequestQuote className="text-secondary text-2xl" />
              Instant Quote Request
            </h2>
            <form
              className="space-y-6"
              data-netlify="true"
              name="quote-request"
              method="POST"
            >
              <input type="hidden" name="form-name" value="quote-request" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-outline mb-1">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-surface-container-high border-b border-outline focus:border-secondary transition-colors outline-none px-0 py-3 text-primary font-medium focus:ring-0"
                    placeholder="John Doe"
                    type="text"
                    name="fullName"
                    required
                  />
                </div>
                <div className="relative">
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-outline mb-1">
                    DOT Number
                  </label>
                  <input
                    className="w-full bg-surface-container-high border-b border-outline focus:border-secondary transition-colors outline-none px-0 py-3 text-primary font-medium focus:ring-0"
                    placeholder="7-Digit Number"
                    type="text"
                    name="dotNumber"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-outline mb-1">
                    Business Email
                  </label>
                  <input
                    className="w-full bg-surface-container-high border-b border-outline focus:border-secondary transition-colors outline-none px-0 py-3 text-primary font-medium focus:ring-0"
                    placeholder="name@fleet.com"
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <div className="relative">
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-outline mb-1">
                    Fleet Size
                  </label>
                  <select
                    className="w-full bg-surface-container-high border-b border-outline focus:border-secondary transition-colors outline-none px-0 py-3 text-primary font-medium focus:ring-0 appearance-none"
                    name="fleetSize"
                  >
                    <option>1-5 Vehicles</option>
                    <option>6-20 Vehicles</option>
                    <option>21-50 Vehicles</option>
                    <option>50+ Vehicles</option>
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full kinetic-gradient text-white py-5 rounded-lg font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-all flex items-center justify-center gap-3 shadow-lg"
                >
                  BIND COVERAGE NOW
                  <RequestQuote />
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info & Support Hub */}
          <div className="lg:col-span-5 space-y-6">
            {/* Call Support Card */}
            <div className="bg-primary text-white rounded-xl p-8 relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <SupportAgent className="text-[160px]" />
              </div>
              <div className="relative z-10">
                <h3 className="font-headline font-bold text-xl mb-2">Direct Fleet Support</h3>
                <p className="text-on-primary-container text-sm mb-6 max-w-[240px]">
                  Immediate assistance for policy updates, claims, and emergency filings.
                </p>
                <a
                  href="tel:1-800-543-8424"
                  className="inline-flex items-center gap-4 text-secondary-container font-black text-2xl font-headline tracking-tighter hover:text-white transition-colors"
                >
                  <Call className="text-xl" />
                  1-800-KINETIC
                </a>
              </div>
            </div>

            {/* Support Hours Card */}
            <div className="bg-surface-container-low rounded-xl p-8">
              <h3 className="font-headline font-bold text-xl mb-6">Operations Window</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center pb-2 border-b border-outline-variant/30">
                  <span className="text-sm font-medium text-on-surface-variant">Monday — Friday</span>
                  <span className="text-sm font-bold text-primary">06:00 - 20:00 EST</span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-outline-variant/30">
                  <span className="text-sm font-medium text-on-surface-variant">Saturday</span>
                  <span className="text-sm font-bold text-primary">08:00 - 14:00 EST</span>
                </li>
                <li className="flex justify-between items-center text-secondary">
                  <span className="text-sm font-bold">Claims (24/7 Hotline)</span>
                  <Schedule style={{ fontVariationSettings: "'FILL' 1" }} className="text-sm" />
                </li>
              </ul>
            </div>

            {/* Network Status */}
            <div className="bg-surface-container-highest rounded-full px-8 py-4 flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest text-outline">
                Network Status
              </span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-bold text-primary">All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-4">
            <div className="mb-8">
              <h2 className="font-headline font-bold text-3xl mb-4">The Command Center</h2>
              <p className="text-on-surface-variant leading-relaxed">
                Based in the heart of the logistics corridor, our HQ coordinates coverage for over
                15,000 active long-haul units.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-surface-container-high rounded-lg flex items-center justify-center shrink-0">
                  <LocationOn className="text-primary text-lg" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-primary">
                    Headquarters
                  </h4>
                  <p className="text-on-surface-variant text-sm">
                    4500 Authority Blvd, Suite 200
                    <br />
                    Chicago, IL 60607
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-surface-container-high rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="text-primary text-lg" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-primary">Email</h4>
                  <p className="text-on-surface-variant text-sm">
                    underwriting@truckercargoinsurance.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-8 h-[400px] bg-surface-container-low rounded-3xl overflow-hidden relative group">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoZdMZOI5KWb4OH-KalaFq6U1_GzHRVXTm1R4QcvSed74Yq16cx2jNg342myEfSLQT3hnwCI5TqINB8ov1glEmoNCoRGQdmtfwYvFjhe4aYIAHmymzZk14y_XCDckshfxdIcNmzP-jGPnxTozNR9tq9R_R1LYHtxc855yABnCmZI4Vf8_f3I4AqRU4S9a7020ohzv7UOkDz-LYgHVO_SuBv61Xb0NQ2oFz9uwT1ZfT43BpPZad_QNiIPbkYug_xRHaEEfSHfFl2_qm"
              alt="Modern architectural map of Chicago logistics district"
              fill
              className="object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-primary/20 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                <LocationOn
                  className="text-white"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
