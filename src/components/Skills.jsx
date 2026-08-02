const skillGroups = [
  {
    label: "Web & frameworks",
    items: ["PHP", "Laravel", "Node.js", "Express.js", "React", "Next.js", "Vite"],
  },
  {
    label: "Frontend & styling",
    items: ["JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Framer Motion"],
  },
  {
    label: "Data & APIs",
    items: ["MySQL", "MongoDB", "REST APIs", "MVC architecture"],
  },
  {
    label: "Workflow",
    items: ["Git", "GitHub", "Postman", "Chrome MV3", "jsPDF"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="editorial-grid border-b border-[var(--rule)] bg-[var(--paper)]">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 md:py-28 lg:px-12">
        <div className="grid min-w-0 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="min-w-0">
            <p className="mono-label mb-8 flex items-center gap-3 text-[var(--muted)]">
              <span className="text-[var(--ink)]">04</span>
              <span className="h-px w-8 bg-[var(--rule)]" aria-hidden="true" />
              Technical inventory
            </p>
            <h2 className="text-wrap-balance w-full max-w-md text-4xl font-semibold leading-[0.98] tracking-[-0.06em] text-[var(--ink)] sm:text-6xl">
              The tools behind the interface.
            </h2>
            <p className="mt-7 max-w-sm text-base leading-7 text-[var(--muted)]">
              A focused stack for building reliable products from database to browser surface.
            </p>
          </div>

          <div className="min-w-0 border-y border-[var(--rule)]">
            {skillGroups.map((group) => (
              <div
                key={group.label}
                className="grid min-w-0 gap-4 border-b border-[var(--rule)] py-6 last:border-b-0 sm:grid-cols-[0.75fr_1.25fr] sm:gap-8"
              >
                <p className="mono-label min-w-0 pt-1 text-[var(--muted)]">{group.label}</p>
                <p className="min-w-0 break-words text-base leading-7 text-[var(--ink)] sm:text-lg sm:leading-8">
                  {group.items.map((item, itemIndex) => (
                    <span key={item}>
                      <span className="transition-colors duration-200 hover:text-[var(--muted)]">{item}</span>
                      {itemIndex < group.items.length - 1 ? <span className="mx-2 inline-block text-[var(--muted)]">·</span> : null}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
