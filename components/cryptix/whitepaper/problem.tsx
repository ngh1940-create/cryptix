export function WhitepaperProblem() {
  return (
    <section className="mb-16">
      <div className="p-8 rounded-2xl bg-card/60 backdrop-blur-xl border border-primary/15 neon-glow">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            2. The Problem
          </span>
        </h2>

        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Current blockchain networks face critical limitations that prevent mainstream adoption:
          </p>

          <div className="grid gap-4">
            {[
              {
                icon: "⚡",
                title: "Scalability Bottleneck",
                pain: "Network congestion & slow transactions",
                impact: "Users wait minutes for transactions"
              },
              {
                icon: "💰",
                title: "Expensive Operations",
                pain: "High gas fees make transactions costly",
                impact: "Micro-transactions become impractical"
              },
              {
                icon: "🧠",
                title: "No Intelligence",
                pain: "Smart contracts are rigid & static",
                impact: "Manual intervention required for complexity"
              },
              {
                icon: "🔒",
                title: "Security Risks",
                pain: "Smart contract bugs cost millions",
                impact: "$14B+ lost to hacks & exploits"
              },
              {
                icon: "😕",
                title: "Poor UX",
                pain: "Complex wallet & gas management",
                impact: "Regular users can't participate"
              },
              {
                icon: "📊",
                title: "Inefficient Resources",
                pain: "No dynamic optimization",
                impact: "Wasted network capacity"
              },
            ].map((problem, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 hover:border-primary/30 transition-all neon-glow"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{problem.icon}</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{problem.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{problem.pain}</p>
                    <p className="text-xs text-cyan font-medium">{problem.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/30">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-destructive">The Result:</span> Blockchain's potential remains untapped. Without intelligent automation, scalable solutions, and user-friendly interfaces, Web3 cannot compete with Web2.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
