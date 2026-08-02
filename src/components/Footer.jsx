import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] px-5 py-8 text-white sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-7 border-t border-white/15 pt-7 text-xs sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-base font-semibold tracking-tight">
            Muhammad Usman <span className="text-white/45">/dev</span>
          </p>
          <p className="mono-label mt-2 text-white/45">Full-stack developer · Product builder</p>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-white/60">
          <span className="mono-label flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
            Available for product work
          </span>
          <span className="mono-label">© {new Date().getFullYear()} Muhammad Usman</span>
          <a
            href="#top"
            className="mono-label inline-flex items-center gap-2 text-white transition-opacity hover:opacity-60"
          >
            Back to top
            <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
