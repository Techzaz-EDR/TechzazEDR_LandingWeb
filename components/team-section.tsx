import { Github, Linkedin } from "lucide-react"

const team = [
  {
    name: "Inuka Wijerathna",
    role: "Project Lead",
    avatar: "Inuka",
    bgColor: "bg-primary/10",
    linkedin: "https://www.linkedin.com/in/inukawijerathna/",
    github: "https://github.com/InukaWijerathna",
  },
  {
    name: "Imesh Silva",
    role: "Technical Lead",
    avatar: "Imesh",
    bgColor: "bg-primary/10",
    linkedin: "https://www.linkedin.com/in/sandeepasilva/",
    github: "https://github.com/SandeepaSilva",
  },
  {
    name: "Kavya Dissanayake",
    role: "Frontend Lead",
    avatar: "Kavya",
    bgColor: "bg-primary/10",
    linkedin: "#",
    github: "https://github.com/rkavya0813-wq",
  },
  {
    name: "Limuthu Lohiru",
    role: "Backend Lead",
    avatar: "Limuthu",
    bgColor: "bg-primary/10",
    linkedin: "https://www.linkedin.com/in/limuthu/",
    github: "https://github.com/limuthu123",
  },
  {
    name: "Tharuki Jayasuriya",
    role: "Architecture & Documentation Lead",
    avatar: "Tharuki",
    bgColor: "bg-primary/10",
    linkedin: "#",
    github: "https://github.com/TharukiJ",
  },
  {
    name: "Yeheni Alvis",
    role: "QA & Validation Lead",
    avatar: "Yeheni",
    bgColor: "bg-primary/10",
    linkedin: "#",
    github: "https://github.com/Yeheni-Bit",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet the Developers behind <br /> <span className="text-primary">Techzaz EDR</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            We are a group of passionate innovators from Informatics Institute of Technology (IIT), building Techzaz EDR
            in partnership with Techzaz Networks to address real-world cybersecurity challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {team.map((member, index) => (
            <div
              key={index}
              className="p-6 rounded-[30px] bg-card border border-border text-center hover:border-primary/50 transition-colors"
            >
              <div className={`w-20 h-20 rounded-full ${member.bgColor} mx-auto mb-4 flex items-center justify-center`}>
                <img
                  src={`https://api.dicebear.com/9.x/notionists/svg?seed=${member.avatar}&backgroundColor=transparent`}
                  alt={member.name}
                  className="w-16 h-16"
                />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
              <div className="flex items-center justify-center gap-3">
                <a
                  href={member.linkedin}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={member.github}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`${member.name}'s GitHub`}
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground text-pretty">
              To provide accessible, enterprise-grade endpoint security solutions that protect businesses of all sizes
              from evolving cyber threats, ensuring peace of mind and operational continuity.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground text-pretty">
              To become the leading cloud-based EDR platform that sets the standard for proactive threat detection and
              automated incident response, making cybersecurity accessible to everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
