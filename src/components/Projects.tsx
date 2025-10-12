import { useState } from "react";
import { Github, Calendar, Folder } from "lucide-react";

const Projects = () => {
  const projects = [
    // 🔹 1. SaaS Template (Intern Project)
    {
      title: "SaaS Template Platform",
      description:
        "A scalable SaaS boilerplate built with Next.js 15, integrating authentication, payments, and database.",
      longDescription:
        "Developed a scalable SaaS template using Next.js 15 with TypeScript, implementing Google OAuth & credentials-based login using NextAuth.js, Stripe payment integration with webhook handling, and PostgreSQL (via Drizzle ORM). Designed responsive UI with Tailwind CSS & shadcn/ui, configured Resend for transactional emails, and ensured secure validation using Zod.",
      technologies: [
        "Next.js 15",
        "TypeScript",
        "NextAuth.js",
        "Stripe",
        "PostgreSQL",
        "Drizzle ORM",
        "Tailwind CSS",
        "shadcn/ui",
      ],
      duration: "Dec 2024 – Jan 2025",
      category: "Full Stack",
      featured: true,
      liveUrl: "#",
      githubUrl: "https://github.com/DEEPAK-317/saas-template",
    },

    // 🔹 2. HR Automation Platform
    {
      title: "HR Automation Platform",
      description:
        "Automated HR workflows for managing 13,000+ employee records with AI-based data processing.",
      longDescription:
        "Built a secure HR automation platform capable of managing 13,000+ employee records with optimized SQL queries and Flask API integration. Added AI modules for auto-resume parsing and analytics dashboards. Improved efficiency by 60% in internal HR operations and introduced access-based authentication layers for scalability.",
      technologies: ["Flask", "React", "MySQL", "Docker", "JWT", "Pandas", "AI/ML"],
      duration: "Jun 2024 – Aug 2024",
      category: "Full Stack",
      featured: true,
      liveUrl: "#",
      githubUrl: "https://github.com/DEEPAK-317/hr-automation",
    },

    // 🔹 3. Credit Card Fraud Detection
    {
      title: "Credit Card Fraud Detection",
      description:
        "Machine learning model to detect fraudulent transactions in an imbalanced dataset using PyCaret.",
      longDescription:
        "Developed a machine learning model to detect fraudulent transactions in a dataset containing 284K+ records (492 frauds). Used PyCaret for automated model selection, applied SMOTE for balancing, and deployed ensemble models with high precision-recall tradeoff. Evaluated performance using F1-score and AUC metrics.",
      technologies: ["Python", "PyCaret", "SMOTE", "Scikit-learn", "Matplotlib", "Pandas"],
      duration: "Mar 2024 – Apr 2024",
      category: "AI/ML",
      featured: false,
      liveUrl: "#",
      githubUrl: "https://github.com/DEEPAK-317/credit-card-fraud-detection",
    },

    // 🔹 4. Digital Payment Survey (Academic Research)
    {
      title: "Digital Payment Survey: Urban vs Rural",
      description:
        "A research-based data analysis comparing digital payment adoption between urban and rural India.",
      longDescription:
        "Conducted a comprehensive survey-based research analyzing digital payment trends in urban and rural regions of India. Designed structured questionnaires, collected 500+ responses, and visualized trends using Excel and Python’s Matplotlib. Proposed data-driven insights to improve digital literacy and adoption rates.",
      technologies: ["Python", "Excel", "Matplotlib", "Survey Research"],
      duration: "Oct 2025",
      category: "Research",
      featured: false,
      liveUrl: "#",
      githubUrl: "https://github.com/DEEPAK-317/digital-payment-survey",
    },

    // 🔹 5. WhatsApp AI Assistant
    {
      title: "WhatsApp AI Assistant",
      description:
        "AI-powered WhatsApp chatbot for automated lead handling, booking, and customer support.",
      longDescription:
        "Created an intelligent WhatsApp assistant using Meta’s API, integrated with OpenAI for NLP-based automation. The system automatically handled lead responses, appointment bookings, and FAQs. Connected with CRM for lead generation, improving operational efficiency by 80%.",
      technologies: ["Python", "Flask", "OpenAI API", "WhatsApp API", "Webhooks"],
      duration: "Jul 2025 – Present",
      category: "AI/ML",
      featured: false,
      liveUrl: "#",
      githubUrl: "https://github.com/DEEPAK-317",
    },

    // 🔹 6. ClassPilot
    {
      title: "ClassPilot",
      description:
        "An education platform with curated content, real-time search, and instructor dashboards.",
      longDescription:
        "Designed a modular education platform using Flask, React, PostgreSQL, Docker, and JWT. Integrated Meilisearch for instant search, instructor dashboards, and dynamic content modules. Architected for scalability with REST APIs and containerized deployment using Docker Compose.",
      technologies: ["Python", "Flask", "React", "PostgreSQL", "Docker", "JWT", "Meilisearch"],
      duration: "Jun 2025 – Present",
      category: "Full Stack",
      featured: true,
      liveUrl: "#",
      githubUrl: "https://github.com/DEEPAK-317",
    },

    // 🔹 7. ReactForge
    {
      title: "ReactForge",
      description:
        "A modular multi-site React builder enabling users to create and deploy isolated apps.",
      longDescription:
        "Built a modular multi-site React builder enabling users to create, customize, and deploy isolated apps from a shared codebase. Integrated drag-and-drop features (React DnD), 3D rendering (Three.js), and auto-static builds with Vite for efficient deployment. Designed with reusable components and environment-driven configurations.",
      technologies: ["React", "Flask", "Vite", "React DnD", "Three.js", "NPM Library"],
      duration: "Jan 2025 – Mar 2025",
      category: "Platform",
      featured: true,
      liveUrl: "#",
      githubUrl: "https://github.com/DEEPAK-317",
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
