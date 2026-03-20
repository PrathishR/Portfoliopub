import { motion, useSpring, useMotionValueEvent } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

interface IntroScreenProps {
  onEnter: () => void;
}

const IntroScreen = ({ onEnter }: IntroScreenProps) => {
  // Smooth spring physics for the trailing blue powerful stone
  // Initialized to the top-right side (but away from the extreme corner)
  const cursorX = useSpring(Math.max(0, typeof window !== 'undefined' ? window.innerWidth - 250 : 800), { stiffness: 80, damping: 20 });
  const cursorY = useSpring(150, { stiffness: 80, damping: 20 });
  
  const robotRef = useRef<HTMLDivElement>(null);
  const [hit, setHit] = useState(false);

  // Track the mouse to pull the stone towards it
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  // Real-time collision detection logic
  const checkCollision = (stoneX: number, stoneY: number) => {
    if (robotRef.current && !hit) {
      const rect = robotRef.current.getBoundingClientRect();
      // Hit margin makes it so the stone must really hit the center mass of the robot
      const hitMargin = 60; 
      if (
        stoneX > rect.left + hitMargin &&
        stoneX < rect.right - hitMargin &&
        stoneY > rect.top + hitMargin &&
        stoneY < rect.bottom - hitMargin
      ) {
        setHit(true);
        // Play an awesome explosion animation for exactly 800ms before unlocking the site
        setTimeout(() => {
          onEnter();
        }, 800);
      }
    }
  };

  // Trigger collision detection whenever the stone physically shifts position
  useMotionValueEvent(cursorX, "change", (latestX) => checkCollision(latestX, cursorY.get()));
  useMotionValueEvent(cursorY, "change", (latestY) => checkCollision(cursorX.get(), latestY));

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-black overflow-hidden cursor-none" // Hide real cursor to focus on the stone
    >
      {/* The Powerful Blue Stone Trailing The Arrow */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full z-50 pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
          boxShadow: '0 0 50px 20px rgba(59, 130, 246, 0.8), inset 0 0 15px #ffffff'
        }}
        animate={hit ? { scale: [1, 15], opacity: [1, 0] } : { scale: 1, opacity: 1 }}
        transition={{ duration: hit ? 0.6 : 0, ease: "easeOut" }}
      />

      <div className="w-full h-full flex flex-col items-center justify-center">
        <motion.div
          ref={robotRef}
          animate={
            hit 
            // When hit, light up and shake!
            ? { scale: 1.25, rotate: [0, -10, 10, -10, 10, 0], filter: 'brightness(3) drop-shadow(0 0 100px #3b82f6)' } 
            // Otherwise, gently hover
            : { y: [-15, 15, -15], filter: 'brightness(1)' }
          }
          transition={hit ? { duration: 0.6 } : { y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
          className="relative flex flex-col items-center z-10"
        >
          <img 
            src="/premium_robot.png" 
            alt="Robot Guardian" 
            className="w-64 h-auto md:w-80 object-contain relative z-10 pointer-events-none mix-blend-screen"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/robot.png';
              // If it falls back to the original robot, disable the screen blend
              (e.target as HTMLImageElement).classList.remove('mix-blend-screen');
            }}
          />
        </motion.div>

        {!hit && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute bottom-20 text-blue-400 tracking-[0.3em] text-xs md:text-sm font-mono text-center flex flex-col items-center gap-4 z-20"
          >
            <span className="animate-bounce text-xl">↑</span>
            <p className="animate-pulse drop-shadow-[0_0_15px_rgba(59,130,246,0.9)]">
              GUIDE THE POWER STONE INTO THE MASK <br/> TO UNLOCK THE PORTFOLIO
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default IntroScreen;
