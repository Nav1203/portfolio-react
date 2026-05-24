import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#05070a]">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-cyan-300/20" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-cyan-300/10" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <p className="mb-7 font-mono text-sm uppercase tracking-[0.24em] text-cyan-300/80">
            $ whoami
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-normal leading-tight">
            Hi, I'm <br className="sm:hidden" />
            <span className="relative inline-grid min-w-0 text-cyan-200 align-baseline">
              <span className="invisible col-start-1 row-start-1 whitespace-nowrap">{fullText}</span>
              <span className="col-start-1 row-start-1 whitespace-nowrap">
                {text}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-1 inline-block h-12 w-1 align-middle bg-cyan-300 md:h-16"
                />
              </span>
            </span>
          </h1>
          <div className="mb-10 flex w-full max-w-3xl flex-col gap-4 rounded border border-cyan-400/10 bg-slate-950/35 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-mono text-base md:text-lg font-semibold text-cyan-200/90"
            >
              Research Scientist L2 at Infrrd R&D
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mb-14 leading-8"
          >
            Specializing in agentic automation, LLMs, and deep learning systems. 
            Converting complex business problems into intelligent, scalable ML pipelines.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-5 items-start"
        >
          <motion.a
            href="/Navaneeth_resume.pdf"
            download="Navaneeth_Amarnath_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-cyan-300 text-slate-950 px-6 py-3 rounded font-semibold flex items-center gap-2 hover:bg-cyan-200 transition-all duration-300"
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
            className="border border-cyan-400/20 text-gray-300 px-6 py-3 rounded font-semibold flex items-center gap-2 hover:border-cyan-300/40 hover:text-cyan-200 transition-all duration-300"
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
