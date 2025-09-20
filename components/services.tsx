import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, Code, Cpu, Server } from "lucide-react"

const services = [
  {
    icon: Video,
    title: "Video / Photo Editing",
    description:
      "Professional video production and photo editing services with cutting-edge tools and creative expertise.",
    features: ["4K Video Production", "Color Grading", "Motion Graphics", "Photo Retouching"],
    iconBg: "bg-primary/10 group-hover:bg-primary/20",
    iconColor: "text-primary",
    titleHover: "group-hover:text-primary",
    dotColor: "bg-primary",
    dotHover: "group-hover:scale-125",
  },
  {
    icon: Code,
    title: "Web / Mobile App Development",
    description: "Custom web and mobile applications built with modern frameworks and best practices.",
    features: ["React & Next.js", "React Native", "Progressive Web Apps", "API Development"],
    iconBg: "bg-secondary/10 group-hover:bg-secondary/20",
    iconColor: "text-secondary",
    titleHover: "group-hover:text-secondary",
    dotColor: "bg-secondary",
    dotHover: "group-hover:scale-125",
  },
  {
    icon: Cpu,
    title: "IoT Solutions",
    description: "Smart device integration and IoT ecosystem development for connected experiences.",
    features: ["Device Integration", "Data Analytics", "Cloud Connectivity", "Real-time Monitoring"],
    iconBg: "bg-accent/10 group-hover:bg-accent/20",
    iconColor: "text-accent",
    titleHover: "group-hover:text-accent",
    dotColor: "bg-accent",
    dotHover: "group-hover:scale-125",
  },
  {
    icon: Server,
    title: "Hosting Solutions",
    description: "Reliable, scalable hosting infrastructure with 24/7 support and monitoring.",
    features: ["Cloud Hosting", "CDN Integration", "SSL Certificates", "24/7 Support"],
    iconBg: "bg-primary/10 group-hover:bg-primary/20",
    iconColor: "text-primary",
    titleHover: "group-hover:text-primary",
    dotColor: "bg-primary",
    dotHover: "group-hover:scale-125",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />

      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance gradient-text animate-in fade-in-50 slide-in-from-top-4 duration-1000">
            Our collection of tech services spans various needs at every stage of the transformation process
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto animate-in fade-in-50 slide-in-from-top-6 duration-1000 delay-200">
            Explore how we help businesses transform through innovative technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-500 group card-hover animate-in fade-in-50 slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div
                  className={`h-12 w-12 ${service.iconBg} rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 float-animation`}
                >
                  <service.icon
                    className={`h-6 w-6 ${service.iconColor} group-hover:scale-110 transition-transform duration-300`}
                  />
                </div>
                <CardTitle className={`text-xl ${service.titleHover} transition-colors duration-300`}>
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-sm text-muted-foreground flex items-center group-hover:text-foreground transition-colors duration-300"
                    >
                      <div
                        className={`h-1.5 w-1.5 ${service.dotColor} rounded-full mr-2 ${service.dotHover} transition-transform duration-300`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
