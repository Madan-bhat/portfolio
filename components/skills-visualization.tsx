"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert"

interface Skill {
  name: string
  level: SkillLevel
  percentage: number
  description: string
}

interface SkillCategory {
  category: string
  skills: Skill[]
}

export default function SkillsVisualization() {
  const [activeCategory, setActiveCategory] = useState<string>("Frontend")

  const skillCategories: SkillCategory[] = [
    {
      category: "Frontend",
      skills: [
        { name: "JavaScript", level: "Expert", percentage: 95, description: "ES6+, DOM manipulation, async programming" },
        { name: "TypeScript", level: "Expert", percentage: 90, description: "Type systems, interfaces, generics" },
        { name: "React.js", level: "Expert", percentage: 92, description: "Hooks, context, state management" },
        { name: "Tailwind CSS", level: "Advanced", percentage: 85, description: "Utility-first approach" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: "Expert", percentage: 90, description: "Event loop, streams, async patterns" },
        { name: "Laravel", level: "Advanced", percentage: 85, description: "MVC architecture, Eloquent ORM" },
        { name: "Express.js", level: "Expert", percentage: 90, description: "Routing, middleware, API design" },
      ],
    },
    {
      category: "Cloud",
      skills: [
        { name: "AWS", level: "Advanced", percentage: 85, description: "Lambda, SQS, EventBridge" },
        { name: "GitHub Actions", level: "Advanced", percentage: 85, description: "CI/CD pipelines" },
        { name: "Docker", level: "Advanced", percentage: 80, description: "Containerization" },
      ],
    },
  ]

  const getActiveCategorySkills = () => {
    return skillCategories.find((cat) => cat.category === activeCategory)?.skills || []
  }

  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      <div className="flex flex-wrap gap-1 bg-zinc-900/50 p-1 border border-zinc-800">
        {skillCategories.map((category) => (
          <button
            key={category.category}
            onClick={() => setActiveCategory(category.category)}
            className={cn(
              "px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-black transition-all rounded-none",
              activeCategory === category.category
                ? "bg-primary text-white"
                : "text-zinc-500 hover:text-white hover:bg-zinc-800",
            )}
          >
            {category.category}_Module
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          {getActiveCategorySkills().map((skill, index) => (
            <div key={skill.name} className="space-y-3 group">
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <span className="text-[10px] text-primary font-bold uppercase tracking-widest">Skill_{String(index + 1).padStart(2, "0")}</span>
                  <h4 className="text-lg font-black uppercase italic tracking-tighter text-white group-hover:text-primary transition-colors">
                    {skill.name}
                  </h4>
                </div>
                <span className="text-xs text-zinc-500 font-mono">{skill.percentage}%</span>
              </div>

              <div className="h-1 w-full bg-zinc-900 overflow-hidden relative">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
              </div>

              <p className="text-[10px] text-zinc-500 uppercase tracking-[0.15em] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity">
                &gt;&gt; {skill.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900/30 border border-zinc-800 p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <span className="text-8xl font-black italic">{activeCategory.slice(0, 1)}</span>
          </div>

          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 border border-primary/30 bg-primary/5 flex items-center justify-center">
                <span className="text-primary font-bold">!</span>
              </div>
              <div>
                <h3 className="text-sm font-black uppercase tracking-widest text-white">Diagnostic_Report</h3>
                <p className="text-[10px] text-primary uppercase tracking-widest">Status: Optimized</p>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed uppercase tracking-[0.1em]">
              The following modules represent core technical competencies within the {activeCategory} sector.
              Subject demonstrates high adaptive capacity and consistent logical output across diverse problem sets.
            </p>
          </div>

          <div className="pt-8 flex items-center gap-2">
            <div className="h-1.5 w-1.5 bg-primary animate-pulse" />
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Inventory_System_v4.2</span>
          </div>
        </div>
      </div>
    </div>
  )
}
