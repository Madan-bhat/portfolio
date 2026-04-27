"use client"

import { ShieldAlert, Box, User, Terminal, BookOpen, Activity } from "lucide-react"

export default function About() {
  const hardSkills = ["React", "TypeScript", "Next.js", "React Native", "Node.js", "Express", "PostgreSQL", "Tailwind", "AWS", "Firebase"]
  const softSkills = ["Problem Solving", "Critical Thinking", "Autonomy", "Curiosity", "Collaboration", "Creativity"]

  const experience = [
    {
      title: "Several Freelancings",
      company: "Independent",
      period: "2021-2026",
      label: "DEPLOYMENTS"
    },
    {
      title: "Good at programming and mobile dev",
      company: "Skillset",
      period: "Active",
      label: "EXPERTISE"
    }
  ]

  const education = [
    {
      school: "MIT (MANIPAL INSTITUTE)",
      period: "2025-2029",
      degree: "BACHELOR - Electrical Engineering",
    }
  ]

  return (
    <section id="about" className="py-24 bg-black border-y border-white/5 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column: Subject Profile */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                <div className="h-1.5 w-1.5 bg-primary animate-pulse" />
                CAM_04 [REC]
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white italic">Madan Bhat</h2>
            </div>

            <div className="relative aspect-[4/5] bg-zinc-900 border border-white/10 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
              <img
                src="/placeholder.jpg"
                alt="Subject Profile"
                className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
              />

              {/* Corner Brackets */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-primary/60 z-20" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-primary/60 z-20" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-primary/60 z-20" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-primary/60 z-20" />

              <div className="absolute top-2 right-2 text-[8px] text-primary font-bold z-20 flex items-center gap-1">
                REC_ACTIVE [+]
              </div>
              <div className="absolute bottom-2 left-2 text-[8px] text-white/40 font-mono z-20">
                ISO_FACE_ID: 99.9%
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-[9px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
              <div className="space-y-1">
                <p className="text-zinc-600">Class:</p>
                <p className="text-white">ENG_ELECTRICAL</p>
              </div>
              <div className="space-y-1">
                <p className="text-zinc-600">XP_LEVEL:</p>
                <p className="text-white">UNDERGRAD</p>
              </div>
              <div className="space-y-1">
                <p className="text-zinc-600">LANG_1:</p>
                <p className="text-white">EN (Fluent)</p>
              </div>
              <div className="space-y-1">
                <p className="text-zinc-600">LANG_2:</p>
                <p className="text-white">HI (Native)</p>
              </div>
            </div>

            <div className="border border-primary/30 bg-primary/5 p-4 relative group">
              <div className="absolute -top-1 -left-1 h-2 w-2 bg-primary" />
              <div className="flex items-center gap-2 text-primary text-[8px] font-black uppercase tracking-[0.3em] mb-2">
                <div className="h-1 w-1 bg-primary rounded-full animate-ping" />
                System_Alert
              </div>
              <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white group-hover:text-primary transition-colors">Open To Work</h3>
              <div className="flex justify-between items-end mt-4">
                <span className="text-[8px] text-zinc-500 font-mono">// CONTRACTS: ENABLED</span>
                <span className="text-[8px] text-zinc-400 border border-white/10 px-2 py-0.5 bg-white/5 uppercase tracking-widest">[REMOTE_READY]</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <p className="text-[7px] text-zinc-600 font-mono uppercase leading-relaxed tracking-tighter">
                NOTICE: This dossier is for authorized personnel only. Unauthorized access to subject data is a violation of secure protocols.
                Last Updated: 2026.04.26_23:14:02
              </p>
            </div>
          </div>

          {/* Middle Column: Competence Analysis */}
          <div className="lg:col-span-6 space-y-12">
            <div className="flex justify-between items-start border-b border-white/5 pb-4">
              <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-black">Competence_Analysis_Report</p>
              <span className="text-[10px] font-mono text-zinc-600">[READ_ONLY]</span>
            </div>

            <div className="space-y-6">
              <p className="text-lg md:text-2xl text-zinc-400 font-light leading-relaxed">
                Electrical Engineering student obsessed with the fusion of <span className="bg-primary/20 text-white px-2 py-0.5 border-b-2 border-primary italic font-bold">hardware systems</span> and <span className="bg-primary/20 text-white px-2 py-0.5 border-b-2 border-primary italic font-bold">high-level code</span>.
                I bridge the gap between physical circuits and digital logic to build truly immersive experiences.
              </p>
              <div className="h-px w-24 bg-primary/40" />
            </div>

            <div className="space-y-10">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-primary font-black">//</span> Academic_Log [Education]
                </div>
                {education.map((edu, index) => (
                  <div key={index} className="space-y-2 relative group">
                    <div className="flex items-center gap-3">
                      <h4 className="text-lg font-black uppercase text-primary italic tracking-tighter group-hover:translate-x-1 transition-transform">[{edu.school}]</h4>
                      <span className="text-[10px] text-zinc-600 border border-white/5 px-2 py-0.5 bg-white/5 font-mono">{edu.period}</span>
                    </div>
                    <p className="text-xs text-zinc-400 uppercase tracking-widest font-light">{edu.degree}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-6 relative">
                <div className="flex items-center gap-4 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-primary font-black">//</span> Field_Operations [Experience]
                </div>
                {experience.map((exp, index) => (
                  <div key={index} className="space-y-2 relative group">
                    <div className="flex items-center gap-3">
                      <h4 className="text-lg font-black uppercase text-primary italic tracking-tighter group-hover:translate-x-1 transition-transform">[{exp.label}]</h4>
                      <span className="text-[10px] text-zinc-600 border border-white/5 px-2 py-0.5 bg-white/5 font-mono">{exp.period}</span>
                    </div>
                    <p className="text-xs text-zinc-400 uppercase tracking-widest font-light">{exp.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Equipment Inventory */}
          <div className="lg:col-span-3 space-y-12 bg-zinc-900/20 border-l border-white/5 pl-8 hidden lg:block">
            <div className="space-y-1 text-right">
               <p className="text-[8px] font-mono text-zinc-600 tracking-tighter">00:12:51:75</p>
               <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-black">Equipment_Inventory</p>
            </div>

            <div className="space-y-6">
              <p className="text-[10px] uppercase tracking-widest text-primary font-black">Hard Skills</p>
              <div className="grid grid-cols-2 gap-2">
                {hardSkills.map((skill) => (
                  <div key={skill} className="border border-white/5 bg-white/5 p-3 text-[10px] uppercase tracking-widest text-zinc-400 font-bold text-center hover:border-primary/40 hover:text-white transition-all cursor-crosshair">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 pt-6">
              <p className="text-[10px] uppercase tracking-widest text-primary font-black">Soft Skills</p>
              <div className="space-y-2">
                {softSkills.map((skill) => (
                  <div key={skill} className="border border-white/5 bg-white/5 p-3 text-[10px] uppercase tracking-widest text-zinc-400 font-bold text-center hover:border-primary/40 hover:text-white transition-all cursor-crosshair">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Decorative scanline overlay specifically for this section */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </section>
  )
}
