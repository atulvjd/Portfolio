"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AtSign, Download, Github, MapPin, Send, Youtube } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName)
  }

  const handleBlur = () => {
    setFocusedField(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
  
    try {
      const res = await fetch("https://formspree.io/f/mdkgawkj", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
  
      const result = await res.json()
  
      if (res.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        })
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error(result.message || "Something went wrong.")
      }
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">Get in Touch</h1>
        <p className="text-xl max-w-3xl mx-auto text-zinc-400">
          Have a question, proposal, or just want to say hello? Feel free to reach out!
        </p>
        <p className="text-2xl mt-6 text-cyan-500 font-medium italic">Let's build something useful.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-8 font-heading">Contact Information</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-cyan-500" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Location</h3>
                <p className="text-zinc-400">Pachpedi Naka, Raipur, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                <AtSign className="h-6 w-6 text-cyan-500" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Email</h3>
                <p className="text-zinc-400">
                  <a href="mailto:atul.sahu025@gmail.com" className="hover:text-cyan-500 transition-colors">
                    atul.sahu025@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 font-heading">Connect With Me</h2>
            <p className="mb-8 text-zinc-400">
              Follow me on social media to stay updated with my latest projects, insights, and content.
            </p>
            <div className="flex gap-6">
              <a
                href="https://www.youtube.com/c/AtulCore"
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 w-14 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-colors group"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6 text-zinc-300 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a
                href="https://github.com/atulsahu"
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 w-14 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-colors group"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6 text-zinc-300 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a
                href="https://instagram.com/atulsahu"
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 w-14 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-colors group"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram text-zinc-300 group-hover:text-cyan-400 transition-colors"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 font-heading">Download CV</h2>
            <p className="mb-8 text-zinc-400">
              Want to learn more about my experience and skills? Download my CV for a comprehensive overview.
            </p>
            <Button className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 group">
              <Download className="mr-2 h-4 w-4 group-hover:text-cyan-400" /> Download CV
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-zinc-900 p-8 md:p-12 rounded-xl border border-zinc-800 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-8 font-heading">Send Me a Message</h2>
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-2 relative">
              <label
                htmlFor="name"
                className={`text-sm font-medium transition-all duration-200 ${
                  focusedField === "name" || formData.name ? "text-cyan-500" : "text-zinc-400"
                }`}
              >
                Your Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus("name")}
                onBlur={handleBlur}
                placeholder="John Doe"
                required
                className="bg-zinc-800 border-zinc-700 focus:border-cyan-500 h-12"
              />
            </div>

            <div className="space-y-2 relative">
              <label
                htmlFor="email"
                className={`text-sm font-medium transition-all duration-200 ${
                  focusedField === "email" || formData.email ? "text-cyan-500" : "text-zinc-400"
                }`}
              >
                Your Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus("email")}
                onBlur={handleBlur}
                placeholder="john@example.com"
                required
                className="bg-zinc-800 border-zinc-700 focus:border-cyan-500 h-12"
              />
            </div>

            <div className="space-y-2 relative">
              <label
                htmlFor="message"
                className={`text-sm font-medium transition-all duration-200 ${
                  focusedField === "message" || formData.message ? "text-cyan-500" : "text-zinc-400"
                }`}
              >
                Your Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus("message")}
                onBlur={handleBlur}
                placeholder="Write your message here..."
                required
                className="min-h-[180px] bg-zinc-800 border-zinc-700 focus:border-cyan-500"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto bg-cyan-500 hover:bg-cyan-600 text-black text-lg px-8 py-6"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </motion.div>
      </div>
      <Toaster />
    </div>
  )
}
