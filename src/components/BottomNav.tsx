"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, VerifiedUser, Newspaper, MenuBook, RequestQuote } from "./Icons";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/services", label: "Services", icon: VerifiedUser },
  { href: "/insights", label: "Blog", icon: Newspaper },
  { href: "/tools", label: "Resources", icon: MenuBook },
  { href: "/contact", label: "Contact", icon: RequestQuote },
];

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 lg:hidden bg-white/90 dark:bg-slate-950/90 backdrop-blur-lg shadow-[0_-4px_20px_rgba(0,14,36,0.08)]">
      <div className="flex justify-around items-center px-4 py-3 pb-safe">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center tap-highlight-transparent duration-200 ${
                active
                  ? "text-orange-600 dark:text-orange-500 bg-orange-50 dark:bg-orange-900/20 rounded-xl px-3 py-1"
                  : "text-slate-500 dark:text-slate-400"
              }`}
            >
              <Icon className="text-xl" />
              <span className="font-label text-[10px] uppercase tracking-widest font-bold mt-1">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
