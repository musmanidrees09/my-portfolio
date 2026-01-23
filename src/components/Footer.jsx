import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-400 py-8 text-center border-t border-slate-800">
      <div className="flex justify-center gap-8 mb-4">
        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/muhammad-usman09-idrees/" // <--- PASTE LINK HERE
          target="_blank" // Opens in new tab
          rel="noopener noreferrer" // Security best practice
          className="hover:text-blue-500 transition font-semibold"
        >
          LinkedIn
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/musmanidrees09" // <--- PASTE LINK HERE
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition font-semibold"
        >
          GitHub
        </a>
      </div>

      <p className="text-sm">
        &copy; {new Date().getFullYear()} Muhammad Usman. Built with Next.js &
        Tailwind.
      </p>
    </footer>
  );
};

export default Footer;
