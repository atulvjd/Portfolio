import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import BlogCard from "./BlogCard"

// Sample blog posts data
const featuredPosts = [
  {
    id: 1,
    title: "How I Built an AI Education Platform at 17",
    excerpt:
      "The journey of creating an AI-powered solution to help students in rural India access quality education resources.",
    date: "April 15, 2025",
    image: "/aied.jpg?height=600&width=800",
    category: "AI Development",
    slug: "how-i-built-ai-education-platform",
  },
  {
    id: 2,
    title: "5 Lessons I Learned as a Teenage Entrepreneur",
    excerpt: "Key insights and challenges I faced while starting and growing my first business before turning 18.",
    date: "March 28, 2025",
    image: "/teen.jpg?height=600&width=800",
    category: "Entrepreneurship",
    slug: "lessons-learned-teenage-entrepreneur",
  },
]

export default function BlogPreview() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Thoughts and perspectives on technology, entrepreneurship, and innovation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Button asChild variant="outline" className="group">
          <Link href="/blog">
            Read All Articles
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
