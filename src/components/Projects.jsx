"use client";
import React from "react";
import { motion } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "PDF Tools Suite",
    tech: ["Laravel", "Blade", "Tailwind"],
    description:
      "Developed a production-ready PDF processing web application supporting merge, split, and conversion features with secure backend logic and optimized file handling.",
    link: "https://pdf.toolscase.com/",
  },
  {
    id: 2,
    title: "ToolsCase Platform",
    tech: ["Laravel", "Blade", "Tailwind"],
    description:
      "Built a modular multi-tool platform using Laravel route grouping and reusable Blade components for scalability and maintainability.",
    link: "https://toolscase.com/",
  },
  {
    id: 3,
    title: "SameDay Delivery",
    tech: ["JavaScript", "CSS", "Figma"],
    description:
      "Converted Figma UI designs into a fully responsive multi-page website with clean HTML, CSS, and JavaScript.",
    link: "",
  },
  {
    id: 4,
    title: "Hospital Management",
    tech: ["MERN Stack", "MongoDB", "Express"],
    description:
      "Implemented a MERN stack application for managing patient records, appointments, and role-based access.",
    link: "",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-800 text-white px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }} // Stagger effect!
            whileHover={{ y: -10 }} // Lifts up when you hover!
            className="bg-slate-700 p-6 rounded-xl hover:shadow-2xl hover:shadow-blue-500/20 transition flex flex-col h-full border border-transparent hover:border-blue-500/30"
          >
            <h3 className="text-2xl font-bold mb-2 text-blue-400">
              {project.title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, index) => (
                <span
                  key={index}
                  className="bg-slate-900 text-xs px-2 py-1 rounded text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="text-gray-300 mb-6 flex-grow">
              {project.description}
            </p>

            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 font-semibold hover:text-white transition mt-auto self-start inline-flex items-center gap-1"
              >
                {project.link.includes("github") ? "View Code" : "Visit Site"}{" "}
                &rarr;
              </a>
            ) : (
              <span className="text-gray-500 text-sm mt-auto self-start italic">
                (Internal / Private Project)
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
