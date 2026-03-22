export function WhitepaperUtility() {
  return (
    <section className="mb-16">
      <div className="p-8 rounded-2xl bg-card/60 backdrop-blur-xl border border-primary/15 neon-glow">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            4. Token Utility
          </span>
        </h2>

        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            CRPX is the fuel that powers the entire Cryptix ecosystem:
          </p>

          <div className="grid gap-3">
            {[
              {
                icon: "🗳️",
                title: "Governance",
                desc: "Vote on protocol upgrades & resource allocation"
              },
              {
                icon: "🛡️",
                title: "Staking",
                desc: "Secure the network & earn rewards"
              },
              {
                icon: "⚡",
                title: "Platform Access",
                desc: "Unlock premium AI features & analytics"
              },
              {
                icon: "💳",
                title: "Fee Reduction",
                desc: "Discounts on transactions & deployments"
              },
              {
                icon: "📈",
                title: "Yield Farming",
                desc: "Generate passive income from protocol revenue"
              },
              {
                icon: "🤝",
                title: "DAO Treasury",
                desc: "Participate in community fund management"
              },
            ].map((utility, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/15 hover:border-primary/30 transition-all neon-glow"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{utility.icon}</span>
                  <div>
                    <h3 className="font-semibold text-foreground">{utility.title}</h3>
                    <p className="text-sm text-muted-foreground">{utility.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-cyan/10 to-blue/10 border border-cyan/20">
            <h3 className="text-lg font-semibold text-cyan mb-4">Token Mechanics</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span><span className="font-semibold text-foreground">Max Supply:</span> 10 billion CRPX</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span><span className="font-semibold text-foreground">Burn Mechanism:</span> 0.5% of transaction fees burned</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span><span className="font-semibold text-foreground">Deflationary:</span> Supply decreases over time</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span><span className="font-semibold text-foreground">Community Rewards:</span> 15% reserved for ecosystem</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
