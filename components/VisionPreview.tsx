"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Cpu, Globe, Target } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function VisionPreview() {
  return (
    <div className="container mx-auto px-4 py-24 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-zinc-900/30 -z-10 -skew-y-3"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">My Vision</h2>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
          Building an AI-first future that empowers individuals and businesses
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 shadow-lg"
        >
          <div className="h-16 w-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6">
            <Target className="h-8 w-8 text-cyan-500" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Short-Term</h3>
          <p className="text-zinc-400 mb-4">
            Build income sources from AI development and freelancing. Establish a foundation for sustainable growth
            while expanding my technical skills and network.
          </p>
          <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"></div>
          </div>
          <p className="text-right text-xs text-zinc-500 mt-1">75% progress</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 shadow-lg"
        >
          <div className="h-16 w-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6">
            <Cpu className="h-8 w-8 text-cyan-500" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Mid-Term</h3>
          <p className="text-zinc-400 mb-4">
            Grow Bergs & Co. into a product-driven organization with a team of talented developers. Launch our first
            commercial AI products and establish a reputation for quality and innovation.
          </p>
          <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full w-2/5 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"></div>
          </div>
          <p className="text-right text-xs text-zinc-500 mt-1">40% progress</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 shadow-lg"
        >
          <div className="h-16 w-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6">
            <Globe className="h-8 w-8 text-cyan-500" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Long-Term</h3>
          <p className="text-zinc-400 mb-4">
            Launch an AI-first platform solving global productivity challenges. Create a suite of integrated tools that
            work together seamlessly to help people and businesses achieve more with less effort.
          </p>
          <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full w-1/5 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"></div>
          </div>
          <p className="text-right text-xs text-zinc-500 mt-1">20% progress</p>
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
          <Link href="/vision">
            Learn More About My Vision
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}
