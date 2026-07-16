"use client";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#0b1120] text-white px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <span className="text-blue-500 font-black uppercase tracking-widest text-xs mb-4 block">Get In Touch</span>
        <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
          Let’s build something <br />
          <span className="text-gradient">exceptional.</span>
        </h2>

        <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed">
          I’m currently looking for new opportunities. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* EMAIL */}
          <motion.a
            href="mailto:musmanidrees08@gmail.com"
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-[#111827] border border-white/5 p-8 rounded-2xl flex flex-col items-center gap-4 hover:border-blue-500/50 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-600 transition-colors">
               <svg className="w-6 h-6 text-blue-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Email Me</p>
              <p className="text-lg font-black text-white">musmanidrees08@gmail.com</p>
            </div>
          </motion.a>

          {/* LINKEDIN */}
          <motion.a
            href="https://www.linkedin.com/in/muhammad-usman09-idrees/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-[#111827] border border-white/5 p-8 rounded-2xl flex flex-col items-center gap-4 hover:border-blue-500/50 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-600 transition-colors">
               <svg className="w-6 h-6 text-blue-500 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">LinkedIn</p>
              <p className="text-lg font-black text-white">Connect with Me</p>
            </div>
          </motion.a>
        </div>

        {/* RESUME BUTTON */}
        <motion.a
          href="/Muhammad_Usman_Web_Developer_CV.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 bg-blue-600 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest shadow-2xl shadow-blue-500/40 hover:bg-blue-500 transition-all"
        >
          <span>Download CV</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Contact;
