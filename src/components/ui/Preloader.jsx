import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Keep visible for 1.8s, then trigger exit transition
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-spaceBg z-[99999] flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.5 } }}
        >
          {/* Animated SVG 'DK' logo */}
          <div className="w-32 h-32 flex items-center justify-center">
            <svg viewBox="0 0 140 100" className="w-full h-full">
              {/* D Path */}
              <motion.path
                d="M 20,20 L 50,20 A 30,30 0 0,1 50,80 L 20,80 Z"
                fill="transparent"
                stroke="#00D4FF"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              {/* K Path */}
              <motion.path
                d="M 80,20 L 80,80 M 80,50 L 110,20 M 80,50 L 110,80"
                fill="transparent"
                stroke="#7B2FBE"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              />
            </svg>
          </div>
          
          <motion.div
            className="mt-6 font-code text-cyanAccent tracking-widest text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.5] }}
            transition={{ duration: 1.5, times: [0, 0.5, 1], repeat: Infinity }}
          >
            INITIALIZING SYSTEM...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
