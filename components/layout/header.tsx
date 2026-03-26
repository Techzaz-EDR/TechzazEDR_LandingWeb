"use client"

import { useState } from "react"
import { Shield, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/75 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Techzaz EDR</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Tech Overview
              </a>
              <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors">
                Team
              </a>
            </nav>
            <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="https://techzazedrdashboard-frontend-production.up.railway.app/">Go to Dashboard</a>
            </Button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Tech Overview
              </a>
              <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors">
                Team
              </a>
              <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                <a href="https://techzazedrdashboard-frontend-production.up.railway.app/">Try TechzazEDR</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
