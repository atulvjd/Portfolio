"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight, Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useState } from "react"

// Sample project data
const featuredProjects = [
  {
    id: 1,
    name: "Personal AI Assistant",
    description:
      "A customized AI assistant built with Mistral 7B and Ollama that helps with daily tasks, research, and content creation.",
    problem: "Managing multiple tasks and information sources efficiently",
    interesting: "Uses local LLM deployment for privacy and customization",
    skills: ["AI Integration", "Python", "Prompt Engineering"],
    tags: ["AI", "Mistral 7B", "Ollama"],
    image: "/aibot.jpg?height=600&width=800",
    link: "/projects",
    github: "https://github.com/atulsahu/personal-ai-assistant",
    demo: "https://assistant-demo.atulsahu.com",
  },
  {
    id: 2,
    name: "AI Voice Assistant",
    description:
      "A voice-activated assistant that can control smart home devices, answer questions, and perform various tasks through voice commands.",
    problem: "Hands-free interaction with technology for accessibility",
    interesting: "Combines speech recognition with contextual understanding",
    skills: ["Voice Recognition", "NLP", "IoT Integration"],
    tags: ["Voice AI", "Python", "Automation"],
    image: "/voiceas.jpg?height=600&width=800",
    link: "/projects",
    github: "https://github.com/atulsahu/ai-voice-assistant",
    demo: "",
  },
  {
    id: 3,
    name: "Curl Counter with Voice Recognition",
    description:
      "An application that uses computer vision to count bicep curls and provides audio feedback and form correction through voice.",
    problem: "Lack of form guidance during home workouts",
    interesting: "Real-time pose estimation with corrective feedback",
    skills: ["Computer Vision", "TensorFlow", "Audio Processing"],
    tags: ["Computer Vision", "Fitness", "Voice Feedback"],
    image: "/pypro.jpg?height=600&width=800",
    link: "/projects",
    github: "https://github.com/atulsahu/curl-counter",
    demo: "https://curl-counter-demo.atulsahu.com",
  },
]

export default function ProjectsPreview() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">Featured Projects</h2>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
          A selection of my work in AI development, automation, and content creation
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 group relative shadow-lg"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60"></div>

              {/* Glowing effect on hover */}
              <div
                className={`absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-500 transition-colors">{project.name}</h3>
              <p className="text-zinc-400 mb-4 line-clamp-3">{project.description}</p>

              {/* Expandable details */}
              <div
                className={`overflow-hidden transition-all duration-300 ${hoveredProject === project.id ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"}`}
              >
                <div className="bg-zinc-800/50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-zinc-300 mb-2">
                    <span className="text-cyan-400 font-medium">Problem:</span> {project.problem}
                  </p>
                  <p className="text-sm text-zinc-300 mb-2">
                    <span className="text-cyan-400 font-medium">What makes it interesting:</span> {project.interesting}
                  </p>
                  <div className="mt-3">
                    <span className="text-cyan-400 text-sm font-medium">Skills:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.skills.map((skill, idx) => (
                        <span key={idx} className="text-xs bg-zinc-700 text-zinc-300 px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mb-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-zinc-400 hover:text-cyan-400 transition-colors"
                    >
                      <Github className="h-3 w-3" /> GitHub Repo
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-zinc-400 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" /> Live Demo
                    </a>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="bg-zinc-800 text-zinc-300 border-zinc-700">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Link
                href={project.link}
                className="inline-flex items-center text-sm font-medium text-cyan-500 hover:text-cyan-400"
              >
                View Project <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center mt-16"
      >
        <Button asChild className="group border-zinc-700 hover:bg-zinc-800 text-lg">
          <Link href="/projects">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}
