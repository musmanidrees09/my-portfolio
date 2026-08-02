import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

function StatusBadge({ status, label }) {
  const isLive = status === "live";

  return (
    <span
      className={`inline-flex items-center gap-2 border px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.14em] ${
        isLive
          ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--ink)]"
          : "border-white/25 bg-white/5 text-white"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${isLive ? "bg-[var(--ink)]" : "bg-white/60"}`}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}

export default function ProjectCard({ project, index, featured = false }) {
  const isWebsite = project.category === "website";

  return (
    <article
      className={`content-visibility-auto group overflow-hidden border border-[var(--dark-rule)] bg-[#171816] ${
        isWebsite
          ? "grid gap-0 lg:grid-cols-[minmax(0,1.75fr)_minmax(250px,0.8fr)]"
          : "flex flex-col"
      }`}
    >
      <div
        className={`relative overflow-hidden bg-[#20211f] ${
          isWebsite ? "aspect-[16/9] min-h-[220px]" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes={
            isWebsite
              ? "(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 900px"
              : "(max-width: 768px) 100vw, 560px"
          }
          loading="lazy"
          fetchPriority="low"
          decoding="async"
          quality={65}
          className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.025]"
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
        <div className="absolute left-4 top-4">
          <StatusBadge status={project.status} label={project.statusLabel} />
        </div>
      </div>

      <div className={`flex flex-col ${isWebsite ? "p-6 sm:p-8" : "p-5 sm:p-6"}`}>
        <div className="flex items-start justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/45">
            {isWebsite ? "Web product" : "Chrome extension"} · {String(index + 1).padStart(2, "0")}
          </p>
          {project.link ? (
            <a
              href={project.link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.link.label}: ${project.title}`}
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--focus)]"
            >
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          ) : (
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/40">In development</span>
          )}
        </div>

        <h3 className={`mt-5 font-semibold tracking-tight text-white ${isWebsite ? "text-2xl sm:text-3xl" : "text-xl"}`}>
          {project.title}
        </h3>
        <p className={`mt-3 text-sm leading-6 text-white/60 ${isWebsite ? "max-w-md" : "min-h-[72px]"}`}>
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-x-3 gap-y-2 pt-6">
          {project.technologies.map((technology) => (
            <span key={technology} className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/45">
              {technology}
            </span>
          ))}
        </div>

        {project.link ? (
          <a
            href={project.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex w-fit items-center gap-2 border-b border-white/35 pb-1 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-4 focus-visible:ring-offset-[#171816]"
          >
            {isWebsite ? "Open product" : "View listing"}
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        ) : (
          <span className="mt-7 inline-flex w-fit border-b border-white/15 pb-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white/40">
            Coming soon
          </span>
        )}
      </div>
    </article>
  );
}
