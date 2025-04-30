import BlogCard from "@/components/BlogCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

// Sample blog posts data
const blogPosts = [
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
  {
    id: 3,
    title: "The Future of AI in Rural Development",
    excerpt:
      "How artificial intelligence can be leveraged to solve unique challenges faced by rural communities in developing nations.",
    date: "March 10, 2025",
    image: "/agri.jpg?height=600&width=800",
    category: "AI & Society",
    slug: "future-ai-rural-development",
  },
  {
    id: 4,
    title: "Building a Personal Brand as a Young Tech Leader",
    excerpt:
      "Strategies and approaches I used to establish credibility and visibility in the tech industry at a young age.",
    date: "February 22, 2025",
    image: "/busi.jpg?height=600&width=800",
    category: "Personal Branding",
    slug: "personal-brand-young-tech-leader",
  },
  {
    id: 5,
    title: "From Idea to MVP: Validating Your Product Concept",
    excerpt: "A practical guide to testing and validating your product ideas before investing significant resources.",
    date: "February 8, 2025",
    image: "/inve.jpg?height=600&width=800",
    category: "Product Development",
    slug: "idea-to-mvp-product-validation",
  },
  {
    id: 6,
    title: "Ethical Considerations in AI Development",
    excerpt: "Important ethical questions every AI developer should address when building intelligent systems.",
    date: "January 25, 2025",
    image: "/aidev.jpg?height=600&width=800",
    category: "AI Ethics",
    slug: "ethical-considerations-ai-development",
  },
]

// Sample categories
const categories = [
  "All",
  "AI Development",
  "Entrepreneurship",
  "AI & Society",
  "Personal Branding",
  "Product Development",
  "AI Ethics",
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Insights</h1>
        <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
          Thoughts, learnings, and perspectives on AI, entrepreneurship, and innovation from my journey as a young tech
          leader.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-3/4">
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search articles..." className="pl-10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        <div className="md:w-1/4">
          <div className="bg-card p-6 rounded-xl shadow-sm sticky top-24">
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <Button key={category} variant={category === "All" ? "default" : "outline"} className="mr-2 mb-2">
                  {category}
                </Button>
              ))}
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Popular Posts</h3>
            <div className="space-y-4">
              {blogPosts.slice(0, 3).map((post) => (
                <div key={post.id} className="flex items-start gap-3">
                  <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0 bg-muted">
                    <div className="w-full h-full relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5"></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium line-clamp-2 text-sm">{post.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
