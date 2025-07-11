"use client"

import { ArrowRight, Calendar, Cpu, Globe, Lightbulb, Target, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function VisionPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">My Vision</h1>
        <p className="text-xl max-w-3xl mx-auto text-zinc-400">
          I'm building towards a future where AI and automation empower individuals and businesses to achieve more with
          less effort.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
      >
        <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 shadow-lg">
          <div className="h-16 w-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6">
            <Lightbulb className="h-8 w-8 text-cyan-500" />
          </div>
          <h2 className="text-2xl font-bold mb-4 font-heading">The Big Picture</h2>
          <p className="text-zinc-400">
            My mission is to democratize access to powerful AI tools and automation solutions. I believe that technology
            should serve people, not the other way around. By creating intuitive, accessible tools that solve real
            problems, I aim to empower individuals and businesses to focus on what truly matters to them.
          </p>
          <p className="text-zinc-400 mt-4">
            I envision a world where AI assistants handle routine tasks, automation eliminates busywork, and people are
            free to pursue creative and meaningful work. This isn't about replacing humans—it's about augmenting human
            capabilities and removing barriers to productivity and growth.
          </p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 shadow-lg">
          <div className="h-16 w-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6">
            <Cpu className="h-8 w-8 text-cyan-500" />
          </div>
          <h2 className="text-2xl font-bold mb-4 font-heading">Building Bergs & Co.</h2>
          <p className="text-zinc-400">
            Through Bergs & Co., I'm working to build an AI-first platform that integrates tools like ChatGPT, Gemini,
            Claude, and DeepSeek into a single, automation-powered assistant. This platform will serve as a central hub
            for productivity, learning, and growth, adapting to each user's unique needs and workflows.
          </p>
          <p className="text-zinc-400 mt-4">
            My goal is to grow Bergs & Co. into a tech powerhouse that's known for creating practical, impactful
            solutions to real-world problems. We'll focus on building tools that are accessible to everyone, not just
            technical users or large corporations.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-heading">Future Vision</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-zinc-800 transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Short-term */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 shadow-lg md:mt-0"
              >
                <div className="absolute left-1/2 top-8 w-4 h-4 bg-cyan-500 rounded-full transform -translate-x-1/2 hidden md:block"></div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-500">Short-Term Vision</h3>
                <p className="text-zinc-300 mb-4">
                  Build income sources from AI development and freelancing. Establish a foundation for sustainable
                  growth while expanding my technical skills and network.
                </p>
                <ul className="space-y-2 text-zinc-400">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowRight className="h-3 w-3 text-cyan-500" />
                    </div>
                    <span>Develop and launch 3-5 AI-powered tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowRight className="h-3 w-3 text-cyan-500" />
                    </div>
                    <span>Grow YouTube channel to 10,000 subscribers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowRight className="h-3 w-3 text-cyan-500" />
                    </div>
                    <span>Build a network of clients and collaborators</span>
                  </li>
                </ul>
              </motion.div>

              {/* Mid-term */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 shadow-lg md:mt-16"
              >
                <div className="absolute left-1/2 top-8 w-4 h-4 bg-cyan-500 rounded-full transform -translate-x-1/2 hidden md:block"></div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-500">Mid-Term Vision</h3>
                <p className="text-zinc-300 mb-4">
                  Grow Bergs & Co. into a product-driven organization with a team of talented developers. Launch our
                  first commercial AI products and establish a reputation for quality and innovation.
                </p>
                <ul className="space-y-2 text-zinc-400">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowRight className="h-3 w-3 text-cyan-500" />
                    </div>
                    <span>Build a team of 5-10 skilled developers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowRight className="h-3 w-3 text-cyan-500" />
                    </div>
                    <span>Launch a comprehensive AI integration platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowRight className="h-3 w-3 text-cyan-500" />
                    </div>
                    <span>Secure funding to accelerate growth</span>
                  </li>
                </ul>
              </motion.div>

              {/* Long-term */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 shadow-lg md:mt-32"
              >
                <div className="absolute left-1/2 top-8 w-4 h-4 bg-cyan-500 rounded-full transform -translate-x-1/2 hidden md:block"></div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-500">Long-Term Vision</h3>
                <p className="text-zinc-300 mb-4">
                  Launch an AI-first platform solving global productivity challenges. Create a suite of integrated tools
                  that work together seamlessly to help people and businesses achieve more with less effort.
                </p>
                <ul className="space-y-2 text-zinc-400">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowRight className="h-3 w-3 text-cyan-500" />
                    </div>
                    <span>Establish Bergs & Co. as a recognized leader in AI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowRight className="h-3 w-3 text-cyan-500" />
                    </div>
                    <span>Expand operations internationally</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowRight className="h-3 w-3 text-cyan-500" />
                    </div>
                    <span>Develop proprietary AI models for specific use cases</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 mb-20 shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-8 text-center font-heading">Why AI and Growth Matter</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-zinc-800 rounded-lg hover:border-cyan-500/30 transition-all duration-300">
            <div className="h-12 w-12 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-cyan-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
            <p className="text-zinc-400">
              AI has the potential to make powerful tools and resources accessible to everyone, regardless of technical
              expertise or financial resources. I'm committed to creating solutions that bridge this gap.
            </p>
          </div>

          <div className="p-6 border border-zinc-800 rounded-lg hover:border-cyan-500/30 transition-all duration-300">
            <div className="h-12 w-12 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-cyan-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Empowerment</h3>
            <p className="text-zinc-400">
              By automating routine tasks and providing intelligent assistance, AI can empower individuals and small
              businesses to compete with larger entities and achieve results that were previously out of reach.
            </p>
          </div>

          <div className="p-6 border border-zinc-800 rounded-lg hover:border-cyan-500/30 transition-all duration-300">
            <div className="h-12 w-12 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-cyan-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-zinc-400">
              AI and automation free up time and mental space for innovation and creativity. By handling routine work,
              these technologies allow people to focus on solving complex problems and creating new value.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-heading">The Impact I Want to Create</h2>
        <div className="space-y-8">
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-cyan-500/30 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3">Democratizing AI</h3>
            <p className="text-zinc-400">
              I want to make powerful AI tools accessible to everyone, not just large corporations or technical experts.
              By creating user-friendly interfaces and practical applications, I aim to put the power of AI in the hands
              of individuals and small businesses.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-cyan-500/30 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3">Solving Real Problems</h3>
            <p className="text-zinc-400">
              My focus is on building solutions that address genuine needs and challenges. I'm not interested in
              creating technology for technology's sake—every tool and application I develop is designed to solve
              specific problems and improve people's lives in tangible ways.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-cyan-500/30 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3">Empowering Growth</h3>
            <p className="text-zinc-400">
              Through my content creation and tools, I aim to help people learn, grow, and achieve their goals. Whether
              it's through educational YouTube videos, productivity tools, or AI assistants, my goal is to empower
              others to reach their full potential.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-cyan-500/30 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3">Building Community</h3>
            <p className="text-zinc-400">
              I believe in the power of community and collaboration. Through my work, I hope to connect with like-minded
              individuals and organizations to share knowledge, resources, and opportunities. Together, we can achieve
              more than any of us could alone.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-8 text-center font-heading">Roadmap (2024-2026)</h2>
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4 flex justify-center">
              <div className="h-16 w-16 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-cyan-500" />
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-semibold mb-2">2024: Foundation</h3>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="h-3 w-3 text-cyan-500" />
                  </div>
                  <span>Launch the first version of our AI assistant platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="h-3 w-3 text-cyan-500" />
                  </div>
                  <span>Grow the YouTube channel to 5,000 subscribers</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="h-3 w-3 text-cyan-500" />
                  </div>
                  <span>Develop and release 5 open-source AI tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="h-3 w-3 text-cyan-500" />
                  </div>
                  <span>Establish key partnerships with AI model providers</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4 flex justify-center">
              <div className="h-16 w-16 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-cyan-500" />
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-semibold mb-2">2025: Growth</h3>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="h-3 w-3 text-cyan-500" />
                  </div>
                  <span>Expand the team to include specialized AI engineers and content creators</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="h-3 w-3 text-cyan-500" />
                  </div>
                  <span>Launch a comprehensive AI integration platform for businesses</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="h-3 w-3 text-cyan-500" />
                  </div>
                  <span>Reach 50,000 YouTube subscribers and expand to other content platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="h-3 w-3 text-cyan-500" />
                  </div>
                  <span>Develop custom AI solutions for specific industries (education, healthcare, etc.)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4 flex justify-center">
              <div className="h-16 w-16 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-cyan-500" />
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-semibold mb-2">2026: Expansion</h3>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="h-3 w-3 text-cyan-500" />
                  </div>
                  <span>Launch a comprehensive AI education platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="h-3 w-3 text-cyan-500" />
                  </div>
                  <span>Establish Bergs & Co. as a recognized leader in practical AI solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="h-3 w-3 text-cyan-500" />
                  </div>
                  <span>Expand operations internationally with a focus on emerging markets</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="h-3 w-3 text-cyan-500" />
                  </div>
                  <span>Develop proprietary AI models tailored to specific use cases</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-16 text-center"
      >
        <Button asChild className="bg-cyan-500 hover:bg-cyan-600 text-black text-lg px-8 py-6">
          <Link href="/contact">
            Let's Build This Future Together
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}
