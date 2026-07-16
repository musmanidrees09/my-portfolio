"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0b1120] px-6 pt-24 md:pt-0 overflow-hidden relative">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* ================= LEFT COLUMN: TEXT ================= */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-blue-400 font-semibold tracking-wide text-xs uppercase">
              Available for New Projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tighter"
          >
            MUHAMMAD <br />
            <span className="text-gradient">USMAN</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-3xl text-gray-400 font-medium mb-8"
          >
            Full Stack Developer <span className="text-blue-500">/</span> Laravel Expert
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-gray-400 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed text-lg"
          >
            Crafting high-performance web experiences with <span className="text-white font-semibold">Laravel</span> and <span className="text-white font-semibold">MERN</span> stack. 
            Focused on building scalable applications that combine robust engineering with premium design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="px-10 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 transform hover:-translate-y-1"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="px-10 py-4 bg-white/5 text-white rounded-xl font-bold hover:bg-white/10 transition-all transform hover:-translate-y-1"
            >
              Let&apos;s Talk
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 flex items-center justify-center lg:justify-start gap-8"
          >
            {[
              { label: "1+", sub: "Years Experience" },
              { label: "6+", sub: "Featured Projects" },
              { label: "3", sub: "Published Extensions" }
            ].map((stat, i) => (
              <div key={i} className="text-left border-l-2 border-blue-500/30 pl-4">
                <div className="text-2xl font-bold text-white">{stat.label}</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">{stat.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ================= RIGHT COLUMN: PROFILE IMAGE ================= */}
        <div className="order-1 lg:order-2 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Animated Shape Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 blur-[80px] opacity-20 animate-morph"></div>
            
            <div className="relative z-10 w-72 h-72 md:w-[450px] md:h-[450px]">
              <div className="absolute inset-0 border-2 border-white/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-4 border border-blue-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/40 relative group">
                <img
                  src="/Profile.png"
                  alt="Muhammad Usman"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent opacity-60"></div>
                
                {/* Floating Socials */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                  <a href="https://github.com/musmanidrees09" target="_blank" className="p-3 glass rounded-full hover:bg-white/20 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/muhammad-usman09-idrees/" target="_blank" className="p-3 glass rounded-full hover:bg-white/20 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
              </div>

              {/* Decorative Badge */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -right-8 top-12 bg-[#111827] border border-white/5 p-4 rounded-xl shadow-2xl hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  </div>
                  <div>
                    <div className="text-white font-bold leading-none">Fast</div>
                    <div className="text-gray-400 text-xs uppercase tracking-tighter">Performance</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
