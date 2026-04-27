import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SkillsContent() {
  const skillCategories = [
    {
      category: "Systems & Hardware",
      skills: ["Circuit Design", "Robotics", "Arduino", "PCB Layout", "Micro-controllers"],
    },
    {
      category: "Languages",
      skills: ["TypeScript", "JavaScript", "C++", "Python", "SQL"],
    },
    {
      category: "Frontend Development",
      skills: ["React.js", "Next.js", "React Native", "Tailwind CSS", "Framer Motion"],
    },
    {
      category: "Backend & Systems",
      skills: ["Node.js", "Express.js", "Firebase", "PostgreSQL", "RESTful APIs"],
    },
    {
      category: "Cloud & Deployment",
      skills: ["AWS", "GitHub Actions", "Docker", "CI/CD", "Vercel"],
    },
    {
      category: "Strategic Logic",
      skills: ["Systems Architecture", "Problem Solving", "Logic Gates", "Algorithmic Efficiency"],
    },
  ]

  return (
    <div className="space-y-12">
      <div className="space-y-4 text-center">
        <div className="flex items-center justify-center gap-4 text-zinc-500 text-[10px] font-bold uppercase tracking-[0.4em]">
          <div className="h-px w-12 bg-white/10" />
          Technical_Capability_Matrix
          <div className="h-px w-12 bg-white/10" />
        </div>
        <h3 className="text-4xl font-black uppercase italic tracking-tighter text-white">Skill_Assessment</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="group relative">
            <div className="absolute -inset-0.5 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity blur-[1px]" />
            <Card className="relative h-full border-white/5 bg-zinc-900/40 rounded-none overflow-hidden transition-all group-hover:border-primary/40 group-hover:bg-zinc-900/60">
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-30 transition-opacity">
                <span className="text-[32px] font-black italic">#{index + 1}</span>
              </div>

              <CardContent className="p-6 relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-2 w-2 bg-primary" />
                  <h3 className="text-lg font-black uppercase italic tracking-tighter text-primary">[{category.category}]</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="text-[10px] uppercase tracking-widest rounded-none border-white/10 bg-white/5 text-zinc-400 group-hover:text-white transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              {/* Decorative HUD corners */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/10" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/10" />
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
