import { motion } from "motion/react";
import { OPEN_SOURCE } from "../constants";
import {
  LuGithub as Github,
  LuCode as Code,
  LuBox as Box,
} from "react-icons/lu";

function OpenSource() {
  return (
    <section id="opensource" className="py-24 px-4 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl font-bold mb-4 tracking-tight text-white">
              Open Source & Contributions
            </h2>
            <p className="text-zinc-400 max-w-xl">
              Deeply committed to the developer community through library
              maintenance and core contributions.
            </p>
          </div>
          <a
            href="https://github.com/sadik-malik"
            target="_blank"
            className="flex items-center gap-2 text-zinc-300 hover:text-white border border-zinc-700 hover:border-zinc-500 px-6 py-3 rounded-xl transition-all"
          >
            <Github size={20} />
            <span>Follow on Github</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OPEN_SOURCE.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-zinc-900/40 rounded-3xl border border-zinc-800 hover:bg-zinc-900 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                {item.type === "contribution" ? (
                  <Code size={24} />
                ) : (
                  <Box size={24} />
                )}
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{item.name}</h4>
              <p className="text-zinc-400 text-sm mb-4">{item.description}</p>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase">
                <span
                  className={`w-2 h-2 rounded-full ${item.type === "contribution" ? "bg-emerald-500" : "bg-blue-500"}`}
                ></span>
                {item.type}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OpenSource;
