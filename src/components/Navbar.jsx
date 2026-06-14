import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { href: "#home", label: "Home", id: "home" },
    { href: "#about", label: "About", id: "about" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#experience", label: "Experience", id: "experience" },
    { href: "#contact", label: "Contact", id: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Section tracking for active tab
      const scrollPos = window.scrollY + 200;
      for (const link of navLinks) {
        const el = document.querySelector(link.href);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setActiveSection(id);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Adjust for sticky nav
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "h-16 bg-spaceBg/80 backdrop-blur-md border-b border-cyanAccent/10 shadow-lg shadow-black/40"
          : "h-20 bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-[1200px] mx-auto h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home", "home")}
            className="font-code font-bold text-2xl tracking-tighter text-gradient hover:brightness-125 transition"
          >
            DK
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.id)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 font-sans ${
                activeSection === link.id
                  ? "text-cyanAccent"
                  : "text-textMuted hover:text-white"
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.span
                  layoutId="activeUnderline"
                  className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-cyanAccent to-violetAccent"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Hire Me CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact", "contact")}
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-cyanAccent to-violetAccent text-white hover:text-white focus:ring-2 focus:outline-none focus:ring-cyan-800"
          >
            <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-spaceBg rounded-md group-hover:bg-opacity-0">
              Hire Me
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 flex items-center justify-center text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-current fill-none">
              <motion.path
                strokeWidth="2"
                strokeLinecap="round"
                animate={isMenuOpen ? { d: "M 18,6 L 6,18" } : { d: "M 4,6 L 20,6" }}
                transition={{ duration: 0.3 }}
              />
              <motion.path
                strokeWidth="2"
                strokeLinecap="round"
                d="M 4,12 L 20,12"
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.path
                strokeWidth="2"
                strokeLinecap="round"
                animate={isMenuOpen ? { d: "M 6,6 L 18,18" } : { d: "M 4,18 L 20,18" }}
                transition={{ duration: 0.3 }}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-spaceBg/95 backdrop-blur-lg border-b border-cyanAccent/10 py-6 px-6 md:hidden flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.id)}
                className={`py-2 text-base font-medium border-b border-white/5 transition-colors ${
                  activeSection === link.id ? "text-cyanAccent" : "text-textMuted hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact", "contact")}
              className="w-full text-center py-3 rounded-lg bg-gradient-to-r from-cyanAccent to-violetAccent text-white font-medium shadow-md shadow-cyanAccent/20"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
