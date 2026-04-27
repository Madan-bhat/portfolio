"use client"

import { useEffect, useState, useCallback, useRef } from "react"

type CursorState = {
  x: number
  y: number
  w: number
  h: number
  br: string
  visible: boolean
  active: boolean
  pressed: boolean
  label: string
}

export default function CustomCursor() {
  const [cursor, setCursor] = useState<CursorState>({
    x: 0,
    y: 0,
    w: 24,
    h: 24,
    br: "0px",
    visible: false,
    active: false,
    pressed: false,
    label: "",
  })

  // Ref to track if we were just active to handle exit transitions better
  const wasActive = useRef(false)

  const updateCursor = useCallback((event: PointerEvent) => {
    const target = event.target as HTMLElement | null
    // Specifically target the evidence panels and interactive elements
    const interactiveElement = target?.closest("a, button, input, textarea, [role='button'], .project-card, .evidence-panel") as HTMLElement | null

    let label = ""
    if (target?.closest("input, textarea")) label = "INPUT_MODE"
    else if (target?.closest("a, button, [role='button']")) label = "EXECUTE"
    else if (target?.closest(".project-card, .evidence-panel")) label = "INSPECT_FILE"

    // Set raw coordinates for CSS usage (high performance)
    document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`)
    document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`)
    document.documentElement.style.setProperty("--cursor-x-int", Math.round(event.clientX).toString())
    document.documentElement.style.setProperty("--cursor-y-int", Math.round(event.clientY).toString())

    if (interactiveElement) {
      const rect = interactiveElement.getBoundingClientRect()
      const style = window.getComputedStyle(interactiveElement)

      wasActive.current = true
      setCursor((current) => ({
        ...current,
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        w: rect.width,
        h: rect.height,
        br: style.borderRadius,
        visible: true,
        active: true,
        label,
      }))
    } else {
      wasActive.current = false
      setCursor((current) => ({
        ...current,
        x: event.clientX,
        y: event.clientY,
        w: 24,
        h: 24,
        br: "0px",
        visible: true,
        active: false,
        label: "",
      }))
    }
  }, [])

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return

    document.documentElement.classList.add("custom-cursor-ready")

    const down = () => setCursor((current) => ({ ...current, pressed: true }))
    const up = () => setCursor((current) => ({ ...current, pressed: false }))
    const out = () => setCursor((current) => ({ ...current, visible: false }))
    const over = () => setCursor((current) => ({ ...current, visible: true }))

    const flickerInterval = setInterval(() => {
      const flickerVal = Math.random() > 0.95 ? 0.5 : 1
      document.documentElement.style.setProperty("--flicker", flickerVal.toString())
    }, 100)

    window.addEventListener("pointermove", updateCursor, { passive: true })
    window.addEventListener("pointerdown", down)
    window.addEventListener("pointerup", up)
    window.addEventListener("pointerover", over)
    window.addEventListener("pointerout", out)

    return () => {
      document.documentElement.classList.remove("custom-cursor-ready")
      clearInterval(flickerInterval)
      window.removeEventListener("pointermove", updateCursor)
      window.removeEventListener("pointerdown", down)
      window.removeEventListener("pointerup", up)
      window.removeEventListener("pointerover", over)
      window.removeEventListener("pointerout", out)
    }
  }, [updateCursor])

  if (!cursor.visible) return null

  // Refined easing for the shape-shifting effect
  const transitionStyle = {
    transitionProperty: "transform, width, height, border-radius, left, top",
    transitionDuration: "0.25s",
    transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)"
  }

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-300 ${cursor.visible ? "opacity-100" : "opacity-0"}`}
      style={{
        transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)`,
        willChange: "transform, width, height, border-radius",
        left: -cursor.w / 2,
        top: -cursor.h / 2,
        width: cursor.w,
        height: cursor.h,
        ...transitionStyle
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Adaptive Frame */}
        <div
          className={`absolute inset-0 border border-primary transition-all duration-300 ${cursor.active ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
          style={{
            borderRadius: cursor.br,
            transition: "all 0.25s cubic-bezier(0.23, 1, 0.32, 1)"
          }}
        >
          <div className="absolute inset-0 bg-primary/5" style={{ borderRadius: cursor.br }} />
        </div>

        {/* Reticle (Visible when not active) */}
        <div className={`relative flex items-center justify-center transition-all duration-300 ${cursor.active ? "opacity-0 scale-50" : "opacity-100 scale-75"}`}>
          <div className="w-1 h-1 bg-primary rounded-full" />
          <div className="absolute w-6 h-6 border-t border-l border-primary/50 -translate-x-3 -translate-y-3" />
          <div className="absolute w-6 h-6 border-b border-r border-primary/50 translate-x-3 translate-y-3" />
        </div>

        {/* Dynamic HUD Readout */}
        <div
          className={`absolute flex flex-col gap-0.5 font-mono text-[8px] tracking-tighter text-primary/80 whitespace-nowrap uppercase transition-all duration-300 ${
            cursor.active ? "-top-6 left-0" : "left-8 top-0"
          }`}
        >
          <div className="flex gap-2">
            <span>X:{Math.round(cursor.x)}</span>
            <span>Y:{Math.round(cursor.y)}</span>
          </div>
          {cursor.label && (
            <span className="text-primary font-black bg-primary/10 px-1 border-l border-primary animate-pulse">
              &gt; {cursor.label}
            </span>
          )}
        </div>
      </div>

      {/* Global Crosshairs (Hide when active on large elements to reduce visual noise) */}
      <div className={`transition-opacity duration-500 ${cursor.active && cursor.w > 100 ? "opacity-0" : "opacity-100"}`}>
        <div className="absolute top-1/2 left-[-100vw] w-[200vw] h-[0.5px] bg-primary/10 -translate-y-1/2" />
        <div className="absolute left-1/2 top-[-100vh] h-[200vh] w-[0.5px] bg-primary/10 -translate-x-1/2" />
      </div>
    </div>
  )
}
