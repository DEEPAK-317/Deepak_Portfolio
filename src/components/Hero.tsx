import { Mail, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black px-4 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile Image - FULL SIZE */}
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/80 transition-all duration-300">
                <img 
                  src="/profile.jpg" 
                  alt="Deepak Kumar Profile" 
                  className="w-full h-full object-cover object-center scale-100"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center center'
                  }}
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/400x400/1a1a1a/8b5cf6?text=Deepak+Kumar';
                  }}
                />
              </div>
              {/* Glow effect */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            </div>
          </div>

          {/* Right side - Text Content */}
          <div className="text-center md:text-left order-1 md:order-2 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Deepak Kumar</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              I'm a <span className="text-purple-400 font-semibold">Full Stack Developer & AI Enthusiast|</span>
            </p>
            
            <div className="text-gray-400 text-base md:text-lg space-y-2 mb-8">
              <p>
                Computer Science student at <span className="text-blue-400 font-semibold">NIT Trichy</span> with expertise in
              </p>
              <p>
                <span className="text-purple-400">Full-Stack Development</span>, <span className="text-blue-400">AI/ML</span>, and <span className="text-purple-400">Modern Automation Technologies</span>.
              </p>
              <p className="mt-4">
                Passionate about building <span className="text-purple-400">Innovative Solutions</span> and delivering <span className="text-blue-400">Impactful Projects</span>.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start mb-8">
              <a 
                href="mailto:deepaknittrichy@gmail.com" 
                className="p-3 bg-gray-800 hover:bg-purple-600 rounded-full transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-purple-500"
                aria-label="Email"
              >
                <Mail className="w-6 h-6 text-white" />
              </a>
              <a 
                href="https://www.linkedin.com/in/deepak-kumar-62a4b8270/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-blue-500"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a 
                href="https://github.com/DEEPAK-317" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-purple-600 rounded-full transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-purple-500"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              <a 
                href="#projects" 
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/50"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 bg-transparent border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;