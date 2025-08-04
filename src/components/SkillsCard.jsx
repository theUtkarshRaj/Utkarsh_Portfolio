import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const SkillCard = ({ category }) => {
  return (
    <motion.div
      variants={cardVariants}
      className={`bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-1 ${category.borderColor} hover:shadow-lg hover:shadow-current/10`}
    >
      <div className="flex items-center gap-4 mb-5">
        <category.icon className={category.textColor} size={28} />
        <h3 className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
          {category.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <span key={i} className={`font-medium px-3 py-1 rounded-full text-sm transition-colors ${category.tagColor}`}>
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;