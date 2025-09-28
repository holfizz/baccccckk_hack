import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Team from "@/components/sections/Team";
import News from "@/components/sections/News";
import Documents from "@/components/sections/Documents";
import Jobs from "@/components/sections/Jobs";
import Contacts from "@/components/sections/Contacts";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Team />
      <News />
      <Documents />
      <Jobs />
      <Contacts />
    </>
  );
}
