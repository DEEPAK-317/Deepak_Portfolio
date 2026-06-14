import { motion } from "framer-motion";
import { GraduationCap, Brain, GitBranch, Terminal } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="text-cyanAccent" size={24} />,
      title: "NIT Trichy — B.Tech CS",
      description: "Pursuing B.Tech in Computer Science & Engineering (Class of 2026). Focused on theoretical foundations and system architecture."
    },
    {
      icon: <Brain className="text-violetAccent" size={24} />,
      title: "AI/ML Engineer",
      description: "Designing agentic pipelines, RAG frameworks, and vector search configurations utilizing LangChain, Gemini, and Pinecone."
    },
    {
      icon: <GitBranch className="text-neonGreen" size={24} />,
      title: "Open Source Contributor",
      description: "Active contributor to core frameworks like LangChain and Streamlit, optimizing performance and developer APIs."
    },
    {
      icon: <Terminal className="text-cyanAccent" size={24} />,
      title: "Problem Solver",
      description: "Solved 400+ algorithmic structures on LeetCode/NeetCode. Enthusiastic about complexity optimization."
    }
  ];

  return (
    <section id="about" className="py-[120px] bg-spaceBg relative">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-bold text-4xl md:text-5xl text-white relative w-fit"
          >
            About Me
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyanAccent to-violetAccent"
            />
          </motion.h2>
        </div>

        {/* Content Rows */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Bio (60% equivalent) */}
          <div className="lg:col-span-6 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-textMuted leading-relaxed text-lg"
            >
              I am a Software Development Engineer (SDE) at <strong className="text-white">DailyKaam</strong> and a Computer Science & Engineering student at <strong className="text-white">NIT Trichy</strong>. I specialize in designing and shipping scalable full-stack web architectures, database optimization, and scalable Generative AI integrations.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-textMuted leading-relaxed text-lg"
            >
              Through my SDE role and internship environments, I have engineered high-impact systems — from M-Commerce architectures handling 10,000+ concurrent users to automated Retrieval-Augmented Generation (RAG) pipelines. I focus on writing modular, test-driven code and optimizing data access layouts.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-xl glass-card flex items-center space-x-6 border-l-4 border-l-cyanAccent"
            >
              <div className="text-left">
                <p className="font-code text-cyanAccent text-xs tracking-wider">PRIMARY LOCATION</p>
                <p className="font-bold text-white text-base mt-1">Trichy, Tamil Nadu, India</p>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div className="text-left">
                <p className="font-code text-violetAccent text-xs tracking-wider">AVAILABLE FOR</p>
                <p className="font-bold text-white text-base mt-1">Full-Time Opportunities</p>
              </div>
            </motion.div>
          </div>

          {/* Right Highlights Grid (2x2 Bento) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between h-56 border-t-2 border-t-cyanAccent/50 transition-all shadow-md hover:shadow-cyanAccent/10"
              >
                <div>
                  <div className="p-3 bg-spaceBg rounded-xl w-fit mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-display font-bold text-lg text-white mb-2">{item.title}</h4>
                </div>
                <p className="text-textMuted text-xs leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
