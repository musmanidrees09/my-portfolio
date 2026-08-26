import { Code2, GraduationCap, Layers, MapPin, Sparkles } from "lucide-react";
import { educationData, personalInfo } from "@/data/portfolio";

const facts = [
  { label: "Based in", value: personalInfo.location, icon: MapPin },
  { label: "Current Role", value: "Full-Stack Web Developer", icon: Code2 },
  { label: "Core Stack", value: "Next.js · React · MERN · Laravel", icon: Layers },
  { label: "Education", value: "BS Computer Science (3.64 CGPA)", icon: GraduationCap },
  { label: "Availability", value: personalInfo.availability, icon: Sparkles },
];

export default function About() {
  return (
    <section id="about" className="border-b border-[var(--rule)] bg-[var(--paper)]">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-12 sm:px-8 md:py-16 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16 lg:px-12">
        <div>
          <p className="mono-label mb-5 flex items-center gap-3 text-[var(--muted)]">
            <span className="text-[var(--ink)]">00</span>
            <span className="h-px w-8 bg-[var(--rule)]" aria-hidden="true" />
            Background & Philosophy
          </p>
          <h2 className="text-wrap-balance max-w-4xl text-3xl font-semibold leading-[0.98] tracking-[-0.06em] text-[var(--ink)] sm:text-5xl lg:text-6xl">
            Engineering that makes complicated workflows feel <span className="text-[var(--muted)]">effortless.</span>
          </h2>
          <div className="mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-7">
            <p>
              I am a Full-Stack Web Developer with 1.5+ years of production experience delivering secure web platforms, modern Next.js and MERN stack applications, high-throughput document processing engines, REST APIs, and browser extensions.
            </p>
            <p>
              At <strong className="text-[var(--ink)] font-semibold">Devonsite</strong>, I architect and deploy production Laravel applications, design optimized MySQL database schemas with strategic indexing (reducing slow query response times by ~40%), implement multi-tenant RBAC permissions, and build high-performance React frontends.
            </p>
            <p>
              Across client and personal platforms like <strong className="text-[var(--ink)] font-semibold">Prospetra</strong>, <strong className="text-[var(--ink)] font-semibold">Halvex Group</strong>, and the <strong className="text-[var(--ink)] font-semibold">Toolscase</strong> ecosystem, I build modern responsive interfaces and 8+ live Chrome extensions trusted by real users daily.
            </p>
          </div>
        </div>

        {/* Quick Facts Sidebar */}
        <div className="lg:mt-10">
          <p className="mono-label text-[var(--ink)] mb-3 font-bold text-xs">Engineering Profile</p>
          <dl className="divide-y divide-[var(--rule)] border-y border-[var(--rule)] bg-[var(--surface)] p-2">
            {facts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div key={fact.label} className="flex items-start gap-3.5 p-3.5">
                  <Icon size={16} className="mt-0.5 text-[var(--muted)] shrink-0" aria-hidden="true" />
                  <div>
                    <dt className="mono-label text-[9px] text-[var(--muted)]">{fact.label}</dt>
                    <dd className="mt-0.5 text-xs font-bold text-[var(--ink)]">{fact.value}</dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
