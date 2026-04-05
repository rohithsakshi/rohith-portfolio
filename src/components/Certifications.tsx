"use client";

import { motion, type Variants } from "framer-motion";
import { useState } from "react";

// ✅ GLOBAL EASING (CONSISTENT UX)
const easeOut = [0.22, 1, 0.36, 1] as const;

// 🎬 VARIANTS
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut, // ✅ FIXED
    },
  },
};

// 📦 DATA
const featured = {
  title: "Google Data Analytics Specialization",
  subtitle: "8-course specialization by Google",
  description:
    "Completed a comprehensive program covering data analysis, visualization, SQL, and real-world case studies.",
  tags: ["Google", "Completed"],
};

const courses = [
  { title: "Data Analysis with Python", provider: "IBM" },
  { title: "Foundations of Business Intelligence", provider: "Google" },
  { title: "Databases and SQL for Data Science", provider: "IBM" },
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
  { title: "Process Data from Dirty to Clean", provider: "Google" },
];

export default function Certifications() {
  const [expanded, setExpanded] = useState(false);

  const visibleCourses = expanded ? courses : courses.slice(0, 6);

  return (
    <section className="py-24 md:py-32 bg-black text-white relative overflow-hidden">
      
      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,rgba(255,255,255,0.05),transparent_40%)] blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4">
            Learning
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold">
            Certifications & Learning
          </h2>
        </motion.div>

        {/* FEATURED */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: easeOut }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="relative p-8 md:p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md mb-16 group"
        >
          {/* HOVER GLOW */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition rounded-2xl pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]"></div>

          <h3 className="text-2xl font-semibold mb-2">
            {featured.title}
          </h3>

          <p className="text-white/50 mb-4">
            {featured.subtitle}
          </p>

          <p className="text-white/60 mb-6 max-w-2xl leading-relaxed">
            {featured.description}
          </p>

          <div className="flex gap-2">
            {featured.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/70 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* GRID */}
        <motion.div
          key={expanded ? "expanded" : "collapsed"}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {visibleCourses.map((course, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -6, scale: 1.03 }}
              className="relative p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition group cursor-pointer"
            >
              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition rounded-xl pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]"></div>

              <h4 className="text-sm font-medium mb-2 text-white/90">
                {course.title}
              </h4>

              <p className="text-xs text-white/50">
                {course.provider}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, ease: easeOut }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setExpanded(!expanded)}
            className="px-6 py-3 border border-white/20 rounded-full text-sm hover:bg-white/10 transition"
          >
            {expanded
              ? "Show Less"
              : "View Full Learning Journey →"}
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}