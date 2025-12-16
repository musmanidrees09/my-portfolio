import Hero from "@/components/Hero";
import About from "@/components/About"; // <--- ADD THIS
import Experience from "@/components/Experience"; // <--- ADD THIS
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-slate-900 min-h-screen text-white">
      <Navbar />
      <Hero />
      <About /> {/* <--- NEW SECTION */}
      <Experience /> {/* <--- NEW SECTION */}
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
