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
                  <div key={tag} className="glass text-[10px] py-1 text-center rounded-md font-bold uppercase tracking-widest text-blue-400">
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
            className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border border-blue-500/30 shadow-2xl"
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
              My Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
            I build scalable <br />
            <span className="text-gradient">digital ecosystems</span>
          </h2>

          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Hey there! I&apos;m <span className="text-white font-bold">Muhammad Usman</span>, a Full Stack Developer based in Lahore, Pakistan. I specialize in architecting secure, high-performance web applications using <span className="text-white border-b-2 border-blue-500/30">PHP/Laravel</span> and the <span className="text-white border-b-2 border-blue-500/30">MERN Stack</span>.
            </p>

            <p>
              In my current role at <span className="text-blue-400 font-bold">Devonsite</span>, I&apos;ve had the privilege of engineering systems that handle <span className="text-white">200+ daily users</span>. I Recently optimized database queries that slashed server response times by <span className="text-green-400 font-bold">40%</span>.
            </p>

            <p>
              My philosophy is simple: write <span className="italic">clean</span>, <span className="italic">maintainable</span> code that delivers <span className="italic text-white">exceptional user experiences</span>. Whether it&apos;s complex backend logic or pixel-perfect frontends, I bring a detail-oriented approach to every project.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4">
            <div className="glass p-4 rounded-xl">
              <span className="block text-2xl font-bold text-white">5+</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest">Completed Projects</span>
            </div>
            <div className="glass p-4 rounded-xl">
              <span className="block text-2xl font-bold text-white">95+</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest">Lighthouse Score</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
