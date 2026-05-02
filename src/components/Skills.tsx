import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: "Languages",
    items: ["Python", "SQL", "Java"]
  },
  {
    category: "Big Data &\nFrameworks",
    items: ["PySpark", "n8n (Workflow Automation)"]
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB"]
  },
  {
    category: "Libraries",
    items: ["Pandas", "NumPy", "Matplotlib"],
  },
  {
    category: "Visualization & Design",
    items: ["Power BI", "MS Excel", "Figma"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const titleVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (custom: number) => ({
    opacity: 1, x: 0,
    transition: { delay: custom * 0.15, duration: 0.8 }
  })
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative z-10 w-full flex justify-center px-4 font-sans text-white">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            Technical Skills
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
          />
        </div>

        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 md:gap-8 items-start">
          {skillCategories.map((group, catIndex) => (
            <motion.div 
              key={catIndex}
              className="flex flex-col w-full sm:w-[calc(50%-1.5rem)] lg:w-1/5 max-w-[280px]"
              viewport={{ once: true, margin: "-50px" }}
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
            >
              <motion.div 
                custom={catIndex}
                variants={titleVariants}
                className="flex items-center gap-3 mb-6 min-h-[50px] lg:min-h-[60px]"
              >
                <div className="w-[3px] h-full min-h-[24px] bg-purple-500 rounded-full flex-shrink-0"></div>
                <h3 className="text-[#22d3ee] font-mono text-[17px] font-semibold tracking-wide whitespace-pre-line leading-tight">
                  {group.category}
                </h3>
              </motion.div>
              
              <div className="flex flex-col gap-3">
                {group.items.map((skill, skillIdx) => (
                  <motion.div 
                    key={skillIdx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="group relative overflow-hidden bg-[#111827] border border-slate-800 rounded-md p-3.5 flex items-center gap-3 hover:border-[rgba(34,211,238,0.6)] hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all cursor-default"
                  >
                    {/* Subtle Background Overlay */}
                    <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                    {/* Indicator Dot */}
                    <div className="relative z-10 w-1.5 h-1.5 rounded-full bg-cyan-800 flex-shrink-0 group-hover:scale-150 group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300"></div>
                    
                    {/* Text Element */}
                    <span className="relative z-10 text-gray-300 group-hover:text-white text-[15px] font-medium tracking-wide transition-colors duration-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
