import { Shield, CheckCircle2, Lock, Eye } from "lucide-react"

export function WhitepaperSecurity() {
  return (
    <section className="mb-16">
      <div className="p-8 rounded-2xl bg-card/60 backdrop-blur-xl border border-primary/15 neon-glow">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            7. Security & Transparency
          </span>
        </h2>

        <div className="space-y-6 text-muted-foreground">
          <p>
            Security is paramount in Cryptix AI's design. We implement multiple layers of protection to ensure user assets and data remain secure.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Security Measures */}
            <div>
              <p className="font-semibold text-foreground mb-4">Security Measures</p>
              <div className="space-y-3">
                {[
                  {
                    icon: Shield,
                    title: "Smart Contract Audits",
                    description: "Third-party security firms audit all contracts before deployment",
                  },
                  {
                    icon: Lock,
                    title: "Cold Storage Protection",
                    description: "Multi-sig wallets secure liquidity and team funds",
                  },
                  {
                    icon: Eye,
                    title: "Real-time Monitoring",
                    description: "24/7 AI-powered threat detection and response systems",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Formal Verification",
                    description: "Mathematical proofs verify contract correctness",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-secondary/30 border border-primary/10 hover:border-primary/20 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground text-sm">{item.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Transparency */}
            <div>
              <p className="font-semibold text-foreground mb-4">Transparency & Governance</p>
              <div className="space-y-3">
                {[
                  {
                    title: "Open Source Code",
                    description: "Smart contracts and core infrastructure open for community review",
                  },
                  {
                    title: "Public Audits",
                    description: "All security audits published and accessible to community",
                  },
                  {
                    title: "On-Chain Governance",
                    description: "Transparent voting and proposal system on blockchain",
                  },
                  {
                    title: "Treasury Management",
                    description: "Multi-sig control of funds with community oversight",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-secondary/30 border border-primary/10 hover:border-primary/20 transition-colors"
                  >
                    <p className="font-semibold text-foreground text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 mt-6">
            <p className="font-semibold text-foreground mb-2">Network Security</p>
            <p className="text-sm mb-3">
              Cryptix AI operates on the BNB Chain, leveraging its proven security infrastructure and network effects while adding our own layers of protection:
            </p>
            <ul className="text-sm space-y-2">
              <li>• Byzantine Fault Tolerant consensus with 21 validators</li>
              <li>• Economic security through staking requirements</li>
              <li>• Cross-chain bridge security protocols</li>
              <li>• Slashing conditions for validator misconduct</li>
              <li>• Emergency pause mechanisms for critical events</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
