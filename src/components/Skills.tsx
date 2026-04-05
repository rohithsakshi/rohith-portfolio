"use client";

import { motion, type Variants } from "framer-motion";

// ✅ GLOBAL EASING (CONSISTENT)
const easeOut = [0.22, 1, 0.36, 1] as const;

// 🎬 VARIANTS
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOut, // ✅ FIXED
    },
  },
};

const skills = [
  {
    title: "Backend Systems",
    description:
      "Designing scalable APIs and application logic with a focus on performance and maintainability.",
    tech: [".NET Core", "Node.js", "REST APIs", "MVC"],
  },
  {
    title: "Frontend Engineering",
    description:
      "Building responsive, user-focused interfaces with smooth interactions and clean design principles.",
    tech: ["React.js", "Tailwind CSS", "Responsive UI", "UX Design"],
  },
  {
    title: "Data & Databases",
    description:
      "Structuring and optimizing data storage for reliability, speed, and efficient querying.",
    tech: ["MySQL", "SQLite", "Query Optimization", "Data Modeling"],
  },
  {
    title: "Engineering Mindset",
    description:
      "Approaching problems with clarity, writing clean code, and focusing on long-term maintainability.",
    tech: [
      "Problem Solving",
      "Performance",
      "Clean Architecture",
      "Debugging",
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-24 md:py-32 bg-black text-white relative overflow-hidden">
      
      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.05),transparent_30%)] blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid md:grid-cols-2 gap-16">
        
        {/* LEFT SIDE */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="sticky top-32 h-fit"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4"
          >
            Skills
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-semibold leading-tight mb-6"
          >
            Crafting systems,
            <br /> not just interfaces.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-white/60 max-w-md leading-relaxed"
          >
            I build scalable, performant applications across web and mobile —
            focusing on clean architecture, user experience, and real-world impact.
          </motion.p>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ ease: easeOut }} // ✅ consistency
              className="relative p-6 md:p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition group"
            >
              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-2 group-hover:text-white">
                {skill.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-white/50 text-sm mb-4 leading-relaxed">
                {skill.description}
              </p>

              {/* TECH */}
              <div className="flex flex-wrap gap-2">
                {skill.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/70 border border-white/10 group-hover:bg-white/20 transition"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none rounded-2xl bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}