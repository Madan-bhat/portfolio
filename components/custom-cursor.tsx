"use client"

import { useEffect, useState } from "react"

type CursorState = {
  x: number
  y: number
  visible: boolean
  active: boolean
  pressed: boolean
  label: string
}

export default function CustomCursor() {
  const [cursor, setCursor] = useState<CursorState>({
    x: 0,
    y: 0,
    visible: false,
    active: false,
    pressed: false,
    label: "",
  })

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return

    document.documentElement.classList.add("custom-cursor-ready")
    setCursor((current) => ({
      ...current,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      visible: true,
    }))

    const move = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null
      const interactiveElement = target?.closest("a, button, input, textarea, [role='button']")
      const interactive = Boolean(interactiveElement)
      const label =
        target?.closest("input, textarea")
          ? "INPUT"
          : target?.closest("a, button, [role='button']")
            ? "EXECUTE"
            : target?.closest(".project-card")
              ? "INSPECT"
              : ""

      // Set global variables for background spotlight
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`)
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`)

      setCursor((current) => ({
        ...current,
        x: event.clientX,
        y: event.clientY,
        visible: true,
        active: interactive,
        label,
      }))
    }

    const down = () => setCursor((current) => ({ ...current, pressed: true }))
    const up = () => setCursor((current) => ({ ...current, pressed: false }))

    window.addEventListener("pointermove", move)
    window.addEventListener("pointerdown", down)
    window.addEventListener("pointerup", up)

    return () => {
      document.documentElement.classList.remove("custom-cursor-ready")
      window.removeEventListener("pointermove", move)
      window.removeEventListener("pointerdown", down)
      window.removeEventListener("pointerup", up)
    }
  }, [])

  return (
    <div
      className={`custom-cursor js-only ${cursor.visible ? "is-visible" : ""} ${cursor.active ? "is-active" : ""} ${cursor.pressed ? "is-pressed" : ""}`}
      style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
      aria-hidden="true"
    >
      <span />
      <em>X {Math.round(cursor.x)} Y {Math.round(cursor.y)}</em>
      <strong>{cursor.label}</strong>
    </div>
  )
}
