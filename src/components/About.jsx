"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-slate-900 text-white px-6 border-b border-slate-800"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE: Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="w-full h-80 bg-gradient-to-tr from-blue-600 to-slate-800 rounded-2xl shadow-2xl flex items-center justify-center border border-slate-700">
            <span className="text-9xl opacity-20">👨‍💻</span>
          </div>
          {/* Floating Card - Updated to reflect JOB status */}
          <div className="absolute -bottom-6 -right-6 bg-slate-800 p-4 rounded-xl border border-blue-500 shadow-xl">
            <p className="text-blue-400 font-bold text-xl">Junior Developer</p>
            <p className="text-gray-400 text-sm">Devonsite</p>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Updated Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-blue-500 font-bold tracking-widest uppercase mb-2">
            About Me
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Full Stack Developer
          </h3>

          <p className="text-gray-300 mb-4 leading-relaxed">
            I am a Computer Science graduate and a{" "}
            <span className="font-semibold">Junior Web Developer</span>
            with hands-on experience building scalable applications. I
            specialize in the{" "}
            <span className="text-white font-semibold">
              MERN stack (React, Node, MongoDB)
            </span>{" "}
            and <span className="text-white font-semibold">PHP/Laravel</span>.
          </p>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Currently, I am working at{" "}
            <span className="text-blue-400 font-bold">Devonsite</span>, where I
            focus on integrating backend APIs and optimizing frontend
            performance for real-world clients.
          </p>

          <div className="flex gap-4">
            <div className="bg-slate-800 px-5 py-3 rounded-lg border border-slate-700">
              <span className="block text-2xl font-bold text-blue-400">5+</span>
              <span className="text-sm text-gray-400">Projects Completed</span>
            </div>
            <div className="bg-slate-800 px-5 py-3 rounded-lg border border-slate-700">
              <span className="block text-2xl font-bold text-blue-400">
                Pro
              </span>
              <span className="text-sm text-gray-400">Experience</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
