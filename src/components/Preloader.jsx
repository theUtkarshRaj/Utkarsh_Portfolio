import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  const name = "Utkarsh Raj";
  const title = "AI Developer & Full Stack Engineer";

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, transitionEnd: { display: 'none' } }}
      transition={{ duration: 0.5, delay: 4 }} // Increased delay for the new animation
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950"
    >
      <div className="text-center">
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="text-4xl md:text-6xl font-extrabold tracking-wider bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4"
          aria-label={name}
        >
          {name.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="text-lg text-gray-400 font-medium"
        >
          {title}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader;
