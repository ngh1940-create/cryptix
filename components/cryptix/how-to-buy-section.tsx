"use client"

import { Wallet, Coins, PenLine, CheckCircle2 } from "lucide-react"

const steps = [
  {
    icon: Wallet,
    title: "Connect Your Wallet",
    description: "Connect your MetaMask, Trust Wallet, or any WalletConnect compatible wallet to get started.",
  },
  {
    icon: Coins,
    title: "Choose BNB or USDT",
    description: "Select your preferred payment method. Make sure you have enough tokens for gas fees.",
  },
  {
    icon: PenLine,
    title: "Enter Amount",
    description: "Input the amount you want to invest and see exactly how many CRPX tokens you'll receive.",
  },
  {
    icon: CheckCircle2,
    title: "Confirm Purchase",
    description: "Approve the transaction in your wallet and receive your CRPX tokens after the presale ends.",
  },
]

export function HowToBuySection() {
  return (
    <section id="how-to-buy" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Buy CRPX
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Follow these simple steps to participate in the Cryptix AI presale
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-card/60 backdrop-blur-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 neon-glow"
            >
              {/* Step number */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="mb-4 p-4 rounded-xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>

              {/* Connector line (except last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
