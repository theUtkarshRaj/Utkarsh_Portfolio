import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Mail, Linkedin, Github, CodeSquare } from 'lucide-react';
import { particlesOptions } from './particlesConfig'; // Assuming this config is available
import { heroData } from './data/heroConfig'; // Re-using social links for consistency

const Footer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-gray-950 py-20 overflow-hidden border-t border-gray-800">
      <Particles
        id="footer-particles"
        init={particlesInit}
        options={{ ...particlesOptions, particles: { ...particlesOptions.particles, number: { value: 40 } } }} // Fewer particles for the footer
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/80 to-transparent z-10"></div>

      <div className="container mx-auto px-4 text-center relative z-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Let's Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="flex justify-center flex-wrap gap-4 mb-12"
        >
          <a href={`mailto:${heroData.contact.email}`} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
            <Mail size={20} />
            Email Me
          </a>
          <a href={heroData.socials.find(s => s.name === "LinkedIn").url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
            <Linkedin size={20} />
            LinkedIn
          </a>
        </motion.div>
        
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex justify-center space-x-6 mb-6">
            {heroData.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={`text-gray-500 transition-colors duration-300 transform hover:scale-125 ${social.color}`}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            © {currentYear} Utkarsh Raj
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
