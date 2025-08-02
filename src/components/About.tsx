import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Mail, Phone, Github, Linkedin } from 'lucide-react';

const About: React.FC = () => {
  const experiences = [
    {
      year: '2024 – Present',
      title: 'Machine Learning Engineer',
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
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-4">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm an innovative Machine Learning Engineer with 2 years of experience at Infrrd, specializing in agentic automation, LLMs, and deep learning systems. I'm passionate about converting complex business problems into intelligent, scalable ML pipelines and generative AI systems.
          </p>
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
            <h3 className="text-2xl font-semibold text-white mb-6">Personal Information</h3>
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
                  <div className="w-10 h-10 bg-green-900 rounded-full flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                          <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/Nav1203"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-900 transition-colors duration-200"
              >
                <Github className="w-5 h-5 text-gray-300" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/in/navaneeth-amarnath/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-900 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5 text-gray-300" />
              </motion.a>
            </div>
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 bg-green-500 rounded-full -ml-2"></div>
                  <div className="ml-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-green-400">{exp.year}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                    <p className="text-green-400 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            I'm focused on building intelligent systems that push the boundaries of what's possible with AI and automation. Whether it's through agentic pipelines, generative workflows, or rigorous evaluation tools, I strive to combine practical utility with research-backed solutions. I believe in lifelong learning, reproducible research, and crafting tech that adapts and improves with feedback.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 