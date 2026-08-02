import { Code2, Layers3, MapPin, Sparkles } from "lucide-react";

const facts = [
  { label: "Based in", value: "Lahore, Pakistan", icon: MapPin },
  { label: "Role", value: "Full-stack developer", icon: Code2 },
  { label: "Core stack", value: "Laravel + React", icon: Layers3 },
  { label: "Availability", value: "Product work", icon: Sparkles },
];

export default function About() {
  return (
    <section id="about" className="border-b border-[var(--rule)] bg-[var(--paper)]">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[1.5fr_0.5fr] lg:gap-20 lg:px-12">
        <div>
          <p className="mono-label mb-8 flex items-center gap-3 text-[var(--muted)]">
            <span className="text-[var(--ink)]">01</span>
            <span className="h-px w-8 bg-[var(--rule)]" aria-hidden="true" />
            About the work
          </p>
          <h2 className="text-wrap-balance max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.06em] text-[var(--ink)] sm:text-6xl lg:text-7xl">
            Engineering that makes complicated workflows feel <span className="text-[var(--muted)]">simple.</span>
          </h2>
          <div className="mt-10 max-w-3xl space-y-5 text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">
            <p>
              My work sits between product thinking and implementation. I turn repetitive document, career, and browser workflows into focused tools people can understand quickly and trust daily.
            </p>
            <p>
              At Devonsite, I build production Laravel applications, optimize MySQL-backed systems, and connect responsive React interfaces to secure workflows. Outside client work, I shape useful Chrome extensions for the Toolscase ecosystem.
            </p>
          </div>
        </div>

        <dl className="divide-y divide-[var(--rule)] border-y border-[var(--rule)] lg:mt-14">
          {facts.map((fact) => {
            const Icon = fact.icon;
            return (
              <div key={fact.label} className="flex items-start gap-4 py-5">
                <Icon size={16} className="mt-1 text-[var(--muted)]" aria-hidden="true" />
                <div>
                  <dt className="mono-label text-[var(--muted)]">{fact.label}</dt>
                  <dd className="mt-2 text-sm font-semibold text-[var(--ink)] sm:text-base">{fact.value}</dd>
                </div>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
