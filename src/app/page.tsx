import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LocalShipping,
  Verified,
  Inventory,
  Shield,
  Build,
  AccountBalance,
  Speed,
  SupportAgent,
  TrendingUp,
  Bolt,
  Rule,
  VerifiedUser,
  CheckCircle,
  ArrowForward,
  East,
  TrendingDown,
  Lock,
  Security,
  Analytics,
} from "@/components/Icons";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative kinetic-gradient min-h-[751px] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBARKTtmsQMvOYE1N_wMdzpJs5ZJfw7UFQKIOJOLQSTIXRVXChkMOIRYwDEA7LQQ2yeiI1YxtKmHLeJY1JAhGsIBk6c6W2OYNh-3gfHsqfdL6xejkqkeVQl7SRNJmF-MalEltUpI7DzXakx1xWiO7AVx6jZC2pUJ3AfcPfgntZjQ4_4RjLJkjgbfp50vvC_91Y7Sboj7mSz_w3plwiiRexSDbB3nuRQDeLrWAnf12zRx4oZRbF8-ivDi0eTxUWZb9afhgwRlji0HAFu"
            alt="Modern semi-truck driving on highway during sunset"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/20 rounded-full border border-secondary/30">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-secondary font-bold text-xs uppercase tracking-widest font-label">
                Now Covering 48 States
              </span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
              Protect Your Load,
              <br />
              <span className="text-secondary-container">Protect Your Future</span>
            </h1>
            <p className="text-on-primary-container text-xl max-w-lg leading-relaxed">
              Precision logistics insurance engineered for the high-stakes world of heavy
              hauling. Get bindable quotes in minutes, not days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="safety-gradient text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-orange-950/20 hover:scale-105 active:scale-95 transition-all text-center"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/services"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all text-center"
              >
                View Coverage Options
              </Link>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0OAgexBEQxrWgYufrxgXSFywLrWQaPmiWtJXljmsTcvqYUOIg-hf3UoNmvsJzUri2DXIVx35T8jnMpkY4QCZzDSDviI-VWs0J01tFr8OjvVyv2JuNSD8pzYRknIHpD-58cVvTQFlrrgTUDy5YT13FWJIrgU_6gAOXWQC-L7zLhu34rPfnd_ppbY-yVdserbX_IbyDLwSt8G1fDpQj1_z3zJSiliXrwkELd8s_Wwgjbdt_DaRaQxW29R641LhgccZCok78DDjPHXA3"
                  alt="Customer"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-primary object-cover"
                />
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4sq7NoyCNOZ6Z5bgxrhFSbABmOQD_pgAFYUdV0M1v7Go6wWTOvZ4SZAmG1IZQR7tOGGUMZyD6KQnD9dYxbOjQ5WlXXHIPVPJEahG4eMZJOU3C8yzmWmYvkmBU6MWGy5t_Gj1V515mTX-O-wJlBMujU_KWYNfylGkAnZunBLBla8MByJcmBMmMfKk2eg83SE_8tqWgK7CqmSW4vlXSTLSaBxePiKGmAMW961wbZa5oAuNuI-0Z7ZfBpEeRsVkiPV_94PBvNP1yEVti"
                  alt="Customer"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-primary object-cover"
                />
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY8JWbrjzsXHTJ0yopb60D0-OGGPdwM2c8Y0A4BetjlZz_nY9k4MzQ6-UXziE79h-xBguzmu3M7eW0lbfdOUppl_EC8aCm8PX4obR2peS7YjqDLpJpLuFECQGXgjZISYAI8qn_FeZhzvh-gduh0yNfdSeAZT4Qi2hRKWhooKh4TwQbvn4CVt4fqpqdCyB6dEP1sXLyu_7yJRwcbyw4bWSuPBX9FytTCAkAp_3Bx_d9kv5XpaNRCU4difJupNQdftFQYLpijOiVLAmc"
                  alt="Customer"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-primary object-cover"
                />
              </div>
              <div className="text-sm">
                <p className="text-white font-bold">12,000+ Carriers</p>
                <p className="text-on-primary-container">Trusted nationwide</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute -inset-4 bg-secondary/10 blur-3xl rounded-full"></div>
            <div className="relative bg-surface-container-lowest p-8 rounded-[2rem] shadow-2xl border border-white/10">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-surface-container pb-4">
                  <span className="text-primary font-bold font-headline">Live Cargo Stats</span>
                  <Analytics className="text-secondary text-2xl" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface-container-low p-4 rounded-2xl">
                    <p className="text-on-surface-variant text-xs font-label uppercase">
                      Claims Ratio
                    </p>
                    <p className="text-2xl font-black text-primary">0.08%</p>
                  </div>
                  <div className="bg-surface-container-low p-4 rounded-2xl">
                    <p className="text-on-surface-variant text-xs font-label uppercase">
                      Avg Response
                    </p>
                    <p className="text-2xl font-black text-primary">12m</p>
                  </div>
                </div>
                <div className="bg-primary text-white p-6 rounded-2xl relative overflow-hidden">
                  <div className="relative z-10">
                    <p className="text-sm opacity-80 mb-1">Total Coverage Binded</p>
                    <p className="text-3xl font-black">$4.2B+</p>
                  </div>
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Security className="text-7xl" />
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="w-full py-4 bg-surface-container-highest rounded-xl text-primary font-bold hover:bg-surface-dim transition-colors block text-center"
                >
                  Access Portal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-on-surface-variant text-sm font-bold tracking-[0.2em] uppercase mb-10">
            Industry Certified Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 font-black text-xl text-primary tracking-tighter">
              <Verified className="text-secondary text-2xl" />
              FMCSA
            </div>
            <div className="flex items-center gap-2 font-black text-xl text-primary tracking-tighter">
              <Verified className="text-secondary text-2xl" />
              ATA
            </div>
            <div className="flex items-center gap-2 font-black text-xl text-primary tracking-tighter">
              <Verified className="text-secondary text-2xl" />
              DOT
            </div>
            <div className="flex items-center gap-2 font-black text-xl text-primary tracking-tighter">
              <Verified className="text-secondary text-2xl" />
              OIDA
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-primary tracking-tight">
              Built for the Road
            </h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
              We cut through the red tape to provide the fastest, most reliable cargo protection
              in the industry.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Fast */}
            <div className="bg-surface-container-lowest p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Bolt className="text-secondary text-3xl" />
              </div>
              <h3 className="text-2xl font-black font-headline text-primary mb-4">Fast</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                Receive bindable quotes in under 5 minutes. No more waiting on brokers while your
                fleet is idle.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm font-bold text-primary">
                  <CheckCircle className="text-secondary text-sm" />
                  Instant COIs
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-primary">
                  <CheckCircle className="text-secondary text-sm" />
                  Automated Renewals
                </li>
              </ul>
            </div>

            {/* Flexible */}
            <div className="bg-surface-container-lowest p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Rule className="text-secondary text-3xl" />
              </div>
              <h3 className="text-2xl font-black font-headline text-primary mb-4">Flexible</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                Customized limits up to $10M. Whether you haul dry van or reefer, we have the right
                fit.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm font-bold text-primary">
                  <CheckCircle className="text-secondary text-sm" />
                  Per-Load Coverage
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-primary">
                  <CheckCircle className="text-secondary text-sm" />
                  Excess Liability
                </li>
              </ul>
            </div>

            {/* Reliable */}
            <div className="bg-surface-container-lowest p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <VerifiedUser className="text-secondary text-3xl" />
              </div>
              <h3 className="text-2xl font-black font-headline text-primary mb-4">Reliable</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                Backed by A+ rated carriers and a claims team that understands trucking logistics
                inside out.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm font-bold text-primary">
                  <CheckCircle className="text-secondary text-sm" />
                  24/7 Claims Support
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-primary">
                  <CheckCircle className="text-secondary text-sm" />
                  Dedicated Adjusters
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry News Bento */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-extrabold font-headline text-primary tracking-tight">
                Logistics Intelligence
              </h2>
              <p className="text-on-surface-variant mt-2">Latest insights from the trucking industry.</p>
            </div>
            <Link
              href="/insights"
              className="text-secondary font-bold flex items-center gap-2 hover:underline"
            >
              View All News <ArrowForward />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[700px] md:h-[600px]">
            {/* Main Story */}
            <article className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA28-SqOMmFBZdniZkv6M6BbW95kOuM4XH_PDLNYPWy1SoNljvCfbqR9Orlouvp3dJhriSoVn1OoiAfk5ys3K4OTPC-hOvQm6zHcKy4nJT98CkN6iiUDdREKP4GV-11iHPg7xbhH3DD6V-4KzyuuK8--OVzHM9wqMxQANS0O4Nfya1V2KDzrMBTYKNzeRhAcY-9y2g5FpKbD9HZQgX42I0BRDERnBRXO0Yyd3lAGEtovFLh7OzEunPqi2aEz1d6BSxousL4DyDR9ADD"
                alt="Modern logistics center at night"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10 text-white">
                <span className="bg-secondary px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full mb-4 inline-block">
                  Analysis
                </span>
                <h3 className="text-3xl font-black leading-tight mb-4">
                  Navigating the 2024 Cargo Liability Shifts
                </h3>
                <p className="text-white/80 line-clamp-2">
                  How new federal regulations are impacting independent owner-operators and small
                  fleets nationwide.
                </p>
              </div>
            </article>

            {/* Side 1 */}
            <article className="md:col-span-2 bg-surface-container-high rounded-3xl p-8 flex flex-col justify-between hover:bg-surface-dim transition-colors cursor-pointer group">
              <div>
                <span className="text-secondary font-bold text-xs uppercase tracking-widest">
                  Regulatory
                </span>
                <h4 className="text-xl font-black text-primary mt-2">New FMCSA Safety Standards for 2024</h4>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-on-surface-variant text-sm">March 14, 2024</span>
                <East className="text-primary group-hover:translate-x-2 transition-transform" />
              </div>
            </article>

            {/* Side 2 */}
            <article className="md:col-span-1 bg-surface-container rounded-3xl p-8 flex flex-col justify-between hover:bg-surface-dim transition-colors cursor-pointer group">
              <h4 className="text-lg font-black text-primary leading-tight">
                Reducing Insurance Premiums Through Tech
              </h4>
              <TrendingDown className="text-secondary text-3xl" />
            </article>

            {/* Side 3 */}
            <article className="md:col-span-1 kinetic-gradient rounded-3xl p-8 flex flex-col justify-between hover:opacity-90 transition-opacity cursor-pointer group">
              <h4 className="text-lg font-black text-white leading-tight">
                High-Value Cargo Security Protocol
              </h4>
              <Lock className="text-secondary-container text-3xl" />
            </article>
          </div>
        </div>
      </section>

      {/* CTA Tonal Section */}
      <section className="py-24 bg-surface-container-highest">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block p-4 bg-white rounded-3xl shadow-lg mb-10">
            <RequestQuote className="text-5xl text-secondary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-headline text-primary mb-8 tracking-tighter">
            Ready to secure your journey?
          </h2>
          <p className="text-on-surface-variant text-xl mb-12 leading-relaxed">
            Join thousands of professional drivers who trust Trucker Cargo Insurance for their cargo
            liability and fleet insurance needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/contact"
              className="safety-gradient text-white px-10 py-5 rounded-xl font-extrabold text-xl shadow-2xl shadow-orange-950/20 hover:scale-105 active:scale-95 transition-all"
            >
              GET YOUR QUOTE NOW
            </Link>
            <Link
              href="/contact"
              className="bg-primary text-white px-10 py-5 rounded-xl font-extrabold text-xl hover:bg-primary/90 transition-all"
            >
              TALK TO AN AGENT
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// Import RequestQuote icon
import { RequestQuote } from "@/components/Icons";
