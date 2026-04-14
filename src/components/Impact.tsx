"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, containerVariants, itemVariants } from "@/lib/animations";

const impacts = [
  { metric: "40%", title: "Downtime Reduced", desc: "Optimizing infrastructure and scaling strategies." },
  { metric: "99.9%", title: "Uptime Maintained", desc: "Enterprise-grade reliability across cloud environments." },
  { metric: "50+", title: "Issues Fixed / Mo", desc: "Rapid CI/CD pipelines and proactive bug resolution." },
  { metric: "30%", title: "Performance Boost", desc: "Optimized REST APIs and payload delivery." },
];

export default function Impact() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-slate-50 border-y border-black/[0.02]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-[100%] blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="mb-16 text-center lg:text-left flex flex-col lg:flex-row justify-between items-end gap-6">
            <div>
              <motion.p variants={fadeUpVariant} className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                Results
              </motion.p>
              <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                Measurable <span className="text-gradient">Impact</span>.
              </motion.h2>
            </div>
            <motion.p variants={fadeUpVariant} className="text-slate-500 max-w-sm text-sm lg:text-right">
              Data-driven outcomes from deploying real-world systems at scale.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impacts.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative glass p-8 rounded-2xl border-black/[0.05] hover:border-cyan-500/20 transition-colors duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-indigo-500/0 group-hover:from-cyan-500/5 group-hover:to-indigo-500/5 transition-colors duration-500 z-0" />
                <div className="relative z-10">
                  <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500 mb-4 tracking-tighter">
                    {item.metric}
                  </h3>
                  <h4 className="text-lg font-semibold text-zinc-200 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}