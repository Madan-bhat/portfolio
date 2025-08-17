import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import OpenSource from "./open-source";

export default function Projects() {
  const projects = [
    {
      title: "WordCafe - Landing Page",
      description:
        "WordCafe is a unique platform that makes sharing stories easy and engaging. Built with modern web technologies.",
      tags: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn UI"],
      codeLink: "https://github.com/Madan-Bhat/wordcafe",
      liveLink: "https://wordcafe.vercel.app",
    },
    {
      title: "Unilink",
      description:
        "Unilink is a real-time chat app built with Firebase and React Native, allowing users to connect instantly with an intuitive interface.",
      tags: ["React Native", "Firebase", "Real-time Chat"],
      codeLink: "https://github.com/Madan-Bhat/unilink",
      liveLink: null,
    },
    {
      title: "Gyanasetu",
      description:
        "Gyanasetu simplifies school management with event organization, attendance tracking, and alerts for teachers and students.",
      tags: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn UI", "Magic UI"],
      codeLink: "https://github.com/Madan-Bhat/gyanasetu",
      liveLink: "https://gyanasetu-admin.vercel.app",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              My Projects
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out my latest work - a variety of projects from web
              applications to mobile apps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <Card className="overflow-hidden h-full flex flex-col">
                  <CardContent className="project-content flex-1 flex flex-col p-5">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 flex-1">
                      {project.description}
                    </p>
                    <div className="project-tags mt-3">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="project-links mt-4">
                      <Button size="sm" variant="outline" asChild>
                        <Link
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-1 h-4 w-4" /> Code
                        </Link>
                      </Button>
                      {project.liveLink && (
                        <Button size="sm" variant="outline" asChild>
                          <Link
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-1 h-4 w-4" /> Live
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
