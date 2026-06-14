import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-[120px] bg-spaceBg relative">
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
            Featured Projects
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyanAccent to-violetAccent"
            />
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const isFeatured = project.size === "large";

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className={`glass-card rounded-2xl overflow-hidden shadow-lg border border-cyanAccent/15 hover:border-cyanAccent/40 hover:shadow-cyanAccent/10 group flex flex-col justify-between transition-all duration-300 ${
                  isFeatured ? "md:col-span-2" : ""
                }`}
              >
                {/* Upper portion */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Category Badge & Links */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-code text-xs px-2.5 py-1 rounded-full bg-cyanAccent/10 text-cyanAccent border border-cyanAccent/20">
                        {project.category}
                      </span>
                      <div className="flex space-x-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-textMuted hover:text-white transition"
                        >
                          <Github size={20} />
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-textMuted hover:text-white transition"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-3 tracking-wide">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-textMuted leading-relaxed text-sm mb-6">
                      {isFeatured ? project.longDescription : project.description}
                    </p>
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-code text-xs px-2.5 py-0.5 rounded bg-spaceBg border border-white/5 text-white/95"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* "View Project" link sliding on hover */}
                  <div className="flex items-center space-x-2 text-cyanAccent text-sm font-semibold cursor-pointer">
                    <span>View Project</span>
                    <ArrowRight 
                      size={16} 
                      className="transform transition-transform duration-300 group-hover:translate-x-2"
                    />
                  </div>
                </div>

                {/* featured mock browser window */}
                {isFeatured && (
                  <div className="mx-6 mb-6 rounded-t-xl bg-spaceBg/60 border border-white/10 p-3 flex flex-col space-y-2 select-none shadow-inner h-40">
                    <div className="flex space-x-1.5 items-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      <div className="w-32 h-3.5 bg-white/5 rounded-full text-[8px] font-code text-white/40 flex items-center justify-center">
                        localhost:3000
                      </div>
                    </div>
                    <div className="flex-grow flex items-center justify-center bg-spaceCard/30 rounded border border-white/5">
                      <div className="font-code text-[10px] text-cyanAccent/70 animate-pulse">
                        &gt; Rendering AI Assistant Platform...
                      </div>
                    </div>
                  </div>
                )}

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
