import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Education from "@/components/Education";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { getRepos } from "@/lib/github";

// Re-fetch GitHub data at most once an hour.
export const revalidate = 3600;

export default async function Home() {
  const { repos } = await getRepos();

  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <Skills />
      <Experience />
      <About />
      <Education />
      <TechStack />
      <Projects repos={repos} />
      <Footer />
    </main>
  );
}
