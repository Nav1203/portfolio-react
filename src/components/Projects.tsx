import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award } from 'lucide-react';

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
    <section id="expertise" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-4">Areas of Expertise</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my key areas of expertise and notable projects. Each represents 
            deep technical knowledge and practical implementation experience.
          </p>
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
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
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
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700"
            >
              <div className="relative p-6 bg-gradient-to-br from-gray-800 to-gray-900 border-b border-gray-700">
                <div className="flex justify-between items-start mb-4">
                  {area.featured && (
                    <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                  {area.type === 'publication' && (
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      <BookOpen className="w-4 h-4 inline mr-1" />
                      Publication
                    </div>
                  )}
                </div>

              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {area.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {area.description}
                </p>
                {area.type === 'publication' && area.publication && (
                  <div className="mb-4 p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
                    <div className="flex items-center text-blue-300 text-sm">
                      <Award className="w-4 h-4 mr-2" />
                      Published in: {area.publication}
                    </div>
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  {area.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-6">
            Interested in collaborating on AI/ML projects? Let's discuss your requirements!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise; 