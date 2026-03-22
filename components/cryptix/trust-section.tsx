"use client"

import { CheckCircle } from "lucide-react"

const trustPoints = [
  {
    title: "Verified Smart Contract",
    description: "Audited and verified by leading blockchain security firms",
  },
  {
    title: "BNB Chain Network",
    description: "Built on the secure and scalable BNB Chain blockchain",
  },
  {
    title: "Secure & Transparent Presale",
    description: "100% transparent tokenomics with locked liquidity",
  },
]

export function TrustSection() {
  return (
    <section className="relative py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="flex gap-4 p-4 rounded-xl bg-card/40 backdrop-blur-sm border border-cyan/20 hover:border-cyan/40 transition-all duration-300 neon-glow"
            >
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-cyan flex-shrink-0 mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">{point.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
