"use client"

import { Code, Cpu, Lightbulb, Megaphone, PenTool, Rocket, Users, Video } from "lucide-react"
import { motion } from "framer-motion"

export default function WhatIDoPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">What I Do</h1>
        <p className="text-xl max-w-3xl mx-auto text-zinc-400">
          I wear multiple hats as a CEO, AI builder, content creator, and business strategist. Here's a breakdown of my
          roles and expertise.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 shadow-lg hover:border-cyan-500/30 transition-all duration-300"
        >
          <div className="h-16 w-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6">
            <Rocket className="h-8 w-8 text-cyan-500" />
          </div>
          <h2 className="text-2xl font-bold mb-4 font-heading">CEO & Entrepreneur</h2>
          <p className="text-zinc-400 mb-6">
            As the founder and CEO of Bergs & Co., I lead our vision, strategy, and operations. I'm responsible for
            setting our direction, making key decisions, and ensuring we're building products that truly solve problems.
          </p>

          <div className="bg-zinc-800/50 p-4 rounded-lg mb-6">
            <p className="text-cyan-400 font-medium mb-2">Key Achievement:</p>
            <p className="text-zinc-300">
              Rebranded & relaunched Bergs & Co. into a tech-focused firm with a clear vision and roadmap for AI-powered
              products.
            </p>
          </div>

          <ul className="space-y-3 text-zinc-400">
            <li className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Lightbulb className="h-3 w-3 text-cyan-500" />
              </div>
              <span>Strategic vision and company direction</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Users className="h-3 w-3 text-cyan-500" />
              </div>
              <span>Team building and leadership</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <PenTool className="h-3 w-3 text-cyan-500" />
              </div>
              <span>Product development and roadmap planning</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Rocket className="h-3 w-3 text-cyan-500" />
              </div>
              <span>Business growth and scaling strategies</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 shadow-lg hover:border-cyan-500/30 transition-all duration-300"
        >
          <div className="h-16 w-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6">
            <Cpu className="h-8 w-8 text-cyan-500" />
          </div>
          <h2 className="text-2xl font-bold mb-4 font-heading">AI Developer & Builder</h2>
          <p className="text-zinc-400 mb-6">
            I design and build AI-powered tools and applications that solve real problems. My focus is on creating
            practical, accessible solutions that leverage the latest AI technologies while remaining user-friendly.
          </p>

          <div className="bg-zinc-800/50 p-4 rounded-lg mb-6">
            <p className="text-cyan-400 font-medium mb-2">Key Achievement:</p>
            <p className="text-zinc-300">
              Built a personal AI assistant using Mistral 7B and Ollama that handles research, content creation, and
              task management with high accuracy.
            </p>
          </div>

          <ul className="space-y-3 text-zinc-400">
            <li className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Cpu className="h-3 w-3 text-cyan-500" />
              </div>
              <span>Building chatbots with Mistral 7B and Ollama</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Megaphone className="h-3 w-3 text-cyan-500" />
              </div>
              <span>Creating AI voice assistants</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Code className="h-3 w-3 text-cyan-500" />
              </div>
              <span>Developing automation tools and scripts</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <PenTool className="h-3 w-3 text-cyan-500" />
              </div>
              <span>Prompt engineering for AI applications</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 shadow-lg hover:border-cyan-500/30 transition-all duration-300"
        >
          <div className="h-16 w-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6">
            <Video className="h-8 w-8 text-cyan-500" />
          </div>
          <h2 className="text-2xl font-bold mb-4 font-heading">Content Creator</h2>
          <p className="text-zinc-400 mb-6">
            Through my YouTube channel "Atul Core" and other platforms, I create educational and informative content
            about technology, AI, politics, and personal growth. My goal is to share knowledge and insights in an
            accessible, engaging way.
          </p>

          <div className="bg-zinc-800/50 p-4 rounded-lg mb-6">
            <p className="text-cyan-400 font-medium mb-2">Key Achievement:</p>
            <p className="text-zinc-300">
              Launched a YouTube series breaking down AI trends and technologies, making complex concepts accessible to
              non-technical audiences.
            </p>
          </div>

          <ul className="space-y-3 text-zinc-400">
            <li className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Video className="h-3 w-3 text-cyan-500" />
              </div>
              <span>YouTube tutorials and educational content</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Megaphone className="h-3 w-3 text-cyan-500" />
              </div>
              <span>Social media content (Instagram Reels, etc.)</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <PenTool className="h-3 w-3 text-cyan-500" />
              </div>
              <span>Written articles and guides on technology</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Lightbulb className="h-3 w-3 text-cyan-500" />
              </div>
              <span>Thought leadership on AI and technology trends</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 shadow-lg hover:border-cyan-500/30 transition-all duration-300"
        >
          <div className="h-16 w-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6">
            <Lightbulb className="h-8 w-8 text-cyan-500" />
          </div>
          <h2 className="text-2xl font-bold mb-4 font-heading">Business Strategist</h2>
          <p className="text-zinc-400 mb-6">
            I help businesses identify opportunities, solve problems, and develop strategies for growth. My approach
            combines technical knowledge with business acumen to create practical, effective solutions.
          </p>

          <div className="bg-zinc-800/50 p-4 rounded-lg mb-6">
            <p className="text-cyan-400 font-medium mb-2">Key Achievement:</p>
            <p className="text-zinc-300">
              Helped multiple brands create growth-oriented execution strategies, focusing on practical implementation
              rather than theoretical frameworks.
            </p>
          </div>

          <ul className="space-y-3 text-zinc-400">
            <li className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <PenTool className="h-3 w-3 text-cyan-500" />
              </div>
              <span>Rebranding and positioning consultancy</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Lightbulb className="h-3 w-3 text-cyan-500" />
              </div>
              <span>Digital transformation strategy</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Megaphone className="h-3 w-3 text-cyan-500" />
              </div>
              <span>Marketing strategy (including meme marketing with GodRioX)</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Rocket className="h-3 w-3 text-cyan-500" />
              </div>
              <span>Growth planning and execution</span>
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 mb-20 shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-8 text-center font-heading">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 rounded-lg border border-zinc-800 text-center hover:border-cyan-500/30 hover:bg-zinc-800/30 transition-all duration-300">
            <h3 className="font-medium text-cyan-500">HTML</h3>
            <p className="text-sm text-zinc-400 mt-1">Frontend Structure</p>
          </div>
          <div className="p-4 rounded-lg border border-zinc-800 text-center hover:border-cyan-500/30 hover:bg-zinc-800/30 transition-all duration-300">
            <h3 className="font-medium text-cyan-500">Tailwind CSS</h3>
            <p className="text-sm text-zinc-400 mt-1">Styling & Design</p>
          </div>
          <div className="p-4 rounded-lg border border-zinc-800 text-center hover:border-cyan-500/30 hover:bg-zinc-800/30 transition-all duration-300">
            <h3 className="font-medium text-cyan-500">JavaScript</h3>
            <p className="text-sm text-zinc-400 mt-1">Web Functionality</p>
          </div>
          <div className="p-4 rounded-lg border border-zinc-800 text-center hover:border-cyan-500/30 hover:bg-zinc-800/30 transition-all duration-300">
            <h3 className="font-medium text-cyan-500">Prompt Engineering</h3>
            <p className="text-sm text-zinc-400 mt-1">AI Optimization</p>
          </div>
          <div className="p-4 rounded-lg border border-zinc-800 text-center hover:border-cyan-500/30 hover:bg-zinc-800/30 transition-all duration-300">
            <h3 className="font-medium text-cyan-500">Mistral 7B</h3>
            <p className="text-sm text-zinc-400 mt-1">AI Model</p>
          </div>
          <div className="p-4 rounded-lg border border-zinc-800 text-center hover:border-cyan-500/30 hover:bg-zinc-800/30 transition-all duration-300">
            <h3 className="font-medium text-cyan-500">Ollama</h3>
            <p className="text-sm text-zinc-400 mt-1">AI Deployment</p>
          </div>
          <div className="p-4 rounded-lg border border-zinc-800 text-center hover:border-cyan-500/30 hover:bg-zinc-800/30 transition-all duration-300">
            <h3 className="font-medium text-cyan-500">Automation</h3>
            <p className="text-sm text-zinc-400 mt-1">Workflow Optimization</p>
          </div>
          <div className="p-4 rounded-lg border border-zinc-800 text-center hover:border-cyan-500/30 hover:bg-zinc-800/30 transition-all duration-300">
            <h3 className="font-medium text-cyan-500">Content Creation</h3>
            <p className="text-sm text-zinc-400 mt-1">Video & Social</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
