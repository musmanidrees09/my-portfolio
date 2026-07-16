"use client";
import React from "react";
import { motion } from "framer-motion";
import { featuredProjects, inProgressProjects } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

const getProjectVisual = (project) => {
  if (project.image) {
    return (
      <img
        src={project.image.src}
        alt={project.image.alt}
        width={project.image.width}
        height={project.image.height}
        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
      />
    );
  }

  // You can add more sophisticated visual components here based on `project.visual.type`
  // For now, it's a simple fallback.
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#0f172a]">
      <div className="text-center">
        <p className="text-4xl font-black text-blue-500/20">{project.visual?.type || 'Project'}</p>
        <p className="text-xs uppercase tracking-widest text-gray-500">{project.visual?.label}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#0b1120] text-white px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
            Featured <span className="text-blue-500">Work</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of shipped products and case studies. Each project reflects a commitment to robust engineering and user-centered design.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#111827] rounded-xl border border-white/5 overflow-hidden flex flex-col h-full transition-all hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-600/10"
            >
              <div className="h-48 w-full relative overflow-hidden">
                {getProjectVisual(project)}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">{project.category}</p>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 rounded-md bg-white/5 text-[10px] font-semibold text-gray-300 uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <div className="mt-auto">
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-blue-400 transition-colors"
                    >
                      {project.link.label}
                      <ExternalLink size={14} />
                    </a>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* In-Progress Projects */}
        <div className="text-center mb-12">
           <h3 className="text-2xl font-bold text-white mb-2">In the Pipeline</h3>
           <p className="text-gray-500 text-sm">Current projects under active development.</p>
        </div>
        <div className="max-w-4xl mx-auto">
            <div className="bg-[#111827] border border-white/5 rounded-xl p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                    {inProgressProjects.map((project) => (
                        <div key={project.title} className="py-2 border-b border-white/5 last:border-b-0 sm:last:border-b-transparent">
                            <h4 className="font-bold text-white">{project.title}</h4>
                            <p className="text-sm text-gray-400">{project.summary}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
