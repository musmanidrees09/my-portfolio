"use client";

import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { personalInfo } from "@/data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "What I Build", href: "#what-i-build" },
  { label: "Projects", href: "#projects" },
  { label: "Extensions", href: "#extensions" },
  { label: "Experience", href: "#experience" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

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
      <header className="sticky top-0 z-50 border-b border-[var(--rule)] bg-[var(--paper)]/95 backdrop-blur-md">
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex min-h-[64px] max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10"
        >
          {/* Logo / Brand */}
          <a
            href="#top"
            onClick={closeMenu}
            className="flex items-center gap-2.5 text-sm font-bold tracking-tight text-[var(--ink)] shrink-0"
          >
            <span className="flex h-7 w-7 items-center justify-center bg-[var(--ink)] font-mono text-[10px] font-bold tracking-tighter text-white">
              MU
            </span>
            <span className="font-semibold text-xs sm:text-sm">
              Muhammad Usman <span className="text-[var(--muted)] font-normal hidden sm:inline">/dev</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-3 xl:gap-5 lg:flex">
            <div className="flex items-center gap-2.5 xl:gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-mono text-[10px] xl:text-[11px] font-medium uppercase tracking-wider text-[var(--muted)] transition-colors duration-150 hover:text-[var(--ink)] whitespace-nowrap px-1 py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Available Indicator (Visible on XL screens to preserve spacing on 13-14" laptops) */}
            <div className="hidden 2xl:flex items-center gap-2 border-l border-[var(--rule)] pl-3">
              <span className="h-2 w-2 rounded-full bg-[#86efac] border border-[var(--ink)]" aria-hidden="true" />
              <span className="font-mono text-[10px] text-[var(--ink)] font-semibold whitespace-nowrap">Available</span>
            </div>

            {/* Resume Download CTA */}
            <a
              href={personalInfo.resumePdf}
              download
              className="inline-flex items-center gap-1.5 border border-[var(--ink)] bg-[var(--ink)] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white transition-all hover:bg-black shrink-0"
            >
              Resume
              <Download size={12} aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-[var(--rule)] bg-[var(--surface)] text-[var(--ink)] transition-colors hover:bg-white lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="flex" aria-hidden="true">
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </span>
          </button>
        </nav>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`fixed inset-x-0 bottom-0 top-[64px] z-[60] lg:hidden ${
          isOpen ? "pointer-events-auto visible opacity-100" : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div
          onClick={closeMenu}
          className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-200"
          aria-hidden="true"
        />

        <div
          className={`relative z-10 flex h-full w-full flex-col justify-between overflow-y-auto overscroll-contain border-t border-[var(--rule)] bg-[var(--paper)] px-6 py-8 pb-12 transition-transform duration-200 ease-out sm:ml-auto sm:max-w-md ${
            isOpen ? "translate-y-0" : "-translate-y-2"
          }`}
        >
          <div className="flex flex-col gap-4">
            <p className="mono-label text-[var(--muted)] text-[10px] pb-2 border-b border-[var(--rule)]">
              Navigation Menu
            </p>
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center justify-between border-b border-[var(--rule)] pb-3 text-xl font-bold tracking-tight text-[var(--ink)] transition-colors hover:text-[var(--muted)]"
              >
                <span>{link.label}</span>
                <span className="mono-label text-xs text-[var(--muted)]">0{index + 1}</span>
              </a>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[var(--rule)] space-y-3">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-2 w-2 rounded-full bg-[#86efac] border border-[var(--ink)]" />
              <span className="mono-label text-xs font-semibold text-[var(--ink)]">
                Available for full-time & freelance
              </span>
            </div>

            <a
              href={personalInfo.resumePdf}
              download
              onClick={closeMenu}
              className="inline-flex w-full items-center justify-center gap-2 bg-[var(--ink)] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white"
            >
              Download Resume (PDF)
              <Download size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
