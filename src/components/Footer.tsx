import { Github, Linkedin, Mail, MapPin, Phone, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Left Section - About */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-4">
              D.D.R
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Full-stack developer and AI enthusiast passionate about creating innovative solutions. Currently pursuing Computer Science at NIT Trichy.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="https://github.com/DEEPAK-317" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/deepak-kumar-62a4b8270/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:deepaknittrichy@gmail.com"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Middle Section - Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section - Get In Touch */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:deepaknittrichy@gmail.com" 
                className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
              >
                <Mail size={16} className="flex-shrink-0" />
                <span>deepaknittrichy@gmail.com</span>
              </a>
              <a 
                href="tel:+916201967186" 
                className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
              >
                <Phone size={16} className="flex-shrink-0" />
                <span>+91 6201967186</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin size={16} className="flex-shrink-0" />
                <span>Trichy, Tamil Nadu, India</span>
              </div>
            </div>

            {/* Available For Tags */}
            <div className="mt-6">
              <p className="text-gray-400 text-sm mb-2">Available for:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium border border-green-500/30">
                  Freelance
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium border border-blue-500/30">
                  Full-time
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-medium border border-purple-500/30">
                  Internships
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm flex items-center gap-1">
              © {currentYear} Deepak Kumar. Made with <Heart size={14} className="text-red-500" /> using React & Tailwind CSS
            </p>
            <div className="flex items-center gap-4">
              <p className="text-gray-500 text-sm">
                Built with modern technologies
              </p>
              <button
                onClick={scrollToTop}
                className="p-2 bg-gray-800 hover:bg-purple-600 rounded-full transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-purple-500"
                aria-label="Scroll to top"
              >
                <ArrowUp size={16} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;