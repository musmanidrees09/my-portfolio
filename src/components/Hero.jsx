import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import Image from "next/image";

const proof = [
  { value: "3", label: "web products" },
  { value: "8", label: "browser extensions" },
  { value: "Laravel", label: "core backend" },
  { value: "React", label: "product UI" },
];

export default function Hero() {
  return (
    <section id="home" className="editorial-grid border-b border-[var(--rule)]">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:px-12 lg:py-28">
        <div className="flex flex-col justify-center">
          <p className="mono-label mb-7 flex items-center gap-3 text-[var(--muted)]">
            <span className="h-px w-8 bg-[var(--ink)]" aria-hidden="true" />
            Full-stack developer · Lahore, Pakistan
          </p>
          <h1 className="text-wrap-balance max-w-4xl text-[clamp(3.5rem,8vw,7.75rem)] font-semibold leading-[0.9] tracking-[-0.075em] text-[var(--ink)]">
            I build useful
            <span className="relative z-0 block w-fit bg-[var(--accent)] px-2 pb-2 pt-1">
              software for
            </span>
            the web.
          </h1>
          <p className="mt-9 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
            I design and ship practical SaaS platforms and browser extensions with Laravel, React, and thoughtful product engineering — from the first workflow to a reliable production release.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-3 bg-[var(--ink)] px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-black focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)]"
            >
              View selected work
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a
              href="/Muhammad_Usman_Web_Developer_CV.pdf"
              download
              className="inline-flex items-center justify-center gap-3 border border-[var(--ink)] px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ink)] transition-colors duration-200 hover:bg-white focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)]"
            >
              Download CV
              <Download size={15} aria-hidden="true" />
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 border-y border-[var(--rule)] sm:grid-cols-4">
            {proof.map((item) => (
              <div key={item.label} className="min-h-[92px] border-r border-[var(--rule)] px-4 py-5 first:pl-0 last:border-r-0 sm:px-5 sm:first:pl-5">
                <p className="text-xl font-semibold tracking-tight text-[var(--ink)] sm:text-2xl">{item.value}</p>
                <p className="mono-label mt-2 text-[var(--muted)]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-[560px]">
            <div className="relative isolate">
              <div className="pointer-events-none absolute -bottom-4 -right-4 z-0 h-full w-full bg-[var(--accent)]" aria-hidden="true" />
              <div className="relative z-10 aspect-[4/5] overflow-hidden border border-[var(--ink)] bg-white p-2 sm:p-3">
                <Image
                  src="/Profile.webp"
                  alt="Muhammad Usman, full-stack developer based in Lahore"
                  fill
                  preload
                  sizes="(max-width: 1024px) 90vw, 560px"
                  quality={75}
                  className="object-cover object-top"
                />
                <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-center justify-between border-t border-white/40 pt-3 text-[10px] font-medium uppercase tracking-[0.16em] text-white drop-shadow sm:inset-x-6 sm:bottom-6">
                  <span>Muhammad Usman</span>
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                    Open to work
                  </span>
                </div>
              </div>
            </div>
            <p className="mono-label mt-5 flex items-center justify-between text-[var(--muted)]">
              <span className="whitespace-nowrap">Laravel / React / SaaS</span>
              <span className="shrink-0">01 — 09</span>
            </p>
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="mx-auto flex w-fit items-center gap-2 pb-8 text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
        aria-label="Scroll to about section"
      >
        <span className="mono-label">Scroll to explore</span>
        <ArrowDown size={14} aria-hidden="true" />
      </a>
    </section>
  );
}
