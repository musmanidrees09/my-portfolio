"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-[#0b1120] text-white px-6 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[30%] h-[30%] bg-blue-600/10 blur-[100px] rounded-full"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT SIDE: Image/Icon Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-full h-[400px] bg-[#0f172a] rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center">
              <div className="text-9xl opacity-10 grayscale group-hover:grayscale-0 transition-all duration-500">👨‍💻</div>

              {/* Technical Stack overlay */}
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
                {["Laravel", "React", "MySQL"].map((tag) => (
                  <div key={tag} className="bg-white/5 text-[10px] py-1 text-center rounded-md font-bold uppercase tracking-widest text-blue-400">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Experience Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-6 -right-6 bg-[#111827] p-6 rounded-2xl border border-blue-500/30 shadow-2xl"
          >
            <p className="text-3xl font-black text-white leading-none">1+</p>
            <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mt-1">Year Pro Experience</p>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE: Narrative */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <span className="text-blue-400 font-bold text-xs uppercase tracking-widest">
              About Me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
            Building robust and
            <br />
            <span className="text-gradient">performant web solutions</span>
          </h2>

          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              I'm a Full Stack Developer specializing in crafting secure, high-performance web applications. My core expertise lies in the <span className="text-white font-semibold">Laravel</span> ecosystem for robust backend solutions and <span className="text-white font-semibold">React/Next.js</span> for dynamic frontends.
            </p>

            <p>
              My focus is on writing clean, maintainable code to solve complex problems and deliver exceptional user experiences. I enjoy taking a project from concept to production, whether it's a powerful web platform or a useful browser extension.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
