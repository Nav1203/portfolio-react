import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Code, 
  BarChart3,
  Bot,
  FileText,
  Workflow
} from 'lucide-react';
import TerminalPanel from './TerminalPanel';

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
      title: 'LLM',
      icon: Bot,
      skills: [
        { name: 'LLM-based Applications', level: 90 },
        { name: 'Prompt Engineering', level: 85 },
        { name: 'Langchain', level: 80 },
        { name: 'Transformers (HuggingFace)', level: 85 },
        { name: 'PEFT / Fine-tuning', level: 75 },
        { name: 'RAG Systems', level: 85 }
      ]
    },
    {
      title: 'Agentic Frameworks',
      icon: Workflow,
      skills: [
        { name: 'LangGraph', level: 90 },
        { name: 'CrewAI', level: 80 },
        { name: 'Claude Agent SDK', level: 90 },
        { name: 'Autogen', level: 90 },
        { name: 'Letta', level: 80 }
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
    <section id="skills" className="py-20 bg-[#080d14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mb-3 text-center font-mono text-xs uppercase tracking-[0.24em] text-cyan-300/70">$ scan capabilities</p>
          <h2 className="text-4xl font-bold text-center text-white mb-6">Skills & <span className="text-cyan-200">Expertise</span></h2>
          <TerminalPanel title="skills_manifest.yml" className="mx-auto max-w-4xl">
            <p className="text-xl text-gray-300">
              <span className="font-mono text-cyan-300">$ scan --stack --experience</span>
              <br />
              I've developed expertise across machine learning, LLM systems, and research methodologies. 
              Here's my technical skill set based on my experience:
            </p>
          </TerminalPanel>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="w-full max-w-sm"
            >
              <TerminalPanel title={`${category.title.toLowerCase().replace(/\s+/g, '_')}.sh`} className="h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-slate-900/70 border border-cyan-400/10 rounded flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-cyan-300/90" />
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
                      <div className="flex justify-between items-center gap-3">
                        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                        <span className="font-mono text-sm text-cyan-300 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-black/30 border border-cyan-400/[0.07] h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-cyan-300/75 h-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TerminalPanel>
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
              className="px-4 py-2 bg-slate-950/40 border border-cyan-400/10 text-cyan-100/80 rounded text-sm font-mono hover:bg-cyan-950/40 transition-colors duration-200"
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
