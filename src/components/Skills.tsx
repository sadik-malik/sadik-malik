import { SKILLS } from "../constants";
import { motion } from "motion/react";
import {
  LuCode as Code,
  LuCpu as Cpu,
  LuLayers as Layers,
} from "react-icons/lu";
import {
  SiReact,
  SiNodedotjs,
  SiPhp,
  SiWordpress,
  SiTailwindcss,
  SiNextdotjs
} from "react-icons/si";

const getIcon = (name: string) => {
  const size = 40;
  switch (name.toLowerCase()) {
    case "react.js":
      return <SiReact size={size} color="#61DAFB" />;
    case "node.js":
      return <SiNodedotjs size={size} color="#339933" />;
    case "php":
      return <SiPhp size={size} color="#777BB4" />;
    case "wordpress":
      return <SiWordpress size={size} color="#21759B" />;
    case "next.js":
      return <SiNextdotjs size={size} color="#fff" />;
    case "tailwind css":
      return <SiTailwindcss size={size} color="#06B6D4" />;
    default:
      return <Code size={size} className="text-zinc-500" />;
  }
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4 tracking-tight text-white">
            Technical Stack
          </h2>
          <p className="text-zinc-400">
            The core building blocks of my engineering workflow, powered by
            battle-tested technologies.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {SKILLS.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(59, 130, 246, 0.4)",
                backgroundColor: "rgba(24, 24, 27, 0.8)",
              }}
              className="group flex flex-col items-center justify-center p-8 bg-zinc-900/30 border border-zinc-800 rounded-2xl transition-all duration-300"
            >
              <div className="mb-4 transition-all duration-300 filter grayscale group-hover:grayscale-0 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]">
                {getIcon(skill.name)}
              </div>
              <span className="text-[10px] font-black text-zinc-500 group-hover:text-white uppercase tracking-[0.2em] text-center transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-zinc-900/50 rounded-3xl border border-zinc-800 flex flex-col"
          >
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <Cpu className="text-blue-500" size={24} />
              Education
            </h3>

            <div className="space-y-8 relative before:absolute before:left-[3px] before:top-2 before:bottom-2 before:w-[1px] before:bg-zinc-800">
              <div className="flex items-start gap-4 relative">
                <div className="mt-2 w-2 h-2 rounded-full bg-blue-500 shrink-0 z-10" />
                <div>
                  <p className="text-lg font-bold text-white">
                    Bachelor of Commerce (B.Com)
                  </p>
                  <p className="text-zinc-400 text-sm">Delhi University</p>
                  <p className="text-zinc-500 text-xs font-mono mt-1 uppercase tracking-widest">
                    Graduated 2022
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 relative">
                <div className="mt-2 w-2 h-2 rounded-full bg-zinc-700 shrink-0 z-10" />
                <div>
                  <p className="text-base font-bold text-zinc-200">
                    Intermediate (Class XII)
                  </p>
                  <p className="text-zinc-500 text-sm">CBSE Board</p>
                  <p className="text-zinc-600 text-xs font-mono mt-1 uppercase tracking-widest">
                    Completed 2015
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 relative">
                <div className="mt-2 w-2 h-2 rounded-full bg-zinc-700 shrink-0 z-10" />
                <div>
                  <p className="text-base font-bold text-zinc-200">
                    High School (Class X)
                  </p>
                  <p className="text-zinc-500 text-sm">CBSE Board</p>
                  <p className="text-zinc-600 text-xs font-mono mt-1 uppercase tracking-widest">
                    Completed 2013
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-zinc-900/50 rounded-3xl border border-zinc-800 flex flex-col justify-center h-fit"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <Layers className="text-blue-500" size={24} />
              Languages
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-zinc-300 font-medium">English</span>
                <span className="text-[10px] font-black px-2 py-1 bg-blue-500/10 text-blue-400 rounded-md tracking-tighter">
                  PROFICIENT
                </span>
              </div>
              <div className="h-px bg-zinc-800 w-full" />
              <div className="flex justify-between items-center">
                <span className="text-zinc-300 font-medium">Hindi</span>
                <span className="text-[10px] font-black px-2 py-1 bg-blue-500/10 text-blue-400 rounded-md tracking-tighter">
                  NATIVE
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
