import React from 'react';
import { motion } from 'framer-motion';
import './PageTransition.css';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      className="page-transition"
      initial={{ 
        opacity: 0,
        scale: 0.95,
        y: 20
      }}
      animate={{ 
        opacity: 1,
        scale: 1,
        y: 0
      }}
      exit={{ 
        opacity: 0,
        scale: 0.95,
        y: -20
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
