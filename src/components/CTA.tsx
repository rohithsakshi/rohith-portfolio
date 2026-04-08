"use client";

export default function CTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
      <div className="max-w-4xl mx-auto">
        
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Let’s build something impactful together
        </h2>

        <p className="mb-8 text-lg">
          Ready to collaborate or need help with your next project?
        </p>

        <button className="bg-black text-white px-6 py-3 rounded-xl hover:scale-105 transition">
          Contact Me
        </button>
      </div>
    </section>
  );
}