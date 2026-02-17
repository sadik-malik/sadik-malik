import { motion } from "motion/react";
import { PROJECTS, type Project } from "../constants";
import {
  LuExternalLink as ExternalLink,
  LuLayers as Layers,
} from "react-icons/lu";

function ProjectCard({ category, description, title, link }: Project) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 overflow-hidden flex flex-col justify-between"
    >
      {link ? (
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
          <ExternalLink size={20} className="text-blue-500" />
        </div>
      ) : null}

      <div>
        <div className="inline-block px-2 py-1 rounded-md bg-zinc-800 text-xs font-mono text-blue-400 mb-4 uppercase tracking-wider">
          {category}
        </div>
        <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight text-white">
            Project Ecosystem
          </h2>
          <p className="text-zinc-400 max-w-xl">
            Deep architectural focus on secure payment portals, scalable admin
            dashboards, and seamless user interfaces.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => {
            const link = project.link?.trim();
            if (link && link !== "#") {
              return (
                <a
                  key={idx}
                  rel="noopener noreferrer"
                  target="_blank"
                  href={link}
                  className="contents"
                >
                  <ProjectCard {...project} link={link} />
                </a>
              );
            }
            return <ProjectCard key={idx} {...project} link={link} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
