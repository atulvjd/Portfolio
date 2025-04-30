import Link from "next/link"
import { Github, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 py-16 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold font-heading">
              Atul<span className="text-cyan-500">Sahu</span>
            </Link>
            <p className="mt-6 text-zinc-400 max-w-md">
              18-year-old entrepreneur, AI builder, and content creator from Raipur, India. CEO & Founder of Bergs &
              Co., building tools to solve problems and help people grow using technology.
            </p>
            <p className="mt-4 text-zinc-500 text-sm">"Don't wait for inspiration. Build without it."</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-cyan-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-cyan-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/what-i-do" className="text-zinc-400 hover:text-cyan-500 transition-colors">
                  What I Do
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-zinc-400 hover:text-cyan-500 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/vision" className="text-zinc-400 hover:text-cyan-500 transition-colors">
                  Vision
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-cyan-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Connect</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.youtube.com/@AtulCore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-cyan-500 transition-colors flex items-center gap-2"
                >
                  <Youtube className="h-4 w-4" /> YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/atulvjd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-cyan-500 transition-colors flex items-center gap-2"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/atulwn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-cyan-500 transition-colors flex items-center gap-2"
                >
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
              </li>
              <li>
                <a href="mailto:atul.sahu025@gmail.com" className="text-zinc-400 hover:text-cyan-500 transition-colors">
                  atul.sahu025@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-zinc-500">© {new Date().getFullYear()} Atul Sahu. All rights reserved.</p>
          <div className="flex gap-6 mt-6 md:mt-0">
            <Link href="/privacy-policy" className="text-sm text-zinc-500 hover:text-cyan-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-zinc-500 hover:text-cyan-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
