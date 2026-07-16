import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0b1120] text-gray-500 py-12 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        <div className="text-center md:text-left">
          <span className="text-xl font-black tracking-tighter text-white">
            M.<span className="text-blue-500">Usman</span>
          </span>
          <p className="text-xs uppercase tracking-widest font-bold mt-2">Full Stack Developer</p>
        </div>

        <div className="flex gap-8 items-center">
          <a
            href="https://www.linkedin.com/in/muhammad-usman09-idrees/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-all font-bold text-xs uppercase tracking-widest"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/musmanidrees09"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-all font-bold text-xs uppercase tracking-widest"
          >
            GitHub
          </a>
        </div>

        <p className="text-[10px] uppercase font-bold tracking-[0.2em]">
          &copy; {new Date().getFullYear()} Muhammad Usman. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
