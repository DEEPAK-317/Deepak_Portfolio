import { useState, lazy, Suspense } from "react";
import Preloader from "./components/ui/Preloader";
import CustomCursor from "./components/ui/CustomCursor";
import ParticleBackground from "./components/ui/ParticleBackground";
import ScrollProgress from "./components/ui/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy load non-hero sections for load performance optimizations
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Education = lazy(() => import("./components/Education"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Full screen SVG draw preloader */}
      <Preloader onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <div className="relative min-h-screen bg-spaceBg text-white font-sans overflow-hidden">
          
          {/* Custom Trail Follower Cursor */}
          <CustomCursor />

          {/* Thin scroll scale indicator bar */}
          <ScrollProgress />

          {/* Slow drift Canvas starfield background */}
          <ParticleBackground />

          {/* Fixed Glass Navbar */}
          <Navbar />

          <main className="relative z-10">
            {/* Hero loads immediately */}
            <Hero />
            
            {/* Suspense fallback wrapper for lazy modules */}
            <Suspense fallback={
              <div className="h-60 w-full flex items-center justify-center font-code text-cyanAccent text-xs animate-pulse">
                &gt; LOADING MODULE...
              </div>
            }>
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Education />
              <Contact />
            </Suspense>
          </main>

          <Suspense fallback={null}>
            <Footer />
          </Suspense>

        </div>
      )}
    </>
  );
}

export default App;
