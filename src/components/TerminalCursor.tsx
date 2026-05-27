import React from 'react';
import { motion } from 'framer-motion';

const TerminalCursor: React.FC = () => (
  <motion.span
    animate={{ opacity: [1, 0, 1] }}
    transition={{ duration: 0.9, repeat: Infinity }}
    className="ml-2 inline-block h-[1em] w-1 translate-y-[0.12em] bg-cyan-300"
    aria-hidden="true"
  />
);

export default TerminalCursor;
