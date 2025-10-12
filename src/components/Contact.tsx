import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary-600" size={24} />,
      title: "Email",
      value: "deepaknittrichy@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&to=deepaknittrichy@gmail.com",
    },
    {
      icon: <Phone className="text-green-600" size={24} />,
      title: "Phone",
      value: "+91 6201967186",
      link: "tel:+916201967186",
    },
    {
      icon: <MapPin className="text-red-600" size={24} />,
      title: "Location",
      value: "Trichy, Tamil Nadu, India",
      link: "https://maps.google.com/?q=Trichy,Tamil+Nadu,India",
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      name: "GitHub",
      url: "https://github.com/DEEPAK-317",
      color: "hover:bg-gray-800",
    },
    {
      icon: <Linkedin size={20} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/deepak-kumar-62a4b8270/",
      color: "hover:bg-blue-600",
    },
    {
      icon: <Mail size={20} />,
      name: "Email",
      url: "https://mail.google.com/mail/?view=cm&to=deepaknittrichy@gmail.com",
      color: "hover:bg-primary-600",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-white mt-4 max-w-2xl mx-auto">
            Let’s collaborate on your next project or discuss opportunities.
            I’m always excited to work on innovative solutions.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let’s Connect
              </h3>
              <p className="text-gray-600 dark:text-white mb-8 leading-relaxed">
                I'm always interested in new opportunities, collaborations,
                and exciting projects. Whether you have a question or want
                to discuss something, feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-center p-4 bg-gray-50 dark:bg-black rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-900 transition-colors group"
                >
                  <div className="flex-shrink-0 mr-4">{item.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-100 dark:bg-black text-gray-700 dark:text-white rounded-lg transition-all duration-300 hover:text-white ${social.color} transform hover:scale-110`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-gray-50 dark:bg-zinc-900 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-white mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 bg-white dark:bg-black text-gray-900 dark:text-white transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-white mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 bg-white dark:bg-black text-gray-900 dark:text-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-white mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 bg-white dark:bg-black text-gray-900 dark:text-white transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-white mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  placeholder="Tell me about your project or just say hello!"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 bg-white dark:bg-black text-gray-900 dark:text-white transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-black dark:to-black p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-600 dark:text-white mb-6 max-w-2xl mx-auto">
              I'm currently available for freelance projects, full-time
              opportunities, and exciting collaborations. Let’s create
              something amazing together!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://mail.google.com/mail/?view=cm&to=deepaknittrichy@gmail.com&su=Project%20Discussion"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Mail size={16} className="mr-2" />
                Start a Project
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&to=deepaknittrichy@gmail.com&su=Job%20Opportunity"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
