
import { motion } from 'motion/react';
import { EXPERIENCES } from '../constants';
import { LuBriefcase as Briefcase, LuCalendar as Calendar, LuMapPin as MapPin } from 'react-icons/lu';

function Experience(){
  return (
    <section id="experience" className="py-24 px-4 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4 tracking-tight text-white">Professional Arc</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>

        <div className="relative border-l-2 border-zinc-800 ml-4 md:ml-0">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-12 relative pl-10"
            >
              <div className="absolute -left-[11px] top-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-zinc-950 z-10 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
              
              <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:border-blue-500/30 transition-colors">
                <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white leading-none mb-2">{exp.role}</h3>
                    <p className="text-blue-400 font-medium flex items-center gap-2">
                      <Briefcase size={16} /> {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {exp.period}
                    </span>
                    {exp.location && (
                      <span className="flex items-center gap-1">
                        <MapPin size={14} /> {exp.location}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
