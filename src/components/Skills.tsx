import { Code, Database, Globe, Brain, GitBranch } from 'lucide-react';
import { 
  FaPython, 
  FaReact, 
  FaHtml5, 
  FaGitAlt, 
  FaGithub, 
  FaDocker 
} from 'react-icons/fa';
import { 
  DiJavascript1, 
  DiMongodb, 
  DiMysql, 
  DiPostgresql 
} from 'react-icons/di';
import { 
  SiFlask, 
  SiDjango, 
  SiOpenai, 
  SiOpencv, 
  SiNumpy, 
  SiPandas, 
  SiScikitlearn, 
  SiConfluence 
} from 'react-icons/si';

const Skills = () => {
  // Icon mapping for each skill
  const skillIcons: { [key: string]: React.JSX.Element } = {
    'Python': <FaPython className="text-blue-500" size={20} />,
    'JavaScript': <DiJavascript1 className="text-yellow-500" size={20} />,
    'TypeScript': <Code className="text-blue-600" size={20} />,
    'C++': <Code className="text-blue-600" size={20} />,
    'Next.js': <Globe className="text-gray-800 dark:text-white" size={20} />,
    'React': <FaReact className="text-blue-400" size={20} />,
    'React Native': <FaReact className="text-blue-400" size={20} />,
    'Flutter': <Globe className="text-blue-400" size={20} />,
    'Node.js': <Code className="text-green-500" size={20} />,
    'Express.js': <Code className="text-gray-500" size={20} />,
    'FastAPI': <Code className="text-green-500" size={20} />,
    'PostgreSQL': <DiPostgresql className="text-blue-600" size={20} />,
    'MongoDB': <DiMongodb className="text-green-600" size={20} />,
    'Redis': <Database className="text-red-500" size={20} />,
    'Prisma ORM': <Database className="text-blue-500" size={20} />,
    'LangChain': <Brain className="text-green-600" size={20} />,
    'Pinecone Vector DB': <Database className="text-purple-600" size={20} />,
    'Gemini API': <Brain className="text-indigo-500" size={20} />,
    'Docker': <FaDocker className="text-blue-500" size={20} />,
    'AWS': <Globe className="text-yellow-600" size={20} />,
    'Git & GitHub': <FaGithub className="text-gray-800 dark:text-white" size={20} />
  };

  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="text-blue-600" size={24} />,
      skills: [
        { name: 'Python' },
        { name: 'TypeScript' },
        { name: 'JavaScript' },
        { name: 'C++' }
      ]
    },
    {
      title: 'Frontend & Mobile',
      icon: <Globe className="text-green-600" size={24} />,
      skills: [
        { name: 'Next.js' },
        { name: 'React' },
        { name: 'React Native' },
        { name: 'Flutter' }
      ]
    },
    {
      title: 'Backend & Databases',
      icon: <Database className="text-orange-600" size={24} />,
      skills: [
        { name: 'Node.js' },
        { name: 'Express.js' },
        { name: 'FastAPI' },
        { name: 'PostgreSQL' },
        { name: 'MongoDB' },
        { name: 'Redis' },
        { name: 'Prisma ORM' }
      ]
    },
    {
      title: 'AI, Cloud & DevOps',
      icon: <Brain className="text-purple-600" size={24} />,
      skills: [
        { name: 'LangChain' },
        { name: 'Pinecone Vector DB' },
        { name: 'Gemini API' },
        { name: 'Docker' },
        { name: 'AWS' },
        { name: 'Git & GitHub' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-white mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-3">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-black hover:bg-gray-100 dark:hover:bg-black transition-colors duration-200"
                  >
                    <div className="flex-shrink-0">
                      {skillIcons[skill.name] || <Code className="text-gray-500" size={20} />}
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Achievements */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Key Achievements
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-lg text-sm font-medium">
              92% RAG Retrieval Accuracy
            </span>
            <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg text-sm font-medium">
              10K+ Concurrent Users Scaled
            </span>
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg text-sm font-medium">
              35% Redis Query Speedup
            </span>
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-lg text-sm font-medium">
              40% Server Load Reduction
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
