import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
          <div className="h-[1px] bg-slate-700 flex-grow max-w-xs"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8 text-slate-300 text-lg leading-relaxed"
          >
            <div className="flex justify-center md:justify-start">
              <div className="relative shrink-0">
                <div
                  className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 opacity-40 blur-md"
                  aria-hidden
                />
                <img
                  src="/profile.png"
                  alt="Thejaswi Pradeep"
                  className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full object-cover ring-2 ring-slate-700/80 shadow-2xl"
                  width={208}
                  height={208}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="space-y-6">
              <p>
                Hello! I'm <span className="text-blue-400 font-medium">Thejaswi Pradeep</span>, an AI/ML Engineer passionate about building intelligent systems that solve real-world problems. My journey in tech is driven by a deep fascination with how large language models and machine learning can transform digital experiences.
              </p>
              <p>
                I specialize in developing <span className="text-white font-medium">Full-Stack AI Solutions</span>, bridging the gap between complex machine learning models and intuitive user interfaces. Whether it's crafting an LLM-powered application or building a highly accurate recommendation system, I focus on performance, scalability, and user-centric design.
              </p>
              <p>
                Currently, I'm focused on creating robust platforms that leverage Generative AI, natural language processing, and modern web frameworks to deliver premium, intelligent applications.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative glass-card p-8 h-full flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-semibold text-xl mb-2">My Philosophy</h3>
                  <p className="text-slate-400">AI shouldn't just be an impressive backend feature; it should be seamlessly integrated into beautiful, responsive interfaces that delight users.</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-xl mb-2">What I Do</h3>
                  <ul className="space-y-2 text-slate-400">
                    <li className="flex items-center gap-2"><span className="text-blue-500">▹</span> Large Language Model Integration</li>
                    <li className="flex items-center gap-2"><span className="text-blue-500">▹</span> Predictive Analytics & Recommendation</li>
                    <li className="flex items-center gap-2"><span className="text-blue-500">▹</span> Modern Web Application Development</li>
                    <li className="flex items-center gap-2"><span className="text-blue-500">▹</span> AI Agent Development</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
