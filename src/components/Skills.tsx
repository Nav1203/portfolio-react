import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Code, 
  Zap,
  BarChart3,
  Cpu,
  Globe,
  Bot,
  FileText
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Machine Learning',
      icon: Brain,
      skills: [
        { name: 'PyTorch', level: 85 },
        { name: 'Generative AI', level: 85 },
        { name: 'Reinforcement Learning', level: 85 },
        { name: 'Computer Vision', level: 88 },
        { name: 'TensorFlow', level: 85 }
      ]
    },
    {
      title: 'Programming & Tools',
      icon: Code,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'SQL', level: 75},
        { name: 'MongoDB', level: 75 },
        { name: 'Object-oriented Programming', level: 85 },
        { name: 'Data Structures & Algorithms', level: 90 }
      ]
    },
    {
      title: 'LLM & Agentic Systems',
      icon: Bot,
      skills: [
        { name: 'LLM-based Applications', level: 90 },
        { name: 'Prompt Engineering', level: 85 },
        { name: 'Agentic Automation', level: 90 },
        { name: 'Autogen', level: 75 },
        { name: 'Langchain', level: 80 },
        { name: 'Transformers (HuggingFace)', level: 85 },
        { name: 'PEFT', level: 75 }
      ]
    },
    {
      title: 'Research & Evaluation',
      icon: FileText,
      skills: [
        { name: 'Evaluation Frameworks', level: 90 },
        { name: 'Model Benchmarking', level: 85 },
        { name: 'Dataset Curation', level: 80 },
        { name: 'Paper Writing & Publication', level: 75 }
      ]
    },
    {
      title: 'Data Science',
      icon: BarChart3,
      skills: [
        { name: 'Pandas', level: 80},
        { name: 'NumPy', level: 80},
        { name: 'Matplotlib', level: 85 },
        { name: 'Seaborn', level: 80 },
        { name: 'Jupyter', level: 95 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I've developed expertise across machine learning, LLM systems, and research methodologies. 
            Here's my technical skill set based on my experience:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-700 w-full max-w-sm"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-900 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      <span className="text-sm text-green-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-8">Research & Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Statistical Analysis', 'Research Design', 'Academic Writing', 'Problem Solving',
              'Data Visualization', 'Model Optimization', 'Cross-functional Collaboration', 
              'Technical Documentation', 'Mentoring', 'Project Management', 'Git', 'LaTeX'
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-green-900 text-green-300 rounded-full text-sm font-medium hover:bg-green-800 transition-colors duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 