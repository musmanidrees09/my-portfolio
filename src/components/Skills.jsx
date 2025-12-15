import React from "react";

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
  Backend: ["Node.js", "Express.js", "PHP", "Laravel"],
  Databases: ["SQL", "MongoDB", "MySQL"],
  Tools: ["Git", "GitHub", "REST APIs"],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-500">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Object.entries turns our skills object into an array we can map over */}
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item, index) => (
                  <span
                    key={index}
                    className="bg-slate-900 px-3 py-1 rounded-full text-sm text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
