"use client";

import { motion, type Variants } from "framer-motion";

// ✅ GLOBAL EASING (CONSISTENT ACROSS APP)
const easeOut = [0.22, 1, 0.36, 1] as const;

// 🎬 VARIANTS
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOut, // ✅ FIXED
    },
  },
};

// 📦 DATA
const experiences = [
  {
    company: "YaaRCubes",
    role: "Full Stack Developer",
    duration: "Aug 2024 – Present",
    description:
      "Building cross-platform and web applications with a focus on performance, scalability, and clean architecture.",
    highlights: [
      "Developed mobile apps using .NET MAUI with optimized UI performance",
      "Designed and integrated REST APIs for real-time data flow",
      "Improved database performance using SQLite and MySQL",
      "Refactored and maintained production-level codebases",
    ],
    tech: [".NET MAUI", "C#", "REST APIs", "MySQL", "SQLite"],
  },
  {
    company: "Freelance",
    role: "Full Stack Developer",
    duration: "2023 – Present",
    description:
      "Designing and developing custom websites and applications for clients, focusing on performance, usability, and modern UI.",
    highlights: [
      "Built responsive web applications using React and Next.js",
      "Developed backend systems and APIs using .NET and Node.js",
      "Delivered end-to-end solutions from UI to deployment",
      "Worked directly with clients to understand and implement requirements",
    ],
    tech: ["Next.js", "React", ".NET", "Node.js", "Tailwind", "APIs"],
  },
  {
    company: "UpgradCampus",
    role: "Data Analyst Intern",
    duration: "Jan 2024 – May 2024",
    description:
      "Worked on data analysis and visualization to extract insights from large datasets.",
    highlights: [
      "Built automated data cleaning pipelines",
      "Improved efficiency by 20%",
      "Created dashboards and reports using Tableau",
    ],
    tech: ["Python", "SQL", "Tableau"],
  },
];

export default function Experience() {
  return (
    <section className="py-24 md:py-32 bg-black text-white relative overflow-hidden">
      
      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05),transparent_40%)] blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">

        {/* HEADER */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4">
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold">
            Career Journey
          </h2>
        </div>

        {/* TIMELINE */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative pl-8"
        >
          {/* LINE */}
          <div className="absolute left-0 top-0 h-full w-[1px] bg-white/10"></div>

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={item}
              className="relative mb-16"
            >
              {/* DOT */}
              <div className="absolute -left-[6px] top-2 h-3 w-3 rounded-full bg-white/40"></div>

              {/* GLOW DOT */}
              <div className="absolute -left-[10px] top-[6px] h-5 w-5 rounded-full bg-white/10 blur-md"></div>

              {/* CARD */}
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ ease: easeOut }} // ✅ consistency
                className="relative p-6 md:p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/30 transition group"
              >
                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none rounded-2xl bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]"></div>

                {/* TOP */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                  <h3 className="text-xl font-semibold">
                    {exp.role} — {exp.company}
                  </h3>

                  <span className="text-sm text-white/40">
                    {exp.duration}
                  </span>
                </div>

                {/* DESCRIPTION */}
                <p className="text-white/60 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* HIGHLIGHTS */}
                <ul className="mb-4 space-y-2">
                  {exp.highlights.map((h, idx) => (
                    <li key={idx} className="text-sm text-white/70">
                      • {h}
                    </li>
                  ))}
                </ul>

                {/* TECH */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/70 border border-white/10 hover:bg-white/20 transition"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}