import { Github, Linkedin, Mail, Phone, CodeSquare, FileDown } from 'lucide-react';

export const heroData = {
  name: "Utkarsh Raj",
  title: "AI Developer & Full Stack Engineer",
  description: "Passionate about building intelligent systems and scalable applications. Currently pursuing an Integrated Dual Degree in Computer Science and AI at RGIPT.",
  contact: {
    email: "theutkarshraj@gmail.com",
    phone: "+916202537797",
    cv: "../public/Utkarsh_R.pdf" // IMPORTANT: Replace with the actual path to your CV in the `public` folder
  },
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/utkarshraj271023266/",
      icon: Linkedin,
      color: "hover:text-blue-400"
    },
    {
      name: "GitHub",
      url: "https://github.com/theUtkarshRaj",
      icon: Github,
      color: "hover:text-gray-300"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/theutkarshraj/",
      icon: CodeSquare,
      color: "hover:text-yellow-400"
    },
    {
      name: "Email",
      url: "mailto:theutkarshraj@gmail.com",
      icon: Mail,
      color: "hover:text-red-400"
    },
    {
      name: "Phone",
      url: "tel:+916202537797",
      icon: Phone,
      color: "hover:text-green-400"
    }
  ]
};