"use client"

import { CheckCircle2, Circle } from "lucide-react"

const phases = [
  {
    phase: "Phase 1",
    title: "Foundation",
    status: "completed",
    items: [
      "Project concept & whitepaper",
      "Core team assembly",
      "Smart contract development",
      "Website & branding launch",
    ],
  },
  {
    phase: "Phase 2",
    title: "Presale Launch",
    status: "active",
    items: [
      "Presale smart contract deployment",
      "Community building campaign",
      "Strategic partnerships",
      "Marketing expansion",
    ],
  },
  {
    phase: "Phase 3",
    title: "DEX Launch",
    status: "upcoming",
    items: [
      "PancakeSwap listing",
      "Liquidity lock",
      "CoinGecko & CMC listing",
      "CEX negotiations",
    ],
  },
  {
    phase: "Phase 4",
    title: "AI Development",
    status: "upcoming",
    items: [
      "AI trading bot beta",
      "Machine learning integration",
      "API development",
      "Developer documentation",
    ],
  },
  {
    phase: "Phase 5",
    title: "Global Expansion",
    status: "upcoming",
    items: [
      "Major CEX listings",
      "Enterprise partnerships",
      "Cross-chain integration",
      "DAO governance launch",
    ],
  },
]

export function RoadmapSection() {
  return (
    <section id="roadmap" className="relative py-20 px-4 overflow-hidden">
      {/* Background effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Roadmap
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our strategic journey to revolutionize blockchain with AI technology
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-cyan" />

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 z-10 ${
                    phase.status === "completed"
                      ? "bg-cyan border-cyan"
                      : phase.status === "active"
                      ? "bg-primary border-primary animate-pulse"
                      : "bg-secondary border-muted-foreground"
                  }`}
                />

                {/* Content card */}
                <div
                  className={`ml-12 lg:ml-0 lg:w-[calc(50%-40px)] ${
                    index % 2 === 0 ? "lg:mr-auto lg:pr-8" : "lg:ml-auto lg:pl-8"
                  }`}
                >
                  <div className="p-6 rounded-2xl bg-card/60 backdrop-blur-xl border border-primary/15 hover:border-primary/30 transition-all neon-glow">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          phase.status === "completed"
                            ? "bg-cyan/20 text-cyan"
                            : phase.status === "active"
                            ? "bg-primary/20 text-primary"
                            : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        {phase.phase}
                      </span>
                      {phase.status === "active" && (
                        <span className="text-xs text-primary animate-pulse">In Progress</span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{phase.title}</h3>
                    <ul className="space-y-2">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          {phase.status === "completed" ? (
                            <CheckCircle2 className="w-4 h-4 text-cyan flex-shrink-0" />
                          ) : (
                            <Circle className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                          )}
                          <span
                            className={
                              phase.status === "completed"
                                ? "text-muted-foreground line-through"
                                : "text-muted-foreground"
                            }
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
