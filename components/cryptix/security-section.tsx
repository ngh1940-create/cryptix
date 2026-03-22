"use client"

import { Shield, FileCheck, Eye, Lock } from "lucide-react"

const securityFeatures = [
  {
    icon: Shield,
    title: "Smart Contract Security",
    description: "Multi-signature protection and battle-tested security patterns implemented in our smart contracts.",
  },
  {
    icon: FileCheck,
    title: "Planned Smart Contract Audit",
    description: "Comprehensive audit by leading blockchain security firms scheduled before DEX launch.",
  },
  {
    icon: Eye,
    title: "Transparent Tokenomics",
    description: "Fully transparent token distribution with real-time tracking and regular community updates.",
  },
  {
    icon: Lock,
    title: "Liquidity Lock Plan",
    description: "Liquidity tokens will be locked for 2 years to ensure long-term stability and investor confidence.",
  },
]

export function SecuritySection() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Security &{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Transparency
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built with security-first principles to protect our community
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card/60 backdrop-blur-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 neon-glow"
            >
              <div className="mb-4 p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 w-fit group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
