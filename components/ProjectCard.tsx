import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  featured: boolean
  link: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-all">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
        <Link href={project.link} className="inline-flex items-center text-sm font-medium text-primary hover:underline">
          View Project <ArrowUpRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
