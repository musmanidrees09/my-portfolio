"use client";
import React from "react";
import { motion } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "PDF ToolsCase",
    tech: ["Laravel", "Blade", "Tailwind"],
    description:
      "Developed a production-ready PDF processing web application supporting merge, compress, split, and conversion features with secure backend logic and optimized file handling.",
    link: "https://pdf.toolscase.com/",
    image: "/pdf-toolscase.svg"
  },
  {
    id: 2,
    title: "ToolsCase Platform",
    tech: ["Laravel", "Blade", "Tailwind"],
    description:
      "Built a modular multi-tool platform using Laravel route grouping and reusable Blade components for scalability and maintainability.",
    link: "https://toolscase.com/",
    image: "/toolscase-platform.svg"
  },
  {
    id: 3,
    title: "SameDay Delivery",
    tech: ["HTML", "CSS", "JavaScript", "Figma"],
    description:
      "Converted Figma UI designs into a fully responsive multi-page website with clean HTML, CSS, and JavaScript.",
    link: "https://github.com/umer-sulehri/sameday_delivery",
    image: "/sameday-delivery.svg"
  },
  {
    id: 4,
    title: "Hospital Management",
    tech: ["MERN Stack", "MongoDB", "Express"],
    description:
      "Implemented a MERN stack application for managing patient records, appointments, and role-based access.",
    link: "https://github.com/abdullah05-afk/F_Y_P",
    image: "/hospital-management.svg"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#0b1120] text-white px-6 relative">
       <div className="absolute top-1/2 right-0 w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full"></div>
       
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Featured <span className="text-blue-500">Case Studies</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass rounded-[40px] border border-white/5 overflow-hidden flex flex-col h-full hover:border-blue-500/30 transition-all"
            >
              {/* Project Image */}
              <div className="h-48 w-full bg-[#0f172a] relative overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent group-hover:opacity-100 transition-opacity"></div>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                {/* Fallback Icon */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ display: project.image ? 'none' : 'flex' }}>
                  <span className="text-6xl grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110">
                    {project.id % 2 === 0 ? "🛠️" : "🧩"}
                  </span>
                </div>
                
                {/* Tech Badges on Image */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-1">
                  {project.tech.slice(0, 2).map((t, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-md bg-white/10 backdrop-blur-md text-[10px] font-bold uppercase tracking-tighter text-blue-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black mb-3 text-white tracking-tight group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white hover:text-blue-400 transition-all border-b border-blue-600/50 pb-1"
                    >
                      {project.link.includes("github") ? "View Code" : project.link.includes("toolscase") ? "Live Demo" : "View Project"}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </a>
                  ) : (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 p-2 glass rounded-lg">
                      Private Project
                    </span>
                  )}
                  
                  {/* Subtle index */}
                  <span className="text-3xl font-black text-white/5">0{project.id}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
