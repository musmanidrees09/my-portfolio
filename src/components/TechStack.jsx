import { technicalStack } from "@/data/portfolio";
import { CheckCircle2, Code2, Database, Layers, ShieldCheck, Terminal } from "lucide-react";

export default function TechStack() {
  return (
    <section id="tech-stack" className="border-b border-[var(--rule)] bg-[var(--paper)]">
      <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 md:py-16 lg:px-12">
        {/* Header */}
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mono-label mb-5 flex items-center gap-3 text-[var(--muted)]">
              <span className="text-[var(--ink)]">04</span>
              <span className="h-px w-8 bg-[var(--rule)]" aria-hidden="true" />
              Technical Competence
            </p>
            <h2 className="text-wrap-balance max-w-3xl text-3xl font-semibold leading-[0.98] tracking-[-0.06em] text-[var(--ink)] sm:text-5xl">
              Technical Stack & Engineering Depth.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[var(--muted)] lg:justify-self-end">
            Core technologies spanning modern Next.js/React frontends, MERN stack, Laravel backends, and browser extension ecosystems.
          </p>
        </div>

        {/* Primary Production Stack Grid */}
        <div className="mt-10">
          <div className="flex items-center justify-between border-b border-[var(--rule)] pb-4">
            <h3 className="mono-label text-xs font-bold text-[var(--ink)]">
              Primary Core Stack (Daily Production Use)
            </h3>
            <span className="mono-label text-[10px] text-[var(--muted)]">Core Competencies</span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {technicalStack.primary.map((tech) => (
              <div
                key={tech.name}
                className="group border border-[var(--rule)] bg-[var(--surface)] p-4 sm:p-5 transition-all hover:border-[var(--ink)] hover:shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm sm:text-base font-bold text-[var(--ink)] group-hover:text-black">
                    {tech.name}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[var(--accent)] border border-[var(--ink)]/30 shrink-0" />
                </div>
                <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 border-t border-[var(--rule)]/60 pt-2">
                  <span className="font-mono text-[10px] uppercase text-[var(--muted)] font-medium">
                    {tech.category}
                  </span>
                  <span className="border border-[var(--rule)] bg-[var(--paper)] px-1.5 py-0.5 font-mono text-[9px] font-semibold text-[var(--ink)] uppercase">
                    {tech.proficiency}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Architecture Highlights */}
        <div className="mt-14 border-t border-[var(--rule)] pt-10">
          <div className="flex items-center justify-between border-b border-[var(--rule)] pb-4">
            <h3 className="mono-label text-xs font-bold text-[var(--ink)]">
              Engineering Patterns & Architecture
            </h3>
            <span className="mono-label text-[10px] text-[var(--muted)]">Deep Systems</span>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {technicalStack.engineeringHighlights.map((item, idx) => (
              <div
                key={item.title}
                className="border border-[var(--rule)] bg-[var(--surface)] p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="mono-label text-[var(--muted)]">Pattern 0{idx + 1}</span>
                  <h4 className="mt-2 text-base font-bold text-[var(--ink)]">{item.title}</h4>
                  <p className="mt-3 text-xs leading-relaxed text-[var(--muted)]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Stack & Developer Tooling */}
        <div className="mt-14 grid gap-8 border-t border-[var(--rule)] pt-10 lg:grid-cols-2">
          {/* Secondary Stack */}
          <div>
            <h3 className="mono-label border-b border-[var(--rule)] pb-3 text-xs font-bold text-[var(--ink)]">
              Secondary & Supporting Technologies
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {technicalStack.secondary.map((tech) => (
                <span
                  key={tech.name}
                  className="border border-[var(--rule)] bg-[var(--surface)] px-3 py-1.5 font-mono text-xs text-[var(--ink)]"
                >
                  <span className="font-semibold">{tech.name}</span>
                  <span className="ml-1.5 text-[10px] text-[var(--muted)]">({tech.category})</span>
                </span>
              ))}
            </div>
          </div>

          {/* Developer Tooling */}
          <div>
            <h3 className="mono-label border-b border-[var(--rule)] pb-3 text-xs font-bold text-[var(--ink)]">
              Developer & AI Tooling
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
              {technicalStack.developerTools.map((tool) => (
                <div key={tool.name} className="border border-[var(--rule)] bg-[var(--surface)] p-3">
                  <p className="font-mono text-xs font-bold text-[var(--ink)]">{tool.name}</p>
                  <p className="mono-label mt-1 text-[9px] text-[var(--muted)]">{tool.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
