"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Briefcase, Layers, Code2, Smartphone } from "lucide-react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-between bg-[#050505] overflow-hidden pt-28 sm:pt-32 pb-0 font-sans selection:bg-purple-500/30">
      {/* 🌌 SUBTLE BACKGROUND ELEMENTS */}
      {/* Noise/grain */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
      
      {/* Grid & Alignment Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none z-0" />
      <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-white/[0.02] z-0" />
      <div className="absolute right-[10%] top-0 bottom-0 w-[1px] bg-white/[0.02] z-0" />
      
      {/* Tiny Purple Points */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-purple-500/50 rounded-full" />
      <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-purple-500/30 rounded-full" />
      
      {/* Faint radial lighting */}
      <div className="absolute top-[40%] right-[20%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10 flex-1 my-auto">
        
        {/* 🔥 LEFT TEXT: EDITORIAL TYPOGRAPHY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[50%] flex flex-col justify-center"
        >
          {/* LABEL */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-8 bg-purple-500" />
            <p className="text-zinc-400 text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase">
              Full-Stack Developer
            </p>
          </div>

          {/* HEADLINE */}
          <h1 className="text-[3rem] sm:text-[4.5rem] lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight text-white mb-8">
            I architect <br />
            digital systems <br />
            <span className="text-purple-500">that scale.</span>
          </h1>

          {/* VALUE PROPOSITION */}
          <p className="text-base sm:text-lg text-zinc-400 max-w-lg leading-relaxed mb-12 font-light">
            I build performant web platforms and robust backend systems — turning complex problems into simple, impactful solutions.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a href="#projects" className="group relative inline-flex items-center justify-center px-8 py-4 bg-purple-600 rounded-full text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] overflow-hidden transition-all duration-300 hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              <span className="relative z-10 flex items-center gap-3">
                Explore My Work
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </a>
            
            <a href="#resume" className="group inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 hover:border-purple-500/50 text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] hover:bg-purple-500/5 transition-all duration-300">
              Download Resume <span className="ml-2 group-hover:translate-y-1 transition-transform duration-300">↓</span>
            </a>
          </div>
        </motion.div>

        {/* 🧠 RIGHT IMAGE COMPOSITION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[45%] relative flex items-center justify-center lg:justify-end mt-12 lg:mt-0"
        >
          {/* Parallax Container */}
          <motion.div 
            animate={{ x: mousePosition.x * -1, y: mousePosition.y * -1 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="relative w-full max-w-[450px] aspect-[4/5] mx-auto lg:mx-0"
          >
            
            {/* Geometric Purple Shape removed as requested */}

            {/* Main Image Wrapper */}
            <div className="absolute inset-0 flex relative z-10">
              <div 
                className="relative w-full h-full"
                style={{ 
                  maskImage: "radial-gradient(ellipse at 50% 50%, black 50%, transparent 100%)", 
                  WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 50%, transparent 100%)" 
                }}
              >
                <img
                  src="/rohithbg.png"
                  alt="Rohith Ganesan"
                  className="w-full h-full object-cover object-[50%_20%] scale-105 mix-blend-lighten"
                />
              </div>
            </div>

            {/* Small Technical Labels */}
            <motion.div 
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-8 md:-left-16 hidden lg:flex flex-col gap-3 z-20"
            >
              {["Clean Code", "Scalable Systems", "Real-World Impact"].map((text) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 border border-purple-500 rotate-45" />
                  <span className="text-[8px] font-mono tracking-widest text-zinc-400 uppercase">{text}</span>
                </div>
              ))}
            </motion.div>

            {/* Design Annotations */}
            <div className="absolute bottom-1/4 -right-12 md:-right-24 hidden lg:flex flex-col gap-2 z-20 text-[9px] font-mono text-zinc-500 tracking-[0.2em]">
              <p>01 — ENGINEERING</p>
              <p>02 — PERFORMANCE</p>
              <p>03 — SCALE</p>
            </div>

            {/* Floating Code Panel */}
            <motion.div 
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-4 md:-left-12 bg-[#0A0A0A] border border-white/10 px-5 py-4 shadow-2xl hidden md:block z-30"
            >
              <div className="flex gap-1.5 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
              </div>
              <p className="text-[10px] font-mono text-zinc-400 leading-relaxed">
                <span className="text-purple-400">const</span> system = <span className="text-white">init</span>();<br/>
                <span className="text-zinc-600">{'// Deploying infrastructure'}</span><br/>
                system.scale(<span className="text-purple-400">true</span>);
              </p>
            </motion.div>

          </motion.div>
        </motion.div>
      </div>

      {/* 💼 FLOATING METRICS DOCK */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 mt-16 lg:mt-24 mb-12 z-20 relative"
      >
        <div className="flex flex-col md:flex-row items-stretch justify-between bg-[#0A0A0D]/60 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          {[
            { value: "1.5+", label: "Years Experience", icon: <Briefcase className="w-5 h-5" /> },
            { value: "10+", label: "Projects Built", icon: <Layers className="w-5 h-5" /> },
            { value: "Full Stack", label: "End-to-End Dev", icon: <Code2 className="w-5 h-5" /> },
            { value: "Web & Apps", label: "Cross-Platform", icon: <Smartphone className="w-5 h-5" /> },
          ].map((stat, i) => (
            <div 
              key={i} 
              className={`flex-1 relative group flex items-center justify-start md:justify-center p-6 md:py-8 ${
                i !== 0 ? 'border-t md:border-t-0 md:border-l border-white/5' : ''
              } hover:bg-white/[0.02] transition-colors duration-500`}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#9B3CFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex items-center gap-5 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#15151A] border border-white/5 flex items-center justify-center text-zinc-500 group-hover:text-[#9B3CFF] group-hover:border-[#9B3CFF]/30 group-hover:bg-[#9B3CFF]/10 transition-all duration-500 shadow-lg">
                  {stat.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-lg font-bold tracking-tight group-hover:text-[#9B3CFF] transition-colors duration-300">{stat.value}</span>
                  <span className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] mt-1 group-hover:text-zinc-300 transition-colors duration-300">{stat.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
