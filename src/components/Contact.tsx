import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import ContactRobot from './ContactRobot';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative z-10 w-full flex justify-center px-4 font-sans text-white">
      
      <div className="relative max-w-3xl w-full mx-auto flex items-center justify-center my-10">

        {/* Decorative Glows */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-cyan-500/20 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500/20 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2 pointer-events-none z-0"></div>

        {/* Card Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full max-w-2xl bg-slate-900/50 border border-slate-800 rounded-3xl p-10 md:p-14 flex flex-col items-center text-center shadow-2xl backdrop-blur-md"
        >
          <div className="absolute -top-32 left-0 md:-left-8 lg:-left-16 z-40">
            <ContactRobot />
          </div>
          <h2 className="text-4xl font-bold text-white mb-6 relative z-30">Let's Collaborate</h2>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-10 lg:px-8">
            I'm actively building my professional network and open to opportunities where I can learn, contribute, and grow. Let's connect and explore how we can work together.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mb-14">
            <motion.a 
              href="mailto:prathishr.it@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 px-8 py-3.5 bg-gradient-to-r from-[#22d3ee] to-[#a855f7] rounded-full font-semibold text-white shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-shadow hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
            >
              <Mail size={18} />
              Email Me
            </motion.a>

            <motion.a 
              href="tel:+919342642337"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 px-8 py-3.5 bg-[#1e293b] border border-slate-700/60 rounded-full font-semibold text-white hover:bg-slate-700 transition-colors shadow-lg"
            >
              <Phone size={18} />
              +91 9342642337
            </motion.a>
          </div>

          <div className="flex items-center gap-8">
            <motion.a 
              href="https://www.linkedin.com/in/prathishr"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-gray-400 hover:text-white transition-all duration-300"
            >
              <Linkedin size={22} />
            </motion.a>
            <motion.a 
              href="https://github.com/PrathishR"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-gray-400 hover:text-white transition-all duration-300"
            >
              <Github size={22} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
