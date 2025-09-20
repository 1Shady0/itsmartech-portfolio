import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse delay-300" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance gradient-text animate-in fade-in-50 slide-in-from-top-4 duration-1000">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto animate-in fade-in-50 slide-in-from-top-6 duration-1000 delay-200">
            Ready to transform your business with cutting-edge technology? Let's discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="bg-card border-border hover:border-primary/50 transition-all duration-500 text-center card-hover animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
            <CardHeader>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 hover:bg-primary/20 transition-all duration-300 hover:scale-110 pulse-glow">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="hover:text-primary transition-colors duration-300">Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">Call us directly</p>
              <a
                href="tel:+1234567890"
                className="text-primary hover:text-primary/80 transition-colors font-medium hover:scale-105 inline-block transform duration-300"
              >
                +1 (234) 567-8900
              </a>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-secondary/50 transition-all duration-500 text-center card-hover animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-150">
            <CardHeader>
              <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4 hover:bg-secondary/20 transition-all duration-300 hover:scale-110 float-animation">
                <Mail className="h-6 w-6 text-secondary" />
              </div>
              <CardTitle className="hover:text-secondary transition-colors duration-300">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">Send us a message</p>
              <a
                href="mailto:contact@itsmartechltd.com"
                className="text-secondary hover:text-secondary/80 transition-colors font-medium hover:scale-105 inline-block transform duration-300"
              >
                contact@itsmartechltd.com
              </a>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-accent/50 transition-all duration-500 text-center card-hover animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-300">
            <CardHeader>
              <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 hover:bg-accent/20 transition-all duration-300 hover:scale-110">
                <MapPin className="h-6 w-6 text-accent animate-bounce" />
              </div>
              <CardTitle className="hover:text-accent transition-colors duration-300">Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">Visit our office</p>
              <p className="text-foreground font-medium">Global Remote Team</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
