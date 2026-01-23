"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900 px-6 pt-20 md:pt-0 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* ================= LEFT COLUMN: TEXT ================= */}
        <div className="text-center md:text-left order-2 md:order-1">
          {/* 1. Greeting */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-blue-400 font-medium mb-4 tracking-wide text-lg"
          >
            HELLO, I'M
          </motion.p>

          {/* 2. Name */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight"
          >
            Muhammad <br />
            <span className="text-blue-500">Usman</span>
          </motion.h1>

          {/* 3. Job Title */}
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-300 font-light mb-8"
          >
            Full Stack Developer
          </motion.h2>

          {/* 4. Description (Optional but looks Pro) */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed"
          >
            I’m a Computer Science graduate and Junior Full-Stack Developer with
            hands-on experience in Laravel and MERN stack applications. I build
            secure, scalable web solutions used by real clients, focusing on
            clean code and performance.
          </motion.p>

          {/* 5. Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
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
        </div>

        {/* ================= RIGHT COLUMN: PROFILE IMAGE ================= */}
        <div className="order-1 md:order-2 flex justify-center relative">
          {/* Background Glow Effect (The "Pro" touch) */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"
          />

          {/* The Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative z-10"
          >
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-blue-500/50 p-2 shadow-2xl shadow-blue-500/20 bg-slate-800">
              <img
                src="/Profile.png"
                alt="Muhammad Usman"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Floating Badge (Optional - like 'Job Status') */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-4 right-0 md:bottom-8 md:right-4 bg-slate-900 border border-blue-500/30 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
            >
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300 font-medium">
                Open to Work
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
