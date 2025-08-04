import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { educationData } from './data/educationData';
import EducationCard from "./EducationCard.jsx";
import { particlesOptions } from './particlesConfig'; // Assuming particlesConfig.js is in the same directory or accessible

// Animation variant for the grid container to stagger children
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Education = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="education" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Replaced animated blobs with the particle background */}
      <Particles
        id="education-particles" // Use a unique id to avoid conflicts
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 via-transparent to-gray-950/90 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          My Academic Journey
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {educationData.map((edu, index) => (
            <EducationCard key={index} edu={edu} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
