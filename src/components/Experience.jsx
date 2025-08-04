import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { experiences } from "./data/ExperienceData";
import ExperienceCard from "./ExperienceCard.jsx";
import { particlesOptions } from './particlesConfig';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const headerVariants = {
  hidden: { opacity: 0, y: -40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Experience = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="experience" className="relative py-24 bg-gray-950 overflow-hidden">
      {/* Replaced the static pattern with the particle background */}
      <Particles
        id="experience-particles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 via-transparent to-gray-950/90 z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.h2
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Professional Journey
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          {experiences.map((exp) => (
            <ExperienceCard key={exp.company} experience={exp} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
