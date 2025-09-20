import Image from "next/image"
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/3 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.png"
                alt="Itsmartechltd Logo"
                width={150}
                height={50}
                className="h-10 w-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Transforming businesses through innovative technology solutions. We combine deep technical expertise with
              human-centered design to deliver exceptional results.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-secondary transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@itsmartechltd.com"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-primary">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#services"
                  className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Video / Photo Editing
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-secondary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Mobile Apps
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  IoT Solutions
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-secondary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Hosting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-secondary">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#projects"
                  className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-secondary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#request-project"
                  className="hover:text-accent transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Request Project
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            &copy; 2024 <span className="gradient-text font-medium">Itsmartechltd</span>. Made with{" "}
            <Heart className="h-4 w-4 text-red-500 animate-pulse" fill="currentColor" />
            for innovation.
          </p>
        </div>
      </div>
    </footer>
  )
}
