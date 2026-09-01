"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, containerVariants, itemVariants } from "@/lib/animations";
import { Server, Layout, Database, Workflow } from "lucide-react";

const skills = [
  {
    title: "Backend Systems",
    description: "Designing scalable APIs and logic focusing on performance and security.",
    tech: [".NET Core", "Node.js", "REST APIs", "Microservices"],
    icon: Server,
  },
  {
    title: "Frontend Engineering",
    description: "Building responsive, modern interfaces with buttery smooth interactions.",
    tech: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
    icon: Layout,
  },
  {
    title: "Data & Architecture",
    description: "Structuring and optimizing storage for absolute reliability and speed.",
    tech: ["MySQL", "SQL Server", "SQLite", "Data Modeling"],
    icon: Database,
  },
  {
    title: "Engineering Mindset",
    description: "Writing clean, maintainable, and deeply scalable codebases.",
    tech: ["System Design", "CI/CD", "Testing", "Clean Architecture"],
    icon: Workflow,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden selection:bg-[#9B3CFF]/30 selection:text-white">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#9B3CFF]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 text-center flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-4 justify-center">
            <div className="h-[1px] w-8 bg-[#9B3CFF]" />
            <motion.p variants={fadeUpVariant} className="text-[#A1A1AA] text-[10px] font-bold tracking-[0.3em] uppercase">
              Technical Arsenal
            </motion.p>
            <div className="h-[1px] w-8 bg-[#9B3CFF]" />
          </div>
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Crafting systems, <br/>
            <span className="text-[#9B3CFF]">not just interfaces.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-[#0A0A0D] border border-white/5 rounded-3xl p-8 hover:bg-[#101014] hover:border-white/10 transition-all duration-500 overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#9B3CFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#9B3CFF]/10 border border-[#9B3CFF]/30 shadow-[0_0_15px_rgba(155,60,255,0.15)] flex items-center justify-center mb-8">
                    <Icon className="w-6 h-6 text-[#9B3CFF]" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                    {skill.title}
                  </h3>
                  
                  <p className="text-[#A1A1AA] leading-relaxed text-sm mb-8 font-light min-h-[60px]">
                    {skill.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {skill.tech.map((t, i) => (
                      <span 
                        key={i} 
                        className="text-[10px] font-bold tracking-widest uppercase text-white bg-white/10 border border-white/20 px-3 py-1.5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
