import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Bio */}
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm <strong>Deepak Kumar</strong>, a passionate Computer Science student at{" "}
                <strong>NIT Trichy</strong> with a strong foundation in full-stack
                development and artificial intelligence. My journey began with a
                curiosity about how software works and evolved into deep expertise
                in modern web technologies and AI/ML.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Through academic and internship experiences, I’ve worked on diverse
                projects — from HR automation platforms handling 13,000+ employee
                records to AI-powered solutions that streamline business operations.
                I thrive on solving complex problems and building scalable, impactful
                products.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I’m not coding, I enjoy exploring new technologies, contributing
                to open-source projects, and developing innovative solutions that
                bridge the gap between technology and real-world problems.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-gray-50 dark:bg-zinc-900 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  3+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Internships
                </div>
              </div>

              <div className="text-center p-4 bg-gray-50 dark:bg-zinc-900 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  5+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Major Projects
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Education & Contact */}
          <div className="space-y-8">
            {/* Education Section */}
            <div className="bg-gray-50 dark:bg-zinc-900 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <GraduationCap className="mr-2 text-primary-600" size={24} />
                Education
              </h3>

              <div className="space-y-5">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    B.Tech – Computer Science & Engineering
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    National Institute of Technology, Trichy
                  </p>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mt-1">
                    <MapPin size={14} className="mr-1" />
                    <span className="mr-4">Trichy, Tamil Nadu</span>
                    <Calendar size={14} className="mr-1" />
                    <span>Nov 2022 – May 2026</span>
                  </div>
                </div>

                <div className="border-l-4 border-gray-300 dark:border-gray-700 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Higher Secondary – PCM
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Gaya College, Gaya
                  </p>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mt-1">
                    <MapPin size={14} className="mr-1" />
                    <span className="mr-4">Gaya, Bihar</span>
                    <Calendar size={14} className="mr-1" />
                    <span>Apr 2019 – Mar 2021</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info Section */}
            <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-900 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Quick Info
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Phone:</span>
                  <span className="text-gray-900 dark:text-white font-medium">
                    6201967186
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Email:</span>
                  <span className="text-gray-900 dark:text-white font-medium">
                    deepaknittrichy@gmail.com
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Location:</span>
                  <span className="text-gray-900 dark:text-white font-medium">
                    Trichy, India
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Available:</span>
                  <span className="text-green-600 dark:text-green-400 font-medium">
                    For Opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
