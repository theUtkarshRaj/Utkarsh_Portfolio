import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } }
};

const colorThemes = {
  yellow: "text-yellow-400 border-yellow-500/30 hover:border-yellow-500/80 hover:shadow-yellow-500/10",
  blue: "text-blue-400 border-blue-500/30 hover:border-blue-500/80 hover:shadow-blue-500/10",
  red: "text-red-400 border-red-500/30 hover:border-red-500/80 hover:shadow-red-500/10",
  green: "text-green-400 border-green-500/30 hover:border-green-500/80 hover:shadow-green-500/10",
  purple: "text-purple-400 border-purple-500/30 hover:border-purple-500/80 hover:shadow-purple-500/10",
  amber: "text-amber-400 border-amber-500/30 hover:border-amber-500/80 hover:shadow-amber-500/10",
  teal: "text-teal-400 border-teal-500/30 hover:border-teal-500/80 hover:shadow-teal-500/10",
};

const AchievementCard = ({ achievement }) => {
  return (
    <motion.div
      variants={cardVariants}
      className={`flex flex-col h-full bg-gray-900/80 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-1 shadow-lg ${colorThemes[achievement.color]}`}
    >
      <div className="flex-shrink-0 mb-4">
        <achievement.icon className={`h-8 w-8 ${colorThemes[achievement.color]}`} />
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
        <p className="text-gray-300 text-sm">{achievement.description}</p>
      </div>
      {achievement.link && (
        <a 
          href={achievement.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 text-sm font-medium mt-4 text-gray-400 hover:text-white transition-colors"
        >
          View Proof <ExternalLink size={14} />
        </a>
      )}
    </motion.div>
  );
};

export default AchievementCard;