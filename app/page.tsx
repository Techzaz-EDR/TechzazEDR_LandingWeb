import { Header } from "@/components/layout/header"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ArchitectureSection } from "@/components/sections/architecture-section"
import { SecuritySection } from "@/components/sections/security-section"
import { TeamSection } from "@/components/sections/team-section"
import { CTASection } from "@/components/sections/cta-section"
import { Footer } from "@/components/layout/footer"
import { SurveySection } from "@/components/sections/survey-section"

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
