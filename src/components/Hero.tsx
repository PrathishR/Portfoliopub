import { motion } from 'framer-motion';
import { ArrowDown, GraduationCap, Users, Trophy, Heart, Medal } from 'lucide-react';

const Hero = () => {
  const badges = [
    { icon: <GraduationCap size={18} className="text-cyan-400" />, text: 'IT Student' },
    { icon: <Users size={18} className="text-cyan-400" />, text: 'Team Lead' },
    { icon: <Trophy size={18} className="text-cyan-400" />, text: 'Hackathon Competitor' },
    { icon: <Heart size={18} className="text-cyan-400" />, text: 'Tech Volunteer' },
    { icon: <Medal size={18} className="text-cyan-400" />, text: 'Google Student Ambassador' },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden font-sans">
      {/* Soft Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Outer circle animation */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 border-2 border-dashed border-purple-500/10 rounded-full w-[1000px] h-[1000px] m-auto pointer-events-none"
      />

      {/* Inner circle animation */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 border-2 border-dashed border-cyan-500/10 rounded-full w-[800px] h-[800px] m-auto pointer-events-none"
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-cyan-400 text-lg mb-4 tracking-widest"
        >
          HELLO, WORLD
        </motion.h2>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4"
        >
          I'm <motion.span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
            style={{ backgroundSize: '200% 200%' }}
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          >
            Prathish R
          </motion.span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-light text-gray-300 text-xl md:text-2xl mb-10"
        >
          Aspiring Data Engineer
        </motion.p>

        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 1.0
              }
            }
          }}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {badges.map((badge, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-gray-300 font-medium text-sm hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
            >
              {badge.icon}
              <span>{badge.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center gap-3"
        >
          <p className="text-gray-400 text-sm font-medium">
            6× Hackathon Finalists (2×Winner)
          </p>
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 5 }}
            transition={{ delay: 2.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
            className="text-gray-500 mt-2"
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>

    </div>
  );
};

export default Hero;
