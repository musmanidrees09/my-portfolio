import { educationData, experienceData } from "@/data/portfolio";
import { CheckCircle2, GraduationCap } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="editorial-grid border-b border-[var(--rule)] bg-[var(--paper)]">
      <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 md:py-16 lg:px-12">
        {/* Header */}
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mono-label mb-5 flex items-center gap-3 text-[var(--muted)]">
              <span className="text-[var(--ink)]">02</span>
              <span className="h-px w-8 bg-[var(--rule)]" aria-hidden="true" />
              Career & Track Record
            </p>
            <h2 className="text-wrap-balance max-w-3xl text-3xl font-semibold leading-[0.98] tracking-[-0.06em] text-[var(--ink)] sm:text-5xl">
              Professional Experience.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[var(--muted)] lg:justify-self-end">
            Real responsibilities, measurable database optimizations, and production deliverables built in agile engineering teams.
          </p>
        </div>

        {/* Experience Timeline Item */}
        <div className="mt-10 space-y-8">
          {experienceData.map((item) => (
            <article
              key={item.company}
              className="border border-[var(--rule)] bg-[var(--surface)] p-6 sm:p-8 md:p-10 transition-all hover:border-[var(--ink)] shadow-xs"
            >
              {/* Header Row */}
              <div className="flex flex-col gap-3 border-b border-[var(--rule)] pb-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-bold tracking-tight text-[var(--ink)]">
                      {item.role}
                    </h3>
                    <span className="mono-label rounded-none border border-[var(--ink)] bg-[var(--accent)] px-2.5 py-0.5 text-[10px] font-bold text-[var(--ink)]">
                      {item.company}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-[var(--muted)]">
                    {item.location} · {item.employmentType}
                  </p>
                </div>
                <div className="text-left md:text-right">
                  <span className="mono-label inline-block border border-[var(--rule)] bg-[var(--paper)] px-3 py-1.5 font-bold text-[var(--ink)]">
                    {item.period}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
                {item.summary}
              </p>

              {/* Responsibilities Grid */}
              <div className="mt-6">
                <p className="mono-label text-xs font-bold text-[var(--ink)] uppercase">Key Responsibilities & Deliverables:</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {item.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-3 border border-[var(--rule)] bg-[var(--paper)] p-4">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--ink)]" aria-hidden="true" />
                      <span className="text-xs leading-relaxed text-[var(--ink)]">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Measurable Impact & Stack */}
              <div className="mt-8 grid gap-6 border-t border-[var(--rule)] pt-6 lg:grid-cols-2">
                <div>
                  <p className="mono-label text-[10px] text-[var(--muted)]">Measurable Impact</p>
                  <ul className="mt-2 space-y-1.5 text-xs font-semibold text-[var(--ink)]">
                    {item.impactMetrics.map((impact, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 bg-[var(--ink)]" />
                        <span>{impact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mono-label text-[10px] text-[var(--muted)]">Technologies Used</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="border border-[var(--rule)] bg-[var(--paper)] px-2.5 py-1 font-mono text-[10px] text-[var(--ink)] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}

          {/* Education Card */}
          <article className="border border-[var(--rule)] bg-[var(--surface)] p-6 sm:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between border-b border-[var(--rule)] pb-5">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[var(--rule)] bg-[var(--paper)] text-[var(--ink)]">
                  <GraduationCap size={20} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-[var(--ink)]">
                    {educationData.degree}
                  </h3>
                  <p className="mt-0.5 text-sm text-[var(--muted)]">
                    {educationData.institution} · {educationData.location}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 md:text-right">
                <span className="mono-label border border-[var(--ink)] bg-[var(--accent)] px-3 py-1 font-bold text-[var(--ink)]">
                  CGPA {educationData.cgpa}
                </span>
                <span className="mono-label border border-[var(--rule)] bg-[var(--paper)] px-3 py-1 text-[var(--muted)]">
                  {educationData.period}
                </span>
              </div>
            </div>

            <div className="mt-5">
              <p className="mono-label text-[10px] text-[var(--muted)]">Academic Specializations</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {educationData.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="border border-[var(--rule)] bg-[var(--paper)] px-3 py-1 font-mono text-xs text-[var(--ink)]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
