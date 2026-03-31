import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Analytics,
  Search,
  ChevronRight,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  ArrowForward,
} from "@/components/Icons";

const articles = [
  {
    id: 1,
    category: "Regulation",
    date: "May 14, 2024",
    title: "Mastering Pre-Trip Inspections to Lower Claims",
    excerpt:
      "Learn how a documented pre-trip ritual can serve as your first line of defense during liability investigations.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD9ZSv2At3b57vVyZJic92SmjGB4m2KaL1XMt-9lwXmcVLgcp6szn5qsXPMulLCRWmid9lnXazpE_RAoYFTKQow9LOlZwEaTi7RZRJiJF1xTA8CjHID8XVphMstXcKc-oQFZgwCZT1y2fxbXx6nGH2c9nc1FlpsQzFoiZ6XfSqP67Gi9D9-t7qQwhWBiFlL6XnHskuNjhyyNdtEplNvfQ406mP1qNuRTUF9hBYaoPaok2vJJ7pbmSqbq5tR59gB2edtFsWu_j4M8brU",
    alt: "A professional truck driver performing a pre-trip safety inspection",
    readTime: "8 MIN READ",
  },
  {
    id: 2,
    category: "Market Trends",
    date: "May 09, 2024",
    title: "Global Supply Chain Volatility & Cargo Rates",
    excerpt:
      "Analyzing the correlation between international port congestion and domestic insurance premiums.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxBEJfXWdc2XoIlg-resQFsYxMJ15ZtwtWorH6TpO_n5Cf4WvtXa3k8zZRgglfaJvFPvWNoG0ingyrmR4oj0UXN-xqzrfDAinoaCPSpMwChtaWdyRger1t9thFsORPClpfYAr9vqIbEYlKvvnElxE5lEb9DqMOaTs01pbAbSG54ej3pjjkuIZEHqynZ_k50TQe-WNlpxVV12IianET3zb6qJXswDFTmNth65hsiFXA64EtJsrFegTlI46l2V_WIYBYakcnVcBOiQ0x",
    alt: "Busy commercial shipping port at dusk",
    readTime: "10 MIN READ",
  },
  {
    id: 3,
    category: "Fleet Tech",
    date: "May 02, 2024",
    title: "Protecting Your Fleet from Digital Cargo Theft",
    excerpt:
      "Cyber-criminals are targeting logistics dispatch. Here's how to secure your operational data.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJf0TKEN5Lrf3qz742YyHXyNAanCQvBwseCaEUZGohK0rEnl-4SPQMlMpaai9XI7ga_BINQ1iG_BzzyjpQgmhly4ZtjfFmHJZ9cS1pZMXsyRl4AuRB7sgrAl0DeBZfOTbnj81AX-HN8peS_k704L6IuEknbbX70Btvvq7nnKjEvG4oJBLYhGkfKNEX_UrekqL_IeQQEtDol-9lgy6ThSF14eonKyHBR7h0bn1xa3DYAcctlxjPZFdz5VWTO9EJl1c5Fz5SXq_NSMRE",
    alt: "Abstract digital network visualization",
    readTime: "12 MIN READ",
  },
  {
    id: 4,
    category: "Insurance Tips",
    date: "April 28, 2024",
    title: "Demystifying Reefer Breakdown Coverage",
    excerpt:
      "Prevent catastrophic loss of perishable cargo with precise endorsement structuring.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBb1GG12umPaoQaQjNOYvPkqVBkLoz4w-aoyScZeUOTJ4eSdum1KYlL2MA8jptVEnua18A0Q1wAtNfD48xxQRZUU_54VJfc1ks_VN7H5vYKM_R7BJeNvCaqA1dqt0XRmiRIEmYNW9jfWPHr5pskKs4ezyP_c1zWnYcwy7099sY3HKsoz7v76yQIo8pkXGe8Z9WUsThn4LFg2QBzFC2_atMgRdrewWZiD1pBHaMNtlCcclw9lmH6WrlBAlPMdb5elJvxCcblTJJP4oLM",
    alt: "Time-lapse of car lights on a highway bridge at night",
    readTime: "6 MIN READ",
  },
  {
    id: 5,
    category: "Fleet Tech",
    date: "April 21, 2024",
    title: "Telematics: The Ultimate Premium Reduction Tool",
    excerpt:
      "How sharing your safety data with underwriters can slash your annual cargo premiums.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAK64OjioVT2bRuA1AoMwMOjVp825znZX6jPXD7Cq0EZSnqcf1JMOxcEM-siKfTnZb91W1OHlI4ylj-QAAdNg5wGUvGBqTyVCmgDBZrHHnFv3Tt266YIhsR6y9VoyH_LjsHHv_0ESvypk_YIT0ZwsQactcx6P7DxD6ayveirveWgGPk0XnIlbOxSDt49yWxD3_wdy98U9K9_R0KKPUV6w8kVvlZHfRr3Mg28FDFCUM4P7wvE9flbIWhcM4nzJYYkSCXD9cINAiNF9HR",
    alt: "Modern digital truck dashboard",
    readTime: "9 MIN READ",
  },
  {
    id: 6,
    category: "Regulation",
    date: "April 15, 2024",
    title: "Understanding the DataQs Challenge Process",
    excerpt:
      "Incorrect inspection data can haunt your insurance rates. Learn how to fight back and win.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADNE75d2zXEp1q8zcTTr1tgX0uqd6fxa8pDevNrmVJ2BC5GNKkaELM85Qrdh3M7jiXrryi1ogQJpyDHoCi-e9xjWRqUzXe99KcSZjn3squqQBxNxmP3OioMnqcmSJtXaS1tzEbsaZx1tZptOAUtKWK0MebAi8S4b2V7Mo8V1FxnRO0dhg8wKS1duZFHNy5-dje4s2TsrObUB2Fn_SrNw2T4p9MYzgB90cJrRnXGVZGwiyg7heK1i_Dco5V27sjnC-SLPkVi8XObuVH",
    alt: "Modern law enforcement vehicle on highway",
    readTime: "11 MIN READ",
  },
];

const categories = ["All Updates", "Safety", "Fleet Tech", "Market Trends", "Insurance Tips"];

export default function InsightsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-end gap-6 mb-16">
          <div className="flex-1">
            <span className="inline-block px-3 py-1 bg-primary text-on-primary-container text-[10px] font-bold uppercase tracking-[0.2em] mb-4 rounded-sm">
              Knowledge Hub
            </span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-primary leading-[0.95]">
              Kinetic Insights <br /> & Strategy.
            </h1>
          </div>
          <div className="flex-1 max-w-xl">
            <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
              Stay ahead of shifting FMCSA regulations, master fleet risk mitigation, and discover
              how precision logistics insurance powers the modern supply chain.
            </p>
            <div className="h-[2px] w-24 bg-secondary"></div>
          </div>
        </div>

        {/* Featured Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
          {/* Main Featured Card */}
          <article className="md:col-span-8 group relative overflow-hidden bg-surface-container-low rounded-3xl transition-transform duration-300 hover:-translate-y-2">
            <div className="aspect-[16/9] overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8nx2Ety1SmWnTN4m7TzWvZj_To5xgqtso3RxsxG1VmcgAdqm_FchTL9DmjsHpSCh9L9r5qGLpsr16FnRMDWVSIomurS274gdVkO-EycK7kkelex3I4OHxYepPcDqhgdwvXaLSo27YC5SBUxMZIH_TQCN7we5fuh87jr6yEFhaLt5w6yfS1k_SjdQUhSxcBtkjjpQ6pbpvNKf0WO_3AZ-1g7FRTjmy7m1GhLJo7OqIqeMDsDuFOY-wPnWr0pqYFxCBMunkUKrXeitI"
                alt="Powerful modern semi-truck driving on highway through desert"
                width={800}
                height={450}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8 md:p-12 bg-surface-container-low">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                  Safety Regulations
                </span>
                <span className="text-xs text-on-surface-variant font-medium">12 MIN READ</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-6 group-hover:text-secondary transition-colors">
                The 2024 FMCSA Compliance Roadmap: What Fleet Managers Need to Know Now
              </h2>
              <p className="text-on-surface-variant text-lg mb-8 max-w-2xl">
                From updated ELD mandates to new standards in carrier safety ratings, we break down
                the critical regulatory shifts impacting your liability coverage this year.
              </p>
              <Link
                href="/insights"
                className="flex items-center gap-2 font-bold text-primary hover:text-secondary transition-colors group/btn"
              >
                READ FULL ANALYSIS
                <ArrowForward className="translate-x-0 group-hover/btn:translate-x-2 transition-transform" />
              </Link>
            </div>
          </article>

          {/* Secondary Featured Stack */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <article className="flex-1 bg-primary text-white p-8 rounded-3xl flex flex-col justify-between group cursor-pointer transition-transform duration-300 hover:-translate-y-2">
              <div>
                <span className="inline-block px-2 py-1 bg-secondary text-[10px] font-bold uppercase tracking-widest mb-4">
                  Trending
                </span>
                <h3 className="text-2xl font-headline font-bold leading-tight mb-4 group-hover:text-secondary-container transition-colors">
                  AI-Driven Risk: The Future of Cargo Underwriting
                </h3>
              </div>
              <Analytics className="text-4xl text-on-primary-container" />
            </article>
            <article className="flex-1 bg-surface-container-highest p-8 rounded-3xl flex flex-col justify-between group cursor-pointer transition-transform duration-300 hover:-translate-y-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 block">
                  Insurance Tips
                </span>
                <h3 className="text-2xl font-headline font-bold text-primary leading-tight group-hover:text-secondary transition-colors">
                  5 Hidden Gaps in Standard Cargo Liability
                </h3>
              </div>
              <p className="text-sm text-on-surface-variant line-clamp-2">
                Ensure your specific commodities aren't excluded from your primary policy
                coverage...
              </p>
            </article>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 py-8 bg-surface-container-low px-8 rounded-xl">
          <div className="flex flex-wrap gap-4">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-6 py-2 font-bold rounded-xl text-sm transition-colors ${
                  index === 0
                    ? "bg-primary text-white"
                    : "bg-white text-primary hover:bg-slate-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" />
            <input
              className="pl-12 pr-6 py-3 bg-white border-none rounded-xl focus:ring-2 focus:ring-secondary w-full md:w-64 text-sm font-medium"
              placeholder="Search insights..."
              type="text"
            />
          </div>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="aspect-video rounded-xl overflow-hidden mb-6 bg-surface-container-high">
                <Image
                  src={article.image}
                  alt={article.alt}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-black uppercase tracking-[0.15em] text-on-surface-variant px-2 py-0.5 bg-surface-container-high rounded">
                  {article.category}
                </span>
                <span className="text-xs text-on-surface-variant">{article.date}</span>
              </div>
              <h3 className="text-xl font-headline font-bold text-primary mb-3 leading-snug group-hover:text-secondary transition-colors">
                {article.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                {article.excerpt}
              </p>
              <Link
                href="/insights"
                className="inline-flex items-center text-sm font-bold text-primary group/link"
              >
                Read More
                <ChevronRight className="text-lg ml-1 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-20">
          <nav className="flex items-center gap-2">
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container text-on-surface-variant hover:bg-primary hover:text-white transition-colors">
              <KeyboardArrowLeft />
            </button>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary text-white font-bold">
              1
            </button>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-white text-primary font-bold hover:bg-surface-container transition-colors">
              2
            </button>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-white text-primary font-bold hover:bg-surface-container transition-colors">
              3
            </button>
            <span className="px-2 text-on-surface-variant">...</span>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-white text-primary font-bold hover:bg-surface-container transition-colors">
              12
            </button>
            <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container text-on-surface-variant hover:bg-primary hover:text-white transition-colors">
              <KeyboardArrowRight />
            </button>
          </nav>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="bg-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-6 leading-tight">
                Master the Road.
                <br />
                Subscribe to the Authority.
              </h2>
              <p className="text-on-primary-container text-lg max-w-md">
                Get bi-weekly logistics insurance intelligence, regulatory alerts, and fleet safety
                strategies delivered direct.
              </p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-4" data-netlify="true" name="newsletter">
                <input type="hidden" name="form-name" value="newsletter" />
                <input
                  className="flex-1 bg-tertiary-container border-none rounded-xl text-white px-6 py-4 placeholder:text-slate-500 focus:ring-2 focus:ring-secondary"
                  placeholder="Fleet Manager Email"
                  type="email"
                  required
                />
                <button
                  type="submit"
                  className="bg-secondary hover:bg-secondary-container text-white px-8 py-4 rounded-xl font-bold transition-all"
                >
                  JOIN NOW
                </button>
              </form>
              <p className="text-[10px] text-slate-500 mt-4 uppercase tracking-widest">
                No spam. Only high-performance logistics insights.
              </p>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>
      </section>
    </>
  );
}
