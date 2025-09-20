"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Sparkles } from "lucide-react"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto text-center relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6 animate-in fade-in-50 slide-in-from-top-4 duration-1000">
            <Zap className="h-8 w-8 text-primary mr-3 animate-pulse" />
            <span className="text-primary font-mono text-sm tracking-wider uppercase">Modern Technology Solutions</span>
            <Sparkles className="h-6 w-6 text-secondary ml-3 animate-bounce" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance animate-in fade-in-50 slide-in-from-bottom-6 duration-1000 delay-200">
            Where innovation meets <span className="gradient-text">digital excellence</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto leading-relaxed animate-in fade-in-50 slide-in-from-bottom-8 duration-1000 delay-400">
            We are a collective of passionate technologists united by our deep tech knowledge, human-centric mindset and
            a passion for using technology and digital solutions to drive business transformation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in-50 slide-in-from-bottom-10 duration-1000 delay-600">
            <Button
              size="lg"
              onClick={() => scrollToSection("services")}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 glow-effect group transition-all duration-300 hover:scale-105"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-105"
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
