"use client";

import { motion, type Variants } from "framer-motion";

// ✅ GLOBAL EASING (CONSISTENT ACROSS APP)
const easeOut = [0.22, 1, 0.36, 1] as const;

// 🎬 ANIMATION VARIANTS
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut, // ✅ FIXED
    },
  },
};

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
    subtitle: "Development Focus",
  },
  {
    title: "Web + Apps",
    subtitle: "Cross-Platform Systems",
  },
];

export default function Highlights() {
  return (
    <section className="py-24 md:py-32 bg-black text-white relative">
      
      {/* 🌌 SUBTLE BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.04),transparent_40%)] blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* 🔥 CONTAINER */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          
          {highlights.map((itemData, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ ease: easeOut }} // ✅ consistency
              className="p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur text-center transition"
            >
              
              {/* NUMBER */}
              <h3 className="text-3xl md:text-4xl font-semibold text-white">
                {itemData.title}
              </h3>

              {/* LABEL */}
              <p className="mt-2 text-sm text-white/50">
                {itemData.subtitle}
              </p>

            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}