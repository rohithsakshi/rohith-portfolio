"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUpVariant, containerVariants, itemVariants } from "@/lib/animations";

const featured = {
  title: "Google Data Analytics",
  subtitle: "8-course specialization by Google",
  description:
    "Completed a comprehensive program covering data analysis, visualization, SQL, and real-world case studies.",
  tags: ["Google", "Completed"],
};

const courses = [
  { title: "Data Analysis with Python", provider: "IBM" },
  { title: "Foundations of Business Intelligence", provider: "Google" },
  { title: "Databases and SQL for Science", provider: "IBM" },
  { title: "Data Science Methodology", provider: "IBM" },
  { title: "Python for Data Science", provider: "IBM" },
  { title: "Introduction to Data Engineering", provider: "IBM" },
  { title: "Tools for Data Science", provider: "IBM" },
  { title: "Data Visualization", provider: "Google" },
  { title: "What is Data Science?", provider: "IBM" },
  { title: "Google Sheets", provider: "Google" },
  { title: "SQL for Data Science", provider: "UC Davis" },
  { title: "Data Analysis with R", provider: "Google" },
  { title: "Prepare Data for Exploration", provider: "Google" },
  { title: "Process Data to Clean", provider: "Google" },
];

export default function Certifications() {
  const [expanded, setExpanded] = useState(false);
  const visibleCourses = expanded ? courses : courses.slice(0, 6);

  return (
    <section id="certifications" className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
      <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-cyan-500/5 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.p variants={fadeUpVariant} className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Learning
          </motion.p>
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Certifications & <span className="text-gradient">Continuous Growth.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="group relative glass p-8 md:p-12 rounded-[2rem] border-black/[0.05] hover:border-cyan-500/20 transition-all duration-500 mb-16 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between items-start md:items-center">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 tracking-tight">
                {featured.title}
              </h3>
              <p className="text-cyan-400 font-medium text-sm mb-4">
                {featured.subtitle}
              </p>
              <p className="text-slate-600 leading-relaxed max-w-2xl text-sm mb-6">
                {featured.description}
              </p>
              <div className="flex gap-2">
                {featured.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-3 py-1 uppercase tracking-wider font-bold rounded-full bg-black/5 text-zinc-300 border border-black/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href="https://coursera.org/share/42705211e746f98cbab1c2ebe1d68161"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-500 hover:text-cyan-600 transition-colors"
                >
                  View Certificate <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="w-20 h-20 shrink-0 bg-white/[0.03] rounded-2xl border border-black/[0.05] flex items-center justify-center premium-glow shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <svg viewBox="0 0 24 24" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
          </div>
        </motion.div>

        <motion.div
          key={expanded ? "expanded" : "collapsed"}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          <AnimatePresence>
            {visibleCourses.map((course, i) => (
              <motion.div
                key={course.title + i}
                variants={itemVariants}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group glass p-5 rounded-xl border border-black/[0.03] hover:border-black/10 hover:bg-white/[0.04] transition-all duration-300 cursor-default"
              >
                <h4 className="text-sm font-semibold text-zinc-200 mb-1.5 group-hover:text-cyan-400 transition-colors">
                  {course.title}
                </h4>
                <p className="text-xs text-slate-500 font-medium">
                  {course.provider}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <button
            onClick={() => setExpanded(!expanded)}
            className="px-6 py-2.5 border border-black/[0.05] rounded-full text-xs uppercase tracking-wider font-semibold text-slate-600 hover:text-slate-900 hover:bg-black/5 transition-all duration-300"
          >
            {expanded ? "Show Less" : "View Full Journey"}
          </button>
        </motion.div>
      </div>
    </section>
  );
}