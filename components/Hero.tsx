"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowRight } from "lucide-react"
import Link from "next/link"
import { TypewriterEffect } from "./ui/typewriter-effect"
import { motion } from "framer-motion"

const roles = [
  { text: "Entrepreneur." },
  { text: "AI Builder." },
  { text: "Executor." },
  { text: "Creator." },
  { text: "Visionary." },
]

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about-preview")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#0F0F0F]">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-heading tracking-tight">
            Hi, I'm <span className="text-cyan-500">Atul Sahu</span> — I build with AI, not hype.
          </h1>

          <div className="h-16 mt-6">
            <TypewriterEffect words={roles} className="text-2xl md:text-3xl font-medium text-zinc-400" />
          </div>

          <p className="mt-6 text-xl text-zinc-400 max-w-2xl">
            At 18, I'm the CEO & Founder of Bergs & Co., focused on creating AI-powered solutions that solve real
            problems. I believe in execution over ideas, building tools that help people and businesses grow.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-5">
            <Button
              asChild
              size="lg"
              className="group bg-cyan-500 hover:bg-cyan-600 text-black font-medium px-8 py-6 text-lg"
            >
              <Link href="/projects">
                See My Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group border-zinc-700 hover:bg-zinc-800 font-medium px-8 py-6 text-lg"
            >
              <Link href="/about" className="flex items-center">
                Know Me
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="mt-20 flex justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="animate-bounce rounded-full h-12 w-12 bg-zinc-800/50 hover:bg-zinc-800"
              onClick={scrollToNextSection}
            >
              <ArrowDown className="h-5 w-5" />
              <span className="sr-only">Scroll Down</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
