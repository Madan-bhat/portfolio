"use client";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <main className="bg-white text-black">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer />
    </div>
  );
}
