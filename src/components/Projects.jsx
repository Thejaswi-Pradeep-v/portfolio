import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "LLM-Powered Lost & Found Management System",
      description: "An intelligent platform integrating Google Gemini AI to automate item matching and analysis. Features location-based proximity matching, image recognition, and an AI chatbot for reporting lost items.",
      techStack: ["React", "Node.js", "Google Gemini AI", "MongoDB", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "CrediLens: Blockchain Product Credibility",
      description: "A decentralized platform ensuring product authenticity through blockchain technology. Provides a transparent ledger for product lifecycles to combat counterfeiting.",
      techStack: ["Solidity", "React", "Web3.js", "Ethereum", "Node.js"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Retail Sales Prediction & Recommendation",
      description: "A machine learning pipeline forecasting retail sales trends and generating personalized product recommendations, improving cross-selling opportunities by 25%.",
      techStack: ["Python", "Scikit-Learn", "Pandas", "Flask", "React"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Customer Segmentation using ML",
      description: "Implemented K-Means clustering and PCA to segment customer demographics and purchasing behavior, enabling highly targeted marketing campaigns.",
      techStack: ["Python", "Jupyter", "Scikit-Learn", "Matplotlib", "Seaborn"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Travel Buddy Full-Stack AI Platform",
      description: "An AI-driven travel planning application that generates custom itineraries based on user preferences, budget constraints, and real-time APIs.",
      techStack: ["React", "Express", "OpenAI API", "PostgreSQL", "Google Maps API"],
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
          <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 mb-8 flex-grow leading-relaxed">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-slate-500">
                {project.techStack.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
