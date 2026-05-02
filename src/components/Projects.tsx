import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import TiltCard from './TiltCard';

const projects = [
  {
    title: "Animathix – AI Visual Learning",
    description: [
      "Built an AI platform converting math queries into animated lessons via LLM-generated Manim scripts.",
      "Designed an end-to-end pipeline integrating LLM processing, animation rendering, and voice synthesis."
    ],
    tags: ["Python", "Flask", "Manim", "REST APIs", "LLM Integration", "MoviePy"],
    image: "https://i.ibb.co/gZ38pGHB/Gemini-Generated-Image-1tkxgq1tkxgq1tkx.png",
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    title: "SnapNote",
    description: [
      "Built a multimodal AI platform converting unstructured inputs (images, PDFs) into structured notes.",
      "Integrated OCR and AI-based summarization, reducing manual effort and improving clarity"
    ],
    tags: ["MongoDB", "Express", "React", "Node", "OpenAI API", "Tesseract OCR"],
    image: "/project_3.png",
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Student Performance Dashboard",
    description: [
      "Built an interactive dashboard analyzing student performance with subject-wise trends (100+ records).",
      "Automated data cleaning and reporting, enabling faster identification of top/low performers and gaps."
    ],
    tags: ["Power BI", "Excel"],
    image: "https://i.ibb.co/NgtKnHvx/Gemini-Generated-Image-amg1egamg1egamg1.png",
    liveUrl: null,
    codeUrl: null
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10 w-full flex justify-center px-4 font-sans text-white">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center mb-4"
          >
            Featured Projects
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
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project, idx) => (
            <TiltCard key={idx} className="h-full">
              <motion.div
                variants={itemVariants}
                className="h-full bg-[#111827] border border-slate-800 overflow-hidden rounded-xl hover:border-[rgba(34,211,238,0.6)] hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300 flex flex-col"
              >
                <div className="w-full h-48 md:h-52 bg-slate-800">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4 leading-tight">{project.title}</h3>
                  <div className="text-gray-400 mb-6 flex-grow leading-relaxed text-[15px]">
                    <ul className="space-y-2">
                      {project.description.map((point, pIdx) => (
                        <li key={pIdx} className="flex gap-2">
                          <span className="text-[#22d3ee] mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#22d3ee]"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-[#22d3ee] bg-slate-800/60 rounded-full border border-slate-700/50 px-3 py-1.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {(project.liveUrl || project.codeUrl) ? (
                    <div className="flex gap-4">
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-[#1f2937] border border-slate-700 text-gray-200 text-[13px] font-semibold rounded-lg hover:bg-slate-700 transition-colors flex items-center gap-2"
                        >
                          <ExternalLink size={15} /> Live Demo
                        </motion.a>
                      )}
                      {project.codeUrl && (
                        <motion.a
                          href={project.codeUrl}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-transparent text-gray-300 text-[13px] font-semibold rounded-lg hover:text-white hover:bg-white/5 transition-colors flex items-center gap-2"
                        >
                          <Github size={15} /> Code
                        </motion.a>
                      )}
                    </div>
                  ) : (
                    <div className="h-[38px]" />
                  )}
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
