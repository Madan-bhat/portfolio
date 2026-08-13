"use client"

import { useCallback, useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { photos, type Photo } from "@/lib/photography"

const spanClass: Record<NonNullable<Photo["span"]>, string> = {
  tall: "md:row-span-2 aspect-[3/4] md:aspect-auto",
  wide: "md:col-span-2 aspect-[16/10]",
  square: "aspect-square",
}

export default function Photography() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const active = activeIndex !== null ? photos[activeIndex] : null

  const close = useCallback(() => setActiveIndex(null), [])

  const showPrev = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current
      return (current - 1 + photos.length) % photos.length
    })
  }, [])

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current
      return (current + 1) % photos.length
    })
  }, [])

  useEffect(() => {
    if (activeIndex === null) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close()
      if (event.key === "ArrowLeft") showPrev()
      if (event.key === "ArrowRight") showNext()
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [activeIndex, close, showPrev, showNext])

  return (
    <section id="photography" className="py-32 bg-black border-y border-white/5 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto relative z-10 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-[0.6em] text-primary font-black mb-4">
              Optical Intelligence
            </p>
            <h2 className="evidence-board-title text-6xl md:text-[7rem] uppercase text-white leading-[0.8] tracking-tighter">
              Photo <br />{" "}
              <span className="italic ml-8 md:ml-16 text-white/90">Archive</span>
            </h2>
          </div>

          <div className="max-w-sm space-y-3 md:text-right">
            <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500 font-bold">
              Frames_Logged: {String(photos.length).padStart(2, "0")}
            </p>
            <p className="text-xs text-zinc-500 leading-relaxed tracking-wide">
              Field stills and quiet frames pulled from the optical log. Click any
              frame to enlarge the evidence.
            </p>
          </div>
        </div>

        {photos.length === 0 ? (
          <div className="border border-dashed border-white/10 p-16 text-center space-y-3">
            <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-black">
              No_Frames_Yet
            </p>
            <p className="text-sm text-zinc-500">
              Add images to public/photography and list them in lib/photography.ts
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[220px] gap-3 md:gap-4">
            {photos.map((photo, index) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group relative overflow-hidden border border-white/5 bg-zinc-950 text-left ${
                  spanClass[photo.span ?? "square"]
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover opacity-80 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <div className="scanline-overlay opacity-40 group-hover:opacity-20 transition-opacity" />

                <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-white/30 group-hover:border-primary/60 transition-colors" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-white/30 group-hover:border-primary/60 transition-colors" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-white/30 group-hover:border-primary/60 transition-colors" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-white/30 group-hover:border-primary/60 transition-colors" />

                <div className="absolute top-3 left-1/2 -translate-x-1/2 text-[8px] uppercase tracking-[0.35em] text-primary font-black">
                  Frame_{photo.id}
                </div>

                <div className="absolute bottom-0 inset-x-0 p-4 space-y-1">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">
                    {photo.location} // {photo.date}
                  </p>
                  <h3 className="text-sm font-black uppercase italic tracking-tighter text-white">
                    {photo.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {active && activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/95 p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-6 right-6 text-zinc-400 hover:text-primary transition-colors"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                showPrev()
              }}
              className="absolute left-4 md:left-8 text-zinc-400 hover:text-primary transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                showNext()
              }}
              className="absolute right-4 md:right-8 text-zinc-400 hover:text-primary transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <motion.div
              key={active.id}
              className="relative max-w-5xl w-full space-y-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative border border-white/10 bg-zinc-950 overflow-hidden">
                <img
                  src={active.src}
                  alt={active.alt}
                  className="w-full max-h-[75vh] object-contain bg-black"
                />
                <div className="absolute top-3 left-3 text-[8px] uppercase tracking-[0.35em] text-primary font-black">
                  Visual_Evidence // {active.id}
                </div>
              </div>

              <div className="flex flex-wrap items-end justify-between gap-4 px-1">
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500 font-bold">
                    {active.location} // {active.date}
                    {active.camera ? ` // ${active.camera}` : ""}
                  </p>
                  <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white">
                    {active.title}
                  </h3>
                </div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-bold">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(photos.length).padStart(2, "0")}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
