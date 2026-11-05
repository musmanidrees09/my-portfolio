import { ArrowUpRight, Clock, CreditCard, Download, Globe, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
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
            Direct Communication &amp; Global Availability
          </p>
          <h2 className="text-wrap-balance max-w-3xl text-4xl font-bold leading-[0.92] tracking-[-0.07em] sm:text-6xl lg:text-7xl">
            Let&apos;s Build Something Reliable.
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-[var(--ink)]/80 sm:text-base">
            Whether you have a full-time role open, need a developer for a freelance project, or want to discuss a new idea, feel free to reach out. I&apos;m easy to reach by email or WhatsApp.
          </p>

          {/* Timezone & Global Remote Badges */}
          <div className="mt-8 space-y-3 max-w-xl border-t border-[var(--ink)]/20 pt-6">
            <div className="flex items-start gap-2.5 text-xs text-[var(--ink)]/85">
              <Clock size={16} className="mt-0.5 shrink-0 text-[var(--ink)]" aria-hidden="true" />
              <div>
                <span className="font-bold">Working Hours: </span>
                <span>{personalInfo.timezones}</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-[var(--ink)]/85">
              <Globe size={16} className="mt-0.5 shrink-0 text-[var(--ink)]" aria-hidden="true" />
              <div>
                <span className="font-bold">Availability: </span>
                <span>{personalInfo.targetMarkets}</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-[var(--ink)]/85">
              <CreditCard size={16} className="mt-0.5 shrink-0 text-[var(--ink)]" aria-hidden="true" />
              <div>
                <span className="font-bold">Payments: </span>
                <span>{personalInfo.paymentMethods}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Details & CTAs */}
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

            {/* Quick Action Buttons: WhatsApp & Direct Phone */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--ink)] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-transform hover:-translate-y-0.5 shadow-sm"
              >
                <MessageSquare size={15} aria-hidden="true" />
                Chat on WhatsApp
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="inline-flex items-center gap-2 border border-[var(--ink)] bg-transparent px-4 py-3 text-xs font-bold uppercase tracking-wider text-[var(--ink)] transition-colors hover:bg-[var(--ink)] hover:text-white"
              >
                <Phone size={14} aria-hidden="true" />
                {personalInfo.phone}
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="mono-label text-[10px] text-[var(--ink)]/60">Base Location</p>
                <p className="mt-1 text-sm font-semibold flex items-center gap-1.5">
                  <MapPin size={14} className="shrink-0" /> {personalInfo.location}
                </p>
              </div>
              <div>
                <p className="mono-label text-[10px] text-[var(--ink)]/60">Current Status</p>
                <p className="mt-1 text-sm font-semibold flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#16a34a] animate-pulse" aria-hidden="true" />
                  {personalInfo.availability}
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
