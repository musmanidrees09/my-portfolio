"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = {
  Frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Tailwind",
    "Bootstrap",
  ],
  Backend: ["Node.js", "Express.js", "PHP", "Laravel", "Blade"], // Added 'Blade' for your Laravel focus
  Databases: ["SQL", "MongoDB", "MySQL"],
  Tools: ["Git", "GitHub", "REST APIs", "Postman"], // Added 'Postman' as it's a Pro tool
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-blue-500"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition hover:shadow-lg hover:shadow-blue-500/10"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                      delay: 0.2 + index * 0.05,
                    }}
                    className="bg-slate-900 px-3 py-1 rounded-full text-sm text-gray-300 border border-slate-800"
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
