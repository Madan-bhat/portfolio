"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function AnimatedBackground() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 10

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: "high-performance" })
    renderer.setPixelRatio(1) // Force 1x pixel ratio for performance
    renderer.setSize(window.innerWidth, window.innerHeight)
    mount.appendChild(renderer.domElement)

    // Lighting - Static
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.05)
    scene.add(ambientLight)

    const spotLight = new THREE.SpotLight(0xff3333, 500)
    spotLight.position.set(0, 5, 10)
    scene.add(spotLight)

    // Grid
    const grid = new THREE.GridHelper(100, 50, 0x222222, 0x111111)
    grid.position.z = -5
    grid.rotation.x = Math.PI / 2
    scene.add(grid)

    // Reduced Particle Noise
    const particlesCount = 1000
    const positions = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 60
    }
    const particlesGeometry = new THREE.BufferGeometry()
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.03,
      transparent: true,
      opacity: 0.1,
    })
    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    let frameId: number
    const animate = () => {
      particles.rotation.y += 0.0001
      particles.rotation.x += 0.00005
      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }

    animate()

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
      <div ref={mountRef} className="absolute inset-0" />
      <div className="scanline-overlay" />
      {/* Optimized Spotlight using CSS variables set in CustomCursor */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at var(--cursor-x, 50%) var(--cursor-y, 50%), rgba(255,51,51,calc(0.03 * var(--flicker, 1))) 0%, transparent 60%)`
        }}
      />
    </div>
  )

}
