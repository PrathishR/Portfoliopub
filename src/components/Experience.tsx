import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative z-10 w-full flex justify-center px-4 font-sans text-white">
      <div className="max-w-5xl w-full">
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            Professional Experience
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-slate-900/80 border border-slate-700/60 rounded-2xl p-8 md:p-14 shadow-2xl backdrop-blur-sm"
        >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400">
                  <Briefcase size={28} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">SDE Intern</h3>
                  <p className="text-cyan-400 font-mono text-lg mt-1">Bluestock Fintech</p>
                </div>
              </div>
              <div className="text-right">
                <span className="inline-block px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-gray-300 text-sm font-medium">
                  Feb 2026 - Mar 2026
                </span>
                <p className="text-gray-500 text-sm mt-2">Remote</p>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-cyan-400 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"></span>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Built backend services and optimized SQL data pipelines for efficient data processing.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="text-cyan-400 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"></span>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Improved data retrieval performance and ensured data quality using indexing and validation techniques.
                </p>
              </li>
            </ul>
          </motion.div>
      </div>
    </section>
  );
};

export default Experience;
