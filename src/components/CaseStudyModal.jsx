"use client";

import { ArrowUpRight, CheckCircle2, ShieldCheck, Wrench, X } from "lucide-react";
import { useEffect } from "react";

export default function CaseStudyModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project || !project.caseStudy) return null;

  const { caseStudy } = project;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col border border-[var(--dark-rule)] bg-[#141513] text-white shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-8">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)]">
                Technical Case Study
              </span>
              <span className="font-mono text-[10px] text-white/40">·</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">
                {project.category}
              </span>
            </div>
            <h2 id="case-study-title" className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="flex h-9 w-9 items-center justify-center border border-white/20 text-white/70 transition-colors hover:border-white hover:bg-white hover:text-black focus-visible:ring-2 focus-visible:ring-[var(--focus)]"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="flex-1 overflow-y-auto px-6 py-8 sm:px-8 space-y-10">
          {/* Executive Overview & Problem */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-white/10 bg-white/[0.02] p-5">
              <p className="mono-label text-[var(--accent)]">01 / The Overview</p>
              <p className="mt-3 text-sm leading-relaxed text-white/80">{caseStudy.overview}</p>
            </div>
            <div className="border border-white/10 bg-white/[0.02] p-5">
              <p className="mono-label text-[var(--accent)]">02 / The Problem</p>
              <p className="mt-3 text-sm leading-relaxed text-white/80">{caseStudy.problem}</p>
            </div>
          </div>

          {/* Role & Specific Contributions */}
          <div className="border border-white/10 bg-[#1c1d1a] p-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
              <div>
                <p className="mono-label text-white/50">My Engineering Role</p>
                <p className="mt-1 text-base font-semibold text-[var(--accent)]">{caseStudy.myRole}</p>
              </div>
              <span className="mono-label rounded-none border border-[var(--accent)] bg-[var(--accent)]/10 px-2.5 py-1 text-[10px] text-[var(--accent)]">
                Production Verified
              </span>
            </div>

            <div className="mt-5">
              <p className="mono-label text-xs text-white/60">What I Specifically Built & Delivered:</p>
              <ul className="mt-3 space-y-2.5 text-sm text-white/80">
                {caseStudy.contributions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* System Architecture Flow */}
          {caseStudy.architectureDiagram && (
            <div className="border border-white/10 bg-white/[0.02] p-6">
              <p className="mono-label text-[var(--accent)]">03 / System Architecture & Data Flow</p>
              <p className="mt-1 text-xs text-white/50">End-to-end execution pipeline from client request to automated cleanup</p>
              
              <div className="mt-6 space-y-3">
                {caseStudy.architectureDiagram.map((node, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-[var(--accent)] bg-[var(--accent)]/10 font-mono text-xs font-bold text-[var(--accent)]">
                        {i + 1}
                      </span>
                      {i < caseStudy.architectureDiagram.length - 1 && (
                        <div className="h-6 w-px bg-white/20 my-1" />
                      )}
                    </div>
                    <div className="pt-0.5">
                      <p className="text-sm font-semibold text-white">{node.step}</p>
                      <p className="text-xs text-white/60">{node.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Engineering Challenges & Solutions */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wrench size={16} className="text-[var(--accent)]" aria-hidden="true" />
              <h3 className="text-lg font-semibold tracking-tight text-white">
                Key Engineering Challenges & Solutions
              </h3>
            </div>
            <div className="space-y-4">
              {caseStudy.challenges.map((item, idx) => (
                <div key={idx} className="border border-white/10 bg-[#191a18] p-5">
                  <p className="font-mono text-xs font-semibold text-[var(--accent)]">
                    Challenge: {item.challenge}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    <span className="font-semibold text-white">Solution: </span>
                    {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Measurable Results */}
          <div className="border border-[var(--accent)]/40 bg-[var(--accent)]/[0.04] p-6">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-[var(--accent)]" aria-hidden="true" />
              <h3 className="text-base font-semibold text-white">Measurable Outcomes</h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {caseStudy.results.map((res, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[var(--accent)] font-bold">✓</span>
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <p className="mono-label text-white/50">Technical Stack Used</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="border border-white/15 bg-white/5 px-3 py-1 font-mono text-xs text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 bg-[#111210] px-6 py-4 sm:px-8">
          <button
            type="button"
            onClick={onClose}
            className="border border-white/20 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
          >
            Close Case Study
          </button>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--accent)] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[var(--ink)] transition-transform hover:-translate-y-0.5"
            >
              Visit Live Platform
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
