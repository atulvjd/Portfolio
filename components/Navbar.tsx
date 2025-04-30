"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import { motion } from "framer-motion"

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "What I Do", path: "/what-i-do" },
  { name: "Projects", path: "/projects" },
  { name: "Vision", path: "/vision" },
  { name: "Contact", path: "/contact" },
  { name: "Blog", path: "/blog" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? "bg-[#0F0F0F]/80 backdrop-blur-md border-b border-zinc-800" : "bg-[#0F0F0F]"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold font-heading">
              Atul<span className="text-cyan-500">Sahu</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-cyan-500 ${
                  pathname === link.path ? "text-cyan-500" : "text-zinc-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button asChild className="hidden md:flex bg-cyan-500 hover:bg-cyan-600 text-black">
              <Link href="/contact">Get in Touch</Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800"
        >
          <div className="space-y-1 px-4 pb-6 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`block py-3 px-4 text-base font-medium rounded-md ${
                  pathname === link.path
                    ? "bg-cyan-500/10 text-cyan-500"
                    : "text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full mt-6 bg-cyan-500 hover:bg-cyan-600 text-black">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
