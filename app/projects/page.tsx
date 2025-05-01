"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, ExternalLink, Github, Video } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Project data
const projects = [
  {
    id: 1,
    name: "Personal AI Assistant",
    description:
      "A customized AI assistant built with Mistral 7B and Ollama that helps with daily tasks, research, and content creation.",
    oneLiner: "Your personal AI companion for productivity",
    problem: "Managing multiple tasks and information sources efficiently while maintaining privacy and customization.",
    interesting:
      "Uses local LLM deployment for privacy and customization, with a context-aware memory system that improves responses over time.",
    skills: ["AI Integration", "Python", "Prompt Engineering", "Natural Language Processing"],
    tags: ["AI", "Mistral 7B", "Ollama", "Python"],
    category: "AI",
    image: "/aibot.jpg?height=600&width=800",
    github: "https://github.com/atulvjd/personal-ai-assistant",
    demo: "https://assistant-demo.atulsahu.com",
    details:
      "This AI assistant leverages the Mistral 7B model through Ollama to provide personalized assistance for various tasks. It features natural language understanding, context awareness, and can be customized to handle specific workflows. The assistant can help with research, content creation, scheduling, and more, making it a valuable productivity tool.",
  },
  {
    id: 2,
    name: "AI Voice Assistant",
    description:
      "A voice-activated assistant that can control smart home devices, answer questions, and perform various tasks through voice commands.",
    oneLiner: "Control your world with your voice",
    problem: "The need for hands-free interaction with technology, especially for accessibility and convenience.",
    interesting:
      "Combines speech recognition with contextual understanding to provide a natural conversation flow, with adaptive learning based on user interactions.",
    skills: ["Voice Recognition", "NLP", "IoT Integration", "Python"],
    tags: ["Voice AI", "Python", "Speech Recognition", "Automation"],
    category: "AI",
    image: "/voiceas.jpg?height=600&width=800",
    github: "https://github.com/atulvjd/ai-voice-assistant",
    demo: "",
    details:
      "This voice assistant uses advanced speech recognition to understand and respond to voice commands. It can control smart home devices, answer questions, set reminders, play music, and more. The system is designed to be extensible, allowing for the addition of new capabilities through a plugin architecture.",
  },
  {
    id: 3,
    name: "Curl Counter with Voice Recognition",
    description:
      "An application that uses computer vision to count bicep curls and provides audio feedback and form correction through voice.",
    oneLiner: "Your AI personal trainer",
    problem:
      "Lack of form guidance and motivation during home workouts, leading to ineffective exercises and potential injuries.",
    interesting:
      "Real-time pose estimation with corrective feedback that adapts to individual body types and movement patterns.",
    skills: ["Computer Vision", "TensorFlow", "Audio Processing", "Fitness Knowledge"],
    tags: ["Computer Vision", "Fitness", "Voice Feedback", "Python"],
    category: "Computer Vision",
    image: "/pypro.jpg?height=600&width=800",
    github: "https://github.com/atulvjd/curl-counter",
    demo: "https://curl-counter-demo.atulsahu.com",
    details:
      "This fitness application uses computer vision to track and count bicep curls in real-time. It provides audio feedback on form and rep count through voice synthesis. The system can detect improper form and offer suggestions for improvement, making it like having a personal trainer at home.",
  },
  {
    id: 4,
    name: "Task Automation Scripts",
    description:
      "A collection of scripts that automate repetitive tasks, saving time and reducing errors in daily workflows.",
    oneLiner: "Automate the boring stuff",
    problem:
      "Time wasted on repetitive tasks that could be automated, leading to decreased productivity and increased error rates.",
    interesting:
      "Uses a modular approach that allows for easy customization and integration into existing workflows, with minimal setup required.",
    skills: ["Python", "JavaScript", "Automation", "API Integration"],
    tags: ["Automation", "Python", "JavaScript", "Productivity"],
    category: "Automation",
    image: "/auto.jpg?height=600&width=800",
    github: "https://github.com/atulvjd/task-automation",
    demo: "",
    details:
      "This collection includes various scripts for automating repetitive tasks such as file organization, data processing, social media posting, and more. Each script is designed to be simple to use and customize, allowing users to adapt them to their specific needs. The automation tools significantly reduce the time spent on mundane tasks.",
  },
  {
    id: 5,
    name: "Notion Productivity Dashboard",
    description:
      "A comprehensive Notion dashboard for tracking goals, projects, tasks, and habits in one centralized location.",
    oneLiner: "Your life, organized",
    problem:
      "Information and task management scattered across multiple tools, leading to decreased productivity and missed deadlines.",
    interesting:
      "Creates a unified system that connects goals to daily actions, with automated tracking and progress visualization.",
    skills: ["Notion", "Productivity Systems", "Database Design", "Automation"],
    tags: ["Notion", "Productivity", "Organization", "Templates"],
    category: "Productivity",
    image: "/notion.jpg?height=600&width=800",
    github: "",
    demo: "https://notion-dashboard.atulsahu.com",
    details:
      "This Notion dashboard provides a complete productivity system with interconnected databases for goals, projects, tasks, and habits. It includes custom views for daily planning, weekly reviews, and long-term goal tracking. The system is designed to be flexible and adaptable to different workflows while maintaining a cohesive structure.",
  },
  {
    id: 6,
    name: "Payment Gateway Project 1",
    description:
      "A simple payment gateway integration project that allows users to make secure online payments.",
    oneLiner: "Memes that market",
    problem:
      "Some payment gateways are complex and difficult to integrate, leading to frustration for developers and users.",
    interesting:
      "Streamlined integration process with clear documentation and user-friendly interface, making it easy for developers to implement.",
    skills: ["Payment Integration", "API Development", "Security", "Web Development"],
    tags: ["Marketing", "Content Creation", "Social Media", "Viral"],
    category: "Marketing",
    image: "/pay.jpg?height=600&width=800",
    github: "https://github.com/atulvjd/paygate",
    demo: "https://paygate-blond.vercel.app/",
    details:
      "Payment Gateway for FUNOLOGY",
  },
  {
    id: 7,
    name: "Atul Core",
    description:
      "A meme marketing platform that helps brands create viral content and engage with audiences through humor and trending formats.",
    oneLiner: "Memes that market",
    problem:
      "Traditional marketing struggles to connect with younger audiences who respond better to authentic, humorous content.",
    interesting:
      "Uses trend analysis and audience segmentation to create targeted meme campaigns that drive engagement and conversions.",
    skills: ["Marketing", "Content Creation", "Trend Analysis", "Social Media"],
    tags: ["Marketing", "Content Creation", "Social Media", "Viral"],
    category: "Marketing",
    image: "/pfp1.jpg?height=600&width=800",
    github: "",
    demo: "https://youtube.com/@AtulCore",
    details:
      "GodRioX is a meme marketing platform that helps brands leverage the power of memes for marketing. It includes tools for creating, scheduling, and analyzing meme content across social media platforms. The platform also provides insights into trending formats and topics, helping brands stay relevant and engage with their audience effectively.",
  },
  {
    id: 8,
    name: "A Landing page for a Video Production company",
    description:
      "A Simple Landing page for a Video production company to showcase there work, ethnicity and passion.",
    oneLiner: "Memes that market",
    problem:
      "Nowadays landing pages are getting too much cluttery and hard to understand.",
    interesting:
      "Uses trend analysis and audience segmentation to create targeted meme campaigns that drive engagement and conversions.",
    skills: ["Typescripts", "Graphics", "Trend Analysis", "Social Media"],
    tags: ["Marketing", "Content Creation", "Social Media", "Viral"],
    category: "Marketing",
    image: "/88.jpg?height=600&width=800",
    github: "",
    demo: "https://youtube.com/@AtulCore",
    details:
      "Landing page for Eighty8 Films Production Company",
  },
   {
    id: 9,
    name: "Payment Gateway Project 2",
    description:
      "A simple Another payment gateway integration project that allows users to make secure online payments.",
    oneLiner: "Memes that market",
    problem:
      "Some payment gateways are complex and difficult to integrate, leading to frustration for developers and users.",
    interesting:
      "Streamlined integration process with clear documentation and user-friendly interface, making it easy for developers to implement.",
    skills: ["Payment Integration", "Security", "Web Development"],
    tags: ["Marketing", "Content Creation", "Social Media", "Viral"],
    category: "Marketing",
    image: "/pay2.jpg?height=600&width=800",
    github: "https://github.com/atulvjd/funologygate2",
    demo: "https://funologygate2.vercel.app/",
    details:
      "2nd Payment Gateway for FUNOLOGY",
  },
   {
    id: 10,
    name: "Payment Gateway Project 3",
    description:
      "A simple last payment gateway integration project that allows users to make secure online payments.",
    oneLiner: "Memes that market",
    problem:
      "Some payment gateways are complex and difficult to integrate, leading to frustration for developers and users.",
    interesting:
      "Streamlined integration process with clear documentation and user-friendly interface, making it easy for developers to implement.",
    skills: ["Payment Integration", "API Development", "Security", "Web Development"],
    tags: ["Marketing", "Content Creation", "Social Media", "Viral"],
    category: "Marketing",
    image: "/pay3.jpg?height=600&width=800",
    github: "https://github.com/atulvjd/funologygate3",
    demo: "https://funologygate3.vercel.app/",
    details:
      "3rd Payment Gateway for FUNOLOGY",
  },
]

// Categories for filtering
const categories = ["All", "AI", "Computer Vision", "Automation", "Productivity", "Marketing"]

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">My Projects</h1>
        <p className="text-xl max-w-3xl mx-auto text-zinc-400">
          A showcase of my work in AI development, automation, and content creation. Each project represents my
          commitment to building practical solutions that solve real problems.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-12"
      >
        <Tabs defaultValue="All" className="w-full" onValueChange={setActiveCategory}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-zinc-900 border border-zinc-800">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-cyan-500 data-[state=active]:text-black"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
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

              <div className="flex items-center justify-between">
                <Button
                  variant="ghost"
                  className="text-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/10 p-0"
                  onClick={() => setSelectedProject(project)}
                >
                  View Details <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-cyan-500/20 transition-colors"
                    >
                      <Github className="h-4 w-4 text-zinc-300" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-cyan-500/20 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 text-zinc-300" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="bg-zinc-900 border-zinc-800 text-zinc-100 max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold font-heading">{selectedProject?.name}</DialogTitle>
            <DialogDescription className="text-zinc-400 text-base">{selectedProject?.oneLiner}</DialogDescription>
          </DialogHeader>
          <div className="relative h-64 w-full overflow-hidden rounded-lg mt-4">
            <Image
              src={selectedProject?.image || "/placeholder.svg"}
              alt={selectedProject?.name || "Project"}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent"></div>
          </div>
          <div className="flex flex-wrap gap-2 my-4">
            {selectedProject?.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="bg-zinc-800 text-zinc-300 border-zinc-700">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-zinc-800/50 p-4 rounded-lg">
              <h4 className="font-medium text-cyan-400 mb-2">Problem</h4>
              <p className="text-zinc-300 text-sm">{selectedProject?.problem}</p>
            </div>
            <div className="bg-zinc-800/50 p-4 rounded-lg">
              <h4 className="font-medium text-cyan-400 mb-2">What Makes It Interesting</h4>
              <p className="text-zinc-300 text-sm">{selectedProject?.interesting}</p>
            </div>
          </div>

          <p className="text-zinc-300 mb-6">{selectedProject?.details}</p>

          <div className="flex flex-wrap gap-4">
            {selectedProject?.github && (
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition-colors"
              >
                <Github className="h-4 w-4" /> View on GitHub
              </a>
            )}
            {selectedProject?.demo && (
              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-cyan-500 text-black hover:bg-cyan-600 transition-colors"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-16 text-center"
      >
        <p className="text-zinc-400 mb-6">
          These projects represent just a portion of my work. I'm constantly building and experimenting with new
          technologies and ideas.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://github.com/atulvjd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition-colors"
          >
            <Github className="h-5 w-5" /> More on GitHub
          </a>
          <a
            href="https://www.youtube.com/@AtulCore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition-colors"
          >
            <Video className="h-5 w-5" /> YouTube Tutorials
          </a>
        </div>
      </motion.div>
    </div>
  )
}
