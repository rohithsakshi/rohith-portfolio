"use client";

import { motion } from "framer-motion";

const impacts = [
  { metric: "40%", title: "Downtime Reduced", desc: "Improved system reliability by optimizing infrastructure and monitoring." },
  { metric: "99.9%", title: "Uptime Maintained", desc: "Ensured high availability across production systems." },
  { metric: "50+", title: "Issues Resolved / Month", desc: "Handled critical bugs and operational incidents efficiently." },
  { metric: "30%", title: "Performance Boost", desc: "Optimized APIs and backend services for faster response times." },
];

export default function Impact() {
  return (
    <section className="section py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Results & Impact
        </h2>

        <p className="text-secondary mb-12">
          Real measurable outcomes from real-world work
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="card p-6 smooth lift glow-hover"
            >
             <h3 className="text-4xl font-bold text-white mb-2">
                {item.metric}
              </h3>

              <h4 className="text-xl font-semibold mb-2">
                {item.title}
              </h4>

              <p className="text-secondary text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}