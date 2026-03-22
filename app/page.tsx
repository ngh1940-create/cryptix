import { ParticlesBackground } from "@/components/cryptix/particles-background"
import { Navbar } from "@/components/cryptix/navbar"
import { HeroSection } from "@/components/cryptix/hero-section"
import { TrustSection } from "@/components/cryptix/trust-section"
import { PresaleDashboard } from "@/components/cryptix/presale-dashboard"
import { TokenUtilitySection } from "@/components/cryptix/token-utility-section"
import { TokenomicsSection } from "@/components/cryptix/tokenomics-section"
import { HowToBuySection } from "@/components/cryptix/how-to-buy-section"
import { RoadmapSection } from "@/components/cryptix/roadmap-section"
import { SecuritySection } from "@/components/cryptix/security-section"
import { CommunitySection } from "@/components/cryptix/community-section"
import { Footer } from "@/components/cryptix/footer"

export default function CryptixAIPage() {
  return (
    <main className="relative min-h-screen bg-[#0B0B0F] overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />
      <HeroSection />
      <TrustSection />
      <PresaleDashboard />
      <TokenUtilitySection />
      <TokenomicsSection />
      <HowToBuySection />
      <RoadmapSection />
      <SecuritySection />
      <CommunitySection />
      <Footer />
    </main>
  )
}
