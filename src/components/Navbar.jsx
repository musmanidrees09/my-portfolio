"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[var(--rule)] bg-[var(--paper)]/90 backdrop-blur-md">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex min-h-[72px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        <a
          href="#top"
          onClick={closeMenu}
          className="flex items-center gap-3 text-sm font-semibold tracking-tight text-[var(--ink)]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--ink)] text-[9px] font-bold tracking-[-0.08em] text-white">
            MUI
          </span>
          <span>
            Muhammad Usman <span className="text-[var(--muted)]">/dev</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mono-label text-[var(--muted)] transition-colors duration-200 hover:text-[var(--ink)]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <span className="hidden items-center gap-2 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--muted)] lg:flex">
            <span className="h-2 w-2 rounded-full bg-[#9bcf39]" aria-hidden="true" />
            Available
          </span>
          <a
            href="/Muhammad_Usman_Web_Developer_CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-black focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)]"
          >
            Resume
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-[var(--rule)] text-[var(--ink)] transition-colors hover:bg-white md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="flex" aria-hidden="true">
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </span>
        </button>
      </nav>

      </header>

      <div
        id="mobile-navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`fixed inset-x-0 bottom-0 top-[72px] z-[60] md:hidden ${
          isOpen ? "pointer-events-auto visible opacity-100" : "pointer-events-none invisible opacity-0"
        }`}
      >
        <button
          type="button"
          aria-label="Close navigation"
          tabIndex={isOpen ? 0 : -1}
          onClick={closeMenu}
          className="absolute inset-0 bg-[var(--ink)]/20 transition-opacity duration-200"
        />
        <div
          className={`relative z-[1] flex h-full w-full flex-col justify-between overflow-y-auto overscroll-contain border-t border-[var(--rule)] bg-[var(--paper)] px-6 py-10 pb-[calc(2.5rem+env(safe-area-inset-bottom))] transition-transform duration-200 ease-out sm:ml-auto sm:max-w-[32rem] ${
            isOpen ? "translate-y-0" : "-translate-y-2"
          }`}
        >
          <div className="flex flex-col gap-7">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center justify-between border-b border-[var(--rule)] pb-5 text-3xl font-semibold tracking-tight text-[var(--ink)]"
              >
                <span>{link.label}</span>
                <span className="mono-label text-[var(--muted)]">0{index + 1}</span>
              </a>
            ))}
          </div>
          <a
            href="/Muhammad_Usman_Web_Developer_CV.pdf"
            download
            onClick={closeMenu}
            className="mt-10 inline-flex w-fit items-center gap-2 bg-[var(--ink)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white"
          >
            Download resume
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </>
  );
}
