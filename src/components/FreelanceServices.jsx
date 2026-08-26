import { ArrowUpRight, Cpu, Database, Download, FileText, Layers, Layout, Server } from "lucide-react";
import { clientServices, personalInfo } from "@/data/portfolio";

const iconMap = {
  Layers: Layers,
  Layout: Layout,
  Cpu: Cpu,
  Server: Server,
  FileText: FileText,
  Database: Database,
};

export default function FreelanceServices() {
  return (
    <section id="services" className="border-b border-[var(--rule)] bg-[var(--surface)]">
      <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 md:py-16 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mono-label mb-5 flex items-center gap-3 text-[var(--muted)]">
              <span className="text-[var(--ink)]">08</span>
              <span className="h-px w-8 bg-[var(--rule)]" aria-hidden="true" />
              Client & Freelance Services
            </p>
            <h2 className="text-wrap-balance max-w-3xl text-3xl font-semibold leading-[0.98] tracking-[-0.06em] text-[var(--ink)] sm:text-5xl">
              Need a SaaS, web app, or browser extension built?
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[var(--muted)] lg:justify-self-end">
            Available for full-time engineering positions, technical contract engagements, and end-to-end product architecture.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {clientServices.map((service, index) => {
            const Icon = iconMap[service.icon] || Layers;
            return (
              <div
                key={service.title}
                className="group flex flex-col justify-between border border-[var(--rule)] bg-[var(--paper)] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--ink)] hover:bg-[var(--surface)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center border border-[var(--rule)] bg-[var(--surface)] text-[var(--ink)] group-hover:bg-[var(--accent)] group-hover:border-[var(--ink)] transition-colors">
                      <Icon size={18} aria-hidden="true" />
                    </div>
                    <span className="mono-label text-[10px] text-[var(--muted)]">0{index + 1}</span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold tracking-tight text-[var(--ink)]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[var(--muted)]">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-[var(--rule)] pt-3">
                  <span className="mono-label text-[9px] font-semibold text-[var(--ink)]">
                    Production Grade
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Box */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border border-[var(--ink)] bg-[var(--paper)] p-8 sm:flex-row sm:p-10">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-[var(--ink)] sm:text-2xl">
              Have a project or opportunity in mind?
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
              Let&apos;s discuss scope, technical feasibility, timeline, and how I can help bring your software product to life.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[var(--ink)] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-transform hover:-translate-y-0.5 hover:bg-black"
            >
              Discuss a Project
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a
              href={personalInfo.resumePdf}
              download
              className="inline-flex items-center justify-center gap-2 border border-[var(--ink)] bg-transparent px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-[var(--ink)] transition-colors hover:bg-white"
            >
              Download Resume
              <Download size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
