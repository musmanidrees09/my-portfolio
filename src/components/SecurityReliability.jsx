import { Clock, Database, Lock, Shield, Zap } from "lucide-react";
import { securityAndReliability } from "@/data/portfolio";

const icons = [Lock, Clock, Shield, Zap, Database];

export default function SecurityReliability() {
  return (
    <section id="security" className="border-b border-[var(--rule)] bg-[var(--surface)]">
      <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 md:py-16 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mono-label mb-5 flex items-center gap-3 text-[var(--muted)]">
              <span className="text-[var(--ink)]">05</span>
              <span className="h-px w-8 bg-[var(--rule)]" aria-hidden="true" />
              Production Resilience
            </p>
            <h2 className="text-wrap-balance max-w-3xl text-3xl font-semibold leading-[0.98] tracking-[-0.06em] text-[var(--ink)] sm:text-5xl">
              Security & Reliability Standards.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[var(--muted)] lg:justify-self-end">
            Concrete architectural decisions implemented across production systems to safeguard data privacy, isolate tenant boundaries, and guarantee high availability.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {securityAndReliability.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={item.title}
                className="flex flex-col justify-between border border-[var(--rule)] bg-[var(--paper)] p-6 transition-all hover:border-[var(--ink)]"
              >
                <div>
                  <div className="flex h-9 w-9 items-center justify-center border border-[var(--rule)] bg-[var(--surface)] text-[var(--ink)]">
                    <Icon size={16} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-sm font-bold tracking-tight text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-[var(--muted)]">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 border-t border-[var(--rule)] pt-3">
                  <span className="mono-label text-[9px] text-[var(--muted)]">
                    Standard 0{idx + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
