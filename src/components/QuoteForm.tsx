"use client";

import React from "react";
import { RequestQuote } from "@/components/Icons";

const WEBHOOK_URL = `https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=truckercargoinsurance.com`;

export default function QuoteForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const formData = Object.fromEntries(fd.entries());
    // Honeypot: if the bot-field is filled, silently drop.
    if (formData["bot-field"]) {
      window.location.href = "/success";
      return;
    }
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form_name: "quote", source: "truckercargoinsurance.com", ...formData }),
      });
    } catch {
      // Never block the existing success UX if the post fails.
    }
    window.location.href = "/success";
  };

  return (
    <form
      className="space-y-6"
      name="quote-request"
      method="POST"
      action="/success"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="quote-request" />
      <input type="hidden" name="bot-field" />

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
  );
}
