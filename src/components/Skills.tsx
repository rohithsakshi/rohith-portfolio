"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    title: "Backend Systems",
    description:
      "Designing scalable APIs and application logic with a focus on performance and maintainability.",
    tech: [".NET Core", "Node.js", "REST APIs", "MVC"],
  },
  {
    title: "Frontend Engineering",
    description:
      "Building responsive, user-focused interfaces with smooth interactions and clean design principles.",
    tech: ["React.js", "Tailwind CSS", "Responsive UI", "UX Design"],
  },
  {
    title: "Data & Databases",
    description:
      "Structuring and optimizing data storage for reliability, speed, and efficient querying.",
    tech: ["MySQL", "SQLite", "Query Optimization", "Data Modeling"],
  },
  {
    title: "Engineering Mindset",
    description:
      "Approaching problems with clarity, writing clean code, and focusing on long-term maintainability.",
    tech: ["Problem Solving", "Performance", "Clean Architecture", "Debugging"],
  },
];

export default function Skills() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 🎬 PARALLAX SPEEDS
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section ref={ref} className="section py-32 relative overflow-hidden">

      {/* LEFT SIDE */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        <div className="sticky top-32 h-fit">
          <p className="text-xs tracking-[0.2em] uppercase text-secondary mb-4">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Crafting systems,
            <br /> not just interfaces.
          </h2>

          <p className="text-secondary max-w-md leading-relaxed">
            I build scalable, performant applications across web and mobile —
            focusing on clean architecture, user experience, and real-world impact.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative space-y-10">

          {/* BIG CARD */}
          <motion.div style={{ y: y1 }} className="card p-7">
            <h3 className="text-xl font-semibold mb-2">
              {skills[0].title}
            </h3>
            <p className="text-muted text-sm mb-4">
              {skills[0].description}
            </p>
            <div className="flex flex-wrap gap-2">
              {skills[0].tech.map((t, i) => (
                <span key={i} className="tech-pill">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* ROW */}
          <div className="grid grid-cols-2 gap-6">

            <motion.div style={{ y: y2 }} className="card p-6">
              <h3 className="text-lg font-semibold mb-2">
                {skills[1].title}
              </h3>
              <p className="text-muted text-sm mb-4">
                {skills[1].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skills[1].tech.map((t, i) => (
                  <span key={i} className="tech-pill">{t}</span>
                ))}
              </div>
            </motion.div>

            <motion.div style={{ y: y3 }} className="card p-6">
              <h3 className="text-lg font-semibold mb-2">
                {skills[2].title}
              </h3>
              <p className="text-muted text-sm mb-4">
                {skills[2].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skills[2].tech.map((t, i) => (
                  <span key={i} className="tech-pill">{t}</span>
                ))}
              </div>
            </motion.div>

          </div>

          {/* LAST CARD */}
          <motion.div style={{ y: y4 }} className="card p-6 max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-2 text-center">
              {skills[3].title}
            </h3>
            <p className="text-muted text-sm mb-4 text-center">
              {skills[3].description}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {skills[3].tech.map((t, i) => (
                <span key={i} className="tech-pill">{t}</span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}