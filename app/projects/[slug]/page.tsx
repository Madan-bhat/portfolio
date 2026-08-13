import { Button } from "@/components/ui/button"
import { getProject, projects } from "@/lib/projects"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    return { title: "Case Not Found" }
  }

  return {
    title: `${project.title} | Madan Bhat`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      url: `https://imadanbhat.vercel.app/projects/${project.slug}`,
      images: [{ url: project.image }],
    },
  }
}

function renderDetails(details: string) {
  const blocks = details.trim().split(/\n\n+/)

  return blocks.map((block, index) => {
    if (block.startsWith("### ")) {
      const [heading, ...rest] = block.split("\n")
      const items = rest.filter((line) => line.startsWith("- "))
      const paragraphs = rest.filter((line) => line && !line.startsWith("- "))

      return (
        <div key={index} className="space-y-4">
          <h2 className="text-sm uppercase tracking-[0.35em] text-primary font-black">
            {heading.replace("### ", "")}
          </h2>
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-sm text-zinc-400 leading-relaxed tracking-wide"
            >
              {paragraph}
            </p>
          ))}
          {items.length > 0 && (
            <ul className="space-y-3">
              {items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-zinc-400 leading-relaxed tracking-wide border-l border-white/10 pl-4"
                >
                  {item.replace(/^- /, "")}
                </li>
              ))}
            </ul>
          )}
        </div>
      )
    }

    return (
      <p
        key={index}
        className="text-sm md:text-base text-zinc-300 leading-relaxed tracking-wide"
      >
        {block}
      </p>
    )
  })
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    notFound()
  }

  const meta = [
    { label: "Case_ID", value: `#${project.id}` },
    { label: "Classification", value: project.type },
    { label: "Timeline", value: project.dates },
    ...(project.role ? [{ label: "Role", value: project.role }] : []),
    ...(project.status ? [{ label: "Status", value: project.status }] : []),
  ]

  return (
    <section className="py-24 md:py-32 bg-black min-h-screen relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl relative z-10 space-y-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-zinc-500 hover:text-primary transition-colors font-black"
        >
          <ArrowLeft className="h-3 w-3" />
          Return_To_Evidence_Board
        </Link>

        <div className="space-y-6 border border-white/5 bg-zinc-950/60 p-8 md:p-12 relative">
          <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/10" />
          <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/10" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/10" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/10" />

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] font-black">
              <span className="text-primary">Evidence #{project.id}</span>
              <span className="text-zinc-600">/</span>
              <span className="bg-primary/5 border border-primary/20 px-2 py-0.5 text-primary">
                {project.type}
              </span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">
              {project.dates}
            </p>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white leading-none">
              {project.title}
            </h1>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </div>

          <div className="relative aspect-[16/9] overflow-hidden border border-white/10 bg-zinc-900">
            <img
              src={project.image}
              alt={`${project.title} visual`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-3 left-3 text-[8px] uppercase tracking-[0.3em] text-primary font-black">
              Visual_Evidence // {project.id}
            </div>
            <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-white/30" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-white/30" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-white/30" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-y border-white/5 py-6">
            {meta.map((item) => (
              <div key={item.label} className="space-y-1.5">
                <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-600 font-black">
                  {item.label}
                </p>
                <p className="text-xs uppercase tracking-[0.15em] text-zinc-300 font-bold">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-600 font-black">
              Stack_Tags
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] border border-white/10 px-3 py-1.5 text-zinc-400 uppercase tracking-[0.2em]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              size="sm"
              variant="outline"
              asChild
              className="rounded-none text-[10px] uppercase tracking-[0.2em] border-white/10 hover:border-primary/50 hover:bg-primary/5 h-10"
            >
              <Link href={project.codeLink} target="_blank" rel="noreferrer">
                <Github className="h-3.5 w-3.5 mr-2" />
                Access_Source
              </Link>
            </Button>
            {project.liveLink && (
              <Button
                size="sm"
                variant="outline"
                asChild
                className="rounded-none text-[10px] uppercase tracking-[0.2em] border-white/10 hover:border-primary/50 hover:bg-primary/5 h-10"
              >
                <Link href={project.liveLink} target="_blank" rel="noreferrer">
                  <ExternalLink className="h-3.5 w-3.5 mr-2" />
                  Live_Feed
                </Link>
              </Button>
            )}
          </div>
        </div>

        <div className="space-y-10 border-l-2 border-primary/30 pl-8 py-2">
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-black">
            Case_File // Decrypted
          </p>
          <div className="space-y-10">{renderDetails(project.details)}</div>
        </div>
      </div>
    </section>
  )
}
