import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Briefcase, Award } from "lucide-react";
import ReactMarkdown from "react-markdown";

// Animation for each card item (no changes here)
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const ExperienceCard = ({ experience }) => {
  // Get the current year to conditionally style the "Present" date
  const currentYear = new Date().getFullYear();
  const isPresent = experience.period.includes("Present") || experience.period.includes(String(currentYear));

  return (
    <motion.article
      variants={itemVariants}
      // Added flex classes for horizontal layout on large screens (lg:)
      className="group relative flex flex-col lg:flex-row gap-y-6 lg:gap-x-8 bg-gray-900/50 rounded-2xl p-6 border border-gray-700/50 transition-all duration-300
                 hover:border-blue-500/80 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1"
    >
      {/* ====== Left Column: Metadata ====== */}
      <div className="flex-shrink-0 lg:w-1/3">
        <header className="flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-gray-800 border border-gray-700 text-blue-400 group-hover:bg-blue-900/40 group-hover:text-blue-300 transition-colors">
              <Briefcase size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-100">{experience.title}</h3>
              <p className="text-blue-400 font-medium">{experience.company}</p>
            </div>
          </div>
          <div className="pl-1 text-gray-400">
             <p className={`text-sm font-semibold ${isPresent ? 'text-teal-400' : 'text-gray-400'}`}>
                {experience.period}
             </p>
            <p className="text-sm">{experience.location}</p>
             {experience.certificate && (
              <a href={experience.certificate} target="_blank" rel="noopener noreferrer"
                 className="mt-2 inline-flex items-center gap-1.5 text-teal-400 hover:text-teal-300 transition-colors text-sm">
                View Certificate <ExternalLink size={14} />
              </a>
            )}
          </div>
        </header>
      </div>

      {/* ====== Right Column: Achievements ====== */}
      {/* This column has a left border on large screens to create a visual separator */}
      <div className="flex-1 lg:border-l lg:border-gray-700/50 lg:pl-8">
        {/* The top border is now hidden on large screens (lg:border-t-0) */}
        <ul className="space-y-3 border-t border-gray-700/50 pt-6 lg:border-t-0 lg:pt-0">
          {experience.achievements.map((achievement, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-300">
              <Award size={18} className="mt-1 flex-shrink-0 text-yellow-500/70" />
              <ReactMarkdown
                components={{
                  strong: ({ ...props }) => <strong className="font-semibold text-gray-100 group-hover:text-white transition-colors" {...props} />,
                  p: ({ ...props }) => <p className="inline" {...props} />
                }}
              >
                {achievement}
              </ReactMarkdown>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
};

export default ExperienceCard;