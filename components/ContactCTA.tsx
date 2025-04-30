"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ContactCTA() {
  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-zinc-900 rounded-2xl p-12 md:p-16 border border-zinc-800 relative overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent pointer-events-none" />

        {/* Animated particles */}
        <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-cyan-500/20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-6 h-6 rounded-full bg-cyan-500/10 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 right-10 w-3 h-3 rounded-full bg-cyan-500/30 animate-pulse animation-delay-4000"></div>

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">Let's build something useful.</h2>
          <p className="text-xl text-zinc-400 mb-10">
            Whether you have a project in mind, want to collaborate, or just want to say hello, I'm always open to new
            opportunities and connections.
          </p>
          <Button asChild size="lg" className="group bg-cyan-500 hover:bg-cyan-600 text-black text-lg px-8 py-6">
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
