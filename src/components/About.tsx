import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Github, Linkedin } from 'lucide-react';
import TerminalPanel from './TerminalPanel';

const About: React.FC = () => {
  const experiences = [
    {
      year: 'Apr 2026 – Present',
      title: 'Research Scientist L2',
      company: 'Infrrd',
      description: 'Leading advanced research initiatives in agentic automation and large-scale AI systems. Driving next-generation intelligent pipelines and mentoring junior researchers.'
    },
    {
      year: '2024 – 2026',
      title: 'Research Scientist L1',
      company: 'Infrrd',
      description: 'Built agentic automation frameworks with multiple collaborating agents. Developed document classification pipelines using Bi-encoders. Created LLM feedback loops using Judge-based extraction refinement. Worked on chatbots, computer vision, and model evaluation pipelines.'
    },
    {
      year: '2023 – 2024',
      title: 'ML Research Intern',
      company: 'Infrrd',
      description: 'Fine-tuned compact LLMs for NER tasks surpassing SOTA benchmarks. Built RAG-based systems to enhance LLM prompting. Designed datasets and benchmarking tools for ML evaluation.'
    }
  ];

  const personalInfo = [
    { icon: MapPin, label: 'Location', value: 'Bangalore, India' },
    { icon: Mail, label: 'Email', value: 'navaneethamarnath@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 9188590190' }
  ];

  return (
    <section id="about" className="py-20 bg-[#05070a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mb-3 text-center font-mono text-xs uppercase tracking-[0.24em] text-cyan-300/70">$ cat about_me</p>
          <h2 className="text-4xl font-bold text-center text-white mb-6">About <span className="text-cyan-200">Me</span></h2>
          <TerminalPanel title="about_me.sh" className="mx-auto max-w-4xl">
            <p className="text-xl text-gray-300">
              <span className="font-mono text-cyan-300">$ cat profile.md</span>
              <br />
              I'm an innovative Research Scientist with 3 years of experience at Infrrd, specializing in agentic automation, LLMs, and deep learning systems. I'm passionate about converting complex business problems into intelligent, scalable ML pipelines and generative AI systems.
            </p>
          </TerminalPanel>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <TerminalPanel title="personal_info.json" className="h-full">
              <h3 className="font-mono text-lg font-semibold uppercase tracking-wide text-cyan-300 mb-6">Personal Information</h3>
              <div className="space-y-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-10 h-10 bg-slate-900/70 border border-cyan-400/10 rounded flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-cyan-300/90" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-6">
                <h4 className="font-mono text-sm font-semibold uppercase tracking-wide text-cyan-300 mb-4">Social Links</h4>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="https://github.com/Nav1203"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-900/70 border border-cyan-400/10 rounded flex items-center justify-center hover:bg-cyan-950/60 transition-colors duration-200"
                  >
                    <Github className="w-5 h-5 text-gray-300" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="https://www.linkedin.com/in/navaneeth-amarnath/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-900/70 border border-cyan-400/10 rounded flex items-center justify-center hover:bg-cyan-950/60 transition-colors duration-200"
                  >
                    <Linkedin className="w-5 h-5 text-gray-300" />
                  </motion.a>
                </div>
              </div>
            </TerminalPanel>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <TerminalPanel title="experience.log" className="h-full">
              <h3 className="font-mono text-lg font-semibold uppercase tracking-wide text-cyan-300 mb-6">Experience</h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative border-l border-cyan-400/20 pl-6"
                  >
                    <div className="absolute left-0 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-300/80 shadow-lg shadow-cyan-300/20"></div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-mono text-sm font-medium text-cyan-300">{exp.year}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                    <p className="text-cyan-200/80 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </TerminalPanel>
          </motion.div>
        </div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <TerminalPanel title="research_focus.txt" className="mx-auto max-w-4xl">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm focused on building intelligent systems that push the boundaries of what's possible with AI and automation. Whether it's through agentic pipelines, generative workflows, or rigorous evaluation tools, I strive to combine practical utility with research-backed solutions. I believe in lifelong learning, reproducible research, and crafting tech that adapts and improves with feedback.
            </p>
          </TerminalPanel>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 
