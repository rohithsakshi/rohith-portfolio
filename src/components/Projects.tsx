"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

// ✅ GLOBAL EASING
const easeOut = [0.22, 1, 0.36, 1] as const;

// 📦 PROJECT DATA
const projects = [
  {
    title: "MyGym — Fitness Management App",
    description:
      "A cross-platform fitness app to manage workouts, track progress, and provide a seamless user experience.",
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
      "A full-stack construction workflow system managing design, production, and QC pipelines.",
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
      "AI/ML-based sentiment analysis tool extracting and visualizing Reddit data insights.",
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

// 🎬 VARIANTS
const cardVariants: Variants = {
  initial: { opacity: 0, y: 40, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeOut, // ✅ FIXED
    },
  },
  exit: {
    opacity: 0,
    y: -40,
    scale: 0.98,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
};

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const speed = isHovered ? 6000 : 3000;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, speed);

    return () => clearInterval(interval);
  }, [isHovered]);

  const project = projects[index];

  return (
    <section className="py-24 md:py-32 bg-black text-white relative overflow-hidden">
      
      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.05),transparent_40%)] blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 md:px-10">
        
        {/* HEADER */}
        <div className="mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4">
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold">
            Selected Builds
          </h2>
        </div>

        {/* CAROUSEL */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className={`relative p-8 md:p-10 rounded-2xl border backdrop-blur-md transition-all duration-300 ${
                isHovered
                  ? "border-white/30 bg-white/10 shadow-[0_0_60px_rgba(255,255,255,0.06)]"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {/* 🔥 HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition rounded-2xl pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]"></div>

              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-white/60 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="mb-6 space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="text-sm text-white/70">
                    • {h}
                  </li>
                ))}
              </ul>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/70 border border-white/10 hover:bg-white/20 transition"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA */}
              {project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-white hover:gap-2 transition"
                >
                  View Project →
                </a>
              )}
            </motion.div>
          </AnimatePresence>

          {/* DOTS */}
          <div className="flex justify-center mt-6 gap-2">
            {projects.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full transition ${
                  i === index
                    ? "bg-white scale-125"
                    : "bg-white/30"
                }`}
              />
            ))}
          </div>

          {/* HOVER LABEL */}
          {isHovered && (
            <p className="text-center text-xs text-white/40 mt-4">
              Paused — explore the project
            </p>
          )}
        </div>
      </div>
    </section>
  );
}