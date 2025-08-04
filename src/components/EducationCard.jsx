import React from 'react';
import { motion } from 'framer-motion';

// New, more subtle animation for each card
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const EducationCard = ({ edu }) => {
  const colorVariants = {
    blue: "border-blue-500/50 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10",
    purple: "border-purple-500/50 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10",
  };
  
  const textColorVariants = {
    blue: "text-blue-400",
    purple: "text-purple-400",
  }

  return (
    <motion.div
      variants={cardVariants}
      // h-full ensures cards in the same row have equal height
      // flex and flex-col allow content to be structured vertically
      className={`flex flex-col h-full bg-gray-900/80 backdrop-blur-sm border ${colorVariants[edu.color]} rounded-xl shadow-xl p-6 transition-all duration-300 transform hover:-translate-y-1`}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className={`p-2 bg-gray-800/50 rounded-full mt-1 ${textColorVariants[edu.color]}`}>
           <edu.icon size={28} />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-white text-lg">{edu.institution}</h3>
          <p className={`text-sm font-semibold ${textColorVariants[edu.color]}`}>{edu.degree}</p>
          <p className="text-sm text-gray-400">{edu.details}</p>
        </div>
      </div>

      {/* Body (flex-grow pushes the footer down) */}
      <div className="flex-grow">
        <p className="text-sm text-gray-300">{edu.description}</p>
      </div>
      
      {/* Footer */}
      <div className="border-t border-gray-700/50 mt-4 pt-3 flex justify-between items-center text-sm text-gray-300">
         <span className="font-medium">{edu.period}</span>
         <span className="font-bold text-green-400">{edu.score}</span>
      </div>
    </motion.div>
  );
};

export default EducationCard;