"use client"

import { useEffect, useState } from "react"

const bootLines = [
  "DECRYPTING_SYSTEM_KERNEL...",
  "LOCATING_SUBJECT_FILES...",
  "ESTABLISHING_SECURE_LINK...",
  "LOADING_EVIDENCE_DATABASE...",
  "Bypassing Firewall... [SUCCESS]",
  "AUTHENTICATING_INVESTIGATOR...",
]

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [exiting, setExiting] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const progressTimer = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 100) return 100
        return Math.min(current + 4, 100)
      })
    }, 70)

    const exitTimer = window.setTimeout(() => {
      setProgress(100)
      setExiting(true)
    }, 2100)

    const removeTimer = window.setTimeout(() => {
      setVisible(false)
    }, 2650)

    return () => {
      window.clearInterval(progressTimer)
      window.clearTimeout(exitTimer)
      window.clearTimeout(removeTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div className={`loading-screen js-only ${exiting ? "is-exiting" : ""}`} role="status" aria-live="polite">
      <div className="loading-frame">
        <div className="flex items-center justify-between border-b border-primary/25 pb-3 text-xs uppercase tracking-[0.24em] text-primary">
          <span>Portfolio Boot</span>
          <span>{String(progress).padStart(3, "0")}%</span>
        </div>

        <div className="loading-terminal">
          {bootLines.map((line, index) => (
            <p key={line} className={progress >= index * 18 ? "is-visible" : ""}>
              &gt;&gt; {line}
            </p>
          ))}
          <p className={progress >= 96 ? "is-visible text-primary" : ""}>&gt;&gt; ACCESS GRANTED</p>
        </div>

        <div className="loading-bar" aria-hidden="true">
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  )
}
