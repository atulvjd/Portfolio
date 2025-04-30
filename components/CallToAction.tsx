import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CallToAction() {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Something Amazing Together</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you have a project in mind, want to collaborate, or just want to say hello, I'm always open to new
            opportunities and connections.
          </p>
          <Button asChild size="lg" className="group">
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
