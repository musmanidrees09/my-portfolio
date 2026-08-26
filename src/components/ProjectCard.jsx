"use client";

import { ArrowUpRight, BookOpen } from "lucide-react";
import Image from "next/image";

export default function ProjectCard({ project, index, onOpenCaseStudy }) {
  return (
    <article className="group overflow-hidden border border-[var(--dark-rule)] bg-[#151614] text-white transition-all duration-300 hover:border-white/30">
      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left Side: Screenshot & Badges */}
        <div className="relative aspect-[16/10] min-h-[190px] overflow-hidden bg-[#1c1d1a] sm:min-h-[240px] lg:min-h-[280px]">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 650px"
            priority={index < 2}
            quality={75}
            className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />

          {/* Top Left: Category */}
          <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
            <span className="inline-flex items-center gap-1.5 border border-white/20 bg-black/60 px-2.5 py-0.5 font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
              {project.category}
            </span>
          </div>

          {/* Top Right: Status Badge */}
          <div className="absolute right-3 top-3 sm:right-4 sm:top-4">
            <span className="inline-flex items-center gap-1.5 border border-[#86efac]/40 bg-[#86efac]/10 px-2 py-0.5 font-mono text-[9px] sm:text-[10px] font-medium uppercase tracking-widest text-[#86efac] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#86efac] animate-pulse" aria-hidden="true" />
              {project.statusLabel}
            </span>
          </div>
        </div>

        {/* Right Side: Deep Engineering Content */}
        <div className="flex flex-col justify-between p-5 sm:p-6 lg:p-7">
          <div>
            <div className="flex items-center justify-between">
              <p className="mono-label text-xs text-[var(--accent)]">Project 0{index + 1}</p>
              <span className="mono-label text-[10px] text-white/40">{project.badge || "Live Product"}</span>
            </div>

            <h3 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
              {project.title}
            </h3>
            <p className="mono-label mt-0.5 text-[10px] sm:text-[11px] text-white/60">
              {project.subtitle}
            </p>

            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-white/70">
              {project.description}
            </p>

            {/* Role & Specific Contribution Metadata Box */}
            <div className="mt-4 border border-white/10 bg-white/[0.03] p-3 space-y-1.5">
              <div>
                <span className="mono-label text-[9px] text-[var(--accent)]">My Role: </span>
                <span className="text-xs font-bold text-white">{project.role}</span>
              </div>
              <div>
                <span className="mono-label text-[9px] text-white/50">Contribution: </span>
                <span className="text-xs text-white/80 leading-relaxed block mt-0.5">{project.contribution}</span>
              </div>
              {project.impact && (
                <div className="border-t border-white/10 pt-1.5">
                  <span className="mono-label text-[9px] text-[#86efac]">Result: </span>
                  <span className="text-xs font-semibold text-white">{project.impact}</span>
                </div>
              )}
            </div>

            {/* Tech Stack Pills */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[9px] text-white/75"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-white/10 pt-4">
            <button
              type="button"
              onClick={() => onOpenCaseStudy(project)}
              className="inline-flex items-center gap-2 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--focus)]"
            >
              <BookOpen size={13} aria-hidden="true" />
              Case Study
            </button>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-white/20 bg-transparent px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Visit Site
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
