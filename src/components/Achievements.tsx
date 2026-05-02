import { motion } from 'framer-motion';

const achievements = [
  {
    title: "Hackathons",
    subtitle: "Role: Team Lead & Presenter",
    details: [
      "Finalist in 6/8 national-level hackathons; secured 3rd Prize at GPTathon.",
      "Led team in building AI/data-driven solutions, contributing to backend systems, data pipelines, and LLM-based features"
    ]
  },
  {
    title: "Tech Community Volunteering",
    subtitle: "Code on JVM, PEC Hacks",
    details: [
      "Active volunteer with Code on JVM and PEC Hacks, contributing to event coordination and technical sessions.",
      "Led an LLM workshop for 80+ students on ChatGPT architecture, tokenization, and prompt flow"
    ]
  },
  {
    title: "Google Student Ambassador",
    subtitle: "2026",
    details: [
      "Selected as Google Student Ambassador (2026), engaged in Google-led learning and campus community initiatives."
    ]
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative z-10 w-full flex justify-center px-4 font-sans text-white">
      <div className="max-w-5xl w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase text-3xl md:text-5xl font-bold text-center mb-4 text-white"
          >
            Achievements & Activities
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
          />
        </div>

        <div className="relative w-full mx-auto md:w-[85%] lg:w-[80%] pb-12">
          
          {/* Central Animated Timeline Line (Bold & Gradient) */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-4 bottom-0 w-[3px]">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] rounded-full"
            />
          </div>

          {/* Timeline Items */}
          <div className="flex flex-col gap-16 relative z-10">
            {achievements.map((item, idx) => {
              // Alternate sides on desktop
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className={`flex flex-col md:flex-row items-center md:items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  
                  {/* Glowing Node Marker */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-slate-950 border-[3px] border-cyan-400 z-20 shadow-[0_0_12px_rgba(34,211,238,0.8)] -ml-3 md:ml-0 mt-2"></div>
                  
                  {/* Invisible spacer for the opposite side to keep geometry balanced natively */}
                  <div className="hidden md:block md:w-1/2"></div>

                  {/* Content Container (No Box Background, floating text precisely arrayed) */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-center' : 'md:pl-16 text-left md:text-center'}`}>
                    <div className="flex flex-col items-center md:items-center w-full">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <h4 className="text-[#c084fc] text-[16px] font-medium mb-6 relative bottom-1">{item.subtitle}</h4>
                      
                      <ul className="w-full flex flex-col text-left list-disc text-gray-400 space-y-3.5 pl-5 marker:text-gray-500 leading-relaxed font-normal">
                        {item.details.map((detail, dIdx) => (
                          <li key={dIdx} className="pl-1 leading-loose">{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
