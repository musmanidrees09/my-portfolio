"use client";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-800 text-white px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Let’s Work Together</h2>

        <p className="text-lg text-gray-300 mb-12">
          I’m currently open to full-time or freelance opportunities.
          <br />
          Feel free to reach out via email or LinkedIn.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
          {/* EMAIL */}
          <motion.a
            href="mailto:musmanidrees08@gmail.com"
            whileHover={{ y: -5 }}
            className="bg-slate-700 p-6 rounded-xl hover:bg-slate-600 transition flex items-center gap-4 shadow-lg border border-transparent hover:border-blue-400"
          >
            <span className="text-2xl">✉️</span>
            <div className="text-left">
              <p className="text-sm text-gray-400">Email</p>
              <p className="font-semibold">musmanidrees08@gmail.com</p>
            </div>
          </motion.a>

          {/* LINKEDIN */}
          <motion.a
            href="https://www.linkedin.com/in/muhammad-usman-16a15b262/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="bg-slate-700 p-6 rounded-xl hover:bg-slate-600 transition flex items-center gap-4 shadow-lg border border-transparent hover:border-blue-400"
          >
            <span className="text-2xl">🔗</span>
            <div className="text-left">
              <p className="text-sm text-gray-400">LinkedIn</p>
              <p className="font-semibold">View Profile</p>
            </div>
          </motion.a>
        </div>

        {/* RESUME BUTTON */}
        <a
          href="/Muhammad-Usman-CV.pdf"
          download
          className="inline-block bg-blue-500 hover:bg-blue-600 transition text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-blue-500/30"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
