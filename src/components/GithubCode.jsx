import { ArrowUpRight, Code, GitFork, Lock } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

function GithubIcon({ size = 16, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function GithubCode() {
  return (
    <section id="code" className="border-b border-[var(--dark-rule)] bg-[#0d0e0c] text-white">
      <div className="editorial-grid-dark">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 md:py-28 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="mono-label mb-8 flex items-center gap-3 text-white/50">
                <span className="text-[var(--accent)]">07</span>
                <span className="h-px w-8 bg-white/20" aria-hidden="true" />
                Code & Open Source
              </p>
              <h2 className="text-wrap-balance max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-6xl">
                Code & Engineering Practice.
              </h2>
            </div>
            <div className="lg:justify-self-end">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-white px-5 py-3 text-xs font-semibold uppercase tracking-wider text-black transition-transform hover:-translate-y-0.5"
              >
                <GithubIcon size={16} />
                View GitHub Profile
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="border border-white/10 bg-[#141513] p-6">
              <div className="flex items-center gap-2">
                <Lock size={16} className="text-[var(--accent)]" aria-hidden="true" />
                <h3 className="text-base font-bold text-white">Production Systems (Proprietary)</h3>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-white/70">
                Client SaaS applications and enterprise platforms (including PDFToolBox & CV Builder backend) are maintained in private Bitbucket and GitHub enterprise repositories under NDA.
              </p>
            </div>

            <div className="border border-white/10 bg-[#141513] p-6">
              <div className="flex items-center gap-2">
                <Code size={16} className="text-[var(--accent)]" aria-hidden="true" />
                <h3 className="text-base font-bold text-white">Browser Extensions & Tooling</h3>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-white/70">
                Explore Manifest V3 extension architectures, client-side document parsers, scraping scripts, and UI components across my public repositories.
              </p>
            </div>

            <div className="border border-white/10 bg-[#141513] p-6">
              <div className="flex items-center gap-2">
                <GitFork size={16} className="text-[var(--accent)]" aria-hidden="true" />
                <h3 className="text-base font-bold text-white">Clean Git & CI/CD Discipline</h3>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-white/70">
                Practicing atomic semantic commits, feature branching, rigorous PR reviews, and automated linting across both personal and team environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
