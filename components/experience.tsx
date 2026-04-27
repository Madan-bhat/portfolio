import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Skills from "./skills-content"

export default function Experience() {
  const experiences = [
    {
      title: "Lead Engineer",
      company: "Leapfrog Technology / Trayt Health",
      period: "Jan 2025 - Present",
      location: "Kathmandu, Nepal",
      achievements: [
        "Leading the engineering team in developing innovative healthcare solutions for Trayt Health",
        "Architecting scalable and secure systems for handling sensitive healthcare data",
        "Implementing advanced AWS infrastructure for high availability and compliance",
        "Mentoring junior engineers and establishing best practices for code quality and security",
        "Collaborating with product and design teams to deliver exceptional user experiences",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Leapfrog Technology / Trayt Health",
      period: "July 2023 - Jan 2025",
      location: "Kathmandu, Nepal",
      achievements: [
        "Coordinated development efforts with remote teams across the US, Australia, and Nepal to deliver complex healthcare solutions for Trayt Health",
        "Reduced the frontend bundle size by 20% through advanced optimization techniques",
        "Optimized backend API performance, achieving over 200% faster response times",
        "Leveraged AWS services (SQS, EventBridge, Lambda, Step Functions) to automate critical tasks",
        "Mentored and coached team members, accelerating onboarding and enhancing team productivity",
      ],
    },
    {
      title: "Software Engineer",
      company: "Leapfrog Technology",
      period: "Sep 2021 - July 2023",
      location: "Kathmandu, Nepal",
      achievements: [
        "Led and managed a diverse software development team comprising over 15 members",
        "Designed and implemented solutions that consistently exceeded performance benchmarks",
        "Streamlined project planning by working closely with product owners",
        "Orchestrated the successful release of major application versions",
        "Emerged as the primary point of contact for both project stakeholders and management",
      ],
    },
    {
      title: "Associate Software Engineer",
      company: "Leapfrog Technology",
      period: "Sep 2020 - Sep 2021",
      location: "Kathmandu, Nepal",
      achievements: [
        "Collaborated with senior developers and product owners to deliver high-quality applications",
        "Employed a meticulous approach to debugging code and identifying root causes of issues",
        "Contributed to system improvement efforts by conducting thorough system analysis",
        "Played a pivotal role in enhancing system performance through strategic optimization",
        "Innovatively designed and developed a browser extension, streamlining workflow processes",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Leapfrog Technology",
      period: "Jun 2020 - Sep 2020",
      location: "Kathmandu, Nepal",
      achievements: [
        "Acquired proficiency in JavaScript and harnessed the browser canvas API",
        "Recreated Pac-man game with vanilla JS while integrating various path-finding algorithms",
        "Successfully delved into backend development with Node.js and honed frontend skills with React.js",
      ],
    },
    {
      title: "Web Application Developer",
      company: "Technorio Inc.",
      period: "Jan 2019 - Jun 2020",
      location: "Kathmandu, Nepal",
      achievements: [
        "Delivered projects across diverse industries, including insurance management, video streaming, and ticket management",
        "Collaborated closely with the business development team, offering engineering insights",
        "Utilized GitHub actions to automate deployment pipelines",
        "Applied server deployment expertise to successfully launch a range of web applications",
      ],
    },
  ]

  return (
    <section id="experience" className="py-24 bg-zinc-950/20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="section-heading">
            <p>Service Record</p>
            <h2>Employment_History</h2>
            <p>
              Deployment logs and technical contributions across verified environments.
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
