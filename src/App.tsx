import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BackgroundParticles from './components/BackgroundParticles';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import IntroScreen from './components/IntroScreen';

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!entered ? (
          <IntroScreen key="intro" onEnter={() => setEntered(true)} />
        ) : (
          <motion.main 
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeIn" }}
            className="text-white selection:bg-cyan-500/30 font-sans overflow-x-hidden"
          >
            <Navbar />
            <BackgroundParticles />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Achievements />
            <Contact />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
