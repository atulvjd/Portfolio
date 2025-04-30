"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Code, Lightbulb, Rocket, Trophy, Youtube } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20"
      >
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">About Me</h1>
          <p className="text-xl mb-8 text-zinc-400">
            My journey from a curious kid to the CEO & Founder of Bergs & Co.
          </p>

          <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg mb-8">
            <p className="text-xl italic text-cyan-400">"Don't wait for inspiration. Build without it."</p>
            <p className="text-zinc-500 text-sm mt-2">— The principle I live by</p>
          </div>

          <div className="prose dark:prose-invert max-w-none text-lg">
            <p>
              I'm Atul Sahu, an 18-year-old entrepreneur and AI builder from Raipur, India. My passion for technology
              started early, and I've been on a mission to build tools that solve real problems and help people grow
              using technology.
            </p>
            <p>
              What drives me is the belief that technology should be accessible and practical. I'm not interested in
              hype or buzzwords—I focus on execution and building solutions that actually work. This approach has guided
              me in creating AI assistants, automation tools, and content that helps others understand and leverage
              technology.
            </p>
          </div>

          <div className="mt-8">
            <Link href="/projects">
              <Button className="group bg-cyan-500 hover:bg-cyan-600 text-black text-lg">
                See My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative h-[600px] rounded-xl overflow-hidden shadow-xl border border-zinc-800">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
          <Image src="/pfp.jpg?height=1200&width=800" alt="Atul Sahu" fill className="object-cover" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-heading">Founder's Letter</h2>
        <div className="max-w-3xl mx-auto bg-zinc-900 p-8 md:p-12 rounded-xl border border-zinc-800 shadow-lg">
          <p className="text-lg text-zinc-300 mb-6">
            When I founded Bergs & Co., I had a clear vision: to build AI-powered tools that solve real-world problems.
            I believe that technology should serve people, not the other way around. Too often, we see tech solutions
            that are complex, inaccessible, or designed more for impressing investors than helping users.
          </p>
          <p className="text-lg text-zinc-300 mb-6">
            My approach is different. I focus on understanding problems deeply, building practical solutions, and
            continuously improving based on real feedback. I'm not interested in chasing trends or creating flashy
            demos—I want to build tools that make a tangible difference in people's lives.
          </p>
          <p className="text-lg text-zinc-300">
            As an 18-year-old founder, I know I have much to learn. But I also bring a fresh perspective, unburdened by
            conventional thinking. My youth is not a limitation but an advantage—it gives me the energy, adaptability,
            and long-term vision needed to build something truly meaningful.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-zinc-800 overflow-hidden">
              <Image src="/pfp1.jpg?height=100&width=100" alt="Atul Sahu" width={48} height={48} />
            </div>
            <div>
              <p className="font-medium">Atul Sahu</p>
              <p className="text-sm text-zinc-400">CEO & Founder, Bergs & Co.</p>
            </div>
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
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-heading">My Journey</h2>
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4 flex justify-center">
              <div className="h-16 w-16 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-cyan-500" />
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-semibold mb-2">Early Beginnings (2016-2018)</h3>
              <p className="text-zinc-400">
                My fascination with technology began at age 10. While most kids were playing games, I was taking apart
                electronics and learning how they worked. By 12, I had taught myself basic HTML and was building simple
                websites. This early exposure to technology sparked my curiosity about how digital tools could solve
                problems.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4 flex justify-center">
              <div className="h-16 w-16 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <Code className="h-8 w-8 text-cyan-500" />
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-semibold mb-2">Coding Journey (2019-2021)</h3>
              <p className="text-zinc-400">
                At 14, I dove deeper into programming, teaching myself JavaScript and Python through online resources
                and countless hours of practice. I built small tools to automate tasks and created my first web
                applications. This period was crucial for developing my technical foundation and problem-solving
                approach.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4 flex justify-center">
              <div className="h-16 w-16 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <Youtube className="h-8 w-8 text-cyan-500" />
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-semibold mb-2">Content Creation (2021-2022)</h3>
              <p className="text-zinc-400">
                Recognizing the power of sharing knowledge, I launched my YouTube channel "Atul Core" at 16. I created
                content about technology, AI, and personal growth, breaking down complex concepts into accessible
                explanations. This not only helped others learn but also deepened my own understanding as I researched
                and explained topics.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4 flex justify-center">
              <div className="h-16 w-16 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <Rocket className="h-8 w-8 text-cyan-500" />
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-semibold mb-2">First AI Projects (2022-2023)</h3>
              <p className="text-zinc-400">
                My journey into AI began with experimenting with open-source models and building simple applications. I
                created a basic chatbot for answering homework questions and developed a voice assistant for personal
                use. These projects, though modest, taught me valuable lessons about AI development and user needs.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4 flex justify-center">
              <div className="h-16 w-16 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <Trophy className="h-8 w-8 text-cyan-500" />
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-semibold mb-2">Founding Bergs & Co. (2019-2020)</h3>
              <p className="text-zinc-400">
                At 18, I founded Bergs & Co. with a clear vision: to build AI-powered tools that solve real-world
                problems. The company represents my commitment to creating practical, accessible technology solutions
                that help individuals and businesses grow. As CEO, I lead our efforts to develop innovative AI
                assistants and automation tools.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4 flex justify-center">
              <div className="h-16 w-16 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-cyan-500" />
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-semibold mb-2">Present Day (2024)</h3>
              <p className="text-zinc-400">
                Today, I'm focused on growing Bergs & Co. while continuing to build and share my knowledge. I'm
                developing AI assistants using models like Mistral 7B and Ollama, creating automation tools, and
                expanding my content creation efforts. Every day brings new challenges and opportunities to learn,
                build, and grow.
              </p>
            </div>
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
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-heading">Core Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 shadow-lg hover:border-cyan-500/30 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-cyan-500">Execution {`>`} Ideas</h3>
            <p className="text-zinc-400">
              Ideas are common, execution is rare. I believe in taking action and building, even when the path isn't
              perfectly clear. Progress comes from doing, not just planning or talking.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 shadow-lg hover:border-cyan-500/30 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-cyan-500">Focus</h3>
            <p className="text-zinc-400">
              In a world full of distractions, the ability to focus is a superpower. I concentrate my efforts on
              projects and goals that align with my vision and values, avoiding shiny objects that don't serve my
              long-term goals.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 shadow-lg hover:border-cyan-500/30 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-cyan-500">Learning</h3>
            <p className="text-zinc-400">
              I'm committed to continuous learning and improvement. Every challenge is an opportunity to grow, and every
              failure is a lesson. This growth mindset drives me to push boundaries and constantly evolve.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 shadow-lg hover:border-cyan-500/30 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-cyan-500">Freedom</h3>
            <p className="text-zinc-400">
              I value the freedom to choose my path and work on projects that matter to me. Building my own ventures
              gives me the autonomy to pursue my vision without compromise and create on my own terms.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-zinc-900 p-8 md:p-12 rounded-xl border border-zinc-800 text-center shadow-lg"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 font-heading">Family Support</h2>
        <p className="mb-6 text-zinc-400 max-w-3xl mx-auto">
          None of my achievements would be possible without the unwavering support of my family. I'm deeply grateful to
          my father Girish, mother Pushpa, and sister Akanksha for their encouragement, guidance, and belief in my
          vision. Their support has been the foundation upon which I've built my journey.
        </p>
      </motion.div>
    </div>
  )
}
