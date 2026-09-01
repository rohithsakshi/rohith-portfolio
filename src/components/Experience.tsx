"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";

const experiences = [
  {
    company: "DAFT Labs",
    role: "Full Stack Developer",
    duration: "Nov 2025 – Present",
    description:
      "Building websites, web applications, and full-stack mobile applications with modern technologies, focusing on scalable architecture, performance, and polished user experiences.",
    highlights: [
      "Developing responsive websites and web applications using React.js and Next.js",
      "Building full-stack mobile applications using React Native",
      "Developing RESTful APIs and backend services using Node.js",
      "Designing and managing MongoDB databases",
      "Delivering complete end-to-end solutions from frontend to backend and deployment",
    ],
    tech: ["React.js", "Next.js", "Node.js", "MongoDB"],
  },
  {
    company: "YaaRCubes",
    role: "Full Stack Developer",
    duration: "Aug 2024 – Oct 2025",
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
    <section id="experience" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden selection:bg-[#9B3CFF]/30 selection:text-white">
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-[#9B3CFF]" />
            <p className="text-[#A1A1AA] text-[10px] font-semibold tracking-[0.3em] uppercase">
              Experience
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Career <span className="text-[#9B3CFF]">Journey.</span>
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-4xl"
        >
          {/* Vertical Line */}
          <div className="absolute left-[7px] md:left-[11px] top-2 bottom-0 w-[1px] bg-white/10" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative flex gap-8 md:gap-16 group"
              >
                {/* Timeline Node */}
                <div className="relative z-10 mt-1.5 shrink-0">
                  <div className={`w-4 h-4 md:w-6 md:h-6 rounded-full flex items-center justify-center bg-[#050505] border-2 ${i === 0 ? 'border-[#9B3CFF]' : 'border-white/30'}`}>
                    <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${i === 0 ? 'bg-[#9B3CFF]' : 'bg-transparent'}`} />
                  </div>
                </div>

                {/* Content Block */}
                <div className="flex-1 pb-8 px-6 md:px-8 py-6 rounded-2xl bg-[#101014]/50 border border-white/5 hover:border-[#9B3CFF]/30 transition-colors duration-500">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                      {exp.role} <span className="text-zinc-600 font-light mx-2">/</span> <span className="text-[#9B3CFF]">{exp.company}</span>
                    </h3>
                    <p className="text-zinc-500 text-xs md:text-sm font-semibold tracking-wider uppercase">{exp.duration}</p>
                  </div>

                  <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed mb-6 font-light max-w-2xl">
                    {exp.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {exp.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-zinc-400">
                        <span className="text-[#9B3CFF] mt-1 flex-shrink-0">
                           <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em] flex items-center mr-2">Tech:</span>
                    {exp.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-bold tracking-wider uppercase text-zinc-300"
                      >
                        {t}
                        {idx < exp.tech.length - 1 && <span className="text-[#9B3CFF]/30 ml-4 font-normal">/</span>}
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
