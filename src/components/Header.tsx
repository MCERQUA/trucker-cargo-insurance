"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LocalShipping,
  Menu,
  Close,
  VerifiedUser,
  Newspaper,
  MenuBook,
  RequestQuote,
} from "./Icons";

const navLinks = [
  { href: "/", label: "Home", icon: null },
  { href: "/services", label: "Services", icon: VerifiedUser },
  { href: "/insights", label: "Blog", icon: Newspaper },
  { href: "/tools", label: "Resources", icon: MenuBook },
  { href: "/contact", label: "Contact", icon: RequestQuote },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <LocalShipping className="text-primary text-2xl" />
          <span className="text-xl font-extrabold tracking-tighter text-slate-900 font-headline">
            The Kinetic Authority
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors ${
                isActive(link.href)
                  ? "text-orange-600 font-bold border-b-2 border-orange-600"
                  : "text-slate-600 hover:text-orange-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <button className="hidden md:block bg-secondary hover:bg-secondary-container text-white px-6 py-2.5 rounded-xl font-bold text-sm tracking-tight scale-95 active:scale-90 transition-all shadow-md hover:shadow-lg">
          GET A QUOTE
        </button>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <Close className="text-2xl" /> : <Menu className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 py-3 font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-orange-600 font-bold"
                      : "text-slate-600 hover:text-orange-600"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {Icon && <Icon className="text-xl" />}
                  {link.label}
                </Link>
              );
            })}
            <button className="mt-4 bg-secondary hover:bg-secondary-container text-white px-6 py-3 rounded-xl font-bold text-sm tracking-tight">
              GET A QUOTE
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
