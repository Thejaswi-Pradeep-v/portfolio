import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "Generative AI", "LLMs (Gemini, OpenAI)", "NLP", "Computer Vision"]
    },
    {
      title: "Backend & Cloud",
      skills: ["Python", "Node.js", "Express", "FastAPI", "MongoDB", "SQL", "Google Cloud", "AWS"]
    },
    {
      title: "Frontend & Web",
      skills: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML/CSS", "Vite"]
    },
    {
      title: "Tools & Other",
      skills: ["Git", "Docker", "REST APIs", "Blockchain Basics", "Data Structures", "Algorithms"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Skills</h2>
          <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 group hover:border-blue-500/50 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-6 group-hover:text-blue-400 transition-colors">
                {category.title}
              </h3>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    variants={itemVariants}
                    className="px-4 py-2 bg-slate-800/80 text-slate-300 rounded-full text-sm font-medium border border-slate-700/50 hover:bg-blue-600/20 hover:text-blue-400 hover:border-blue-500/30 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
