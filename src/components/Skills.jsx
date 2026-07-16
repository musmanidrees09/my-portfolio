"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = {
  "Web & Frameworks": [
    "PHP",
    "Laravel",
    "Node.js",
    "Express.js",
    "React",
    "Next.js",
    "Vite",
  ],
  "Frontend & Styling": [
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "Framer Motion",
  ],
  "Databases & APIs": ["MySQL", "MongoDB", "REST APIs", "MVC Architecture"],
  "Development & Workflow": ["Git", "GitHub", "Postman", "Chrome MV3", "jsPDF"],
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#0b1120] text-white px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
            Technical <span className="text-blue-500">Expertise</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto uppercase tracking-widest text-xs font-bold">
            My Professional Toolbox
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-[#111827] p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-600 transition-colors">
                   {/* Fallback Icon */}
                   <span className="text-blue-500 group-hover:text-white font-bold">#</span>
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tighter">
                  {category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {items.map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    className="px-3 py-1.5 rounded-lg bg-surface-brighter/50 text-[11px] font-bold text-gray-400 border border-white/5 group-hover:border-blue-500/10 transition-colors uppercase tracking-widest"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
