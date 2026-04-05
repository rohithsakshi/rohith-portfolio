"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

// 🎬 VARIANTS
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOut,
    },
  },
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Something went wrong");
      }
    } catch {
      setStatus("💀 Server error");
    }

    setLoading(false);
  };

  return (
    <section className="py-24 md:py-32 px-6 bg-black text-white relative overflow-hidden">
      
      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.05),transparent_40%)] blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center">

        {/* HEADER */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4"
        >
          Contact
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold mb-4"
        >
          Let’s Work Together
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-white/60 mb-10 max-w-xl mx-auto"
        >
          Have a job opportunity, idea, or freelance project?  
          Let’s build something impactful.
        </motion.p>

        {/* 🔥 FORM */}
        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10 outline-none transition"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10 outline-none transition"
            required
          />

          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:bg-white/10 outline-none transition h-32"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black py-3 rounded-lg font-medium hover:scale-[1.02] transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="text-sm text-white/60 text-center mt-2">
              {status}
            </p>
          )}
        </motion.form>

        {/* 💎 QUICK ACTIONS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 flex justify-center gap-4 flex-wrap"
        >
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rohithganesan2002@gmail.com&su=Opportunity"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition"
          >
            Quick Email
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rohithganesan2002@gmail.com&su=Freelance%20Project"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition"
          >
            Freelance Inquiry
          </a>
        </motion.div>

        {/* 🔗 SOCIAL (TEXT ICON STYLE) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 flex justify-center gap-4 flex-wrap"
        >
          <a
            href="https://github.com/rohithsakshi"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:scale-105 transition"
          >
            <span className="text-white/40 group-hover:text-white transition">
              &lt;/&gt;
            </span>
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/rohith-ganesan-94a206200/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:scale-105 transition"
          >
            <span className="text-white/40 group-hover:text-white transition">
              🔗
            </span>
            LinkedIn
          </a>
        </motion.div>

      </div>
    </section>
  );
}