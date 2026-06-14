import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "../data/skills";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const activeCategory = skillCategories.find((cat) => cat.id === activeTab) || skillCategories[0];

  return (
    <section id="skills" className="py-[120px] bg-spaceBg/50 relative border-t border-b border-cyanAccent/5">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-bold text-4xl md:text-5xl text-white relative w-fit mx-auto"
          >
            Technical Toolkit
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyanAccent to-violetAccent"
            />
          </motion.h2>
          <p className="text-textMuted mt-6 font-code text-sm">PROFICIENCIES & EXPERTISE LEVELS</p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-lg mx-auto bg-spaceCard/50 p-1 rounded-xl border border-cyanAccent/10 backdrop-blur-md">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors font-sans flex-1 ${
                activeTab === category.id ? "text-white" : "text-textMuted hover:text-white"
              }`}
            >
              {category.title.split(" ")[0]} {/* Shorten label for neat display */}
              {activeTab === category.id && (
                <motion.span
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-gradient-to-r from-cyanAccent/20 to-violetAccent/20 border border-cyanAccent/30 rounded-lg -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Skill Card Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {activeCategory.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5, rotate: index % 2 === 0 ? 1 : -1 }}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between shadow-md border-t border-t-cyanAccent/10 hover:shadow-cyanAccent/10 hover:border-cyanAccent/35 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl p-2 bg-spaceBg rounded-lg">{skill.icon}</span>
                    <span className="font-display font-bold text-white text-base">{skill.name}</span>
                  </div>
                  <span className="font-code text-xs px-2.5 py-1 rounded-full bg-cyanAccent/10 text-cyanAccent border border-cyanAccent/20">
                    {skill.level}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-code text-textMuted">
                    <span>Proficiency</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  {/* Skill level meter bar */}
                  <div className="w-full h-2 bg-spaceBg rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-cyanAccent to-violetAccent rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Key achievements metrics */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-display font-semibold text-white mb-6">
            Key Achievements
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 border border-cyanAccent/20 bg-spaceCard/50 text-cyanAccent rounded-lg text-xs font-code">
              🚀 92% RAG Retrieval Accuracy
            </span>
            <span className="px-4 py-2 border border-violetAccent/20 bg-spaceCard/50 text-violetAccent rounded-lg text-xs font-code">
              📈 10K+ Concurrent Users Scaled
            </span>
            <span className="px-4 py-2 border border-neonGreen/20 bg-spaceCard/50 text-neonGreen rounded-lg text-xs font-code">
              ⚡ 35% Redis Query Speedup
            </span>
            <span className="px-4 py-2 border border-cyanAccent/20 bg-spaceCard/50 text-cyanAccent rounded-lg text-xs font-code">
              📦 40% Server Load Reduction
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
