import React from "react";

const projectData = [
  {
    id: 1,
    title: "PDF Tools Suite",
    tech: ["Laravel", "Blade", "Tailwind"],
    description:
      "A comprehensive web app for PDF processing (merge, split, convert).",
    link: "https://pdf.toolscase.com/", // Real Link
  },
  {
    id: 2,
    title: "ToolsCase Platform",
    tech: ["Laravel", "Blade", "Tailwind"],
    description: "A modular multi-tool web platform with route grouping.",
    link: "https://toolscase.com/", // Real Link
  },
  {
    id: 3,
    title: "SameDay Delivery",
    tech: ["JavaScript", "CSS", "Figma"],
    description: "Responsive multi-page delivery site converted from Figma.",
    link: "", // EMPTY STRING = No Button will show
  },
  {
    id: 4,
    title: "Hospital Management",
    tech: ["MERN Stack", "MongoDB", "Express"],
    description: "Full-stack app for patient records.",
    link: "", // EMPTY STRING = No Button will show
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-800 text-white px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="bg-slate-700 p-6 rounded-xl hover:shadow-2xl hover:bg-slate-600 transition flex flex-col h-full"
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

            {/* LOGIC: Only show button if project.link is NOT empty */}
            {project.link ? (
              <a
                href={project.link}
                target="_blank" // Opens in new tab
                rel="noopener noreferrer" // Security
                className="text-blue-400 font-semibold hover:text-white transition mt-auto self-start inline-flex items-center gap-1"
              >
                {/* Change text based on link type */}
                {project.link.includes("github")
                  ? "View Code"
                  : "Visit Site"}{" "}
                &rarr;
              </a>
            ) : (
              <span className="text-gray-500 text-sm mt-auto self-start italic">
                (Internal / Private Project)
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
