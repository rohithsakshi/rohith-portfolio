"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, containerVariants } from "@/lib/animations";

export default function CTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-indigo-500/10 rounded-[100%] blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[150px] bg-cyan-400/10 rounded-[100%] blur-[80px] pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto"
      >
        <div className="glass relative p-12 md:p-20 rounded-[2.5rem] text-center overflow-hidden group">
          {/* Subtle animated border gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(6,182,212,0.1)_360deg)] pointer-events-none"
          />

          <motion.h2 
            variants={fadeUpVariant}
            className="relative z-10 text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Let’s build something <br className="hidden sm:block" />
            <span className="text-gradient">impactful together.</span>
          </motion.h2>

          <motion.p 
            variants={fadeUpVariant}
            className="relative z-10 text-slate-600 mb-10 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Ready to scale your product or need help architecting your next big system? Let's turn complex problems into elegant solutions.
          </motion.p>

          <motion.div variants={fadeUpVariant} className="relative z-10 inline-block">
            <a 
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-slate-900 transition-all duration-300 bg-black/5 border border-black/10 rounded-full hover:bg-black/10 overflow-hidden"
            >
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
                <div className="relative h-full w-8 bg-black/20" />
              </div>
              <span className="mr-2">Initiate Contact</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}