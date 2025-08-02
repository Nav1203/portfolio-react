import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = 'Navaneeth Amarnath';
  const typingSpeed = 150; // milliseconds per character
  const deletingSpeed = 100; // milliseconds per character when deleting
  const pauseTime = 2000; // pause time before starting to delete

  useEffect(() => {
    let currentIndex = 0;
    let timer: NodeJS.Timeout;

    const typeText = () => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
        timer = setTimeout(typeText, typingSpeed);
      } else {
        // Finished typing, pause then start deleting
        setTimeout(() => {
          setIsDeleting(true);
          deleteText();
        }, pauseTime);
      }
    };

    const deleteText = () => {
      if (currentIndex > 0) {
        currentIndex--;
        setText(fullText.slice(0, currentIndex));
        timer = setTimeout(deleteText, deletingSpeed);
      } else {
        // Finished deleting, start typing again
        setIsDeleting(false);
        setTimeout(typeText, 500);
      }
    };

    typeText();

    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              {text}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1 h-16 bg-green-400 ml-1"
              />
            </span>
          </h1>
          <div className="py-4 px-6 md:py-10 md:px-14 mb-8 inline-block align-baseline" style={{ lineHeight: 1.25 }}>
                      <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400"
            style={{ lineHeight: '1.25', display: 'inline-block', verticalAlign: 'bottom' }}
          >
            Machine Learning Engineer And Researcher
          </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12"
          >
            Specializing in agentic automation, LLMs, and deep learning systems. 
            Converting complex business problems into intelligent, scalable ML pipelines.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="https://navaneeth-resume.tiiny.site"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
          >
            <Download size={20} />
            Download Resume
          </motion.a>
          
          <motion.button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-gray-600 text-gray-300 px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:border-green-400 hover:text-green-400 transition-all duration-300"
          >
            <Mail size={20} />
            Contact Me
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <ChevronDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 