import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FeaturesSection } from "@/components/features-section"
import { ArchitectureSection } from "@/components/architecture-section"
import { SecuritySection } from "@/components/security-section"
import { TeamSection } from "@/components/team-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { SurveySection } from "@/components/survey-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ArchitectureSection />
      <SecuritySection />
      <TeamSection />
      <SurveySection />
      <CTASection />
      <Footer />
    </main>
  )
}
