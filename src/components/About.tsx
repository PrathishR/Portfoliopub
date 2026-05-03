import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative z-10 w-full flex justify-center px-4 font-sans text-white">
      <div className="max-w-5xl w-full">
        <div className="flex flex-col items-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-slate-900/80 border border-slate-700/60 rounded-2xl p-8 md:p-14 flex flex-col md:flex-row items-center gap-10 md:gap-14 shadow-2xl backdrop-blur-sm"
        >
          {/* Image side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-shrink-0 relative group flex justify-center w-full md:w-auto"
          >
            {/* Soft Glow Behind Image */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/40 to-purple-600/40 rounded-full blur-[40px] opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <motion.img 
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              src="https://i.ibb.co/tpfqqjTZ/sample.jpg" 
              alt="Prathish R" 
              className="relative w-64 h-64 md:w-72 md:h-72 object-cover rounded-full border border-slate-600/50 shadow-[0_0_20px_rgba(0,0,0,0.5)] z-10"
            />
          </motion.div>

          {/* Text side */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.6
                }
              }
            }}
            className="flex flex-col items-center md:items-start text-center md:text-left space-y-8"
          >
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-gray-300 text-lg leading-relaxed max-w-xl font-sans"
            >
              Final-year student with strong expertise in Python and SQL, focused on building scalable data pipelines, backend systems, and analytics solutions. Developed AI-powered applications leveraging LLM and OCR integration to transform unstructured data into actionable insights. Seeking an entry-level AI or data-focused role to design efficient, intelligent data systems and deliver impactful solutions.
            </motion.p>

            <motion.a 
              href="https://drive.google.com/file/d/1CALQK-xI27Q8uvTTIEBLwzM4IgC0HFKQ/view"
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-2.5 bg-gradient-to-r from-[#22d3ee] to-[#a855f7] text-white text-sm font-medium rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-shadow duration-300"
            >
              View Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
