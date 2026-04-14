"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, containerVariants, itemVariants } from "@/lib/animations";

const steps = [
  "Requirements & Scoping",
  "Architecture & Diagramming",
  "Iterative Core Development",
  "Performance Profiling",
  "Production Deployment",
];

export default function Workflow() {
  return (
    <section className="relative py-24 md:py-32 bg-white">
      <div className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={fadeUpVariant} className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Process
            </motion.p>
            <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              How I Engineer <br/> Solutions.
            </motion.h2>
            <motion.p variants={fadeUpVariant} className="text-slate-600 leading-relaxed mb-8 max-w-md">
              A structured, no-nonsense approach to turning complex requirements into resilient software architecture.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4 relative"
          >
            {/* Thread line */}
            <div className="absolute left-[39px] top-6 bottom-6 w-px bg-gradient-to-b from-cyan-500/50 via-indigo-500/20 to-transparent" />

            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative flex items-center gap-6 group"
              >
                <div className="relative z-10 w-20 h-20 rounded-2xl glass flex items-center justify-center font-bold text-xl text-slate-500 group-hover:text-cyan-400 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300">
                  0{i + 1}
                </div>
                <div className="flex-1 glass p-6 rounded-2xl text-zinc-300 font-semibold group-hover:bg-white/[0.04] transition-colors">
                  {step}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}