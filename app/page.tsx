import Hero from "@/components/site/hero"
import TechMarquee from "@/components/site/marquee"
import About from "@/components/site/about"
import Experience from "@/components/site/experience"
import AISection from "@/components/site/ai-section"
import Skills from "@/components/site/skills"
import Work from "@/components/site/work"
import Credentials from "@/components/site/credentials"
import Contact from "@/components/site/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <About />
      <Experience />
      <AISection />
      <Skills />
      <Work />
      <Credentials />
      <Contact />
    </>
  )
}
