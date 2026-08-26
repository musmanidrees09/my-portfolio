import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofStats from "@/components/ProofStats";
import WhatIBuild from "@/components/WhatIBuild";
import Projects from "@/components/Projects";
import ExtensionsSection from "@/components/ExtensionsSection";
import Experience from "@/components/Experience";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import SecurityReliability from "@/components/SecurityReliability";
import HowIWork from "@/components/HowIWork";
import GithubCode from "@/components/GithubCode";
import FreelanceServices from "@/components/FreelanceServices";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-[var(--accent)] focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-[var(--ink)] focus:border focus:border-[var(--ink)]"
      >
        Skip to main content
      </a>

      {/* Primary Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <div id="main-content">
        <Hero />
        <ProofStats />
        <WhatIBuild />
        <Projects />
        <ExtensionsSection />
        <Experience />
        <About />
        <TechStack />
        <SecurityReliability />
        <HowIWork />
        <GithubCode />
        <FreelanceServices />
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
