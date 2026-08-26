import { ArrowDown, ArrowUpRight, Download, Mail, Terminal } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="editorial-grid border-b border-[var(--rule)]">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-10 sm:px-8 md:py-16 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14 lg:px-12 lg:py-20">
        {/* Left Column: Positioning & CTAs */}
        <div className="flex flex-col justify-center">
          <p className="mono-label mb-7 flex items-center gap-3 text-[var(--muted)]">
            <span className="h-px w-8 bg-[var(--ink)]" aria-hidden="true" />
            Full-Stack Developer · Lahore, Pakistan
          </p>

          <h1 className="text-wrap-balance max-w-4xl text-[clamp(2.15rem,4.2vw,4.25rem)] font-bold leading-[0.96] tracking-[-0.06em] text-[var(--ink)]">
            Full-Stack Developer building{" "}
            <span className="relative z-0 inline-block bg-[var(--accent)] px-2 pb-1 pt-0.5 text-[var(--ink)]">
              SaaS platforms,
            </span>{" "}
            AI tools & browser extensions.
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-7">
            {personalInfo.bio}
          </p>

          {/* Action CTAs */}
          <div className="mt-7 flex flex-wrap gap-2.5">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-[var(--ink)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-black focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)]"
            >
              View Projects
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>

            <a
              href={personalInfo.resumePdf}
              download
              className="inline-flex items-center justify-center gap-2 border border-[var(--ink)] bg-transparent px-4 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--ink)] transition-colors duration-200 hover:bg-white focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)]"
            >
              Resume
              <Download size={14} aria-hidden="true" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)] transition-colors duration-200 hover:text-[var(--ink)]"
            >
              Discuss Project
              <Mail size={13} aria-hidden="true" />
            </a>
          </div>

          {/* Core Specialization Pills */}
          <div className="mt-7 flex flex-wrap items-center gap-1.5 border-t border-[var(--rule)] pt-4">
            <span className="mono-label mr-1.5 text-[10px] text-[var(--muted)]">Core Stack:</span>
            {["Next.js", "React", "Laravel", "MERN Stack", "PHP", "MySQL", "Chrome MV3", "Tailwind"].map((tech) => (
              <span
                key={tech}
                className="border border-[var(--rule)] bg-[var(--surface)] px-2 py-0.5 font-mono text-[10px] font-medium text-[var(--ink)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Technical Visual Card */}
        <div className="relative flex items-center justify-center lg:justify-end overflow-hidden sm:overflow-visible">
          <div className="relative w-full max-w-[460px]">
            <div className="relative isolate">
              {/* Offset Accent Box */}
              <div
                className="pointer-events-none absolute -bottom-2.5 -right-2.5 z-0 h-full w-full bg-[var(--accent)] border border-[var(--ink)]"
                aria-hidden="true"
              />

              {/* Developer Portrait & System Console Container */}
              <div className="relative z-10 border border-[var(--ink)] bg-white p-3 sm:p-3.5 shadow-sm">
                {/* Visual Header */}
                <div className="mb-2.5 flex items-center justify-between border-b border-[var(--rule)] pb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#ef4444]" />
                    <span className="h-2 w-2 rounded-full bg-[#eab308]" />
                    <span className="h-2 w-2 rounded-full bg-[#22c55e]" />
                    <span className="mono-label ml-1.5 text-[9px] text-[var(--muted)]">engineer.config</span>
                  </div>
                  <span className="mono-label text-[9px] font-semibold text-[var(--ink)]">Production Ready</span>
                </div>

                {/* Profile Photo */}
                <div className="relative aspect-[4/4.5] overflow-hidden border border-[var(--rule)] bg-[#1a1b18]">
                  <Image
                    src="/Profile.webp"
                    alt="Muhammad Usman — Full-Stack Developer specializing in Next.js, React, Laravel, and Chrome extensions"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 460px"
                    quality={85}
                    className="object-cover object-top"
                  />

                  {/* Status Overlay */}
                  <div className="pointer-events-none absolute inset-x-2.5 bottom-2.5 flex items-center justify-between border border-white/20 bg-black/60 px-2.5 py-1.5 text-[9px] font-medium uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                    <span>Muhammad Usman</span>
                    <span className="flex items-center gap-1 text-[var(--accent)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" aria-hidden="true" />
                      Open for Work
                    </span>
                  </div>
                </div>

                {/* Mini System Specs Bar */}
                <div className="mt-2.5 grid grid-cols-3 gap-1.5 border-t border-[var(--rule)] pt-2.5 text-center">
                  <div className="border-r border-[var(--rule)] pr-1">
                    <p className="font-mono text-[11px] font-bold text-[var(--ink)]">5+ Apps</p>
                    <p className="mono-label text-[8px] text-[var(--muted)]">Live Projects</p>
                  </div>
                  <div className="border-r border-[var(--rule)] pr-1">
                    <p className="font-mono text-[11px] font-bold text-[var(--ink)]">8+ Live</p>
                    <p className="mono-label text-[8px] text-[var(--muted)]">Extensions</p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] font-bold text-[var(--ink)]">1.5+ Yrs</p>
                    <p className="mono-label text-[8px] text-[var(--muted)]">Experience</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between text-[var(--muted)]">
              <span className="mono-label text-[10px]">Lahore, Pakistan · UTC+5</span>
              <span className="mono-label text-[10px]">musmanidrees08@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#what-i-build"
        className="mx-auto flex w-fit items-center gap-2 pb-5 text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
        aria-label="Scroll to specialization section"
      >
        <span className="mono-label">Explore Engineering Work</span>
        <ArrowDown size={14} aria-hidden="true" />
      </a>
    </section>
  );
}
