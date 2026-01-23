"use client";
import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-800 text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-16">
          Work <span className="text-blue-500">Experience</span>
        </h2>

        {/* Timeline Item 1: Devonsite (UPDATED FOR LARAVEL ROLE) */}
        <div className="relative border-l-4 border-blue-500 ml-4 pl-8 pb-12">
          <span className="absolute -left-3 top-0 bg-blue-500 w-6 h-6 rounded-full border-4 border-slate-800"></span>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition shadow-lg">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">Web Developer</h3>
                <p className="text-blue-400 font-medium">
                  Devonsite • Lahore, Pakistan
                </p>
              </div>
              <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm font-semibold mt-2 md:mt-0 w-fit">
                Jul '25 - Present
              </span>
            </div>

            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                Architected and deployed 3 production Laravel applications,
                implementing secure file processing workflows with encrypted
                storage and automated cleanup.
              </li>
              {/* CHANGED: Removed React/Next.js, added Laravel/Blade focus */}
              <li>
                Designed MySQL databases with proper indexing and normalized
                schemas; optimized multiple slow queries reducing response times
                by ~40% on large datasets.
              </li>
              <li>
                Applied MVC architecture with service layers for scalability,
                successfully debugging production issues and collaborating on
                client deliverables ahead of schedule.
              </li>
              <li>
                Implemented secure authentication and role-based access control
                for multi-tenant applications, maintaining a strict security
                record.
              </li>
              <li>
                Collaborated effectively with a 4-person development team using
                Git and Bitbucket workflows, conducting regular code reviews.
              </li>
            </ul>
          </div>
        </div>

        {/* Timeline Item 2: Education */}
        <div className="relative border-l-4 border-slate-600 ml-4 pl-8">
          <span className="absolute -left-3 top-0 bg-slate-600 w-6 h-6 rounded-full border-4 border-slate-800"></span>
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 opacity-80">
            <h3 className="text-xl font-bold">BS Computer Science</h3>
            <p className="text-gray-400">NCBA&E • 3.64 CGPA</p>
            <p className="text-sm text-gray-500 mt-1">2020 - 2024</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
