import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
          <div className="h-[1px] bg-slate-700 flex-grow"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 hover:border-blue-500/50 transition-colors group"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">B.Tech in Computer Science & Engineering</h3>
              <div className="text-blue-500 font-medium text-lg mt-1">SCMS School of Engineering and Technology, Ernakulam, Kerala</div>
              <div className="text-slate-400 font-medium mt-2">CGPA: <span className="text-white">7.0</span></div>
            </div>
            <div className="text-slate-400 font-medium mt-4 md:mt-0 bg-slate-800/50 px-4 py-1.5 rounded-full border border-slate-700/50 inline-block w-max self-start">
              2022 - 2026
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="text-white font-medium mb-2">Relevant Coursework:</h4>
            <ul className="flex flex-wrap gap-2 text-slate-400">
              <li className="bg-slate-800/50 px-3 py-1 rounded-md text-sm border border-slate-700/50">Machine Learning</li>
              <li className="bg-slate-800/50 px-3 py-1 rounded-md text-sm border border-slate-700/50">Artificial Intelligence</li>
              <li className="bg-slate-800/50 px-3 py-1 rounded-md text-sm border border-slate-700/50">Data Structures & Algorithms</li>
              <li className="bg-slate-800/50 px-3 py-1 rounded-md text-sm border border-slate-700/50">Database Management Systems</li>
              <li className="bg-slate-800/50 px-3 py-1 rounded-md text-sm border border-slate-700/50">Web Engineering</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
