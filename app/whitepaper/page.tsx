import { ParticlesBackground } from "@/components/cryptix/particles-background"
import { Navbar } from "@/components/cryptix/navbar"
import { Footer } from "@/components/cryptix/footer"
import { WhitepaperHero } from "@/components/cryptix/whitepaper/hero"
import { WhitepaperIntroduction } from "@/components/cryptix/whitepaper/introduction"
import { WhitepaperProblem } from "@/components/cryptix/whitepaper/problem"
import { WhitepaperSolution } from "@/components/cryptix/whitepaper/solution"
import { WhitepaperUtility } from "@/components/cryptix/whitepaper/utility"
import { WhitepaperTokenomics } from "@/components/cryptix/whitepaper/tokenomics"
import { WhitepaperRoadmap } from "@/components/cryptix/whitepaper/roadmap"
import { WhitepaperSecurity } from "@/components/cryptix/whitepaper/security"
import { WhitepaperConclusion } from "@/components/cryptix/whitepaper/conclusion"

export const metadata = {
  title: "Cryptix AI Whitepaper - AI-Powered Blockchain Ecosystem",
  description: "The complete technical and business whitepaper for Cryptix AI (CRPX), a next-generation blockchain ecosystem powered by artificial intelligence.",
}

export default function WhitepaperPage() {
  return (
    <main className="relative min-h-screen bg-[#0B0B0F] overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />
      <WhitepaperHero />
      <div className="max-w-4xl mx-auto px-4 py-20">
        <WhitepaperIntroduction />
        <WhitepaperProblem />
        <WhitepaperSolution />
        <WhitepaperUtility />
        <WhitepaperTokenomics />
        <WhitepaperRoadmap />
        <WhitepaperSecurity />
        <WhitepaperConclusion />
      </div>
      <Footer />
    </main>
  )
}
