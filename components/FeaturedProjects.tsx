import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import ProjectCard from "./ProjectCard"

// Sample project data
const featuredProjects = [
  {
    id: 1,
    title: "AI Education Assistant",
    description:
      "An AI-powered platform helping students in rural India access quality educational resources through natural language interactions.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["AI", "Education", "Python", "TensorFlow"],
    featured: true,
    link: "/projects/ai-education-assistant",
  },
  {
    id: 2,
    title: "SmartFarm Analytics",
    description:
      "IoT and AI solution for small-scale farmers to optimize crop yields and reduce resource wastage through data-driven insights.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["IoT", "Machine Learning", "Agriculture", "Data Analytics"],
    featured: true,
    link: "/projects/smartfarm-analytics",
  },
  {
    id: 3,
    title: "LocalBiz Platform",
    description:
      "Digital marketplace connecting local businesses with customers through an intuitive mobile app with integrated AI recommendations.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React Native", "Firebase", "E-commerce", "UX Design"],
    featured: true,
    link: "/projects/localbiz-platform",
  },
]

export default function FeaturedProjects() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Innovative solutions I've built to solve real-world problems
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Button asChild variant="outline" className="group">
          <Link href="/projects">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
