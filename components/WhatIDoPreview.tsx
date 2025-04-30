"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Cpu, Lightbulb, Rocket, Video } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function WhatIDoPreview() {
  return (
    <div className="container mx-auto px-4 py-24 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 right-0 h-1/2 bg-zinc-900/30 -z-10 skew-y-3"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">What I Do</h2>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
          I wear multiple hats as a CEO, AI builder, content creator, and business strategist
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 group shadow-lg"
        >
          <div className="h-16 w-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-all duration-300">
            <Rocket className="h-8 w-8 text-cyan-500" />
          </div>
          <h3 className="text-2xl font-semibold mb-3 group-hover:text-cyan-500 transition-colors">
            CEO & Entrepreneur
          </h3>
          <p className="text-zinc-400 mb-6">
            Leading Bergs & Co. with a vision to build AI-powered tools that solve real-world problems and help people
            grow.
          </p>
          <div className="bg-zinc-800/50 p-3 rounded-lg">
            <p className="text-sm text-cyan-400 font-medium">
              Rebranded & relaunched Bergs & Co. into a tech-focused firm
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 group shadow-lg"
        >
          <div className="h-16 w-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-all duration-300">
            <Cpu className="h-8 w-8 text-cyan-500" />
          </div>
          <h3 className="text-2xl font-semibold mb-3 group-hover:text-cyan-500 transition-colors">AI Developer</h3>
          <p className="text-zinc-400 mb-6">
            Building chatbots with Mistral 7B and Ollama, creating AI voice assistants, and developing automation tools.
          </p>
          <div className="bg-zinc-800/50 p-3 rounded-lg">
            <p className="text-sm text-cyan-400 font-medium">
              Built chatbots using Mistral 7B for personal assistant use
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 group shadow-lg"
        >
          <div className="h-16 w-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-all duration-300">
            <Video className="h-8 w-8 text-cyan-500" />
          </div>
          <h3 className="text-2xl font-semibold mb-3 group-hover:text-cyan-500 transition-colors">Content Creator</h3>
          <p className="text-zinc-400 mb-6">
            Sharing knowledge through my YouTube channel "Atul Core" with content on tech, AI, politics, and personal
            growth.
          </p>
          <div className="bg-zinc-800/50 p-3 rounded-lg">
            <p className="text-sm text-cyan-400 font-medium">Launched a YouTube series breaking down AI trends</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 group shadow-lg"
        >
          <div className="h-16 w-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-all duration-300">
            <Lightbulb className="h-8 w-8 text-cyan-500" />
          </div>
          <h3 className="text-2xl font-semibold mb-3 group-hover:text-cyan-500 transition-colors">
            Business Strategist
          </h3>
          <p className="text-zinc-400 mb-6">
            Helping businesses identify opportunities, solve problems, and develop strategies for growth and digital
            transformation.
          </p>
          <div className="bg-zinc-800/50 p-3 rounded-lg">
            <p className="text-sm text-cyan-400 font-medium">
              Helped brands create growth-oriented execution strategies
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center mt-16"
      >
        <Button asChild className="group border-zinc-700 hover:bg-zinc-800 text-lg">
          <Link href="/what-i-do">
            Explore What I Do
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}
