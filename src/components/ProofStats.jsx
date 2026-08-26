import { proofMetrics } from "@/data/portfolio";

export default function ProofStats() {
  return (
    <section aria-label="Key Proof & Engineering Metrics" className="border-b border-[var(--rule)] bg-[var(--surface)]">
      <div className="mx-auto max-w-[1400px] px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
        <div className="grid grid-cols-2 gap-y-8 divide-y divide-[var(--rule)] sm:grid-cols-3 sm:divide-y-0 sm:divide-x sm:divide-[var(--rule)] lg:grid-cols-5">
          {proofMetrics.map((metric, idx) => (
            <div
              key={metric.label}
              className={`flex flex-col justify-center px-4 py-2 ${
                idx === 0 ? "sm:pl-0" : ""
              } ${idx === proofMetrics.length - 1 ? "sm:pr-0" : ""}`}
            >
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
                  {metric.value}
                </span>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                  {metric.suffix}
                </span>
              </div>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[var(--ink)]">
                {metric.label}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[var(--muted)] line-clamp-2">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
