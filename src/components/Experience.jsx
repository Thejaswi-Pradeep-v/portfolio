import { motion } from 'framer-motion';
import { Briefcase, Code2, GraduationCap } from 'lucide-react';

const Experience = () => {
  /** Reverse-chronological for quick scanning */
  const internships = [
    {
      role: 'UI/UX Intern',
      org: 'Cognifyz Technologies',
      period: '2025',
      bullets: [
        'Designed responsive, user-centred UI prototypes using Figma for AI-powered product workflows.',
        'Collaborated with cross-functional teams to translate complex AI system requirements into clean, intuitive interfaces.',
      ],
    },
    {
      role: 'Machine Learning & AI Intern',
      org: 'ICT Academy of Kerala',
      period: 'Oct 2024',
      bullets: [
        'Developed and deployed AI-based predictive models and machine learning algorithms for real-world classification and regression problems.',
        'Performed data preprocessing, feature engineering, and model evaluation to optimise performance metrics.',
      ],
    },
    {
      role: 'AWS Cloud Intern',
      org: 'IIIT Kottayam',
      period: 'May 2023',
      bullets: [
        'Worked with AWS cloud infrastructure and deployment basics, including compute, storage, and networking services.',
        'Gained foundational knowledge in scalable cloud architecture relevant to AI/ML deployment pipelines.',
      ],
    },
  ];

  const independentProjects = [
    {
      name: 'LLM-Powered Lost & Found System',
      tag: 'Independent · Full-stack + Gemini integration',
      bullets: [
        'Self-driven build: reporting and matching flows backed by structured prompts and API design—not a generic chat-only surface.',
        'Integrated persistence and backend routes so item metadata and retrieval behave reliably for real campus-style scenarios.',
        'Iterated on edge cases (ambiguous descriptions, partial matches) with a learning-first mindset and measurable improvements.',
      ],
    },
    {
      name: 'Retail Sales Prediction System',
      tag: 'Independent · ML forecasting & recommendations',
      bullets: [
        'Owned an end-to-end ML workflow for sales forecasting and recommendation-style outputs using Python and classical models.',
        'Focused on reproducible preprocessing, evaluation metrics, and clear limits of the dataset—no inflated business claims.',
        'Shipped predictions through a lightweight app/API layer to practice the path from experimentation to something others can run.',
      ],
    },
  ];

  const academicProjects = [
    {
      name: 'CrediLens',
      tag: 'College project · Blockchain product credibility',
      bullets: [
        'Team-oriented college build exploring product authenticity; implemented contract and web layers for a transparency-first journey.',
        'Connected React to on-chain reads/writes with practical error handling and wallet UX suitable for demos and course milestones.',
        'Practiced problem decomposition across Solidity, Node tooling, and frontend state with faculty/peer feedback cycles.',
      ],
    },
    {
      name: 'Travel Buddy',
      tag: 'College project · Full-stack AI travel planner',
      bullets: [
        'Delivered a preference-driven planner with React and Express as part of coursework, combining APIs with LLM itinerary drafts.',
        'Handled validation, service boundaries, and client integration so features fail clearly and stay easy to extend for grading demos.',
        'Applied basic deployment and environment configuration so the project could be presented beyond localhost.',
      ],
    },
  ];

  const sectionTitle = (icon, label) => (
    <div className="flex items-center gap-3 mb-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20">
        {icon}
      </div>
      <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">{label}</h3>
    </div>
  );

  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Experience</h2>
            <div className="h-px max-w-xs flex-grow bg-slate-700" />
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
            B.Tech Computer Science (2026). Internships in ML/AI, product UI/UX, and cloud—alongside college builds and independent
            full-stack work—summarised honestly for software engineering, AI/ML, and full-stack roles.
          </p>
        </motion.div>

        {/* Timeline rail — SaaS-style vertical accent */}
        <div className="relative">
          <div
            className="pointer-events-none absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-slate-600/60 to-transparent md:block md:translate-x-[11px]"
            aria-hidden
          />

          <div className="space-y-16 md:space-y-20 md:pl-10">
            {/* Internships */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              {sectionTitle(<Briefcase className="h-5 w-5" aria-hidden />, 'Internships')}
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {internships.map((job, index) => (
                  <motion.div
                    key={`${job.org}-${job.period}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className="glass-card group relative flex h-full flex-col overflow-hidden p-6 transition-all hover:-translate-y-1 hover:border-blue-500/50"
                  >
                    <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-500 to-violet-500 opacity-80" aria-hidden />
                    <div className="pl-4">
                      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                        <h4 className="text-base font-semibold leading-snug text-white md:text-lg">{job.role}</h4>
                        <span className="shrink-0 rounded-full border border-slate-600/80 bg-slate-900/50 px-2.5 py-0.5 text-xs font-medium text-slate-300">
                          {job.period}
                        </span>
                      </div>
                      <p className="mb-4 text-sm font-medium text-blue-400/95">{job.org}</p>
                      <ul className="mt-auto space-y-2.5 text-sm text-slate-400">
                        {job.bullets.map((item, i) => (
                          <li key={i} className="flex gap-2.5 leading-relaxed">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-400" aria-hidden />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Independent */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 }}
            >
              {sectionTitle(<Code2 className="h-5 w-5" aria-hidden />, 'Independent project experience')}
              <div className="grid gap-6 md:grid-cols-2">
                {independentProjects.map((project, index) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className="glass-card flex h-full flex-col p-6 transition-all hover:-translate-y-1 hover:border-blue-500/50"
                  >
                    <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                      <h4 className="text-lg font-semibold text-white group-hover:text-blue-400">{project.name}</h4>
                      <span className="rounded-md bg-slate-900/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-400 ring-1 ring-slate-600/60">
                        Independent
                      </span>
                    </div>
                    <p className="mb-4 text-xs font-medium text-blue-400/90">{project.tag}</p>
                    <ul className="mt-auto space-y-2.5 text-sm text-slate-400">
                      {project.bullets.map((b, i) => (
                        <li key={i} className="flex gap-2.5 leading-relaxed">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-500" aria-hidden />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Academic */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 }}
            >
              {sectionTitle(<GraduationCap className="h-5 w-5" aria-hidden />, 'College & academic project experience')}
              <div className="grid gap-6 lg:grid-cols-2">
                {academicProjects.map((project, index) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className="glass-card flex h-full flex-col p-6 transition-all hover:-translate-y-1 hover:border-blue-500/50 md:p-8"
                  >
                    <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                      <h4 className="text-xl font-semibold text-white">{project.name}</h4>
                      <span className="rounded-md bg-violet-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-violet-300 ring-1 ring-violet-500/30">
                        College
                      </span>
                    </div>
                    <p className="mb-4 text-sm font-medium text-slate-400">{project.tag}</p>
                    <ul className="space-y-2.5 text-sm text-slate-400 md:text-base">
                      {project.bullets.map((b, i) => (
                        <li key={i} className="flex gap-3 leading-relaxed">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400/80" aria-hidden />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.08 }}
                  className="glass-card flex flex-col justify-center p-6 ring-1 ring-slate-700/60 md:p-8"
                >
                  <h4 className="mb-2 text-lg font-semibold text-white">Coursework &amp; continuous learning</h4>
                  <p className="mb-4 text-sm text-slate-400">
                    Complements project work with structured study in ML, AI, DSA, databases, and web engineering—applied through labs,
                    assignments, and peer collaboration at SCMS School of Engineering and Technology.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex gap-2">
                      <span className="text-blue-400">▹</span>
                      Hands-on practice integrating models and APIs, not only theory.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-400">▹</span>
                      Habit of shipping small, documented milestones and seeking feedback early.
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
