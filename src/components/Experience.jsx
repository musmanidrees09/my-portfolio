"use client";
import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#0b1120] text-white px-6 relative">
      <div className="absolute bottom-0 left-0 w-[50%] h-[30%] bg-indigo-600/5 blur-[120px] rounded-full"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Working <span className="text-blue-500">History</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {/* Timeline Item 1: Devonsite */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative pl-8 md:pl-0"
          >
            {/* Desktop Timeline Dot */}
            <div className="hidden md:block absolute left-1/2 -ml-3 top-0 w-6 h-6 rounded-full bg-blue-600 border-4 border-[#0b1120] z-20 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
            
            <div className="md:grid md:grid-cols-2 md:gap-12 items-start">
              <div className="md:text-right mb-4 md:mb-0">
                <h3 className="text-2xl font-black text-white">Full Stack Web Developer</h3>
                <p className="text-blue-400 font-bold">Devonsite • Lahore</p>
                <span className="inline-block mt-2 px-3 py-1 bg-blue-600/10 text-blue-400 rounded-full text-xs font-bold uppercase tracking-tighter">
                  Jul 2024 - Present
                </span>
              </div>
              
              <div className="glass p-6 rounded-2xl border border-white/5 shadow-2xl relative">
                {/* Mobile Timeline Pipe */}
                <div className="md:hidden absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-transparent"></div>
                <div className="md:hidden absolute -left-[35px] top-6 w-4 h-4 rounded-full bg-blue-600 border-2 border-[#0b1120]"></div>

                <ul className="space-y-3 text-gray-400 text-sm leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-blue-500 font-bold">▹</span>
                    <span>Architected 3 production <span className="text-white">Laravel</span> applications with secure encryption workflows.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500 font-bold">▹</span>
                    <span>Optimized MySQL queries reducing response times by <span className="text-green-500">40%</span> for 200+ daily users.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500 font-bold">▹</span>
                    <span>Implemented <span className="text-white">Role-Based Access Control (RBAC)</span> for complex multi-tenant SaaS environments.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500 font-bold">▹</span>
                    <span>Collaborated within a 4-person Agile team ensuring 100% on-time client deliveries.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Timeline Item 2: Education */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative pl-8 md:pl-0"
          >
             <div className="hidden md:block absolute left-1/2 -ml-3 top-0 w-6 h-6 rounded-full bg-surface-brighter border-4 border-[#0b1120] z-20"></div>
             
             <div className="md:grid md:grid-cols-2 md:gap-12 items-start">
              <div className="hidden md:block">
                <div className="glass p-6 rounded-2xl border border-white/5 opacity-80">
                  <p className="text-gray-400 text-sm italic">Focus: Software Engineering, Database Systems, Web Security</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-black text-white">BS Computer Science</h3>
                <p className="text-gray-500 font-bold">NCBA&E • 3.64 CGPA</p>
                <span className="inline-block mt-2 px-3 py-1 bg-white/5 text-gray-400 rounded-full text-xs font-bold uppercase tracking-tighter">
                  2020 - 2024
                </span>
                
                {/* Mobile Context */}
                <div className="md:hidden mt-4 glass p-4 rounded-xl text-xs text-gray-500">
                  Focus: Software Engineering, Database Systems, Web Security
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
