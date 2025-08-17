import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Madan Bhat | Frontend Developer",
  description:
    "Portfolio of Madan Bhat, a passionate Frontend Developer specializing in React, React Native, TypeScript, and Node.js.",
}

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Projects />
      <Education />
      {/* <Blog /> */}
      <Contact />
    </div>
  )
}
