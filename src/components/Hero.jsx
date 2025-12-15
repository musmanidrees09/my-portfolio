"use client"; // REQUIRED for animations
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-slate-900 px-4 overflow-hidden">
      {/* 1. The Greeting - Fades in from top */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-blue-400 font-medium mb-4 tracking-wide"
      >
        HELLO, I'M
      </motion.p>

      {/* 2. Your Name - Slides in from left */}
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }} // delays make it look cinematic
        className="text-5xl md:text-7xl font-bold text-white mb-6"
      >
        Muhammad Usman
      </motion.h1>

      {/* 3. The Job Title - Slides in from right */}
      <motion.h2
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-2xl md:text-3xl text-gray-300 font-light mb-8"
      >
        Full Stack Developer
      </motion.h2>

      {/* 4. The Buttons - Pop up from bottom */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex gap-4"
      >
        <a
          href="#projects"
          className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition shadow-lg shadow-blue-500/30"
        >
          View Work
        </a>
        <a
          href="#contact"
          className="border border-blue-400 text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-400/10 transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
