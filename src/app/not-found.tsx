import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you requested was not found. Return to Trucker Cargo Insurance for trucking and cargo coverage information.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-20 text-center bg-surface">
      <h1 className="text-7xl md:text-9xl font-display font-extrabold text-accent leading-none">
        404
      </h1>
      <h2 className="mt-2 text-2xl md:text-3xl font-display font-bold">Page Not Found</h2>
      <p className="mt-4 max-w-md text-base text-muted">
        The page you were looking for has moved or no longer exists. Head back to the homepage or
        get a quote for cargo and trucking coverage.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="inline-block bg-accent text-black font-bold px-8 py-3.5 rounded-md hover:opacity-90 transition"
        >
          Back to Homepage
        </Link>
        <Link
          href="/contact"
          className="inline-block border border-accent text-accent font-bold px-8 py-3.5 rounded-md hover:bg-accent hover:text-black transition"
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}
