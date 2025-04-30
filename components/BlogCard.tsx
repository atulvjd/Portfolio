import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  image: string
  category: string
  slug: string
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-all">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-3">
          <Badge variant="outline" className="font-normal">
            {post.category}
          </Badge>
          <span className="text-sm text-muted-foreground">{post.date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          Read Article <ArrowUpRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
