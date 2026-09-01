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
    <section id="certifications" className="relative py-24 md:py-32 bg-[#0A0A0D] overflow-hidden selection:bg-[#9B3CFF]/30 selection:text-white">
      <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-[#9B3CFF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-[#9B3CFF]" />
            <motion.p variants={fadeUpVariant} className="text-[#A1A1AA] text-[10px] font-semibold tracking-[0.3em] uppercase">
              Learning
            </motion.p>
          </div>
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Certifications & <br className="hidden sm:block"/>
            <span className="text-[#9B3CFF]">Continuous Growth.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="group relative bg-[#101014] p-8 md:p-12 border-l-4 border-[#9B3CFF] hover:bg-[#15151A] hover:shadow-2xl transition-all duration-500 mb-16 overflow-hidden"
        >
          <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between items-start md:items-center">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-[#9B3CFF] transition-colors duration-300">
                {featured.title}
              </h3>
              <p className="text-[#9B3CFF] font-medium text-sm mb-4 tracking-wide uppercase">
                {featured.subtitle}
              </p>
              <p className="text-[#A1A1AA] leading-relaxed max-w-2xl text-sm mb-6 font-light">
                {featured.description}
              </p>
              <div className="flex gap-4">
                {featured.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] uppercase tracking-widest font-bold text-zinc-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <a
                  href="https://coursera.org/share/42705211e746f98cbab1c2ebe1d68161"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-2 border border-white/20 text-xs font-bold uppercase tracking-[0.15em] text-white hover:bg-[#9B3CFF] hover:border-[#9B3CFF] transition-colors duration-300"
                >
                  View Certificate <span>→</span>
                </a>
              </div>
            </div>
            <div className="w-20 h-20 shrink-0 bg-[#050505] rounded-full border border-white/10 flex items-center justify-center shadow-sm">
              <svg viewBox="0 0 24 24" className="w-10 h-10 transition-transform duration-500 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg">
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
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {visibleCourses.map((course, i) => (
              <motion.div
                key={course.title + i}
                variants={itemVariants}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="group border-b border-white/5 pb-4 hover:border-[#9B3CFF] transition-colors duration-300"
              >
                <h4 className="text-sm font-bold text-white mb-1.5 group-hover:text-[#9B3CFF] transition-colors">
                  {course.title}
                </h4>
                <p className="text-xs text-zinc-500 font-light tracking-wide uppercase">
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
          className="flex justify-center mt-16"
        >
          <button
            onClick={() => setExpanded(!expanded)}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-[#9B3CFF] transition-colors duration-300"
          >
            {expanded ? "Show Less" : "View Full Archive"}
            <span className="group-hover:translate-y-1 transition-transform">↓</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}