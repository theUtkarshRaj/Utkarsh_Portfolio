import { Code, Cog, Server, Library, Globe, BrainCircuit } from 'lucide-react';

export const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["C", "C++", "Python", "MATLAB", "MySQL", "HTML5", "CSS3", "JavaScript"],
    color: "from-red-500 to-orange-500",
    borderColor: "hover:border-orange-500/50",
    textColor: "text-orange-400",
    tagColor: "bg-orange-900/50 text-orange-300",
  },
  {
    title: "Frameworks & Runtimes",
    icon: Cog,
    skills: ["Langchain", "TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "FLASK", "ReactJS", "NextJS", "ExpressJS", "NodeJS"],
    color: "from-blue-500 to-cyan-500",
    borderColor: "hover:border-cyan-500/50",
    textColor: "text-cyan-400",
    tagColor: "bg-cyan-900/50 text-cyan-300",
  },
  {
    title: "Developer Tools",
    icon: Server,
    skills: ["Linux", "Git & GitHub", "Windows", "Docker"],
    color: "from-green-500 to-teal-500",
    borderColor: "hover:border-teal-500/50",
    textColor: "text-teal-400",
    tagColor: "bg-teal-900/50 text-teal-300",
  },
  {
    title: "Core Libraries",
    icon: Library,
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Tailwind CSS"],
    color: "from-purple-500 to-pink-500",
    borderColor: "hover:border-pink-500/50",
    textColor: "text-pink-400",
    tagColor: "bg-pink-900/50 text-pink-300",
  },
  {
    title: "Web & Databases",
    icon: Globe,
    skills: ["REST APIs", "MongoDB", "Vector DBs", "Firebase", "Vercel"],
    color: "from-yellow-500 to-amber-500",
    borderColor: "hover:border-amber-500/50",
    textColor: "text-amber-400",
    tagColor: "bg-amber-900/50 text-amber-300",
  },
  {
    title: "Data Science & AI",
    icon: BrainCircuit,
    skills: ["Deep Learning", "CNN", "NLP", "LLMs", "AI Agents", "RAG"],
    color: "from-indigo-500 to-violet-500",
    borderColor: "hover:border-violet-500/50",
    textColor: "text-violet-400",
    tagColor: "bg-violet-900/50 text-violet-300",
  }
];