export function WhitepaperTokenomics() {
  return (
    <section className="mb-16">
      <div className="p-8 rounded-2xl bg-card/60 backdrop-blur-xl border border-primary/15 neon-glow">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            5. Tokenomics
          </span>
        </h2>

        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <p className="text-xl font-bold text-foreground mb-2">Total Supply: <span className="text-primary">10 Billion CRPX</span></p>
            <p className="text-sm text-muted-foreground">Fixed, non-inflationary, with deflationary burn mechanism</p>
          </div>

          {/* Token Allocation */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Token Allocation</h3>
            <div className="space-y-2">
              {[
                { label: "Presale", value: "30%", amount: "3.0B", color: "from-primary" },
                { label: "Liquidity", value: "20%", amount: "2.0B", color: "from-indigo" },
                { label: "Staking Rewards", value: "20%", amount: "2.0B", color: "from-cyan" },
                { label: "Development", value: "10%", amount: "1.0B", color: "from-purple" },
                { label: "Marketing", value: "8%", amount: "0.8B", color: "from-blue" },
                { label: "Community", value: "7%", amount: "0.7B", color: "from-teal" },
                { label: "Advisors", value: "5%", amount: "0.5B", color: "from-amber" },
              ].map((item, index) => (
                <div key={index} className="p-4 rounded-xl border border-primary/10 hover:border-primary/30 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-foreground">{item.label}</span>
                    <span className="text-cyan font-bold">{item.value}</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${item.color} to-accent`} style={{ width: item.value }} />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{item.amount} tokens</p>
                </div>
              ))}
            </div>
          </div>

          {/* Release Schedule */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Release Schedule</h3>
            <div className="space-y-3">
              {[
                { phase: "Phase 1: Presale", tokens: "15%", timeline: "Q2 2026", status: "Active" },
                { phase: "Phase 2: Presale", tokens: "20%", timeline: "Q3 2026", status: "Upcoming" },
                { phase: "Public Launch", tokens: "Initial", timeline: "Q4 2026", status: "Planned" },
                { phase: "Staking Launch", tokens: "Gradual", timeline: "Q1 2027", status: "Planned" },
                { phase: "Team Vesting", tokens: "24 Month", timeline: "Cliff Release", status: "Locked" },
              ].map((schedule, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-secondary/30 border border-primary/15 hover:border-primary/30 transition-all neon-glow"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{schedule.phase}</p>
                      <p className="text-xs text-muted-foreground">{schedule.tokens} • {schedule.timeline}</p>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      schedule.status === 'Active' ? 'bg-green/20 text-green' :
                      schedule.status === 'Upcoming' ? 'bg-primary/20 text-primary' :
                      'bg-muted/20 text-muted-foreground'
                    }`}>
                      {schedule.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Supply Dynamics */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-cyan/10 to-accent/10 border border-cyan/20">
            <h3 className="text-lg font-semibold text-foreground mb-4">Supply Dynamics</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-cyan font-bold">→</span>
                <span><span className="font-semibold text-foreground">Deflationary:</span> 0.5% of all transaction fees permanently burned</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan font-bold">→</span>
                <span><span className="font-semibold text-foreground">Efficient:</span> Failed transactions consume no tokens</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan font-bold">→</span>
                <span><span className="font-semibold text-foreground">Democratic:</span> Community votes control burn rates</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan font-bold">→</span>
                <span><span className="font-semibold text-foreground">Fixed Cap:</span> No new tokens created after max supply</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
