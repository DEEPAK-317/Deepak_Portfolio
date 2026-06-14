import { useState } from "react";
import { Github, Calendar, Folder } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "DDR AI Career Coach",
      description:
        "AI-powered SaaS career acceleration platform delivering automated resume parsing, mock technical interviews, and roadmaps.",
      longDescription:
        "Built a scalable Next.js career acceleration dashboard using Prisma ORM to save candidate states to a Neon PostgreSQL instance. Integrates Gemini Pro LLM with structured parser constraints to audit resume uploads against standard criteria and return line-by-line feedback in under 3 seconds.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Gemini API",
        "Prisma ORM",
        "Neon PostgreSQL",
        "TailwindCSS"
      ],
      duration: "June 2025 – Present",
      category: "Full Stack",
      featured: true,
      liveUrl: "https://ddrai-career-coach.vercel.app/",
      githubUrl: "https://github.com/DEEPAK-317/DDRAI-CAREER-COACH",
    },
    {
      title: "RAG Document Q&A System",
      description:
        "Retrieval-Augmented Generation (RAG) system for conversational question answering over high-volume PDF logs.",
      longDescription:
        "Engineered document intelligence workflows in FastAPI using Python and LangChain. Configured semantic chunk splitters, Mistral dense embeddings, and Pinecone Vector database lookups with MMR retrieval strategies to mitigate hallucination rates and verify citations.",
      technologies: [
        "Python",
        "FastAPI",
        "LangChain",
        "Pinecone Vector DB",
        "Mistral API",
        "HTML5",
        "CSS3"
      ],
      duration: "May 2025 – July 2025",
      category: "AI/ML",
      featured: true,
      liveUrl: "https://rag-document-qna-system.vercel.app/",
      githubUrl: "https://github.com/DEEPAK-317/RAG_Document_QnA-_System",
    },
    {
      title: "MERN M-Commerce Platform",
      description:
        "Scale-optimized M-Commerce store with PWA support, handling high concurrent loads.",
      longDescription:
        "Developed during NIT Trichy internship. Features Redis caching structures, index tuning, and database sharding configurations. Deployed on AWS and Vercel to support 10,000+ concurrent users with sub-200ms API response latencies.",
      technologies: [
        "MERN Stack",
        "Redis",
        "AWS",
        "Vercel",
        "GitHub Actions",
        "PWA"
      ],
      duration: "July 2024 – August 2024",
      category: "Full Stack",
      featured: true,
      liveUrl: "https://eshop-firebase.vercel.app/",
      githubUrl: "https://github.com/DEEPAK-317/Intership_nextjs-saas-typescript",
    },
    {
      title: "Explainable Fraud Detection System",
      description:
        "An interpretability-focused anomaly classifier using Isolation Forest and Random Forest pipelines.",
      longDescription:
        "Engineered predictive transaction classifiers using Python and Scikit-Learn. Integrates SHAP local explanation maps to generate and display decision pathways inside a Streamlit web portal, balancing high anomaly recall targets.",
      technologies: [
        "Python",
        "Streamlit",
        "Scikit-Learn",
        "SHAP",
        "Pandas",
        "Matplotlib"
      ],
      duration: "March 2025 – April 2025",
      category: "AI/ML",
      featured: false,
      liveUrl: "https://github.com/DEEPAK-317/explainable-fraud-detection",
      githubUrl: "https://github.com/DEEPAK-317/explainable-fraud-detection",
    },
    {
      title: "MailMate AI Email Companion",
      description:
        "Tone-customizable generative assistant generating context-aware email replies.",
      longDescription:
        "Created a prompt-engineered helper in Python and Streamlit. Routes tone configurations to Google Gemini API text generation endpoints, managing token payloads and rate bounds.",
      technologies: [
        "Python",
        "Streamlit",
        "Gemini API",
        "Prompt Engineering"
      ],
      duration: "May 2025",
      category: "AI/ML",
      featured: false,
      liveUrl: "https://github.com/DEEPAK-317/MailMate",
      githubUrl: "https://github.com/DEEPAK-317/MailMate",
    },
    {
      title: "NITT Student Track System",
      description:
        "Academic planners and scheduling dashboards with role-based JWT validation.",
      longDescription:
        "Built a responsive React/Express organizer with Express routes, JWT secure validation tokens, Mongoose database models, and interactive schedules.",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "JavaScript"
      ],
      duration: "January 2025 – February 2025",
      category: "Full Stack",
      featured: false,
      liveUrl: "https://github.com/DEEPAK-317/Nitt-Student-Track",
      githubUrl: "https://github.com/DEEPAK-317/Nitt-Student-Track",
    },
    {
      title: "Split Expense sharing Mobile App",
      description:
        "Bill division ledger tracking engine for cross-platform mobile environments.",
      longDescription:
        "Engineered mobile application layouts in React Native communicating with Express API routes backing MongoDB. Implemented offline synchronization reconciliations.",
      technologies: [
        "TypeScript",
        "React Native",
        "Node.js",
        "Express",
        "MongoDB"
      ],
      duration: "February 2025",
      category: "Platform",
      featured: false,
      liveUrl: "https://github.com/DEEPAK-317/Split-App",
      githubUrl: "https://github.com/DEEPAK-317/Split-App",
    },
  ];

  const categories = ["All", "Full Stack", "AI/ML", "Platform", "Research"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-white mt-4 max-w-2xl mx-auto">
            A showcase of my major projects in full-stack development, AI/ML,
            and research.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-black text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-50 dark:bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Folder className="text-primary-600" size={20} />
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        project.category === "Full Stack"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          : project.category === "AI/ML"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : project.category === "Platform"
                          ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                      }`}
                    >
                      {project.category}
                    </span>
                  </div>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      aria-label="GitHub repository"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <div className="flex items-center text-sm text-gray-600 dark:text-white mb-4">
                  <Calendar size={14} className="mr-1" />
                  {project.duration}
                </div>

                <p className="text-gray-600 dark:text-white text-sm leading-relaxed mb-4">
                  {project.featured
                    ? project.longDescription
                    : project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-white dark:bg-black text-gray-700 dark:text-white rounded border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Button */}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    <Github size={14} className="mr-2" />
                    View Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-white mb-6">
            Interested in exploring more of my work?
          </p>
          <a
            href="https://github.com/DEEPAK-317"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Github size={16} className="mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
