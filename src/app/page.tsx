import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Workflow from "@/components/Workflow";
import Projects from "@/components/Projects";
import Impact from "@/components/Impact";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-50 selection:bg-purple-500/40 selection:text-white">
      <Loader />
      <Background />
      <Navbar />
      
      <div className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Workflow />
        <Projects />
        <Impact />
        <Experience />
        <Certifications />
        <Resume />
        <Services />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}