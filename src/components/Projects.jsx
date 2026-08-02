import { ArrowUpRight } from "lucide-react";
import { extensionProjects, websiteProjects } from "@/data/portfolio";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="bg-[var(--dark)] text-white">
      <div className="editorial-grid-dark">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 md:py-28 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <p className="mono-label mb-8 flex items-center gap-3 text-white/50">
                <span className="text-[var(--accent)]">03</span>
                <span className="h-px w-8 bg-white/25" aria-hidden="true" />
                Selected work
              </p>
              <h2 className="text-wrap-balance max-w-3xl text-5xl font-semibold leading-[0.94] tracking-[-0.07em] text-white sm:text-7xl">
                Products built to remove friction.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-white/55 lg:justify-self-end">
              A focused record of web platforms and browser extensions designed around real document, career, productivity, and utility workflows.
            </p>
          </div>

          <div className="mt-16 border-t border-white/15 pt-10">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mono-label text-[var(--accent)]">03.1 / Web products</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">Websites</h3>
              </div>
              <p className="mono-label text-white/40">03 live platforms</p>
            </div>
            <div className="space-y-8">
              {websiteProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} featured />
              ))}
            </div>
          </div>

          <div className="mt-24 border-t border-white/15 pt-10">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mono-label text-[var(--accent)]">03.2 / Browser products</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">Chrome Extensions</h3>
              </div>
              <p className="mono-label text-white/40">08 products · 06 live · 02 coming soon</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {extensionProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>
          </div>

          <a
            href="#contact"
            className="mt-14 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/70 transition-colors hover:text-[var(--accent)]"
          >
            Have a workflow worth simplifying?
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
