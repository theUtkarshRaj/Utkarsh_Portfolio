import React, { useCallback } from 'react';
import { ChevronDown, FileDown, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { heroData } from './data/heroConfig';
import { particlesOptions } from './particlesConfig';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const HeroSection = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gray-950">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 via-transparent to-gray-950/80 z-10"></div>

      <div className="container relative z-20 px-4 mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {heroData.name}
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-4 text-xl font-semibold tracking-wide text-gray-200 md:text-2xl">
            {heroData.title}
          </motion.p>
          
          <motion.p variants={itemVariants} className="max-w-xl mx-auto mt-6 text-lg text-gray-400">
            {heroData.description}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <a
              href={`mailto:${heroData.contact.email}`}
              className="flex items-center gap-2 px-6 py-3 font-semibold text-white transition-all duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
            >
              <Send size={20} /> Get In Touch
            </a>
            <a
              href={heroData.contact.cv}
              download
              className="flex items-center gap-2 px-6 py-3 font-semibold text-white transition-all duration-300 transform bg-gray-700 rounded-lg hover:bg-gray-600 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-500/50"
            >
              <FileDown size={20} /> Download CV
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center mt-12 space-x-6">
            {heroData.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={`text-gray-400 transition-colors duration-300 transform hover:scale-125 ${social.color}`}
              >
                <social.icon size={28} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute z-20 transform -translate-x-1/2 bottom-10 left-1/2"
      >
        <ChevronDown size={32} className="text-gray-500 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;