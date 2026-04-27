"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"

const navItems = [
  { name: "Terminal", href: "#home" },
  { name: "Subject_Dossier", href: "#about" },
  { name: "Evidence_Board", href: "#projects" },
  { name: "Background", href: "#education" },
  { name: "Inquiry", href: "#contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const pathname = usePathname()

  // Function to determine which section is currently in view
  const determineActiveSection = useCallback(() => {
    const sections = navItems.map((item) => item.href.substring(1))

    const allSections = [...sections, "skills"]

    // Find the section that is currently in view
    for (let i = allSections.length - 1; i >= 0; i--) {
      const section = document.getElementById(allSections[i])
      if (section) {
        const rect = section.getBoundingClientRect()
        // If the section is in the viewport (with some buffer for better UX)
        if (rect.top <= 150 && rect.bottom >= 150) {
          // Map to the closest navbar item if it's not in the navbar
          const sectionId = allSections[i]
          if (sectionId === "skills") return "about"
          if (!sections.includes(sectionId)) return "home"
          return sectionId
        }
      }
    }

    // Default to home if no section is in view
    return "home"
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
      setActiveSection(determineActiveSection())
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check
    setActiveSection(determineActiveSection())

    return () => window.removeEventListener("scroll", handleScroll)
  }, [determineActiveSection])

  // Smooth scroll to section when clicking nav items
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const element = document.getElementById(targetId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for header height
        behavior: "smooth",
      })
      setActiveSection(targetId)
      if (isOpen) setIsOpen(false)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-primary/20 shadow-[0_0_20px_rgba(0,0,0,0.5)]" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="h-4 w-4 bg-primary animate-pulse" />
            <span className="text-xl font-black uppercase tracking-tighter italic">MB_Archive</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <div className="relative flex items-center bg-foreground/5 p-1 border border-foreground/10">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1)

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={cn(
                      "text-[10px] uppercase tracking-[0.2em] transition-all px-4 py-2 relative block",
                      isActive ? "text-primary font-bold bg-primary/10 shadow-[inset_0_0_10px_rgba(var(--primary),0.1)]" : "text-muted-foreground hover:text-foreground hover:bg-foreground/5",
                    )}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        layoutId="underline"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="relative"
          >
            <motion.div
              initial={false}
              animate={isOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.div>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        className="md:hidden overflow-hidden"
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="container py-4 bg-background/95 backdrop-blur-sm">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1)

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={cn(
                    "text-sm font-medium transition-colors py-2 px-3 rounded-md",
                    isActive
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
                  )}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </motion.div>
    </header>
  )
}
