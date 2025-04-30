import Hero from "@/components/Hero"
import AboutPreview from "@/components/AboutPreview"
import WhatIDoPreview from "@/components/WhatIDoPreview"
import ProjectsPreview from "@/components/ProjectsPreview"
import VisionPreview from "@/components/VisionPreview"
import ContactCTA from "@/components/ContactCTA"
import BlogPreview from "@/components/BlogPreview"
import BlogCard from "@/components/BlogCard"

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <Hero />
      <AboutPreview />
      <WhatIDoPreview />
      <ProjectsPreview />
      <VisionPreview />
      <ContactCTA />
      <BlogPreview />
    </div>
  )
}
