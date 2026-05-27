import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';
import NeuralBackground from './NeuralBackground';

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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#05070a] py-24 sm:py-28 lg:py-32">
      <NeuralBackground />
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-x-0 top-0 h-px bg-cyan-300/20" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-cyan-300/10" />
      </div>

      <div className="relative z-10 w-full max-w-[min(64rem,92vw)] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="mx-auto w-full max-w-[min(48rem,100%)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 sm:mb-10"
          >
          <p className="mb-5 sm:mb-7 font-mono text-[clamp(0.68rem,1.25vw,0.82rem)] uppercase tracking-[0.24em] text-cyan-300/80">
              $ whoami
            </p>
            <h1 className="text-[clamp(2rem,6.2vw,4rem)] font-bold text-white mb-6 sm:mb-8 tracking-normal leading-[1.05]">
              Hi, I'm <br className="sm:hidden" />
              <span className="relative inline-grid min-w-0 text-cyan-200 align-baseline">
                <span className="invisible col-start-1 row-start-1 whitespace-nowrap">{fullText}</span>
                <span className="col-start-1 row-start-1 whitespace-nowrap">
                  {text}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="ml-1 inline-block h-[0.86em] w-1 align-middle bg-cyan-300"
                  />
                </span>
              </span>
            </h1>
            <div className="mb-8 sm:mb-10 flex w-full flex-col gap-4 rounded border border-cyan-400/10 bg-slate-950/35 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-4">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-mono text-[clamp(0.84rem,1.75vw,1rem)] font-semibold text-cyan-200/90"
              >
                Research Scientist L2 at Infrrd R&D
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-[clamp(0.95rem,2vw,1.12rem)] text-gray-300 mb-10 sm:mb-14 leading-relaxed"
            >
              Specializing in agentic automation, LLMs, and deep learning systems. 
              Converting complex business problems into intelligent, scalable ML pipelines.
            </motion.p>
          </motion.div>

          <div className="flex w-full flex-col items-start gap-10 sm:gap-14">
          <div className="flex w-full flex-col items-center gap-10 sm:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex w-full flex-row gap-3 sm:w-auto sm:gap-5 items-center"
          >
            <motion.a
              href="/Navaneeth_resume.pdf"
              download="Navaneeth_Amarnath_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex min-w-0 flex-1 justify-center bg-cyan-300 text-slate-950 px-3 py-3 sm:min-w-52 sm:flex-none sm:px-6 rounded font-semibold items-center gap-2 hover:bg-cyan-200 transition-all duration-300 text-[clamp(0.76rem,2.6vw,0.92rem)] whitespace-nowrap"
            >
              <Download className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
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
              className="flex min-w-0 flex-1 justify-center border border-cyan-400/20 text-gray-300 px-3 py-3 sm:min-w-52 sm:flex-none sm:px-6 rounded font-semibold items-center gap-2 hover:border-cyan-300/40 hover:text-cyan-200 transition-all duration-300 text-[clamp(0.76rem,2.6vw,0.92rem)] whitespace-nowrap"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
              Contact Me
            </motion.button>
          </motion.div>

          <div className="w-full flex justify-center">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{ opacity: { delay: 1.2, duration: 0.8 }, y: { duration: 2, repeat: Infinity } }}
              onClick={scrollToAbout}
              className="text-gray-400 hover:text-cyan-200 transition-colors duration-300"
              aria-label="Scroll to about section"
            >
              <ChevronDown size={24} />
            </motion.button>
          </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
