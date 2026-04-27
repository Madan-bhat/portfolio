"use client"

import { useEffect, useState, useCallback } from "react"

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

  const updateCursor = useCallback((event: PointerEvent) => {
    const target = event.target as HTMLElement | null
    const interactiveElement = target?.closest("a, button, input, textarea, [role='button'], .project-card, .evidence-panel") as HTMLElement | null

    let label = ""
    if (target?.closest("input, textarea")) label = "INPUT_MODE"
    else if (target?.closest("a, button, [role='button']")) label = "EXECUTE"
    else if (target?.closest(".project-card, .evidence-panel")) label = "INSPECT_FILE"

    document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`)
    document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`)

    if (interactiveElement) {
      const rect = interactiveElement.getBoundingClientRect()
      const style = window.getComputedStyle(interactiveElement)

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

    window.addEventListener("pointermove", updateCursor)
    window.addEventListener("pointerdown", down)
    window.addEventListener("pointerup", up)
    window.addEventListener("pointerover", over)
    window.addEventListener("pointerout", out)

    return () => {
      document.documentElement.classList.remove("custom-cursor-ready")
      window.removeEventListener("pointermove", updateCursor)
      window.removeEventListener("pointerdown", down)
      window.removeEventListener("pointerup", up)
      window.removeEventListener("pointerover", over)
      window.removeEventListener("pointerout", out)
    }
  }, [updateCursor])

  if (!cursor.visible) return null

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
        transition: "transform 0.15s cubic-bezier(0.23, 1, 0.32, 1), width 0.3s cubic-bezier(0.23, 1, 0.32, 1), height 0.3s cubic-bezier(0.23, 1, 0.32, 1), border-radius 0.3s cubic-bezier(0.23, 1, 0.32, 1)"
      }}
    >
      {/* Container for Visual Elements */}
      <div className="relative w-full h-full flex items-center justify-center">

        {/* The "Shape-Shifting" Frame */}
        <div
          className={`absolute inset-0 border border-primary transition-all duration-300 ${cursor.active ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
          style={{ borderRadius: cursor.br }}
        >
          {/* Internal Glow for active state */}
          <div className="absolute inset-0 bg-primary/5" style={{ borderRadius: cursor.br }} />
        </div>

        {/* Tactical Crosshair (Visible when not active/hovered) */}
        {!cursor.active && (
          <div className="relative flex items-center justify-center scale-75">
            <div className="w-1 h-1 bg-primary rounded-full" />
            <div className="absolute w-6 h-6 border-t border-l border-primary/50 -translate-x-3 -translate-y-3" />
            <div className="absolute w-6 h-6 border-b border-r border-primary/50 translate-x-3 translate-y-3" />
          </div>
        )}

        {/* Data Readout (Snaps to corner when active) */}
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

      {/* Trailing Crosshair Lines (Subtle - only when not active to avoid clutter) */}
      {!cursor.active && (
        <>
          <div className="absolute top-1/2 left-[-100vw] w-[200vw] h-[0.5px] bg-primary/10 -translate-y-1/2" />
          <div className="absolute left-1/2 top-[-100vh] h-[200vh] w-[0.5px] bg-primary/10 -translate-x-1/2" />
        </>
      )}
    </div>
  )
}
