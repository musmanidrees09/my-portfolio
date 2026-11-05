import { Clock, Code2, Globe, GraduationCap, Layers, MapPin, Sparkles } from "lucide-react";
import { educationData, personalInfo } from "@/data/portfolio";

const facts = [
  { label: "Based in", value: personalInfo.location, icon: MapPin },
  { label: "Role", value: "Full-Stack Web Developer", icon: Code2 },
  { label: "Core Stack", value: "Next.js 16 · React 19 · Laravel 13 · MySQL", icon: Layers },
  { label: "Work Mode", value: "Remote worldwide (Flexible hours)", icon: Globe },
  { label: "Education", value: `${educationData.degree} (${educationData.cgpa} CGPA)`, icon: GraduationCap },
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
            Background &amp; Experience
          </p>
          <h2 className="text-wrap-balance max-w-4xl text-3xl font-semibold leading-[0.98] tracking-[-0.06em] text-[var(--ink)] sm:text-5xl lg:text-6xl">
            Building software that is <span className="text-[var(--muted)]">fast, clean, and reliable.</span>
          </h2>
          <div className="mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base sm:leading-7">
            <p>
              I am a Full-Stack Web Developer with 1.5+ years of hands-on production experience building modern web applications, REST APIs, and browser extensions using Next.js, React, Laravel, and MySQL.
            </p>
            <p>
              At <strong className="text-[var(--ink)] font-semibold">Devonsite</strong>, I build and maintain production Laravel backends and React frontends. My day-to-day work includes designing database schemas, writing composite indexes to optimize slow queries (reducing query latency by ~40%), creating role-based access control (RBAC), and delivering responsive client portals.
            </p>
            <p>
              I use modern tools like Cursor and AI coding assistants to handle repetitive boilerplate and write tests faster, while keeping full personal responsibility for database architecture, security boundaries, and code maintainability.
            </p>
            <p>
              Alongside client and agency work, I&apos;ve built and launched products including <strong className="text-[var(--ink)] font-semibold">Prospetra</strong> (an automated website audit tool), <strong className="text-[var(--ink)] font-semibold">Halvex Group</strong> (a B2B export website for an international manufacturer), and <strong className="text-[var(--ink)] font-semibold">10 live Chrome extensions</strong> currently used by real users on the Chrome Web Store.
            </p>
          </div>
        </div>

        {/* Quick Facts Sidebar */}
        <div className="lg:mt-10">
          <p className="mono-label text-[var(--ink)] mb-3 font-bold text-xs">Developer Overview</p>
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
