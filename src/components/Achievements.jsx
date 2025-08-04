import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { achievements } from './data/achievementsData';
import AchievementCard from './AchievementCard';
import { particlesOptions } from './particlesConfig';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Achievements = () => {
  const [showAll, setShowAll] = useState(false);
  const achievementsToShow = showAll ? achievements : achievements.slice(0, 6);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="achievements" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Replaced static background with the Particles component */}
      <Particles
        id="achievements-particles"
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
          Achievements & Recognition
        </motion.h2>
        
        <motion.div
          key={achievementsToShow.length}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievementsToShow.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} />
          ))}
        </motion.div>

        {achievements.length > 6 && (
          <div className="text-center mt-12">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? 'Show Less' : 'Show More'}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;
