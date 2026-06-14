import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-[120px] bg-spaceBg relative">
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
            Education & Coursework
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyanAccent to-violetAccent"
            />
          </motion.h2>
          <p className="text-textMuted mt-6 font-code text-sm">ACADEMIC BACKGROUND & TRACKS</p>
        </div>

        {/* side by side cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Degree & Institution */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="glass-card p-8 rounded-2xl border-t-2 border-t-cyanAccent/80 flex flex-col justify-between hover:shadow-cyanAccent/5 shadow-md transition-all duration-300"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-spaceBg rounded-xl text-cyanAccent">
                  <GraduationCap size={24} />
                </div>
                <h3 className="font-display font-bold text-2xl text-white">Degree Program</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-display font-semibold text-lg text-white">B.Tech – Computer Science & Engineering</h4>
                  <p className="text-cyanAccent font-medium font-sans">National Institute of Technology, Trichy</p>
                </div>

                <div className="flex flex-col space-y-2 text-sm text-textMuted font-sans">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-textMuted" />
                    <span>Trichy, Tamil Nadu, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-textMuted" />
                    <span>Nov 2022 – May 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={14} className="text-textMuted" />
                    <span>B.Tech CSE Core</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 mt-6 font-code text-xs text-textMuted flex items-center justify-between">
              <span>National Institute of Technology</span>
              <span className="text-cyanAccent font-bold">NIT TRICHY</span>
            </div>
          </motion.div>

          {/* Card 2: Relevant Coursework & Focus Areas */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="glass-card p-8 rounded-2xl border-t-2 border-t-violetAccent/80 flex flex-col justify-between hover:shadow-violetAccent/5 shadow-md transition-all duration-300"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-spaceBg rounded-xl text-violetAccent">
                  <BookOpen size={24} />
                </div>
                <h3 className="font-display font-bold text-2xl text-white">Focus Areas</h3>
              </div>

              <div className="space-y-4">
                <p className="text-textMuted text-sm leading-relaxed">
                  Academic curriculum focuses on software engineering, distributed networks, data models, and intelligent system architectures:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-code">
                  <span className="p-2.5 rounded bg-spaceBg border border-white/5 text-white/95">
                    ⚙️ Data Structures & Algos
                  </span>
                  <span className="p-2.5 rounded bg-spaceBg border border-white/5 text-white/95">
                    💾 Database Management
                  </span>
                  <span className="p-2.5 rounded bg-spaceBg border border-white/5 text-white/95">
                    🕸️ Computer Networks
                  </span>
                  <span className="p-2.5 rounded bg-spaceBg border border-white/5 text-white/95">
                    💻 Operating Systems
                  </span>
                  <span className="p-2.5 rounded bg-spaceBg border border-white/5 text-white/95">
                    🧠 Artificial Intelligence
                  </span>
                  <span className="p-2.5 rounded bg-spaceBg border border-white/5 text-white/95">
                    🗃️ System Architecture
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 mt-6 font-code text-xs text-textMuted flex items-center justify-between">
              <span>Focus Curriculum</span>
              <span className="text-violetAccent font-bold">CSE ACADEMICS</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Education;
