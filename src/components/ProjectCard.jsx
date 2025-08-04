import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, CheckCircle } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="flex flex-col h-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-lg p-6 transition-all duration-300 transform hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-blue-500/10"
    >
      {/* Card Header */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white leading-tight">{project.title}</h3>
        <span className="text-sm text-gray-400 flex-shrink-0 ml-4">{project.date}</span>
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 mb-4">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium">
          <Github size={16} /> GitHub
        </a>
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors text-sm font-medium">
            <ExternalLink size={16} /> Live Demo
          </a>
        )}
      </div>

      {/* Tech Stack */}
      <div className="mb-5">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span key={i} className="text-xs font-medium bg-blue-900/50 text-blue-300 px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-3 flex-grow">
        {project.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle size={18} className="text-green-500/70 mt-0.5 flex-shrink-0" />
            <p className="text-gray-300 text-sm">{feature}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ProjectCard;