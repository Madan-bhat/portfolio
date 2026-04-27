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

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    // Ensure we are using legacy lights or high intensity for physical units
    // renderer.useLegacyLights = true; // For older Three.js versions behavior
    mount.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.1)
    scene.add(ambientLight)

    // Intense SpotLight (Increase intensity for newer Three.js)
    const spotLight = new THREE.SpotLight(0xff3333, 1000)
    spotLight.position.set(0, 0, 15)
    spotLight.angle = 0.4
    spotLight.penumbra = 0.3
    spotLight.decay = 1.5
    spotLight.distance = 100
    scene.add(spotLight)

    const spotLightTarget = new THREE.Object3D()
    scene.add(spotLightTarget)
    spotLight.target = spotLightTarget

    // Background Plane with texture-like noise to show lighting well
    const planeGeometry = new THREE.PlaneGeometry(100, 100)
    const planeMaterial = new THREE.MeshStandardMaterial({
      color: 0x0a0a0a,
      roughness: 0.7,
      metalness: 0.1,
    })
    const plane = new THREE.Mesh(planeGeometry, planeMaterial)
    plane.position.z = -5
    scene.add(plane)

    // Grid that reacts to light
    const grid = new THREE.GridHelper(100, 100, 0x444444, 0x222222)
    grid.position.z = -4.9
    grid.rotation.x = Math.PI / 2
    scene.add(grid)

    // Particle Noise
    const particlesCount = 3000
    const positions = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 60
    }
    const particlesGeometry = new THREE.BufferGeometry()
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.02,
      transparent: true,
      opacity: 0.2,
    })
    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    const mouse = new THREE.Vector2()
    const handlePointerMove = (event: PointerEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

      // Map mouse to scene coordinates
      const x = mouse.x * 20
      const y = mouse.y * 15

      // Spotlight follows cursor
      spotLight.position.set(x, y, 10)
      spotLightTarget.position.set(x, y, -5)
    }

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("pointermove", handlePointerMove)
    window.addEventListener("resize", handleResize)

    const animate = () => {
      particles.rotation.y += 0.0003
      particles.rotation.x += 0.0001

      // Subtle light flickering
      spotLight.intensity = 800 + Math.random() * 400

      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("resize", handleResize)
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
      scene.clear()
      renderer.dispose()
    }
  }, [])

  return (
    <div className="animated-background fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div ref={mountRef} className="absolute inset-0" />
      <div className="scanline-overlay" />
      {/* Volumetric glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--cursor-x,50%)_var(--cursor-y,50%),rgba(255,51,51,0.05)_0%,transparent_50%)] pointer-events-none" />
    </div>
  )
}
