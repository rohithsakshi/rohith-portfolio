"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, containerVariants, itemVariants } from "@/lib/animations";

const skills = [
  {
    title: "Backend Systems",
    description: "Designing scalable APIs and logic focusing on performance.",
    tech: [".NET Core", "Node.js", "REST", "Microservices"],
  },
  {
    title: "Frontend Engineering",
    description: "Building responsive, modern interfaces with smooth interactions.",
    tech: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Data & Architecture",
    description: "Structuring and optimizing storage for reliability and speed.",
    tech: ["MySQL", "SQL Server", "SQLite", "Data Modeling"],
  },
  {
    title: "Engineering Mindset",
    description: "Writing clean, maintainable, and deeply scalable codebases.",
    tech: ["System Design", "CI/CD", "Testing", "Clean Architecture"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <motion.p variants={fadeUpVariant} className="text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Technical Arsenal
          </motion.p>
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 max-w-2xl mx-auto">
            Crafting systems, <br/>
            <span className="text-gradient">not just interfaces.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative p-8 md:p-10 rounded-[2rem] glass border border-black/[0.03] group hover:bg-white/[0.02] transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {skill.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-6 max-w-sm">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-black/5 border border-black/5 text-xs text-zinc-300 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
