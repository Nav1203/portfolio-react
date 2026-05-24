import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award } from 'lucide-react';
import TerminalPanel from './TerminalPanel';

const Expertise: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const expertiseAreas = [
    {
      id: 1,
      title: 'Document Classification Pipeline',
      description: 'A robust pipeline utilizing Bi-Encoder models to efficiently classify documents across diverse categories, significantly improving classification performance.',
      category: 'ml',
      technologies: ['Python', 'Scikit-learn', 'Transformers', 'PEFT'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
      type: 'project'
    },
    {
      id: 2,
      title: 'Agentic Automation Framework',
      description: 'An innovative framework with multiple collaborating agents to automatically plan, design, code, test, and generate modular pipelines from business logic.',
      category: 'automation',
      technologies: ['Python', 'Autogen', 'Langchain', 'LLMs'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
      type: 'project'
    },
    {
      id: 3,
      title: 'LLM Evaluation & Feedback System',
      description: 'Built an agentic pipeline that uses LLM-as-a-Judge to iteratively improve extraction prompts through feedback loops until desired accuracy is met.',
      category: 'llm',
      technologies: ['LLMs', 'Prompt Engineering', 'Transformers'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
      type: 'project'
    },
    {
      id: 4,
      title: 'Benchmarking & Evaluation Framework',
      description: 'Designed robust frameworks and automated pipelines to benchmark diverse ML and LLM models, streamlining evaluation across metrics.',
      category: 'ml',
      technologies: ['Python', 'MLflow', 'JupyterLab'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
      type: 'project'
    },
    {
      id: 5,
      title: 'Chat-based PDF Data Extractor',
      description: 'An interactive app that allows querying and extracting structured data from PDF documents via conversational LLM-based interface.',
      category: 'llm',
      technologies: ['Python', 'Langchain', 'MongoDB', 'LLMs'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
      type: 'project'
    },
    {
      id: 6,
      title: 'NER with Compact LLMs',
      description: 'Fine-tuned small LLMs to outperform SOTA in Named Entity Recognition on custom datasets, optimizing for both performance and efficiency.',
      category: 'ml',
      technologies: ['Transformers', 'PEFT', 'Python'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
      type: 'project'
    },
    {
      id: 7,
      title: 'Domain-aware RAG Pipeline',
      description: 'Built RAG pipelines to infuse LLMs with domain knowledge, enhancing generation quality and improving few-shot prompting via dynamic example selection.',
      category: 'rag',
      technologies: ['Langchain', 'Retrieval-Augmented Generation', 'MongoDB'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
      type: 'project'
    },
    {
      id: 8,
      title: 'Infrrd.ai at SemEval-2024',
      description: 'RAG-based end-to-end system designed for headline and number generation using domain-specific retrieval and LLM-driven generative decoding.',
      category: 'publication',
      technologies: ['RAG', 'LLMs', 'Fine-tuning', 'Transformers'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
      type: 'publication',
      publication: 'SemEval 2024'
    },
    {
      id: 9,
      title: 'Multi-Stage Retriever Model',
      description: 'A novel document classification strategy using fine-tuned embedding models in multi-stage retrieval pipelines for increased accuracy.',
      category: 'publication',
      technologies: ['Sentence Transformers', 'Embeddings', 'Python', 'Retrieval Pipelines'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
      type: 'publication',
      publication: 'IEEE, Jan 2025'
    }
  ];

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'ML/AI', value: 'ml' },
    { name: 'LLM', value: 'llm' },
    { name: 'RAG', value: 'rag' },
    { name: 'Automation', value: 'automation' },
    { name: 'Publications', value: 'publication' }
  ];

  const filteredExpertise = activeFilter === 'all' 
    ? expertiseAreas 
    : expertiseAreas.filter(area => area.category === activeFilter);

  return (
    <section id="expertise" className="py-20 bg-[#05070a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mb-3 text-center font-mono text-xs uppercase tracking-[0.24em] text-cyan-300/70">$ query applied_work</p>
          <h2 className="text-4xl font-bold text-center text-white mb-6">Areas of <span className="text-cyan-200">Expertise</span></h2>
          <TerminalPanel title="expertise_index.db" className="mx-auto max-w-4xl">
            <p className="text-xl text-gray-300">
              <span className="font-mono text-cyan-300">$ query expertise --notable --applied</span>
              <br />
              Here are some of my key areas of expertise and notable projects. Each represents 
              deep technical knowledge and practical implementation experience.
            </p>
          </TerminalPanel>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-950 border border-cyan-400/20 text-gray-300 hover:bg-cyan-950'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExpertise.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <TerminalPanel title={`item_${area.id}.md`} className="h-full">
                <div className="flex flex-wrap gap-2 mb-4">
                  {area.featured && (
                    <div className="bg-cyan-300/10 border border-cyan-300/20 text-cyan-200/90 px-3 py-1 rounded text-sm font-mono">
                      Featured
                    </div>
                  )}
                  {area.type === 'publication' && (
                    <div className="bg-cyan-300/10 border border-cyan-300/20 text-cyan-200/90 px-3 py-1 rounded text-sm font-mono">
                      <BookOpen className="w-4 h-4 inline mr-1" />
                      Publication
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {area.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {area.description}
                </p>
                {area.type === 'publication' && area.publication && (
                  <div className="mb-4 p-3 bg-cyan-300/5 border border-cyan-300/15 rounded">
                    <div className="flex items-center text-cyan-200/90 text-sm">
                      <Award className="w-4 h-4 mr-2" />
                      Published in: {area.publication}
                    </div>
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  {area.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-950/40 border border-cyan-400/10 text-cyan-100/80 rounded text-sm font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </TerminalPanel>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <TerminalPanel title="collaboration_prompt.txt" className="mx-auto max-w-3xl">
            <p className="text-lg text-gray-300">
              Interested in collaborating on AI/ML projects? Let's discuss your requirements!
            </p>
          </TerminalPanel>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise; 
