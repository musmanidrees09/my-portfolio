import { ArrowUpRight, Download, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="editorial-grid bg-[var(--accent)] text-[var(--ink)]">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24 lg:px-12">
        <div>
          <p className="mono-label mb-8 flex items-center gap-3">
            <span>06</span>
            <span className="h-px w-8 bg-[var(--ink)]/40" aria-hidden="true" />
            Start a conversation
          </p>
          <h2 className="text-wrap-balance max-w-3xl text-5xl font-semibold leading-[0.92] tracking-[-0.07em] sm:text-7xl lg:text-8xl">
            Have a workflow worth making simpler?
          </h2>
        </div>

        <div className="flex flex-col justify-end">
          <p className="max-w-lg text-base leading-7 text-[var(--ink)]/70 sm:text-lg sm:leading-8">
            Tell me what you are building, where the friction is, and what a useful first release looks like. I&apos;m open to thoughtful product work, frontend engineering, and full-stack opportunities.
          </p>
          <a
            href="mailto:musmanidrees08@gmail.com"
            className="mt-8 inline-flex w-fit items-center gap-3 border-b-2 border-[var(--ink)] pb-3 text-lg font-semibold tracking-tight transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--accent)] sm:text-xl"
          >
            musmanidrees08@gmail.com
            <Mail size={18} aria-hidden="true" />
          </a>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/muhammad-usman09-idrees/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] transition-opacity hover:opacity-60"
            >
              LinkedIn
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a
              href="https://github.com/musmanidrees09"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] transition-opacity hover:opacity-60"
            >
              GitHub
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a
              href="/Muhammad_Usman_Web_Developer_CV.pdf"
              download
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] transition-opacity hover:opacity-60"
            >
              Download CV
              <Download size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
