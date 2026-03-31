import React from "react";
import Link from "next/link";
import { LocalShipping, Phone, Mail, LocationOn } from "./Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-50 dark:bg-slate-900 rounded-t-3xl">
      <div className="w-full px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {/* Column 1 - Logo & Description */}
        <div className="md:col-span-1 space-y-6">
          <div className="flex items-center gap-2">
            <LocalShipping className="text-secondary text-xl" />
            <span className="text-lg font-black font-headline text-slate-900 dark:text-white uppercase tracking-tighter">
              The Kinetic Authority
            </span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            High-performance insurance infrastructure for the trucking industry.
            Precision underwriting for modern fleets.
          </p>
        </div>

        {/* Column 2 - Coverage Links */}
        <div className="space-y-4">
          <h5 className="font-headline font-bold text-primary dark:text-white mb-6 uppercase text-xs tracking-widest">
            Coverage
          </h5>
          <ul className="space-y-4">
            <li>
              <Link
                href="/services"
                className="text-slate-500 dark:text-slate-400 text-sm hover:text-slate-900 dark:hover:text-slate-50 underline transition-all"
              >
                Cargo Liability
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-slate-500 dark:text-slate-400 text-sm hover:text-slate-900 dark:hover:text-slate-50 underline transition-all"
              >
                Primary Liability
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-slate-500 dark:text-slate-400 text-sm hover:text-slate-900 dark:hover:text-slate-50 underline transition-all"
              >
                Fleet Safety
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-slate-500 dark:text-slate-400 text-sm hover:text-slate-900 dark:hover:text-slate-50 underline transition-all"
              >
                Physical Damage
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Legal Links */}
        <div className="space-y-4">
          <h5 className="font-headline font-bold text-primary dark:text-white mb-6 uppercase text-xs tracking-widest">
            Legal
          </h5>
          <ul className="space-y-4">
            <li>
              <Link
                href="/contact"
                className="text-slate-500 dark:text-slate-400 text-sm hover:text-slate-900 dark:hover:text-slate-50 underline transition-all"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-slate-500 dark:text-slate-400 text-sm hover:text-slate-900 dark:hover:text-slate-50 underline transition-all"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/tools"
                className="text-slate-500 dark:text-slate-400 text-sm hover:text-slate-900 dark:hover:text-slate-50 underline transition-all"
              >
                FMCSA Compliance
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 - Contact Info */}
        <div className="space-y-4">
          <h5 className="font-headline font-bold text-primary dark:text-white mb-6 uppercase text-xs tracking-widest">
            Connect
          </h5>
          <div className="flex gap-4 mb-4">
            <a
              href="tel:1-800-543-8424"
              className="text-slate-500 hover:text-secondary transition-colors"
              aria-label="Phone"
            >
              <Phone className="text-xl" />
            </a>
            <a
              href="mailto:underwriting@thekineticauthority.com"
              className="text-slate-500 hover:text-secondary transition-colors"
              aria-label="Email"
            >
              <Mail className="text-xl" />
            </a>
            <a
              href="/contact"
              className="text-slate-500 hover:text-secondary transition-colors"
              aria-label="Location"
            >
              <LocationOn className="text-xl" />
            </a>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            4500 Authority Blvd, Suite 200
            <br />
            Chicago, IL 60607
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-slate-200/50 dark:border-slate-800/50 text-center">
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          © {currentYear} The Kinetic Authority. Precision Logistics Insurance.
        </p>
      </div>
    </footer>
  );
}
