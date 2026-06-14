import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Development Engineer',
      company: 'DailyKaam',
      location: 'Remote / Hybrid, India',
      duration: 'August 2025 – Present',
      type: 'Full-time',
      description: [
        'Develop and scale customer-facing web and mobile applications using React, Next.js, and React Native.',
        'Design, optimize, and maintain RESTful backend APIs, database connections, and core business workflows in Node.js/Express.',
        'Improve application performance, reliability, and automated deployment checks utilizing Docker and AWS services.',
        'Collaborate across product, engineering, and operations teams to launch production-ready features with low latencies.',
        'Contribute to database design, relational query optimizations, and continuous system monitoring in PostgreSQL/MongoDB.'
      ],
      skills: ['React', 'Next.js', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS'],
      color: 'bg-indigo-600'
    },
    {
      title: 'Generative AI Intern',
      company: 'Nelumbus Technologies LLP',
      location: 'Remote',
      duration: 'June 2025 – July 2025',
      type: 'Internship',
      description: [
        'Designed and built Retrieval-Augmented Generation (RAG) applications integrating modern LLMs with OpenAI API and LangChain.',
        'Implemented semantic search, vector embedding pipelines, and multi-model AI workflows to process unstructured document logs.',
        'Improved response accuracy by 18% and operational efficiency by 25%, while reducing development iterations by 30%.'
      ],
      skills: ['Python', 'LangChain', 'OpenAI APIs', 'RAG', 'Semantic Search', 'Vector Databases'],
      color: 'bg-green-500'
    },
    {
      title: 'Full Stack Intern',
      company: 'National Institute of Technology (NIT), Trichy',
      location: 'Trichy, Tamil Nadu, India',
      duration: 'July 2024 – August 2024',
      type: 'Internship',
      description: [
        'Developed a scalable MERN-based M-Commerce platform with Progressive Web App (PWA) support.',
        'Implemented Redis caching, database indexing, and collection sharding strategies, improving query performance by 35%.',
        'Reduced server load by 40% through backend optimization and efficient data access patterns.',
        'Deployed applications on AWS and Vercel, supporting 10,000+ concurrent users with low-latency performance (<200ms).',
        'Built automated CI/CD staging pipelines using GitHub Actions to accelerate deployments.'
      ],
      skills: ['MERN Stack', 'Redis', 'AWS', 'Vercel', 'GitHub Actions', 'PWA'],
      color: 'bg-blue-500'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-white mt-4 max-w-2xl mx-auto">
            My journey through software engineering roles and technical internships that shaped my expertise.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-white"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-white dark:bg-black border-4 border-primary-600 rounded-full flex items-center justify-center z-10">
                  <Briefcase size={16} className="text-primary-600" />
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                  <div className="bg-white dark:bg-black p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                        <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold">{exp.company}</p>
                      </div>
                      <span className={`px-3 py-1 text-xs font-medium text-white rounded-full ${exp.color}`}>
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-white mb-4">
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {exp.duration}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-600 dark:text-white text-sm leading-relaxed flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs bg-gray-100 dark:bg-black text-gray-700 dark:text-white rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-white mb-6">
            Want to know more about my professional journey?
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&to=deepaknittrichy@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Let's Connect
            <ExternalLink size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
