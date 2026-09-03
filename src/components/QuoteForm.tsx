"use client";

import React from "react";
import { RequestQuote } from "@/components/Icons";

/**
 * Posts through Netlify Forms, not to the leads webhook directly.
 *
 * This form used to fetch the webhook URL itself and then redirect to /success whether or not
 * that call succeeded — so Netlify never saw a submission (quote-request read 0 since June) and
 * a failed post still told the visitor they were done. Now the submission goes to Netlify, which
 * stores it AND forwards it to the leads DB via the submission_created notification in
 * netlify.toml. One capture, two places it can be recovered from, and a real error state.
 */

export default function QuoteForm() {
  const [status, setStatus] = React.useState<"idle" | "sending" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    // Honeypot: a filled bot-field is a bot. Drop it without posting and without an error.
    if (fd.get("bot-field")) {
      window.location.href = "/success";
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(fd as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      window.location.href = "/success";
    } catch {
      // Never fake a success: if it did not send, say so and give them the phone number.
      setStatus("error");
    }
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
            name="name"
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <label className="block text-[10px] uppercase tracking-widest font-bold text-outline mb-1">
            Phone
          </label>
          <input
            className="w-full bg-surface-container-high border-b border-outline focus:border-secondary transition-colors outline-none px-0 py-3 text-primary font-medium focus:ring-0"
            placeholder="(555) 000-0000"
            type="tel"
            name="phone"
            required
          />
        </div>
        <div className="relative">
          <label className="block text-[10px] uppercase tracking-widest font-bold text-outline mb-1">
            Street Address
          </label>
          <input
            className="w-full bg-surface-container-high border-b border-outline focus:border-secondary transition-colors outline-none px-0 py-3 text-primary font-medium focus:ring-0"
            placeholder="123 Main St"
            type="text"
            name="streetAddress"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <label className="block text-[10px] uppercase tracking-widest font-bold text-outline mb-1">
            City
          </label>
          <input
            className="w-full bg-surface-container-high border-b border-outline focus:border-secondary transition-colors outline-none px-0 py-3 text-primary font-medium focus:ring-0"
            placeholder="City"
            type="text"
            name="city"
            required
          />
        </div>
        <div className="relative">
          <label className="block text-[10px] uppercase tracking-widest font-bold text-outline mb-1">
            State
          </label>
          <input
            className="w-full bg-surface-container-high border-b border-outline focus:border-secondary transition-colors outline-none px-0 py-3 text-primary font-medium focus:ring-0"
            placeholder="TX"
            type="text"
            name="state"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <label className="block text-[10px] uppercase tracking-widest font-bold text-outline mb-1">
            ZIP Code
          </label>
          <input
            className="w-full bg-surface-container-high border-b border-outline focus:border-secondary transition-colors outline-none px-0 py-3 text-primary font-medium focus:ring-0"
            placeholder="00000"
            type="text"
            name="zip"
            required
          />
        </div>
        <div className="relative">
          <label className="block text-[10px] uppercase tracking-widest font-bold text-outline mb-1">
            FEIN (Federal Tax ID)
          </label>
          <input
            className="w-full bg-surface-container-high border-b border-outline focus:border-secondary transition-colors outline-none px-0 py-3 text-primary font-medium focus:ring-0"
            placeholder="00-0000000"
            type="text"
            name="fein"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <label className="block text-[10px] uppercase tracking-widest font-bold text-outline mb-1">
            Year Business Started
          </label>
          <input
            className="w-full bg-surface-container-high border-b border-outline focus:border-secondary transition-colors outline-none px-0 py-3 text-primary font-medium focus:ring-0"
            placeholder="2015"
            type="number"
            name="yearBusinessStarted"
            required
          />
        </div>
        <div className="relative">
          <label className="block text-[10px] uppercase tracking-widest font-bold text-outline mb-1">
            Current or Prior Carrier
          </label>
          <input
            className="w-full bg-surface-container-high border-b border-outline focus:border-secondary transition-colors outline-none px-0 py-3 text-primary font-medium focus:ring-0"
            placeholder="Carrier name"
            type="text"
            name="priorCarrierName"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <label className="block text-[10px] uppercase tracking-widest font-bold text-outline mb-1">
            Current or Prior Policy Number
          </label>
          <input
            className="w-full bg-surface-container-high border-b border-outline focus:border-secondary transition-colors outline-none px-0 py-3 text-primary font-medium focus:ring-0"
            placeholder="Policy number"
            type="text"
            name="priorPolicyNumber"
            required
          />
        </div>
        <div className="relative">
          <label className="block text-[10px] uppercase tracking-widest font-bold text-outline mb-1">
            Policy Expiration Date
          </label>
          <input
            className="w-full bg-surface-container-high border-b border-outline focus:border-secondary transition-colors outline-none px-0 py-3 text-primary font-medium focus:ring-0"
            type="date"
            name="priorPolicyExpiration"
            required
          />
        </div>
      </div>

      <div className="relative">
        <label className="block text-[10px] uppercase tracking-widest font-bold text-outline mb-1">
          Description of Your Business
        </label>
        <textarea
          className="w-full bg-surface-container-high border-b border-outline focus:border-secondary transition-colors outline-none px-0 py-3 text-primary font-medium focus:ring-0"
          placeholder="What you haul, lanes, day-to-day operations"
          name="businessDescription"
          rows={3}
          required
        />
      </div>

      {status === "error" && (
        <div className="rounded-lg border border-amber-400 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          That did not send. Please call{" "}
          <a href="tel:+18449675247" className="font-bold underline">
            844-967-5247
          </a>{" "}
          and we will take the details over the phone.
        </div>
      )}

      <p className="text-[11px] leading-relaxed text-outline">
        By submitting this form you agree to be contacted by Contractors Choice Agency about your
        insurance request. Your information is used to prepare your quote and is never sold.
      </p>

      <div className="pt-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full kinetic-gradient text-white py-5 rounded-lg font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-all flex items-center justify-center gap-3 shadow-lg"
        >
          {status === "sending" ? "SENDING…" : "BIND COVERAGE NOW"}
          <RequestQuote />
        </button>
      </div>
    </form>
  );
}
