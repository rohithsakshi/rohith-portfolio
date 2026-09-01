"use client";

import { useState, useEffect } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 md:py-32 bg-[#0A0A0D] selection:bg-[#9B3CFF]/30 selection:text-white">
      <div className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[48%_52%] gap-16 lg:gap-20 items-center">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-[#9B3CFF]" />
              <motion.p variants={fadeUpVariant} className="text-[#A1A1AA] text-[10px] font-semibold tracking-[0.3em] uppercase">
                Process
              </motion.p>
            </div>
            
            <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8">
              How I Engineer <br/>
              <span className="text-[#9B3CFF]">Solutions.</span>
            </motion.h2>
            
            <motion.p variants={fadeUpVariant} className="text-[#A1A1AA] font-light leading-relaxed mb-8 max-w-md text-sm md:text-base">
              A structured, no-nonsense approach to turning complex requirements into resilient software architecture.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative py-4"
          >
            {/* Thread line */}
            <div className="absolute left-[23px] md:left-[27px] top-6 bottom-6 w-[2px] bg-white/5">
              {/* Animated active thread indicator */}
              <motion.div 
                className="absolute top-0 left-0 w-full bg-[#9B3CFF] rounded-full shadow-[0_0_10px_rgba(155,60,255,0.5)]"
                initial={false}
                animate={{
                  height: `${(100 / (steps.length - 1)) * activeIndex}%`,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>

            <div className="space-y-12">
              {steps.map((step, i) => {
                const isActive = i === activeIndex;
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="relative flex items-center gap-8 md:gap-12 group cursor-default"
                  >
                    <div className={`relative z-10 w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full bg-[#101014] border flex items-center justify-center font-bold text-sm md:text-base transition-all duration-500 ${isActive ? 'border-[#9B3CFF] text-[#9B3CFF] bg-[#15151A] shadow-[0_0_15px_rgba(155,60,255,0.3)] scale-110' : 'border-white/10 text-zinc-500 scale-100'}`}>
                      0{i + 1}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className={`text-lg md:text-xl font-bold transition-all duration-500 ${isActive ? 'text-[#9B3CFF] translate-x-2' : 'text-white translate-x-0'}`}>
                        {step}
                      </h4>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}