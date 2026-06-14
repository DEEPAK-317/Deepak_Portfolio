export const projects = [
  {
    title: "DDR AI Career Coach",
    description: "AI-powered SaaS platform delivering automated resume parsing, AI mock interviews, and career action plans. Built with Next.js, Prisma, and Gemini AI.",
    longDescription: "Automates candidate resume analysis, yielding parsed scores and line-by-line feedback in under 3 seconds. Next.js client routes requests to serverless API handlers. Sessions are tracked via Prisma ORM to Neon PostgreSQL, while resume uploads are audited via Gemini API.",
    technologies: ["Next.js", "TypeScript", "Gemini API", "Prisma", "PostgreSQL", "TailwindCSS"],
    category: "AI",
    liveUrl: "https://ddrai-career-coach.vercel.app/",
    githubUrl: "https://github.com/DEEPAK-317/DDRAI-CAREER-COACH",
    featured: true,
    size: "large" // Spans 2 columns
  },
  {
    title: "RAG Document Q&A System",
    description: "Retrieval-Augmented Generation (RAG) system for conversational question answering over PDF log archives.",
    longDescription: "Engineered document intelligence workflows in FastAPI using Python and LangChain. Configured semantic chunk splitters, Mistral dense embeddings, and Pinecone Vector database lookups with MMR retrieval strategies to mitigate hallucination rates and verify citations.",
    technologies: ["FastAPI", "Python", "LangChain", "Pinecone DB", "Mistral AI"],
    category: "AI",
    liveUrl: "https://rag-document-qna-system.vercel.app/",
    githubUrl: "https://github.com/DEEPAK-317/RAG_Document_QnA-_System",
    featured: false,
    size: "medium"
  },
  {
    title: "MERN M-Commerce Platform",
    description: "Scale-optimized online store with Progressive Web App (PWA) support, handling high concurrent loads.",
    longDescription: "Developed during NIT Trichy internship. Features Redis caching structures, index tuning, and database sharding configurations. Deployed on AWS and Vercel to support 10,000+ concurrent users with sub-200ms API response latencies.",
    technologies: ["MongoDB", "Express", "React", "Node", "Redis", "AWS"],
    category: "Web",
    liveUrl: "https://eshop-firebase.vercel.app/",
    githubUrl: "https://github.com/DEEPAK-317/Intership_nextjs-saas-typescript",
    featured: false,
    size: "medium"
  },
  {
    title: "Explainable Fraud Detection",
    description: "Hybrid ML pipeline utilizing Isolation Forest and Random Forest classifiers alongside SHAP values to explain financial anomalies.",
    technologies: ["Python", "Streamlit", "Scikit-Learn", "SHAP", "Pandas"],
    category: "AI",
    liveUrl: "https://github.com/DEEPAK-317/explainable-fraud-detection",
    githubUrl: "https://github.com/DEEPAK-317/explainable-fraud-detection",
    featured: false,
    size: "small"
  },
  {
    title: "MailMate AI Email Companion",
    description: "Context-aware email response generator supporting customizable tone selection. Built with Streamlit and Gemini API.",
    technologies: ["Python", "Streamlit", "Gemini API", "Prompt Engineering"],
    category: "AI",
    liveUrl: "https://github.com/DEEPAK-317/MailMate",
    githubUrl: "https://github.com/DEEPAK-317/MailMate",
    featured: false,
    size: "small"
  },
  {
    title: "NITT Student Track System",
    description: "Full-stack academic planner featuring role-based access controls, JWT authentication, and interactive calendar boards.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    category: "Full Stack",
    liveUrl: "https://github.com/DEEPAK-317/Nitt-Student-Track",
    githubUrl: "https://github.com/DEEPAK-317/Nitt-Student-Track",
    featured: false,
    size: "small"
  }
];
