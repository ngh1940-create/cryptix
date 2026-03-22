"use client"

import { Zap, Lock, TrendingUp, Coins } from "lucide-react"

const utilities = [
  {
    icon: Zap,
    title: "AI Ecosystem Usage",
    description: "Use CRPX tokens to access and power the Cryptix AI ecosystem for intelligent automation",
  },
  {
    icon: Lock,
    title: "Platform Access",
    description: "Unlock premium features and services within the Cryptix AI platform",
  },
  {
    icon: TrendingUp,
    title: "Future Staking",
    description: "Stake CRPX tokens to earn rewards and participate in network governance",
  },
  {
    icon: Coins,
    title: "Community Rewards",
    description: "Earn CRPX through participation in community activities and ecosystem development",
  },
]

export function TokenUtilitySection() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            CRPX Token{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Utility
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the diverse use cases and benefits of holding CRPX tokens
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {utilities.map((utility, index) => {
            const Icon = utility.icon
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card/60 backdrop-blur-xl border border-primary/15 hover:border-primary/30 transition-all duration-300 neon-glow"
              >
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {utility.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {utility.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
