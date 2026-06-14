import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experiences } from "../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="py-[120px] bg-spaceBg/50 relative border-t border-b border-cyanAccent/5">
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
            Professional Experience
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyanAccent to-violetAccent"
            />
          </motion.h2>
          <p className="text-textMuted mt-6 font-code text-sm">ROLES & INTERNSHIP HISTORY</p>
        </div>

        {/* Timeline Grid */}
        <div className="relative mt-20">
          
          {/* Vertical central timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyanAccent via-violetAccent to-cyanAccent opacity-35" />

          {/* List items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-stretch ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-spaceCard border-2 border-cyanAccent flex items-center justify-center z-10 shadow-lg shadow-cyanAccent/20">
                    <Briefcase size={14} className="text-cyanAccent" />
                  </div>

                  {/* Spacer or Card */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card wrapper (alternates sides) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <motion.div
                      initial={{ 
                        opacity: 0, 
                        x: isEven ? 60 : -60 
                      }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
                      className="glass-card p-6 md:p-8 rounded-2xl border-t-2 border-t-cyanAccent/50 relative shadow-md hover:shadow-cyanAccent/5"
                    >
                      {/* Date Range Badge */}
                      <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
                        <span className="font-code text-xs px-2.5 py-1 rounded bg-spaceBg border border-white/5 text-cyanAccent flex items-center gap-1.5">
                          <Calendar size={12} />
                          {exp.duration}
                        </span>
                        <span className="font-code text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/80">
                          {exp.type}
                        </span>
                      </div>

                      {/* Header details */}
                      <div className="mb-4">
                        <h3 className="font-display font-bold text-xl text-white">{exp.role}</h3>
                        <p className="font-display font-medium text-cyanAccent/90 mt-0.5">{exp.company}</p>
                        <div className="flex items-center text-xs text-textMuted mt-1 gap-1">
                          <MapPin size={12} />
                          {exp.location}
                        </div>
                      </div>

                      {/* Bullet points */}
                      <ul className="space-y-3 mb-6">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="text-textMuted text-sm leading-relaxed flex items-start">
                            <span className="w-1.5 h-1.5 bg-cyanAccent rounded-full mr-3 mt-2 flex-shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="font-code text-[10px] px-2.5 py-0.5 rounded bg-spaceBg text-white/90 border border-white/5"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
