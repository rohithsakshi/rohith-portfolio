"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";

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
    <section id="experience" className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
      <div className="absolute bottom-0 right-[20%] w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <p className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 text-center sm:text-left">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 text-center sm:text-left">
            Career <span className="text-gradient">Journey.</span>
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Vertical Line */}
          <div className="absolute left-[11px] sm:left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-cyan-500/50 via-white/10 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative flex gap-6 sm:gap-8 group"
              >
                {/* Timeline Node */}
                <div className="relative z-10 mt-1 shrink-0">
                  <div className="relative flex h-6 w-6 sm:h-10 sm:w-10 items-center justify-center">
                    {i === 0 && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-20" />}
                    <div className={`relative w-6 h-6 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border ${i === 0 ? 'bg-cyan-500/20 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.5)]' : 'bg-white/[0.03] border-black/10 gap-0'}`}>
                      <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${i === 0 ? 'bg-cyan-400' : 'bg-black/30'}`} />
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 glass p-6 sm:p-8 rounded-[2rem] border-black/[0.03] group-hover:bg-white/[0.04] transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1 tracking-tight">
                        {exp.role} <span className="text-slate-500 font-normal">— {exp.company}</span>
                      </h3>
                      <p className="text-cyan-400/80 font-medium text-xs sm:text-sm">{exp.duration}</p>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {exp.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-500 leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-cyan-500/50 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-black/[0.05]">
                    {exp.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-3 py-1 uppercase tracking-wider font-semibold rounded-full bg-black/5 text-slate-600 border border-black/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
