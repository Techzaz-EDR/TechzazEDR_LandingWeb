import { Bug, Activity, Globe, Lock, GitBranch, Key, Cpu, Upload } from "lucide-react"

const securityMeasures = [
  {
    icon: Bug,
    threat: "Malware Threats",
    solution: "Ransomware, trojans, spyware, and malicious executables",
  },
  {
    icon: Activity,
    threat: "Suspicious Network Activity",
    solution: "Abnormal IP connections and unusual port communication",
  },
  {
    icon: Globe,
    threat: "Command-and-Control Traffic",
    solution: "Repeated outbound connections to suspicious or untrusted hosts",
  },
  {
    icon: Lock,
    threat: "Unauthorized Network Access",
    solution: "Detection of unexpected devices and connection attempts",
  },
  {
    icon: GitBranch,
    threat: "Lateral Movement Attempts",
    solution: "Unusual internal communication patterns between endpoints",
  },
  {
    icon: Key,
    threat: "Privilege Abuse Indicators",
    solution: "Processes attempting unauthorized system-level actions",
  },
  {
    icon: Cpu,
    threat: "Anomalous Process Behaviour",
    solution: "Unexpected process execution and abnormal runtime activity",
  },
  {
    icon: Upload,
    threat: "Data Exfiltration Signals",
    solution: "High-volume or irregular outbound data transfers",
  },
]

export function SecuritySection() {
  return (
    <section id="security" className="py-20 md:py-32 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Enterprise <span className="text-primary">Security Strategy</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            We take security seriously. Techzaz EDR is designed to detect malware, suspicious network activity, and
            unauthorized behaviour across organizational endpoints.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {securityMeasures.map((measure, index) => (
            <div
              key={index}
              className="p-6 rounded-[30px] bg-card border border-border hover:border-primary/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <measure.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{measure.threat}</h3>
              <p className="text-sm text-muted-foreground">{measure.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
