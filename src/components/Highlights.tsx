"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";

const highlights = [
  {
    title: "1.5+",
    subtitle: "Years Experience",
  },
  {
    title: "10+",
    subtitle: "Projects Built",
  },
  {
    title: "Full Stack",
    subtitle: "Focus",
  },
  {
    title: "Web/Apps",
    subtitle: "Cross-Platform",
  },
];

export default function Highlights() {
  return (
    <section className="py-12 md:py-16 relative z-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass p-6 md:p-8 rounded-2xl text-center group relative overflow-hidden"
            >
              {/* Radial glow on hover */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(6,182,212,0.1),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-indigo-400 transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider group-hover:text-zinc-300 transition-colors duration-300">
                {item.subtitle}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}