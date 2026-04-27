import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Skills from "./skills-content"

export default function Experience() {
  const experiences = [
    {
      title: "Several Freelancings",
      company: "Independent",
      period: "2021 - 2026",
      location: "Remote / Hybrid",
      achievements: [
        "Several freelancings in web and mobile domains",
        "Direct client collaboration and system delivery",
      ],
    },
    {
      title: "Good at programming and mobile dev",
      company: "Core Specialization",
      period: "2017 - 2026",
      location: "Global",
      achievements: [
        "Specialized in high-level programming logic",
        "Expertise in mobile development and digital systems",
      ],
    },
  ]

  return (
    <section id="experience" className="py-24 bg-zinc-950/20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="section-heading">
            <p>Service Record</p>
            <h2>Field_Operations</h2>
            <p className="uppercase tracking-widest text-xs font-bold text-primary/80">
              Technical Contributions & Freelance Deployments
            </p>
          </div>

          <div className="space-y-4 mt-12 max-w-4xl mx-auto">
            {experiences.map((experience, index) => (
              <div key={index} className="relative pl-8 pb-12 group">
                <div className="absolute left-0 top-1 h-2 w-2 bg-primary group-hover:animate-ping" />
                <div className="absolute left-[3px] top-4 h-full w-[1px] bg-primary/20" />

                <div className="bg-zinc-900/40 border border-zinc-800 p-6 transition-all hover:border-primary/50 group-hover:bg-zinc-900/60">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] text-primary font-bold uppercase tracking-widest">LOG_{String(index + 1).padStart(2, "0")}</span>
                        <div className="h-[1px] w-4 bg-primary/30" />
                      </div>
                      <h3 className="text-xl font-black uppercase italic tracking-tighter text-white">{experience.title}</h3>
                      <p className="text-sm text-zinc-400 font-medium">{experience.company}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase tracking-[0.2em] border border-primary/30 px-2 py-1 bg-primary/5 text-primary">
                        {experience.period}
                      </span>
                      <p className="text-[10px] text-zinc-500 mt-2 uppercase tracking-widest">{experience.location}</p>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-primary font-bold text-xs mt-0.5">&gt;</span>
                        <span className="text-xs text-zinc-400 uppercase tracking-widest leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mt-20" id="skills">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  )
}
