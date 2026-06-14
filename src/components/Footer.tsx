import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-spaceBg border-t border-cyanAccent/10 py-12 relative z-10">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Logo and copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-code font-bold text-xl text-gradient">DK</span>
          <p className="text-textMuted text-xs font-sans">
            © {currentYear} Deepak Kumar. All rights reserved.
          </p>
        </div>

        {/* Center: Made with love */}
        <div className="text-textMuted text-xs font-sans flex items-center gap-1.5 order-3 md:order-2">
          <span>Made with</span>
          <Heart size={12} className="text-red-500 fill-current animate-pulse" />
          <span>by Deepak Kumar</span>
        </div>

        {/* Right: Social links */}
        <div className="flex items-center gap-4 order-2 md:order-3">
          <a
            href="https://github.com/DEEPAK-317"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textMuted hover:text-cyanAccent transition duration-300"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/deepak-kumar-62a4b8270"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textMuted hover:text-cyanAccent transition duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://www.leetcode.com/u/deepak_3621"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textMuted hover:text-cyanAccent transition duration-300"
            aria-label="LeetCode"
          >
            <SiLeetcode size={18} />
          </a>
          <a
            href="mailto:deepaknittrichy@gmail.com"
            className="text-textMuted hover:text-cyanAccent transition duration-300"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;