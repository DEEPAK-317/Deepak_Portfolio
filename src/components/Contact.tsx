import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, Github, Linkedin, Loader2, CheckCircle2, MessageSquare } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending time
    setTimeout(() => {
      const subject = encodeURIComponent(formData.subject || "Portfolio Contact");
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );

      const gmailLink = `https://mail.google.com/mail/?view=cm&to=deepaknittrichy@gmail.com&su=${subject}&body=${body}`;
      window.open(gmailLink, "_blank");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
      setShowToast(true);

      // Dismiss toast after 4 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 4000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-cyanAccent" size={20} />,
      title: "Email",
      value: "deepaknittrichy@gmail.com",
      link: "mailto:deepaknittrichy@gmail.com",
    },
    {
      icon: <Linkedin className="text-violetAccent" size={20} />,
      title: "LinkedIn",
      value: "linkedin.com/in/deepak-kumar-62a4b8270",
      link: "https://www.linkedin.com/in/deepak-kumar-62a4b8270/",
    },
    {
      icon: <Github className="text-white" size={20} />,
      title: "GitHub",
      value: "github.com/DEEPAK-317",
      link: "https://github.com/DEEPAK-317",
    },
  ];

  return (
    <section id="contact" className="py-[120px] bg-spaceBg relative">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-bold text-4xl md:text-5xl text-white relative w-fit"
          >
            Get In Touch
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyanAccent to-violetAccent"
            />
          </motion.h2>
        </div>

        {/* Dual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Details Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-display font-bold text-3xl leading-tight text-white">
                Let's Build <br />
                <span className="text-gradient">Something Great</span>
              </h3>
              <p className="text-textMuted leading-relaxed text-sm">
                I'm always open to new software engineering projects, technical discussions, and professional network building. Feel free to ping me!
              </p>

              {/* Status pills */}
              <div className="space-y-2 pt-2">
                <p className="font-code text-xs text-textMuted tracking-wider">CURRENTLY OPEN TO</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cyanAccent/10 text-cyanAccent border border-cyanAccent/20 rounded-full text-xs font-code">
                    Full-time Roles
                  </span>
                  <span className="px-3 py-1 bg-violetAccent/10 text-violetAccent border border-violetAccent/20 rounded-full text-xs font-code">
                    Internships
                  </span>
                  <span className="px-3 py-1 bg-neonGreen/10 text-neonGreen border border-neonGreen/20 rounded-full text-xs font-code">
                    Freelance Projects
                  </span>
                </div>
              </div>
            </div>

            {/* Clickable Card list */}
            <div className="space-y-4 mt-8 lg:mt-0">
              {contactInfo.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-xl bg-spaceCard/50 border border-cyanAccent/10 hover:border-cyanAccent/35 transition-all group"
                >
                  <div className="p-3 bg-spaceBg rounded-lg group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-display font-bold text-sm text-white group-hover:text-cyanAccent transition">
                      {item.title}
                    </h4>
                    <p className="font-code text-xs text-textMuted mt-0.5">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

          </div>

          {/* Right message form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 md:p-8 rounded-2xl"
            >
              <h3 className="font-display font-bold text-xl text-white mb-6 flex items-center gap-2">
                <MessageSquare size={20} className="text-cyanAccent" />
                Send a Direct Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-code text-textMuted mb-2">NAME *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg glass-input text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-code text-textMuted mb-2">EMAIL *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 rounded-lg glass-input text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-code text-textMuted mb-2">SUBJECT</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Pitch"
                    className="w-full px-4 py-3 rounded-lg glass-input text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-code text-textMuted mb-2">MESSAGE *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project context or requirements..."
                    className="w-full px-4 py-3 rounded-lg glass-input text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-lg bg-gradient-to-r from-cyanAccent to-violetAccent text-white font-bold text-sm tracking-wide shadow-lg shadow-cyanAccent/20 hover:shadow-cyanAccent/35 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Dispatching to Gmail...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>

              </form>
            </motion.div>
          </div>

        </div>

      </div>

      {/* Success Toast Alert */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            className="fixed bottom-8 right-6 z-[9999] flex items-center p-4 bg-spaceCard border border-neonGreen/30 rounded-xl shadow-2xl shadow-black/80 max-w-sm"
          >
            <div className="p-2 bg-neonGreen/10 text-neonGreen rounded-lg mr-3">
              <CheckCircle2 size={20} className="animate-bounce" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-white">Gmail Compose Opened!</h4>
              <p className="text-textMuted text-xs mt-0.5">Please send the drafted mail from Gmail.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Contact;
