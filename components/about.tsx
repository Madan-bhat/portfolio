import { Card, CardContent } from "@/components/ui/card"
import { Code2, Globe, Server, Users } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: <Code2 className="h-10 w-10 text-primary" />,
      title: "Frontend Development",
      description: "Expertise in React, React Native, TypeScript, and modern frontend technologies",
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Backend Development",
      description: "Proficient with Node.js for building scalable backend solutions",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Mobile Development",
      description: "Building cross-platform mobile applications with React Native",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Web Technologies",
      description: "Creating responsive and interactive web applications with modern frameworks",
    },
  ]

  return (
    <div className="w-full bg-muted/30">
      <section id="about" className="py-20 w-full">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hello! I'm Madan Bhat, a passionate Frontend Developer based in Udupi, Karnataka. I love turning complex
                problems into simple, beautiful, and intuitive designs.
              </p>
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                As an 18-year-old beginner software developer, I'm passionate about coding and constantly learning new
                technologies. I specialize in React, React Native, TypeScript, and Node.js, with a focus on creating
                engaging user experiences and building applications that solve real-world problems. My journey in
                software development is driven by curiosity and a desire to make technology accessible and beautiful.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="animate-in">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-2 rounded-full bg-primary/10">{feature.icon}</div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
