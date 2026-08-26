"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { featuredProjects } from "@/data/portfolio";
import ProjectCard from "@/components/ProjectCard";
import CaseStudyModal from "@/components/CaseStudyModal";

export default function Projects() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  return (
    <section id="projects" className="border-b border-[var(--dark-rule)] bg-[#0d0e0c] text-white">
      <div className="editorial-grid-dark">
        <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 md:py-16 lg:px-12">
          {/* Header */}
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="mono-label mb-5 flex items-center gap-3 text-white/50">
                <span className="text-[var(--accent)]">02.1</span>
                <span className="h-px w-8 bg-white/20" aria-hidden="true" />
                Featured Work
              </p>
              <h2 className="text-wrap-balance max-w-3xl text-3xl font-semibold leading-[0.98] tracking-[-0.06em] text-white sm:text-5xl">
                Web Applications & SaaS Platforms.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/60 lg:justify-self-end">
              Live client and personal production systems built with Next.js, React, and Laravel with explicit engineering contributions and architecture breakdowns.
            </p>
          </div>

          {/* Featured Projects Stack */}
          <div className="mt-10 space-y-7">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
                onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)}
              />
            ))}
          </div>

          {/* Subtle "More coming" note */}
          <p className="mt-8 flex items-center gap-2 text-[11px] text-white/40 font-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse shrink-0" aria-hidden="true" />
            Also actively building new projects in Next.js, MERN Stack &amp; Laravel — open to new opportunities.
          </p>

          {/* Prompt to Browser Extensions */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border border-white/10 bg-[#161715] p-5 sm:flex-row sm:p-6">
            <div>
              <h3 className="text-base font-bold text-white">
                Looking for browser-level automation & AI tools?
              </h3>
              <p className="mt-1 text-xs text-white/60">
                Explore 8+ live Manifest V3 Chrome extensions built with content scripts, background workers, and AI pipelines.
              </p>
            </div>
            <a
              href="#extensions"
              className="inline-flex items-center gap-2 bg-[var(--accent)] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[var(--ink)] transition-transform hover:-translate-y-0.5 shrink-0"
            >
              Explore Extensions
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        isOpen={Boolean(selectedCaseStudy)}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
}
