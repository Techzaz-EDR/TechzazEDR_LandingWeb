import { Monitor, LayoutDashboard, ShieldCheck, Network, Zap, History } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Monitor,
    label: "REAL-TIME",
    title: "Endpoint Monitoring",
    description:
      "Continuous monitoring of all endpoints with lightweight agents that collect telemetry data and detect suspicious activities in real-time.",
  },
  {
    icon: LayoutDashboard,
    label: "CENTRALIZED",
    title: "Security Dashboard",
    description:
      "Role-based access control with comprehensive overview of security status, alerts, and analytics in one unified interface.",
    highlight: true,
  },
  {
    icon: ShieldCheck,
    label: "ADVANCED",
    title: "Malware Detection",
    description:
      "Comprehensive scanning to identify and categorize malware including ransomware, trojans, worms, and other malicious software.",
  },
  {
    icon: Network,
    label: "NETWORK",
    title: "Network Security",
    description:
      "Scan IP logs and data packets to detect suspicious connections, port scanning activities, and potential intrusion attempts.",
  },
  {
    icon: Zap,
    label: "AUTOMATED",
    title: "Incident Response",
    description:
      "Automated threat response actions and real-time alerting to minimize damage from security incidents and breaches.",
  },
  {
    icon: History,
    label: "ANALYTICS",
    title: "Historical Analysis",
    description:
      "Compare current security events with historical data to identify trends, patterns, and emerging threats.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive <span className="text-primary">Security Features</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Techzaz EDR isn&apos;t just monitoring. It&apos;s a complete security solution that protects, detects, and
            responds to threats across your entire infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`bg-card/50 border-border hover:border-primary/50 hover:shadow-[0_0_30px_-10px_rgba(94,27,181,0.3)] transition-all duration-300 rounded-[30px]`}
            >
              <CardHeader className="pb-1">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
                    {feature.label}
                  </p>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
