import { ArrowUp } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-[#0b0c0a] px-5 py-12 text-white sm:px-8 lg:px-12 border-t border-white/10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 md:flex-row md:items-end md:justify-between text-xs">
        {/* Brand & Summary */}
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center bg-white font-mono text-[10px] font-bold text-black">
              MU
            </span>
            <p className="text-base font-bold tracking-tight text-white">
              Muhammad Usman <span className="text-white/40 font-normal">/dev</span>
            </p>
          </div>
          <p className="mono-label mt-2 text-white/50">
            Full-Stack Developer · Next.js, React, MERN &amp; Laravel Platforms
          </p>
          <p className="mt-1 text-xs text-white/40">
            Lahore, Pakistan · Open to worldwide remote & on-site opportunities
          </p>
        </div>

        {/* Quick Links & Back to Top */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 text-white/70">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label transition-colors hover:text-white"
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label transition-colors hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="mono-label transition-colors hover:text-white"
            >
              Email
            </a>
          </div>

          <span className="hidden sm:inline text-white/20">|</span>

          <div className="flex items-center justify-between gap-4">
            <span className="mono-label text-white/40">
              © {new Date().getFullYear()} Muhammad Usman
            </span>
            <a
              href="#top"
              className="mono-label inline-flex items-center gap-1.5 border border-white/20 px-3 py-1 text-white transition-colors hover:border-white hover:bg-white hover:text-black"
            >
              Back to top
              <ArrowUp size={12} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
