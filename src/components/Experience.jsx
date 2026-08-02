const experience = [
  {
    period: "Jul 2024 — now",
    role: "Full-stack web developer",
    company: "Devonsite · Lahore",
    summary:
      "Architect production Laravel applications, optimize MySQL queries, and deliver secure role-based SaaS workflows with responsive React interfaces.",
    stack: "Laravel / MySQL / React / RBAC",
  },
  {
    period: "2020 — 2024",
    role: "BS Computer Science",
    company: "NCBA&E · 3.64 CGPA",
    summary:
      "Focused on software engineering, database systems, web security, and the fundamentals behind maintainable product delivery.",
    stack: "Systems / Databases / Security",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="editorial-grid border-b border-[var(--rule)] bg-[var(--paper)]">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="mono-label mb-8 flex items-center gap-3 text-[var(--muted)]">
              <span className="text-[var(--ink)]">02</span>
              <span className="h-px w-8 bg-[var(--rule)]" aria-hidden="true" />
              Experience
            </p>
            <h2 className="text-wrap-balance max-w-2xl text-4xl font-semibold leading-[0.98] tracking-[-0.06em] text-[var(--ink)] sm:text-6xl">
              A practical path from systems to shipped software.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[var(--muted)] lg:justify-self-end">
            Roles, responsibilities, and the technologies behind the shipped work.
          </p>
        </div>

        <div className="mt-14 border-t border-[var(--rule)]">
          {experience.map((item) => (
            <article
              key={item.role}
              className="grid gap-5 border-b border-[var(--rule)] py-7 transition-colors duration-200 hover:bg-white/60 md:grid-cols-[0.8fr_1.25fr_2fr_1fr] md:gap-8 md:px-4"
            >
              <p className="mono-label pt-1 text-[var(--muted)]">{item.period}</p>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-[var(--ink)]">{item.role}</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{item.company}</p>
              </div>
              <p className="max-w-xl text-sm leading-6 text-[var(--muted)]">{item.summary}</p>
              <p className="mono-label pt-1 text-[var(--muted)] md:text-right">{item.stack}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
