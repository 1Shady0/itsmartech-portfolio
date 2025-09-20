"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, Sparkles, CheckCircle, AlertCircle } from "lucide-react"

export function RequestProject() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    specificNeeds: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setStatusMessage("Thank you for your project request! We'll get back to you within 24 hours.")
        // Reset form
        setFormData({
          name: "",
          email: "",
          description: "",
          specificNeeds: "",
        })
      } else {
        setSubmitStatus("error")
        setStatusMessage(result.error || "Failed to submit request. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
      setStatusMessage("Network error. Please check your connection and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="request-project" className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4 animate-in fade-in-50 slide-in-from-top-4 duration-1000">
            <Sparkles className="h-8 w-8 text-primary mr-3 animate-spin" />
            <h2 className="text-4xl md:text-5xl font-bold text-balance gradient-text">Start Your Project</h2>
            <Sparkles className="h-8 w-8 text-secondary ml-3 animate-spin" style={{ animationDirection: "reverse" }} />
          </div>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto animate-in fade-in-50 slide-in-from-top-6 duration-1000 delay-200">
            Ready to bring your vision to life? Tell us about your project and we'll create a custom solution for you.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-card border-border hover:border-primary/30 transition-all duration-500 card-hover animate-in fade-in-50 slide-in-from-bottom-8 duration-1000 delay-400">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl gradient-text">Request a Project</CardTitle>
            <CardDescription>
              Fill out the form below and our team will get back to you within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {submitStatus !== "idle" && (
              <div
                className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  submitStatus === "success"
                    ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800"
                    : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800"
                }`}
              >
                {submitStatus === "success" ? (
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                )}
                <p className="text-sm">{statusMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="bg-input border-border focus:border-primary hover:border-primary/50 transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="bg-input border-border focus:border-primary hover:border-primary/50 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-foreground font-medium">
                  Project Description *
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describe your project, goals, and timeline..."
                  value={formData.description}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  rows={4}
                  className="bg-input border-border focus:border-primary hover:border-primary/50 transition-all duration-300 resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="specificNeeds" className="text-foreground font-medium">
                  Specific Needs
                </Label>
                <Textarea
                  id="specificNeeds"
                  name="specificNeeds"
                  placeholder="Any specific requirements, technologies, or constraints..."
                  value={formData.specificNeeds}
                  onChange={handleChange}
                  disabled={isLoading}
                  rows={3}
                  className="bg-input border-border focus:border-primary hover:border-primary/50 transition-all duration-300 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 glow-effect group transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                size="lg"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Send Project Request
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-300" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
