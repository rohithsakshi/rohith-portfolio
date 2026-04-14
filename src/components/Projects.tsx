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
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const speed = isHovered ? 6000 : 4000;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, speed);
    return () => clearInterval(interval);
  }, [isHovered]);

  const project = projects[index];

  return (
    <section id="projects" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.05),transparent_60%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Selected <span className="text-gradient hover:animate-pulse">Builds.</span>
          </h2>
        </motion.div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-8 md:p-12 rounded-[2.5rem] glass border border-black/[0.05] overflow-hidden group"
            >
              {/* Premium Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
                  {project.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-slate-900 text-sm font-semibold uppercase tracking-wider mb-4 border-b border-black/[0.05] pb-2">Key Highlights</h4>
                    <ul className="space-y-3">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
                          <span className="text-indigo-400 mt-0.5">✦</span> {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-slate-900 text-sm font-semibold uppercase tracking-wider mb-4 border-b border-black/[0.05] pb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-[10px] px-3 py-1.5 uppercase tracking-wider font-bold rounded-full bg-black/5 text-zinc-300 border border-black/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {project.link !== "#" && (
                  <div className="pt-6 border-t border-black/[0.05]">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 group/link"
                    >
                      View Live Project 
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-cyan-400" : "w-1.5 bg-black/20 hover:bg-black/40"
                }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
