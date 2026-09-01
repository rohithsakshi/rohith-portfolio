"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";

const projects = [
  {
    title: "MyGym — Fitness Management",
    description:
      "A cross-platform fitness app to manage workouts, track progress, and provide a seamless unified user experience.",
    highlights: [
      "Built with .NET MAUI and MVVM architecture",
      "Offline support using SQLite",
      "Real-time API integration",
      "Optimized UI performance",
    ],
    tech: [".NET MAUI", "C#", "SQLite", "REST APIs"],
    link: "#",
    image: "/mygym.png",
  },
  {
    title: "IVA Infra Management System",
    description:
      "A full-stack construction workflow system managing design, production, and QC pipelines efficiently.",
    highlights: [
      ".NET Web API backend",
      "Next.js frontend",
      "SQL Server database",
      "Real-time tracking dashboards",
    ],
    tech: [".NET", "Next.js", "TypeScript", "SQL Server"],
    link: "#",
    image: "/iva.png",
  },
  {
    title: "Reddit Sentiment Analysis",
    description:
      "AI/ML-based sentiment analysis tool extracting and visualizing contextual Reddit data insights.",
    highlights: [
      "Reddit API integration",
      "NLP sentiment classification",
      "Interactive visualization",
      "Deployed via Streamlit",
    ],
    tech: ["Python", "NLP", "Streamlit", "Machine Learning"],
    link: "https://reddit-sentiment-analysis.streamlit.app/",
    image: "/reddit.png",
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const speed = isHovered ? 8000 : 5000;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, speed);
    return () => clearInterval(interval);
  }, [isHovered, index]);

  const project = projects[index];

  return (
    <section id="projects" className="py-12 md:py-16 bg-[#050505] relative overflow-hidden selection:bg-[#9B3CFF]/30 selection:text-white">
      <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8 flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-[#9B3CFF]" />
            <p className="text-[#A1A1AA] text-[10px] font-semibold tracking-[0.3em] uppercase">
              Projects
            </p>
            <div className="h-[1px] w-8 bg-[#9B3CFF]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Selected <span className="text-[#9B3CFF]">Builds.</span>
          </h2>
        </motion.div>

        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-[#0A0A0D] rounded-3xl border border-white/5 shadow-2xl overflow-hidden group"
            >
              
              <div className="grid lg:grid-cols-2 min-h-[450px]">
                {/* Visual Side */}
                <div className="relative overflow-hidden bg-[#050505] min-h-[250px] lg:min-h-full">
                  <div className="absolute inset-0 bg-[#9B3CFF]/5 z-10 mix-blend-overlay group-hover:bg-[#9B3CFF]/0 transition-colors duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0D] to-transparent lg:bg-gradient-to-r opacity-50 z-10 pointer-events-none" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s] ease-out opacity-80 group-hover:opacity-100"
                  />
                  {/* Floating abstract decorative elements over image */}
                  <div className="absolute top-6 left-6 flex gap-2 z-20">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#9B3CFF] animate-pulse" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="relative p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight leading-[1.1]">
                    {project.title}
                  </h3>
                  <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed mb-6 max-w-lg font-light">
                    {project.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-zinc-500 text-[9px] font-bold uppercase tracking-[0.2em] mb-3">Key Highlights</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-zinc-300 font-light">
                            <span className="text-[#9B3CFF] mt-0.5 flex-shrink-0">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </span> 
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-zinc-500 text-[9px] font-bold uppercase tracking-[0.2em] mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, i) => (
                          <span key={i} className="text-[10px] md:text-xs font-medium text-white/70 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {project.link !== "#" && (
                    <div className="mt-auto pt-4 border-t border-white/5">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] hover:text-[#9B3CFF] transition-colors duration-300 group/link"
                      >
                        View Live Project 
                        <span className="text-lg leading-none group-hover/link:translate-x-1 transition-transform">→</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-4">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="group relative h-8 flex items-center justify-center"
                aria-label={`Go to project ${i + 1}`}
              >
                <div className={`h-[2px] transition-all duration-500 ${
                  i === index ? "w-10 bg-[#9B3CFF] shadow-[0_0_10px_rgba(155,60,255,0.5)]" : "w-5 bg-white/20 group-hover:bg-[#9B3CFF]/50 group-hover:w-8"
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
