"use client";

import { useState } from "react";

const faqs = [
  { q: "What is your response time?", a: "Usually within a few hours, depending on urgency." },
  { q: "What technologies do you use?", a: "React, Next.js, Node.js, .NET, Cloud, and DevOps tools." },
  { q: "Are you available for freelance?", a: "Yes, open for both freelance and full-time opportunities." },
  { q: "How do you handle critical issues?", a: "Quick diagnosis, structured debugging, and immediate resolution." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section py-20 px-6 text-slate-900">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          FAQs
        </h2>

        {faqs.map((faq, i) => (
          <div
            key={i}
            className="mb-4 pb-4"
            style={{ borderBottom: "1px solid var(--card-border)" }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left font-semibold"
            >
              {faq.q}
            </button>

            {open === i && (
              <p className="text-secondary mt-2">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}