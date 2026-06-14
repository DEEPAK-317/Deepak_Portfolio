import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import profileImg from "../assets/profile.jpg";

interface CountUpProps {
  to: string | number;
  duration?: number;
}

// Simple CountUp helper component
const CountUp = ({ to, duration = 2 }: CountUpProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = typeof to === "string" ? parseInt(to, 10) : to;
    if (isNaN(end) || start === end) return;

    const totalMilliseconds = duration * 1000;
    const incrementTime = Math.max(Math.abs(Math.floor(totalMilliseconds / end)), 10);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [to, duration]);

  return <span>{count}</span>;
};

// Typewriter component
const Typewriter = () => {
  const roles = ["Full Stack Developer", "AI/ML Enthusiast", "React Developer", "Python Expert"];
  const [currentRoleIdx, setCurrentRoleIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = roles[currentRoleIdx];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIdx((prev) => (prev + 1) % roles.length);
          return;
        }
      }

      const speed = isDeleting ? 40 : 100;
      timer = setTimeout(handleType, speed);
    };

    timer = setTimeout(handleType, 100);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIdx]);

  return (
    <span className="font-code text-cyanAccent">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Hero = () => {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledPastHero(window.scrollY > 450);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern">
      
      {/* Fixed Anti-Gravity avatar overlay */}
      <AnimatePresence>
        {scrolledPastHero && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -50 }}
            className="fixed top-24 right-6 z-[999] cursor-pointer"
            onHoverStart={() => setShowTooltip(true)}
            onHoverEnd={() => setShowTooltip(false)}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <motion.div 
              whileHover={{ scale: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-cyanAccent shadow-lg shadow-cyanAccent/45 relative"
            >
              <img src={profileImg} alt="Deepak Avatar" className="w-full h-full object-cover" />
            </motion.div>
            
            {showTooltip && (
              <div className="absolute right-18 top-4 bg-spaceCard border border-cyanAccent/20 px-3 py-1 rounded-md text-xs whitespace-nowrap font-code text-white">
                That's me! 👋
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1200px] w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Content (60%) */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          
          {/* Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-spaceCard border border-cyanAccent/20 w-fit"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neonGreen opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neonGreen"></span>
            </span>
            <span className="text-xs font-code text-white/90">👋 Available for Opportunities</span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-textMuted text-lg font-medium tracking-wide"
            >
              Hi, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display font-extrabold text-5xl md:text-7xl leading-tight text-white tracking-tighter"
            >
              Deepak <span className="text-gradient">Kumar</span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl font-sans"
          >
            I'm a <Typewriter />
          </motion.div>

          {/* Bio Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-textMuted max-w-lg leading-relaxed text-base"
          >
            Computer Science student at <strong className="text-white">NIT Trichy</strong> and Software Development Engineer @ <strong className="text-white">DailyKaam</strong>. Architecting scalable full-stack applications and Generative AI pipelines.
          </motion.p>

          {/* Stats Bento Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 py-4"
          >
            <div className="glass-card p-4 rounded-xl text-center">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-cyanAccent">
                <CountUp to={5} />+
              </h3>
              <p className="text-xs font-code text-textMuted mt-1">Projects</p>
            </div>
            <div className="glass-card p-4 rounded-xl text-center">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-violetAccent">
                <CountUp to={3} />+
              </h3>
              <p className="text-xs font-code text-textMuted mt-1">Internships</p>
            </div>
            <div className="glass-card p-4 rounded-xl text-center">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-neonGreen">
                <CountUp to={10} />+
              </h3>
              <p className="text-xs font-code text-textMuted mt-1">Tech Stack</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg font-bold bg-gradient-to-r from-cyanAccent to-violetAccent text-white shadow-lg shadow-cyanAccent/25 hover:shadow-cyanAccent/45 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
            >
              View My Work →
            </a>
            <a
              href="mailto:deepaknittrichy@gmail.com"
              className="px-6 py-3 rounded-lg font-bold glass-card text-white hover:bg-spaceCard hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Social icons row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex space-x-4 pt-4"
          >
            <a href="https://github.com/DEEPAK-317" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-spaceCard hover:bg-cyanAccent/20 hover:text-cyanAccent transition">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/deepak-kumar-62a4b8270" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-spaceCard hover:bg-cyanAccent/20 hover:text-cyanAccent transition">
              <Linkedin size={20} />
            </a>
            <a href="https://www.leetcode.com/u/deepak_3621" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-spaceCard hover:bg-cyanAccent/20 hover:text-cyanAccent transition">
              <SiLeetcode size={20} />
            </a>
            <a href="mailto:deepaknittrichy@gmail.com" className="p-2.5 rounded-full bg-spaceCard hover:bg-cyanAccent/20 hover:text-cyanAccent transition">
              <Mail size={20} />
            </a>
          </motion.div>

        </div>

        {/* Right 3D Orbit Profile (40%) */}
        <div className="lg:col-span-5 flex justify-center items-center relative select-none">
          <div className="relative w-80 h-80 flex items-center justify-center">
            {/* Spinning gradient border ring */}
            <div className="absolute inset-0 rounded-full border-4 border-dashed border-cyanAccent/20 animate-spin" style={{ animationDuration: "40s" }} />

            {/* Profile Avatar Outer Float Wrapper */}
            <div className="profile-float">
              {/* Profile Avatar Inner Wrapper with Border, Background Gradient, Padding, Box Shadow and Hover Transition */}
              <div 
                className="profile-image-container w-[200px] h-[200px] md:w-[280px] md:h-[280px]"
                style={{ borderRadius: "50%" }}
              >
                <img 
                  src={profileImg} 
                  alt="Deepak Kumar Profile" 
                  className="w-full h-full object-cover" 
                  style={{ borderRadius: "50%" }}
                />
              </div>
            </div>

            {/* Orbiting Tech Badges (Hidden on mobile for performance) */}
            <div className="hidden sm:block">
              {/* React Badge */}
              <div className="absolute w-12 h-12 rounded-full glass-card flex items-center justify-center top-6 left-6 animate-bounce z-20" style={{ animationDuration: "3.5s" }}>
                <span className="text-xl">⚛️</span>
              </div>
              {/* Python Badge */}
              <div className="absolute w-12 h-12 rounded-full glass-card flex items-center justify-center bottom-6 right-6 animate-bounce z-20" style={{ animationDuration: "4.5s" }}>
                <span className="text-xl">🐍</span>
              </div>
              {/* AI Badge */}
              <div className="absolute w-12 h-12 rounded-full glass-card flex items-center justify-center top-36 -right-6 animate-bounce z-20" style={{ animationDuration: "4s" }}>
                <span className="text-xl">🧠</span>
              </div>
            </div>
            
          </div>
        </div>

      </div>
      
    </section>
  );
};

export default Hero;