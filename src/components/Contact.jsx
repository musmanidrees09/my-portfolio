import { ArrowUpRight, Download, Mail, MapPin, Phone } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="editorial-grid bg-[var(--accent)] text-[var(--ink)]">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-12 sm:px-8 md:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-12">
        {/* Left Column */}
        <div>
          <p className="mono-label mb-5 flex items-center gap-3">
            <span>09</span>
            <span className="h-px w-8 bg-[var(--ink)]/40" aria-hidden="true" />
            Direct Communication
          </p>
          <h2 className="text-wrap-balance max-w-3xl text-4xl font-bold leading-[0.92] tracking-[-0.07em] sm:text-6xl lg:text-7xl">
            Let&apos;s Build Something Reliable.
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-[var(--ink)]/80 sm:text-base">
            Whether you are hiring for a full-stack engineer role, need technical architecture for a new SaaS, or want a custom Chrome extension engineered, I am available to talk.
          </p>
        </div>

        {/* Right Column: Contact Details */}
        <div className="flex flex-col justify-between border-t border-[var(--ink)]/20 pt-8 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
          <div>
            <p className="mono-label text-xs font-bold uppercase text-[var(--ink)]/60">Primary Email</p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="mt-2 inline-flex flex-wrap items-center gap-1.5 text-lg font-bold tracking-tight break-all transition-opacity hover:opacity-75 sm:text-2xl md:text-3xl"
            >
              <span>{personalInfo.email}</span>
              <ArrowUpRight size={18} className="shrink-0" aria-hidden="true" />
            </a>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="mono-label text-[10px] text-[var(--ink)]/60">Location</p>
                <p className="mt-1 text-sm font-semibold flex items-center gap-1.5">
                  <MapPin size={14} className="shrink-0" /> {personalInfo.location}
                </p>
              </div>
              <div>
                <p className="mono-label text-[10px] text-[var(--ink)]/60">Phone</p>
                <p className="mt-1 text-sm font-semibold flex items-center gap-1.5">
                  <Phone size={14} className="shrink-0" /> {personalInfo.phone}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-[var(--ink)]/20 pt-8">
            <p className="mono-label text-[10px] text-[var(--ink)]/60 mb-3">Profiles &amp; Credentials</p>
            <div className="flex flex-wrap gap-2.5">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[var(--ink)] bg-transparent px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--ink)] transition-colors hover:bg-[var(--ink)] hover:text-white"
              >
                LinkedIn
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[var(--ink)] bg-transparent px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--ink)] transition-colors hover:bg-[var(--ink)] hover:text-white"
              >
                GitHub
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>

              <a
                href={personalInfo.resumePdf}
                download
                className="inline-flex items-center gap-2 bg-[var(--ink)] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white transition-transform hover:-translate-y-0.5"
              >
                Download Resume
                <Download size={13} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
