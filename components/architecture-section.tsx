import { Server, Monitor, Database, Cloud, Shield, Cpu } from "lucide-react"

const components = [
  { icon: Monitor, label: "Lightweight Agent", description: "Client-side monitoring" },
  { icon: Cloud, label: "Cloud Backend", description: "Centralized processing" },
  { icon: Database, label: "Database Layer", description: "Secure data storage" },
  { icon: Shield, label: "Detection Engine", description: "Threat intelligence" },
  { icon: Cpu, label: "Response Module", description: "Automated actions" },
  { icon: Server, label: "API Gateway", description: "Secure access" },
]

export function ArchitectureSection() {
  return (
    <section id="architecture" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Architecture <span className="text-primary">Overview</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-pretty">
              Our multi-tenant, microservice-based architecture ensures scalability, reliability, and security. Each
              component is designed to work independently while maintaining seamless communication.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground">Multi-tenant isolation for data security</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground">Endpoint agents for telemetry collection</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground">Centralized analysis for threat detection</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground">Secure channels for agent communication</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground">Role-based access for system control</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {components.map((component, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <component.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{component.label}</h3>
                <p className="text-xs text-muted-foreground">{component.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
