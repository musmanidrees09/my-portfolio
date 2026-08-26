import { howIWork } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";

export default function HowIWork() {
  return (
    <section id="how-i-work" className="border-b border-[var(--rule)] bg-[var(--paper)]">
      <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 md:py-16 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mono-label mb-5 flex items-center gap-3 text-[var(--muted)]">
              <span className="text-[var(--ink)]">06</span>
              <span className="h-px w-8 bg-[var(--rule)]" aria-hidden="true" />
              Engineering Lifecycle
            </p>
            <h2 className="text-wrap-balance max-w-3xl text-3xl font-semibold leading-[0.98] tracking-[-0.06em] text-[var(--ink)] sm:text-5xl">
              How I Work & Deliver.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[var(--muted)] lg:justify-self-end">
            A structured, repeatable engineering process that bridges product ambiguity with disciplined delivery.
          </p>
        </div>

        {/* Process Flow Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {howIWork.map((step, idx) => (
            <div
              key={step.step}
              className="relative flex flex-col justify-between border border-[var(--rule)] bg-[var(--surface)] p-6 transition-all hover:border-[var(--ink)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xl font-bold text-[var(--ink)]">{step.step}</span>
                  <span className="mono-label rounded-none border border-[var(--ink)] bg-[var(--accent)] px-2 py-0.5 text-[9px] font-bold text-[var(--ink)]">
                    {step.phase}
                  </span>
                </div>

                <h3 className="mt-6 text-base font-bold text-[var(--ink)]">
                  {step.headline}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-[var(--muted)]">
                  {step.description}
                </p>
              </div>

              {idx < howIWork.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--ink)] text-white text-[10px]">
                    →
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
