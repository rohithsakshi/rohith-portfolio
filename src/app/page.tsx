import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Skills from "@/src/components/Skills";
import Projects from "@/src/components/Projects";
import Experience from "@/src/components/Experience";
import Certifications from "@/src/components/Certifications";
import Resume from "@/src/components/Resume";
import Contact from "@/src/components/Contact";
import Highlights from "@/src/components/Highlights";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Highlights/>
      <About />
      <Skills />
      <Projects />
      <Experience/>
      <Certifications/>
      <Resume/>
      <Contact/>
      <Footer/>
    </main>
  );
}