"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutPreview() {
  return (
    <div id="about-preview" className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">About Me</h2>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
          Young entrepreneur with a passion for AI and execution
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] rounded-xl overflow-hidden border border-zinc-800 shadow-lg"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
          <Image src="/pfp.jpg?height=1000&width=800" alt="Atul Sahu" fill className="object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold mb-6 font-heading">My Journey</h3>
          <div className="mb-8 p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg">
            <p className="text-xl italic text-cyan-400 mb-2">"Don't wait for inspiration. Build without it."</p>
            <p className="text-zinc-500 text-sm">— The principle I live by</p>
          </div>
          <p className="text-zinc-300 mb-6 text-lg">
            I'm Atul Sahu, an 18-year-old entrepreneur and AI builder from Raipur, India. As the CEO & Founder of Bergs
            & Co., I'm focused on building AI-powered tools that solve real problems and help people grow using
            technology.
          </p>
          <p className="text-zinc-400 mb-8">
            My approach is centered on execution over ideas. I believe in understanding problems deeply, concentrating
            efforts on solutions that matter, and continuously learning to improve both myself and the tools I build.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="bg-zinc-900 px-4 py-2 rounded-full border border-zinc-800 flex items-center gap-2">
              <div className="h-2 w-2 bg-cyan-500 rounded-full"></div>
              <span className="text-zinc-300">Execution {`>`} Ideas</span>
            </div>
            <div className="bg-zinc-900 px-4 py-2 rounded-full border border-zinc-800 flex items-center gap-2">
              <div className="h-2 w-2 bg-cyan-500 rounded-full"></div>
              <span className="text-zinc-300">Focus</span>
            </div>
            <div className="bg-zinc-900 px-4 py-2 rounded-full border border-zinc-800 flex items-center gap-2">
              <div className="h-2 w-2 bg-cyan-500 rounded-full"></div>
              <span className="text-zinc-300">Learning</span>
            </div>
            <div className="bg-zinc-900 px-4 py-2 rounded-full border border-zinc-800 flex items-center gap-2">
              <div className="h-2 w-2 bg-cyan-500 rounded-full"></div>
              <span className="text-zinc-300">Freedom</span>
            </div>
            <div className="bg-zinc-900 px-4 py-2 rounded-full border border-zinc-800 flex items-center gap-2">
              <div className="h-2 w-2 bg-cyan-500 rounded-full"></div>
              <span className="text-zinc-300">Scaling</span>
            </div>
            <div className="bg-zinc-900 px-4 py-2 rounded-full border border-zinc-800 flex items-center gap-2">
              <div className="h-2 w-2 bg-cyan-500 rounded-full"></div>
              <span className="text-zinc-300">Growth</span>
            </div>
          </div>

          <Button asChild className="group border-zinc-700 hover:bg-zinc-800 text-lg">
            <Link href="/about">
              Learn More About Me
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
