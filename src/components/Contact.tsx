import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import TerminalPanel from './TerminalPanel';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'navaneethamarnath@gmail.com',
      link: 'mailto:navaneethamarnath@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9188590190',
      link: 'tel:+919188590190'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Bangalore, India',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, url: 'https://github.com/Nav1203', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/navaneeth-amarnath/', label: 'LinkedIn' }
  ];

  return (
    <section id="contact" className="py-20 bg-[#080d14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mb-3 text-center font-mono text-xs uppercase tracking-[0.24em] text-cyan-300/70">$ open contact_channel</p>
          <h2 className="text-4xl font-bold text-center text-white mb-6">Get In <span className="text-cyan-200">Touch</span></h2>
          <TerminalPanel title="contact_socket.sh" className="mx-auto max-w-4xl">
            <p className="text-xl text-gray-300">
              <span className="font-mono text-cyan-300">$ open --channel collaboration</span>
              <br />
              I'm always interested in hearing about new opportunities and exciting ML/AI projects. 
              Let's discuss how we can work together!
            </p>
          </TerminalPanel>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <TerminalPanel title="contact_info.env">
              <h3 className="font-mono text-lg font-semibold uppercase tracking-wide text-cyan-300 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-slate-900/70 border border-cyan-400/10 rounded flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-cyan-300/90" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.title}</p>
                      <a
                        href={info.link}
                        className="text-white font-medium hover:text-cyan-200 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TerminalPanel>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-950/50 border border-cyan-400/10 rounded shadow-md flex items-center justify-center hover:bg-cyan-950/50 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-300" />
                  </motion.a>
                ))}
              </div>
            </div>

            <TerminalPanel title="availability.md">
              <h4 className="text-lg font-semibold text-white mb-4">Let's Work Together</h4>
              <p className="text-gray-300 mb-4">
                I'm available for ML/AI projects, research collaborations, and exciting opportunities. 
                Whether you have a project in mind or just want to chat about AI, I'd love to hear from you.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>- ML/AI Project Development</p>
                <p>- Research Collaborations</p>
                <p>- Model Evaluation & Optimization</p>
              </div>
            </TerminalPanel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <TerminalPanel title="send_message.form" bodyClassName="p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Send Message</h3>
              <form
                action="https://formspree.io/f/xvonakvw"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label htmlFor="email" className="block font-mono text-sm font-medium text-cyan-300 mb-2">
                    email:
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-slate-950/60 border border-cyan-400/10 rounded focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-mono text-sm font-medium text-cyan-300 mb-2">
                    message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-950/60 border border-cyan-400/10 rounded focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-cyan-300 text-slate-950 py-3 px-6 rounded font-semibold hover:bg-cyan-200 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send
                </motion.button>
              </form>
            </TerminalPanel>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
