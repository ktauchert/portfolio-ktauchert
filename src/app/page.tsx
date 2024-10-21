import About from "@/components/sections/About";
import Career from "@/components/sections/Career";
import Contact from "@/components/sections/Contact";
import HeroPage from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";


export default function Home() {
  return (
    <>
      <HeroPage />

      <About />

      <Projects />

      <Career />

      <Contact />
    </>
  );
}
