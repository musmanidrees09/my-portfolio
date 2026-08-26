"use client";

import { ArrowUpRight, Check, Cpu, ExternalLink, Filter } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { chromeExtensions } from "@/data/portfolio";

function ChromeIcon({ size = 14, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" y1="8" x2="12" y2="8" />
      <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
      <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
    </svg>
  );
}

const categories = [
  { key: "all", label: "All Extensions" },
  { key: "ai", label: "AI & Workflows" },
  { key: "document", label: "Document & PDF" },
  { key: "productivity", label: "Productivity & Utilities" },
];

export default function ExtensionsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredExtensions =
    activeCategory === "all"
      ? chromeExtensions
      : chromeExtensions.filter((ext) => ext.categoryKey === activeCategory);

  return (
    <section id="extensions" className="border-b border-[var(--dark-rule)] bg-[#0f100e] text-white">
      <div className="editorial-grid-dark">
        <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 md:py-16 lg:px-12">
          {/* Header */}
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="mono-label mb-5 flex items-center gap-3 text-white/50">
                <span className="text-[var(--accent)]">03</span>
                <span className="h-px w-8 bg-white/20" aria-hidden="true" />
                Browser Products
              </p>
              <h2 className="text-wrap-balance max-w-3xl text-3xl font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-5xl">
                8+ Manifest V3 Extensions Shipped.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/60 lg:justify-self-end">
              Production browser utilities built with background service workers, content script DOM injection, client-side document processing, and modern React interfaces.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-3 py-1 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                    activeCategory === cat.key
                      ? "border border-[var(--accent)] bg-[var(--accent)] text-[var(--ink)] font-bold"
                      : "border border-white/15 bg-white/5 text-white/70 hover:border-white/40 hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <p className="mono-label text-[11px] text-white/40">
              Showing {filteredExtensions.length} of {chromeExtensions.length} extensions
            </p>
          </div>

          {/* Compact Extension Grid */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {filteredExtensions.map((ext, index) => (
              <article
                key={ext.slug}
                className="group relative flex flex-col justify-between border border-white/10 bg-[#161715] transition-all duration-300 hover:border-white/30 hover:bg-[#1a1b18]"
              >
                <div>
                  {/* Card Header with Category & Right-Aligned Live Badge */}
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 bg-black/20">
                    <div className="flex items-center gap-2">
                      <ChromeIcon size={13} className="text-[var(--accent)]" />
                      <span className="mono-label text-[10px] text-white/60">{ext.category}</span>
                    </div>
                    {/* Live Badge Placed on the Right Side */}
                    <div className="flex items-center gap-2">
                      {ext.status === "live" ? (
                        <span className="inline-flex items-center gap-1.5 border border-[#86efac]/40 bg-[#86efac]/10 px-2 py-0.5 font-mono text-[9px] font-medium uppercase tracking-widest text-[#86efac]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#86efac] animate-pulse" aria-hidden="true" />
                          Live Store
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 border border-white/20 bg-white/5 px-2 py-0.5 font-mono text-[9px] font-medium uppercase tracking-widest text-white/50">
                          In Development
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Visual Preview Banner (Compact & Crisp Aspect Ratio) */}
                  <div className="relative aspect-[22/9] w-full overflow-hidden bg-[#20211e]">
                    <Image
                      src={ext.image.src}
                      alt={ext.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      quality={70}
                      loading="lazy"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#161715] via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Body Content */}
                  <div className="p-4 sm:p-5">
                    <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-[var(--accent)] transition-colors">
                      {ext.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-white/50 line-clamp-1">
                      {ext.fullName}
                    </p>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/70">
                      {ext.description}
                    </p>

                    {/* Architecture Highlight */}
                    {ext.architectureHighlights && (
                      <div className="mt-3 border-l-2 border-[var(--accent)] bg-white/[0.02] py-1.5 pl-2.5">
                        <p className="mono-label text-[9px] text-[var(--accent)]">Manifest V3 Architecture</p>
                        <p className="mt-0.5 text-xs text-white/75">{ext.architectureHighlights}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer / Actions */}
                <div className="border-t border-white/10 px-4 py-3 bg-black/20">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {ext.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[9px] text-white/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {ext.storeUrl ? (
                      <a
                        href={ext.storeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 border border-white/20 bg-white/5 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-black focus-visible:ring-2 focus-visible:ring-[var(--focus)]"
                      >
                        Chrome Store
                        <ArrowUpRight size={12} aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="font-mono text-[10px] text-white/40">Review Pending</span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Extension Architecture Highlight Note */}
          <div className="mt-14 border border-white/10 bg-[#141513] p-6 sm:p-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <p className="mono-label text-[var(--accent)]">01 / Manifest V3 Standard</p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Engineered using strict Declarative Net Request rules, lightweight background service workers, and CSP-compliant script injection.
                </p>
              </div>
              <div>
                <p className="mono-label text-[var(--accent)]">02 / Privacy by Design</p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Zero telemetry collection, client-side document processing, and temporary storage with zero external payload caching.
                </p>
              </div>
              <div>
                <p className="mono-label text-[var(--accent)]">03 / React & Tailored UI</p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  High-performance popups and side-panels styled with Tailwind CSS, supporting dark modes and smooth keyboard navigation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
