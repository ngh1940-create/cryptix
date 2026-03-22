export function WhitepaperRoadmap() {
  return (
    <section className="mb-16">
      <div className="p-8 rounded-2xl bg-card/60 backdrop-blur-xl border border-primary/15 neon-glow">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            6. Development Roadmap
          </span>
        </h2>

        <div className="space-y-6 text-muted-foreground">
          <p>
            Cryptix AI follows a phased development approach, delivering core functionality while continuously expanding capabilities:
          </p>

          <div className="space-y-4">
            {[
              {
                phase: "Phase 1: Foundation",
                timeline: "Q2-Q3 2026",
                status: "In Progress",
                items: [
                  "Token presale and community building",
                  "Smart contract audits and security reviews",
                  "Initial testnet launch",
                  "Developer documentation and SDKs",
                ],
              },
              {
                phase: "Phase 2: Mainnet Launch",
                timeline: "Q4 2026",
                status: "Planned",
                items: [
                  "Mainnet deployment on BNB Chain",
                  "DEX listing and liquidity provision",
                  "Staking mechanism activation",
                  "Community governance setup",
                ],
              },
              {
                phase: "Phase 3: AI Integration",
                timeline: "Q1-Q2 2027",
                status: "Planned",
                items: [
                  "AI oracle services launch",
                  "Intelligent smart contract templates",
                  "Predictive analytics platform",
                  "Cross-chain bridge implementation",
                ],
              },
              {
                phase: "Phase 4: Ecosystem Expansion",
                timeline: "Q3-Q4 2027",
                status: "Planned",
                items: [
                  "Layer 2 rollup integration",
                  "AI marketplace launch",
                  "Enterprise API services",
                  "Institutional partnerships",
                ],
              },
              {
                phase: "Phase 5: Advanced Features",
                timeline: "2028 & Beyond",
                status: "Planned",
                items: [
                  "Quantum-resistant security upgrades",
                  "Autonomous governance protocols",
                  "Multi-chain deployment",
                  "Global adoption initiatives",
                ],
              },
            ].map((roadmap, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-secondary/30 border border-primary/15 hover:border-primary/30 transition-colors neon-glow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-lg font-semibold text-foreground">{roadmap.phase}</p>
                    <p className="text-sm text-muted-foreground">{roadmap.timeline}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      roadmap.status === "In Progress"
                        ? "bg-cyan/20 text-cyan border border-cyan/30"
                        : "bg-primary/20 text-primary border border-primary/30"
                    }`}
                  >
                    {roadmap.status}
                  </span>
                </div>
                <ul className="space-y-2">
                  {roadmap.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm flex items-start gap-2">
                      <span className="text-cyan mt-1">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
