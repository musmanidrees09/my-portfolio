"use client";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO / NAME */}
        <span className="text-xl font-bold text-white">Muhammad Usman</span>

        {/* NAV LINKS */}
        <div className="hidden md:flex gap-6 text-gray-300">
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#skills" className="hover:text-white">
            Skills
          </a>
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
