"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Shield, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CTASection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section id="cta" className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-8">
            <Shield className="h-8 w-8 text-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Secure Your <span className="text-primary">Infrastructure</span>?
          </h2>

          <p className="text-muted-foreground mb-8 text-pretty">
            Techzaz EDR is currently in Development. Join the waitlist to be among the first to experience
            enterprise-grade endpoint protection.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-3">
              <Check className="h-5 w-5 text-primary" />
              <span className="text-foreground">Thank you! We&apos;ll be in touch soon.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                required
              />
              <Button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 whitespace-nowrap"
              >
                Join Waitlist
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          )}


        </div>
      </div>
    </section>
  )
}
