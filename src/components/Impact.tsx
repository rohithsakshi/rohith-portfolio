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
    <section className="relative py-24 md:py-32 bg-[#0a0a0a] overflow-hidden selection:bg-purple-500/30 selection:text-white">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="mb-20 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 border-b border-white/5 pb-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-8 bg-purple-500" />
                <motion.p variants={fadeUpVariant} className="text-zinc-500 text-[10px] font-semibold tracking-[0.3em] uppercase">
                  Results
                </motion.p>
              </div>
              <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Measurable <br className="hidden md:block"/>
                <span className="text-purple-500">Impact.</span>
              </motion.h2>
            </div>
            <motion.p variants={fadeUpVariant} className="text-zinc-400 max-w-sm text-sm lg:text-right leading-relaxed font-light">
              Data-driven outcomes from deploying real-world systems at scale.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {impacts.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative flex flex-col"
              >
                <div className="mb-4">
                  <h3 className="text-[3.5rem] md:text-[4rem] font-bold text-white tracking-tighter leading-none group-hover:text-purple-400 transition-colors duration-500">
                    {item.metric}
                  </h3>
                </div>
                <h4 className="text-sm font-bold text-zinc-300 tracking-[0.1em] uppercase mb-3">
                  {item.title}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-[250px] font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}