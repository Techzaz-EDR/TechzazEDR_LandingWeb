"use client"

import { Shield, ArrowRight, Activity, Lock, LayoutDashboard } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background/85" />
        {/* Gradient fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(45,212,191,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.03)_1px,transparent_1px)] bg-[size:60px_60px] z-10" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl z-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="text-center">


          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Protect
            <span className="text-primary"> Endpoints</span>.
            <br />
            Detect Threats in Real Time.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 text-pretty">
            A cloud-hosted Endpoint Detection and Response platform designed to help companies and individuals protect
            their infrastructure from modern cyber threats with real-time monitoring and automated response.
          </p>



          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-16 px-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Activity className="h-5 w-5 text-primary" />
              <span className="text-sm">Real-time Monitoring</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <LayoutDashboard className="h-5 w-5 text-primary" />
              <span className="text-sm">Centralized Dashboard</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm">Malware & Intrusion Detection</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
