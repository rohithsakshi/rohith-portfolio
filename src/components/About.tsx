"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Code2, Users, Zap, Target, Lightbulb } from "lucide-react";

const concepts = [
  { id: 1, title: "SYSTEMS", desc: "Designing scalable architectures that can handle high throughput.", icon: Layers },
  { id: 2, title: "CODE", desc: "Writing clean, efficient, and deeply maintainable logic.", icon: Code2 },
  { id: 3, title: "USERS", desc: "Empowering experiences people genuinely love to use.", icon: Users },
  { id: 4, title: "PERFORMANCE", desc: "Built strictly for scale, speed, and absolute reliability.", icon: Zap },
  { id: 5, title: "IMPACT", desc: "Solving real-world problems that matter through technology.", icon: Target },
  { id: 6, title: "INNOVATION", desc: "Continuously learning. Always experimenting. Always building.", icon: Lightbulb },
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % concepts.length);
    }, 4000); // Cycles every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative py-32 bg-[#050505] overflow-hidden selection:bg-[#9B3CFF]/30 selection:text-white">
      
      {/* 🌌 BACKGROUND ATMOSPHERE */}
      <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      
      {/* Subtle alignment lines */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/[0.02] -translate-x-1/2 pointer-events-none hidden lg:block" />
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/[0.02] -translate-y-1/2 pointer-events-none hidden lg:block" />
      
      {/* Corner markers */}
      <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-white/20" />
      <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-white/20" />
      <div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-white/20" />
      <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-white/20" />

      {/* Tiny + markers */}
      <div className="absolute top-1/4 left-[10%] text-white/10 text-[10px]">┼</div>
      <div className="absolute bottom-1/4 right-[10%] text-white/10 text-[10px]">┼</div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-[48%_52%] gap-16 lg:gap-20 items-center relative z-10">
        
        {/* 🧠 LEFT: MINIMALIST TYPOGRAPHY ACCORDION */}
        <div className="relative w-full h-[500px] flex items-center justify-center lg:order-1 order-2">
          {/* Subtle central glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#9B3CFF]/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative w-full max-w-md flex flex-col justify-center">
            {/* Animated Tracking Line */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/5">
              <motion.div 
                className="absolute left-0 w-[2px] bg-[#9B3CFF]"
                initial={false}
                animate={{
                  top: `${(activeIndex / concepts.length) * 100}%`,
                  height: `${100 / concepts.length}%`
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            <div className="pl-8 flex flex-col gap-6">
              {concepts.map((concept, index) => {
                const isActive = activeIndex === index;
                const Icon = concept.icon;
                
                return (
                  <div key={concept.id} className="relative group cursor-default">
                    <div className="flex items-center gap-4">
                      {/* Number Indicator */}
                      <span className={`text-xs font-mono tracking-widest transition-colors duration-500 ${isActive ? 'text-[#9B3CFF]' : 'text-zinc-700'}`}>
                        0{index + 1}
                      </span>
                      
                      {/* Title */}
                      <h4 
                        className={`text-2xl sm:text-3xl font-bold tracking-tight transition-all duration-500 ${isActive ? 'text-white translate-x-2' : 'text-zinc-600 hover:text-zinc-400'}`}
                      >
                        {concept.title}
                      </h4>
                    </div>

                    {/* Expandable Description */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 pb-2 pl-8 flex items-start gap-4">
                            <Icon className="w-5 h-5 text-[#9B3CFF] shrink-0 mt-0.5" />
                            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-light">
                              {concept.desc}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 📝 RIGHT: ABOUT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:order-2 order-1"
        >
          {/* SECTION LABEL */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-8 bg-purple-500" />
            <p className="text-zinc-400 text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase">
              About Me
            </p>
          </div>

          {/* HEADLINE */}
          <h2 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] font-bold tracking-tight text-white leading-[1.05] mb-8">
            Building systems <br className="hidden sm:block" />
            <span className="text-purple-500">that scale and perform.</span>
          </h2>

          {/* BODY COPY */}
          <div className="space-y-6 text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl font-light mb-16">
            <p>
              I’m a Full-Stack Developer focused on creating robust web and cross-platform applications using <span className="text-white font-medium">.NET</span>, <span className="text-white font-medium">React</span>, and modern scalable technologies.
            </p>
            <p>
              My approach bridges the gap between clean, efficient <span className="text-white font-medium">backend architecture</span> and highly intuitive <span className="text-white font-medium">frontend experiences</span>. I don’t just write code; I architect systems that are <span className="text-white font-medium">maintainable</span>, <span className="text-white font-medium">efficient</span>, and ready for <span className="text-white font-medium">real-world performance</span> demands.
            </p>
          </div>

          {/* PERSONAL ENGINEERING STATEMENT */}
          <div className="border-l border-purple-500/30 pl-6 mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              I like solving <br/>
              <span className="text-purple-500">the difficult part.</span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed max-w-md">
              Complex requirements, messy systems, performance bottlenecks, or ideas that aren't fully defined yet — that's where I enjoy working most.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
