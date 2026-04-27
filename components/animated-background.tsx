"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function AnimatedBackground() {
  const mountRef = useRef<HTMLDivElement>(null)
  const matrixRef = useRef<HTMLCanvasElement>(null)

  // Matrix Digital Rain Effect
  useEffect(() => {
    const canvas = matrixRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const chars = "0101010101010101ABCDEFUX+-$#@%&*".split("")
    const fontSize = 18 // Slightly larger
    let columns = Math.floor(width / fontSize)
    const drops: number[] = []

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }

    const draw = () => {
      // Darker trail clearing
      ctx.fillStyle = "rgba(0, 0, 0, 0.12)"
      ctx.fillRect(0, 0, width, height)

      // High-visibility characters
      ctx.fillStyle = "rgba(255, 51, 51, 0.9)"
      ctx.font = `bold ${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      columns = Math.floor(width / fontSize)
    }

    window.addEventListener("resize", handleResize)
    const interval = setInterval(draw, 33)

    return () => {
      window.removeEventListener("resize", handleResize)
      clearInterval(interval)
    }
  }, [])

  // Three.js Solar System Effect
  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 15

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    mount.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
    scene.add(ambientLight)

    const mainLight = new THREE.PointLight(0xff3333, 1200, 100)
    mainLight.position.set(0, 0, 10)
    scene.add(mainLight)

    // Solar System Container
    const solarSystem = new THREE.Group()
    scene.add(solarSystem)

    // Sun - Bold and glowing
    const sunGeometry = new THREE.SphereGeometry(1.8, 32, 32)
    const sunMaterial = new THREE.MeshStandardMaterial({
      color: 0xff3333,
      wireframe: true,
      transparent: true,
      opacity: 0.9,
      emissive: 0xff0000,
      emissiveIntensity: 1.5
    })
    const sun = new THREE.Mesh(sunGeometry, sunMaterial)
    solarSystem.add(sun)

    // Planets Configuration
    const planetsData = [
      { radius: 0.4, distance: 5, speed: 0.008, color: 0xff4444 },
      { radius: 0.6, distance: 8, speed: 0.006, color: 0xff6666 },
      { radius: 0.5, distance: 11, speed: 0.004, color: 0xff3333 }
    ]

    const planets: THREE.Group[] = []

    planetsData.forEach((data) => {
      const orbitGroup = new THREE.Group()

      const planetGeom = new THREE.SphereGeometry(data.radius, 16, 16)
      const planetMat = new THREE.MeshStandardMaterial({
        color: data.color,
        wireframe: false,
        emissive: data.color,
        emissiveIntensity: 0.8
      })
      const planet = new THREE.Mesh(planetGeom, planetMat)
      planet.position.x = data.distance

      orbitGroup.add(planet)
      solarSystem.add(orbitGroup)
      planets.push(orbitGroup)
    })

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    let frameId: number
    const animate = (time: number) => {
      sun.rotation.y += 0.005
      planets.forEach((p, i) => {
        p.rotation.y += planetsData[i].speed
      })

      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }

    animate(0)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(frameId)
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
      scene.clear()
      renderer.dispose()
    }
  }, [])

  return (
    <div className="animated-background fixed inset-0 z-0 overflow-hidden pointer-events-none hidden md:block" aria-hidden="true">
      {/* Matrix Rain Layer */}
      <canvas ref={matrixRef} className="absolute inset-0 w-full h-full opacity-80" />

      {/* Three.js Solar System Layer */}
      <div ref={mountRef} className="absolute inset-0" />

      <div className="scanline-overlay" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at var(--cursor-x, 50%) var(--cursor-y, 50%), rgba(255,51,51,calc(0.05 * var(--flicker, 1))) 0%, transparent 70%)`
        }}
      />
    </div>
  )
}
