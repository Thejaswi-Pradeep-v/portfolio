import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-blue-500 font-medium mb-2">What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            I'm currently looking for new opportunities in AI/ML and Full-Stack development. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12"
        >
          <a href="mailto:thejaswipradeep11a@gmail.com" className="glass-card p-6 flex flex-col items-center gap-4 hover:-translate-y-2 hover:border-blue-500/50 transition-all w-full md:w-64">
            <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center">
              <Mail size={24} />
            </div>
            <div className="text-center">
              <h3 className="text-white font-medium mb-1">Email Me</h3>
              <p className="text-sm text-slate-400 break-all">thejaswipradeep11a@gmail.com</p>
            </div>
          </a>

          <a href="tel:+916238542357" className="glass-card p-6 flex flex-col items-center gap-4 hover:-translate-y-2 hover:border-blue-500/50 transition-all w-full md:w-64">
            <div className="w-12 h-12 bg-purple-500/10 text-purple-500 rounded-full flex items-center justify-center">
              <Phone size={24} />
            </div>
            <div className="text-center">
              <h3 className="text-white font-medium mb-1">Call Me</h3>
              <p className="text-sm text-slate-400">+91-6238542357</p>
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="mailto:thejaswipradeep11a@gmail.com" className="inline-block px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]">
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
