import { Cpu, FileText, Layers, Sparkles } from "lucide-react";
import { whatIBuild } from "@/data/portfolio";

const iconMap = {
  saas: Layers,
  "ai-products": Sparkles,
  "chrome-extensions": Cpu,
  "document-systems": FileText,
};

export default function WhatIBuild() {
  return (
    <section id="what-i-build" className="border-b border-[var(--rule)] bg-[var(--paper)]">
      <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 md:py-16 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mono-label mb-5 flex items-center gap-3 text-[var(--muted)]">
              <span className="text-[var(--ink)]">01</span>
              <span className="h-px w-8 bg-[var(--rule)]" aria-hidden="true" />
              Specialization
            </p>
            <h2 className="text-wrap-balance max-w-3xl text-3xl font-semibold leading-[0.98] tracking-[-0.06em] text-[var(--ink)] sm:text-5xl">
              What I Build & Ship.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[var(--muted)] lg:justify-self-end">
            Core product disciplines spanning modern Next.js/React apps, MERN full-stack, Laravel platforms, AI workflows, and browser-level utilities.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whatIBuild.map((item, index) => {
            const Icon = iconMap[item.id] || Layers;
            return (
              <article
                key={item.id}
                className="group relative flex flex-col justify-between border border-[var(--rule)] bg-[var(--surface)] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--ink)] hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[var(--paper)] border border-[var(--rule)] text-[var(--ink)] group-hover:bg-[var(--accent)] group-hover:border-[var(--ink)] transition-colors">
                      <Icon size={18} aria-hidden="true" />
                    </div>
                    <span className="mono-label text-[var(--muted)]">0{index + 1}</span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="mono-label mt-1 text-[11px] text-[var(--muted)]">
                    {item.tagline}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-[var(--rule)] pt-4">
                  <p className="mono-label text-[10px] text-[var(--muted)]">Technologies</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-none border border-[var(--rule)] bg-[var(--paper)] px-2 py-0.5 font-mono text-[10px] text-[var(--ink)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="mono-label mt-4 text-[10px] text-[var(--muted)]">
                    Example: <span className="font-semibold text-[var(--ink)]">{item.example}</span>
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
