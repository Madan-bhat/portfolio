export type Project = {
  slug: string
  title: string
  description: string
  details: string
  tags: string[]
  codeLink: string
  liveLink: string | null
  type: string
  id: string
  dates: string
  image: string
  role?: string
  status?: string
}

export const projects: Project[] = [
  {
    slug: "pocketjar",
    title: "PocketJar",
    description:
      "PocketJar is an Android app built with Kotlin and Gradle for running and managing Java-based experiences on mobile.",
    details: `PocketJar brings Java runtime experiences to Android — a launcher-style app for packaging, managing, and running Java-oriented workloads on device.

### Problem
Running and managing Java environments on mobile is awkward: toolchains, packaging, and UX rarely meet in one place. PocketJar aims to close that gap with a focused Android shell.

### What it does
- Packages and runs Java-oriented workloads on Android
- Provides a launcher-style surface for managing Java environments on device
- Uses a multi-module Gradle Kotlin DSL layout for cleaner, faster builds
- Keeps the Android SDK and Kotlin toolchain as first-class citizens

### Architecture
Organized as a multi-module Android app so build targets stay isolated and dependencies stay explicit. The goal is a maintainable mobile shell around Java runtime workflows rather than a one-off demo.

### Stack
Kotlin, Android SDK, and Gradle — with a launcher-style architecture for managing Java environments on device.`,
    tags: ["Kotlin", "Android", "Gradle"],
    codeLink: "https://github.com/Madan-bhat/pocketjar",
    liveLink: null,
    type: "Mobile",
    id: "01",
    dates: "June 2026 - present",
    image: "/projects/pocketjar.jpg",
    role: "Sole developer",
    status: "Active",
  },
  {
    slug: "desky",
    title: "Desky",
    description:
      "Desky is a React Native desk automation app that uses MQTT to control devices, with geolocation-aware flows and a clean tabbed interface.",
    details: `Desky turns your phone into a control surface for a smart desk setup — real-time device control, automation context, and location-aware behavior in one React Native app.

### Problem
Desk hardware and IoT devices often live behind separate apps and dashboards. Desky unifies control into a single mobile interface that can react to where you are and what the network looks like.

### Highlights
- Real-time device control over MQTT for low-latency desk commands
- Automation context for scripted desk flows and scene-like behaviors
- Geolocation and network-aware logic so actions can adapt to context
- Tabbed navigation for controls, status, and settings without clutter

### Experience
The UI is built around clear tabs: control surfaces up front, status feedback when devices respond, and settings for MQTT/broker and automation preferences. Async Storage keeps local config durable between sessions.

### Stack
React Native, TypeScript, MQTT, React Navigation, and Async Storage.`,
    tags: ["React Native", "TypeScript", "MQTT", "React Navigation"],
    codeLink: "https://github.com/Madan-bhat/desky",
    liveLink: null,
    type: "Mobile",
    id: "02",
    dates: "June 2026 - present",
    image: "/projects/desky.jpg",
    role: "Sole developer",
    status: "Active",
  },
  {
    slug: "esp",
    title: "ESP Voice Packets",
    description:
      "An ESP-based link that takes analog voice signals, digitizes them into voice packets, and streams digital voice over Bluetooth.",
    details: `A hardware experiment in turning analog voice into digital packets and carrying that voice over Bluetooth — from mic-level signal to a wireless digital stream.

### Problem
Analog voice is continuous and fragile on the wire. This project explores capturing that signal, packetizing it, and sending usable digital voice over a Bluetooth link from an ESP board.

### Signal path
- Captures analog voice / audio input at the board
- Converts the analog signal into digital voice samples
- Packs samples into voice packets for transport
- Streams the digital voice stream over Bluetooth to a paired receiver

### Why packets
Packetizing the voice stream makes the link more practical for wireless delivery: bounded chunks, clearer framing, and a path toward buffering and recovery if the radio link dips.

### Hardware & firmware
ESP microcontroller with Bluetooth connectivity, written in C++ / Arduino-style firmware. Focus is the end-to-end path: analog in → digitize → packetize → Bluetooth out.

### Stack
C++, Arduino, ESP, Bluetooth, digital signal / voice packet pipeline.`,
    tags: ["C++", "Arduino", "ESP", "Bluetooth", "Audio"],
    codeLink: "https://github.com/Madan-bhat/esp",
    liveLink: null,
    type: "Hardware",
    id: "03",
    dates: "June 2026",
    image: "/projects/esp.jpg",
    role: "Sole developer",
    status: "Prototype",
  },
  {
    slug: "workbit",
    title: "Workbit",
    description:
      "Workbit is a workspace productivity platform for teams — projects, issues, and collaboration — built with React, Vite, Express, and Supabase.",
    details: `Workbit is a full-stack productivity platform for teams: workspaces, projects, and issues in one place — with auth and persistence handled by Supabase.

### Product
- Workspace and team collaboration as the core unit of work
- Projects and issue tracking for day-to-day execution
- Auth and persistence via Supabase so sessions and data stay durable
- Design-system driven UI so screens stay consistent as features grow

### Architecture
React + Vite frontend talks to an Express REST API. Supabase backs data and auth. The backend keeps a clear controller / model / db split so routes stay thin and domain logic stays testable.

### Collaboration model
Teams operate inside workspaces; projects nest under those workspaces; issues carry the actual work. The stack is chosen so realtime-friendly Supabase features can land without rewriting the API surface.

### Stack
React, TypeScript, Vite, Express, and Supabase.`,
    tags: ["React", "TypeScript", "Vite", "Express", "Supabase"],
    codeLink: "https://github.com/TheDataBlitz/workbit",
    liveLink: null,
    type: "Platform",
    id: "04",
    dates: "Feb 2026 - present",
    image: "/projects/workbit.jpg",
    role: "Full-stack engineer",
    status: "Active",
  },
  {
    slug: "blitz",
    title: "Blitz",
    description:
      "Blitz is The Data Blitz web platform — a TypeScript + Vite app powering the core product experience.",
    details: `Blitz is the core web platform for The Data Blitz — the TypeScript frontend that carries the main product experience.

### Focus
- Fast TypeScript frontend built with Vite for quick iteration
- Product UI for the Blitz ecosystem and shared brand language
- Tailwind-driven styling aligned with the rest of the Data Blitz apps

### Product surface
Blitz is where core product flows live in the browser: navigation, primary screens, and the shared visual system that Workbit and related apps echo. The emphasis is speed of delivery without abandoning structure.

### Stack
TypeScript, React, Vite, and Tailwind CSS.`,
    tags: ["TypeScript", "Vite", "React", "TailwindCSS"],
    codeLink: "https://github.com/TheDataBlitz/blitz",
    liveLink: null,
    type: "Web",
    id: "05",
    dates: "July 2025 - present",
    image: "/projects/blitz.jpg",
    role: "Frontend engineer",
    status: "Active",
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
