import { Shield, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="pt-8 pb-4 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Techzaz EDR</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-sm text-pretty">
              Cloud-hosted Endpoint Detection and Response platform designed to protect your infrastructure from modern
              cyber threats.
            </p>
          </div>

          <div className="md:pl-20">
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors block">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors block">
                  About
                </a>
              </li>
              <li>
                <a href="#architecture" className="text-muted-foreground hover:text-foreground transition-colors block">
                  Tech Overview
                </a>
              </li>
              <li>
                <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors block">
                  Team
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Github className="h-4 w-4 text-primary" />
                <a href="https://github.com/Techzaz-EDR" className="text-sm hover:text-primary transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-border flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Techzaz EDR Developer Team. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
