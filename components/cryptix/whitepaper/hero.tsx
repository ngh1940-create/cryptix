import Link from "next/link"
import { Download, ArrowLeft } from "lucide-react"

export function WhitepaperHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center pt-20 pb-12 px-4 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-all hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.4)] mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
          <span className="text-foreground">Cryptix </span>
          <span className="bg-gradient-to-r from-primary via-accent to-cyan bg-clip-text text-transparent">
            Whitepaper
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-primary font-semibold mb-4">
          AI-Powered Blockchain Ecosystem
        </p>

        {/* Description */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty mb-8">
          Discover how intelligent automation revolutionizes blockchain infrastructure. This whitepaper outlines Cryptix AI's vision, technology, and roadmap to Web3's future.
        </p>

        {/* PDF Button */}
        <button className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all text-primary-foreground px-6 py-3 rounded-lg neon-glow-sm">
          <Download className="w-4 h-4" />
          Download PDF (Coming Soon)
        </button>

        {/* Quick Stats */}
        <div className="grid sm:grid-cols-3 gap-4 mt-12">
          {[
            { label: "Total Supply", value: "10B CRPX" },
            { label: "Presale Price", value: "$0.005" },
            { label: "Network", value: "BNB Chain" },
          ].map((stat, i) => (
            <div key={i} className="p-4 rounded-xl bg-card/50 border border-primary/15 text-center neon-glow">
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
