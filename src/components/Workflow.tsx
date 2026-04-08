"use client";

import { motion } from "framer-motion";

const steps = [
  "Understand Requirements",
  "Plan & Architect",
  "Develop & Implement",
  "Test & Optimize",
  "Deliver & Support",
];

export default function Workflow() {
  return (
    <section className="section py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          How I Work
        </h2>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="card p-5 smooth lift"
            >
<span className="text-white/60 font-semibold mr-2 tracking-wide">
              {i + 1}.
              </span>
              {step}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}