import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Clock, CheckCircle } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform Redesign",
    description: "Complete overhaul of a major retail platform with modern UI/UX and enhanced performance.",
    status: "completed",
    chief: "Shady Boukattaya",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    image: "/modern-ecommerce-interface.png",
  },
  {
    title: "Smart Home IoT Dashboard",
    description: "Comprehensive IoT solution for home automation with real-time monitoring and control.",
    status: "completed",
    chief: "Fraj Bannour",
    technologies: ["React Native", "IoT", "Firebase", "Arduino"],
    image: "/smart-home-dashboard.png",
  },
  {
    title: "Corporate Video Campaign",
    description: "Multi-part video series for brand awareness with professional editing and motion graphics.",
    status: "completed",
    chief: "Med Amine Lakhel",
    technologies: ["After Effects", "Premiere Pro", "4K Production"],
    image: "/professional-video-production-setup.jpg",
  },
  {
    title: "Healthcare Management System",
    description: "HIPAA-compliant patient management system with advanced scheduling and reporting.",
    status: "in-progress",
    chief: "Dhaker Harrath",
    technologies: ["Next.js", "TypeScript", "Supabase", "Stripe"],
    image: "/healthcare-management-dashboard.png",
  },
  {
    title: "AI-Powered Analytics Platform",
    description: "Machine learning platform for business intelligence with predictive analytics.",
    status: "in-progress",
    chief: "Med Amine Frad",
    technologies: ["Python", "TensorFlow", "React", "Docker"],
    image: "/ai-analytics-dashboard.png",
  },
  {
    title: "Mobile Banking Application",
    description: "Secure mobile banking app with biometric authentication and real-time transactions.",
    status: "in-progress",
    chief: "Oussama Ben Salem",
    technologies: ["React Native", "Blockchain", "Biometrics", "AWS"],
    image: "/mobile-banking-app.png",
  },
]

export function Projects() {
  const completedProjects = projects.filter((p) => p.status === "completed")
  const inProgressProjects = projects.filter((p) => p.status === "in-progress")

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance gradient-text animate-in fade-in-50 slide-in-from-bottom-4 duration-1000">
            Our Project Portfolio
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto animate-in fade-in-50 slide-in-from-bottom-6 duration-1000 delay-200">
            Showcasing our expertise through successful project deliveries and ongoing innovations.
          </p>
        </div>

        {/* Completed Projects */}
        <div className="mb-16">
          <div className="flex items-center mb-8 animate-in fade-in-50 slide-in-from-left-4 duration-700">
            <CheckCircle className="h-6 w-6 text-primary mr-3 pulse-glow" />
            <h3 className="text-2xl font-bold">Completed Projects</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-500 overflow-hidden group card-hover animate-in fade-in-50 slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg?height=200&width=400&query=modern tech project"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      Completed
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-4">
                    <User className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-sm text-muted-foreground">
                      Project Chief: <span className="text-primary font-medium">{project.chief}</span>
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs hover:bg-primary/10 hover:border-primary/30 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* In Progress Projects */}
        <div>
          <div className="flex items-center mb-8 animate-in fade-in-50 slide-in-from-left-4 duration-700 delay-300">
            <Clock className="h-6 w-6 text-secondary mr-3 float-animation" />
            <h3 className="text-2xl font-bold">Projects in Progress</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inProgressProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-secondary/50 transition-all duration-500 overflow-hidden group card-hover animate-in fade-in-50 slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={
                      project.image ||
                      "/placeholder.svg?height=200&width=400&query=futuristic tech project in development"
                    }
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">
                      In Progress
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-secondary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-4">
                    <User className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-sm text-muted-foreground">
                      Project Chief: <span className="text-secondary font-medium">{project.chief}</span>
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs hover:bg-secondary/10 hover:border-secondary/30 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
