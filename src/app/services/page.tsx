import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Inventory,
  Shield,
  Build,
  AccountBalance,
  ArrowForward,
  CheckCircle,
} from "@/components/Icons";

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative px-6 py-16 md:py-24 overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDahfiDKFWiYHIiUC7NdW2ojVJcJkxT75qVCj6PGzTwbBfF1E3muBOdC4l_lY825kPZq7mpYMVCRIrurTw0QjjUzvwm1k-YmSOA2ty8kt3_sHKNbmnoHResf4aVcBSiFGu0mLPwWPoxsDjLiQK3ci1EwwmbXqllc2COVptfM1PM1ASGmpwA9RG5bMl3V18AUmIILalOfVsMiJxN8xfmyGFfk9tWfKl2hSkG_UevHf4cuU1Xhd96rPaJ0OnnxvzIP40vaRY4gm0jtyMi"
            alt="Dark navy abstract geometric mesh pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 mb-6 rounded-full bg-secondary/10 text-secondary-container text-xs font-black tracking-widest uppercase font-label">
              Service Portfolio
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold font-headline text-white leading-[1.1] tracking-tighter mb-8">
              Engineered <br />
              <span className="text-secondary-container">Risk Mitigation.</span>
            </h1>
            <p className="text-on-primary-container text-lg md:text-xl max-w-xl font-light leading-relaxed">
              From heavy haul to last-mile delivery, our insurance frameworks are built for the
              high-velocity world of modern logistics. Precision coverage for those who keep the
              world moving.
            </p>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="px-6 -mt-12 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Motor Truck Cargo - Featured */}
            <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-[0_20px_40px_rgba(0,14,36,0.08)] flex flex-col justify-between min-h-[400px] border-b-4 border-secondary">
              <div>
                <div className="w-16 h-16 bg-primary-container rounded-xl flex items-center justify-center mb-8">
                  <Inventory className="text-secondary-container text-4xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold font-headline text-primary mb-6 tracking-tight">
                  Motor Truck Cargo
                </h2>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl">
                  Protection for the heartbeat of your business. Our cargo policies cover loss or
                  damage to the freight you're hauling, including specialized endorsements for reefer
                  breakdown, debris removal, and high-value theft prevention.
                </p>
              </div>
              <div className="mt-12 flex items-center justify-between">
                <div className="flex gap-4">
                  <span className="px-3 py-1 bg-surface-container text-on-surface-variant text-[10px] font-bold uppercase rounded-full tracking-widest">
                    FMCSA Approved
                  </span>
                  <span className="px-3 py-1 bg-surface-container text-on-surface-variant text-[10px] font-bold uppercase rounded-full tracking-widest">
                    Custom Limits
                  </span>
                </div>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 text-secondary font-bold hover:gap-4 transition-all group"
                >
                  Learn More <ArrowForward />
                </Link>
              </div>
            </div>

            {/* Primary Liability */}
            <div className="md:col-span-4 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm">
                  <Shield className="text-primary text-2xl" />
                </div>
                <h3 className="text-2xl font-bold font-headline text-primary mb-4 tracking-tight">
                  Primary Liability
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Mandatory coverage required by law. Protects your operation against bodily injury
                  and property damage caused by truck accidents. We provide the BMC-91X filings you
                  need to stay compliant.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-8 text-primary font-bold text-sm underline underline-offset-4 hover:text-secondary transition-colors"
              >
                Learn More
              </Link>
            </div>

            {/* Physical Damage */}
            <div className="md:col-span-4 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm">
                  <Build className="text-primary text-2xl" />
                </div>
                <h3 className="text-2xl font-bold font-headline text-primary mb-4 tracking-tight">
                  Physical Damage
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Your truck is your most valuable asset. Our Physical Damage coverage includes
                  Collision and Comprehensive protection against fire, theft, vandalism, and road
                  hazards.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-8 text-primary font-bold text-sm underline underline-offset-4 hover:text-secondary transition-colors"
              >
                Learn More
              </Link>
            </div>

            {/* General Liability */}
            <div className="md:col-span-8 bg-surface-container-highest rounded-xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <AccountBalance className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold font-headline text-primary mb-4 tracking-tight">
                  General Liability
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Covers your business for mishaps that happen off the road. From slips and falls at
                  your terminal to delivery errors and advertising injuries. Essential for for-hire
                  truckers and fleet owners.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 bg-primary text-white px-6 py-3 rounded-lg text-sm font-bold hover:bg-primary-container transition-colors inline-block"
                >
                  Learn More
                </Link>
              </div>
              <div className="w-full md:w-1/3 h-48 rounded-lg overflow-hidden shrink-0">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwLOmM_5H_DlAbpJKc-UpUt5_53QevngFbfC83kG8E9AqCdxnrEx1lEB1Wvpy1sKkCICSwwZo6iB5Aeb53OjtoZu1Hiq5tl6ko4tgHZZu129gbT2XWYq2RI-HEk30NaHCqojg_RKu58yv3OaCZt3QF0R1VnkjP7oJrbvvpAb2zSxOYXZw_0DwvGVgY0DiW4gLaLnXgRIkwaCrDY3N0-gNc01s82TYphME10ViaupgwGrJj2tlJkxkdCBza5unKoIeZpQ0Kh4VEuSpx"
                  alt="Modern logistics terminal"
                  width={300}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Feature Strips */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex items-start gap-4">
              <Speed className="text-secondary-container text-3xl" />
              <div>
                <h4 className="font-headline font-bold text-primary mb-2">
                  Fast Certificate Issuance
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Don't lose a load waiting for paperwork. Our 24/7 digital portal generates COIs
                  instantly.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <SupportAgent className="text-secondary-container text-3xl" />
              <div>
                <h4 className="font-headline font-bold text-primary mb-2">
                  Specialist Claims Team
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Dedicated adjusters who understand the complexity of cargo claims and logistics law.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <TrendingUp className="text-secondary-container text-3xl" />
              <div>
                <h4 className="font-headline font-bold text-primary mb-2">Risk Engineering</h4>
                <p className="text-sm text-on-surface-variant">
                  Safety audits and fleet telematics integration to lower your premiums over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Features List */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold font-headline text-primary tracking-tight mb-4">
              What's Covered
            </h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
              Comprehensive protection with flexible options to match your operation's unique needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Cargo Loss & Damage",
              "Theft & Piracy",
              "Reefer Breakdown",
              "Debris Removal",
              "Delayed Delivery",
              "Loading/Unloading Accidents",
              "Fire & Natural Disasters",
              "Roll-over Accidents",
              "Pollution Liability",
              "High-Value Commodity Endorsements",
              "Trailer Interchange",
              "Warehouse Legal Liability",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-surface-container-lowest p-4 rounded-xl">
                <CheckCircle className="text-secondary text-lg flex-shrink-0" />
                <span className="text-primary font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black font-headline text-white mb-8 tracking-tight">
            Ready to get covered?
          </h2>
          <p className="text-on-primary-container text-xl mb-12 leading-relaxed">
            Get a bindable quote in minutes. Our specialists will customize a policy that fits your
            fleet's exact needs.
          </p>
          <Link
            href="/contact"
            className="safety-gradient text-white px-10 py-5 rounded-xl font-extrabold text-xl shadow-2xl shadow-orange-950/20 hover:scale-105 active:scale-95 transition-all inline-block"
          >
            GET YOUR FREE QUOTE
          </Link>
        </div>
      </section>
    </>
  );
}

// Import additional icons
import {
  Speed,
  SupportAgent,
  TrendingUp,
} from "@/components/Icons";
