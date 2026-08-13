"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { projects } from "@/lib/projects"

export default function Projects() {
  const [view, setView] = useState<"slider" | "grid">("slider")
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo =
        direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  }

  return (
    <section id="projects" className="py-32 bg-black overflow-hidden relative">
      <div className="container px-4 md:px-6 mx-auto mb-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-[0.6em] text-primary font-black mb-4">
              Department of Intelligence
            </p>
            <h2 className="evidence-board-title text-6xl md:text-[8rem] uppercase text-white leading-[0.8] tracking-tighter">
              Evidence <br />{" "}
              <span className="italic ml-12 md:ml-24 text-white/90">Board</span>
            </h2>
          </div>

          <div className="flex flex-col items-end gap-6">
            <div className="hidden xl:block h-32 w-64 bg-zinc-900/50 border border-white/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="absolute top-2 left-2 flex items-center gap-2">
                <div className="h-1.5 w-1.5 bg-primary animate-pulse" />
                <span className="text-[8px] text-primary uppercase font-black tracking-widest">
                  FEED_04 [ACTIVE]
                </span>
              </div>
              <div className="absolute bottom-2 right-2 text-[8px] text-zinc-600 font-mono">
                SEC_GRID_99.2
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="h-16 w-16 border border-white/20 rounded-full" />
                <div className="absolute h-px w-full bg-white/10" />
                <div className="absolute v-px h-full w-px bg-white/10" />
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                  Sector: Repository
                </p>
                <p className="text-[10px] text-primary uppercase tracking-widest font-bold">
                  Status: Decrypting
                </p>
              </div>

              <div className="view-toggle">
                <button
                  onClick={() => setView("slider")}
                  className={`view-toggle-btn ${view === "slider" ? "active" : ""}`}
                >
                  Slider
                </button>
                <button
                  onClick={() => setView("grid")}
                  className={`view-toggle-btn ${view === "grid" ? "active" : ""}`}
                >
                  List
                </button>
              </div>

              {view === "slider" && (
                <div className="hidden md:flex gap-1">
                  <button
                    onClick={() => scroll("left")}
                    className="slider-btn border-white/10 hover:border-primary/50"
                  >
                    <ChevronLeft className="h-3 w-3" />
                  </button>
                  <button
                    onClick={() => scroll("right")}
                    className="slider-btn border-white/10 hover:border-primary/50"
                  >
                    <ChevronRight className="h-3 w-3" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {view === "slider" ? (
          <motion.div
            key="slider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="slider-container no-scrollbar pb-12"
            ref={scrollRef}
            style={{ overflowX: "auto", scrollSnapType: "x mandatory" }}
          >
            <div
              className="slider-track"
              style={{ minWidth: "max-content", paddingLeft: "10%", paddingRight: "10%" }}
            >
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.slug}`}
                  className="evidence-panel group cursor-pointer border-white/5 bg-zinc-950 block"
                  style={{
                    scrollSnapAlign: "start",
                    flexBasis: "340px",
                    height: "540px",
                  }}
                >
                  <div className="absolute inset-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover opacity-50 grayscale group-hover:opacity-70 group-hover:grayscale-[30%] transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/55 to-zinc-950/25" />
                    <div className="scanline-overlay" />
                  </div>

                  <div className="evidence-overlay h-full">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <div className="h-8 w-px bg-primary/40" />
                        <div className="h-px w-4 bg-primary/40" />
                      </div>
                      <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-500 group-hover:text-primary transition-colors font-black">
                        {project.type}
                      </span>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                      <span className="text-[10px] font-black italic border border-primary/40 bg-black/60 px-3 py-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Open_Case
                      </span>
                    </div>

                    <div className="evidence-footer space-y-4">
                      <div className="flex items-end justify-between">
                        <div className="space-y-1">
                          <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold">
                            Evidence #{project.id}
                          </p>
                          <h3 className="text-xl font-black uppercase italic tracking-tighter text-white/90 group-hover:text-white transition-colors">
                            {project.title}
                          </h3>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="h-px w-8 bg-white/10 mb-1" />
                          <div className="h-px w-4 bg-white/10" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/10 group-hover:border-primary/50 transition-colors" />
                  <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/10 group-hover:border-primary/50 transition-colors" />
                  <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/10 group-hover:border-primary/50 transition-colors" />
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/10 group-hover:border-primary/50 transition-colors" />
                </Link>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="container px-4 md:px-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-zinc-900/20 border border-white/5 flex flex-col group hover:border-primary/40 transition-colors overflow-hidden"
              >
                <Link href={`/projects/${project.slug}`} className="relative aspect-[16/10] overflow-hidden border-b border-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover opacity-70 grayscale group-hover:opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
                  <div className="absolute top-3 left-3 text-[8px] uppercase tracking-[0.3em] text-primary font-black">
                    Feed_{project.id}
                  </div>
                </Link>
                <div className="p-8 flex flex-col gap-6 flex-1">
                  <Link href={`/projects/${project.slug}`} className="space-y-6 flex-1">
                    <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-primary font-black">
                      <span>Exhibit #{project.id}</span>
                      <span className="bg-primary/5 border border-primary/20 px-2 py-0.5">
                        {project.type}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-500 leading-relaxed uppercase tracking-[0.15em]">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[8px] border border-white/5 px-2 py-1 text-zinc-600 uppercase tracking-widest"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="flex-1 rounded-none text-[10px] uppercase tracking-[0.2em] border-white/10 hover:border-primary/50 hover:bg-primary/5 h-10"
                    >
                      <Link href={`/projects/${project.slug}`}>Open_Case</Link>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="flex-1 rounded-none text-[10px] uppercase tracking-[0.2em] border-white/10 hover:border-primary/50 hover:bg-primary/5 h-10"
                    >
                      <Link href={project.codeLink} target="_blank" rel="noreferrer">
                        Access_Source
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container px-4 md:px-6 mx-auto mt-32">
        <div className="max-w-2xl border-l-2 border-primary/40 pl-8 py-4 bg-primary/5">
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-black mb-3">
            System Diagnostic: Optimal
          </p>
          <p className="text-xs text-zinc-400 uppercase tracking-[0.2em] leading-loose italic">
            All data points presented have been decrypted from verified sources. Subject
            demonstrates consistent output across various frameworks and environments.
            Verification of architectural integrity complete.
          </p>
        </div>
      </div>
    </section>
  )
}
