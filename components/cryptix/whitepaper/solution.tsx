export function WhitepaperSolution() {
  return (
    <section className="mb-16">
      <div className="p-8 rounded-2xl bg-card/60 backdrop-blur-xl border border-primary/15 neon-glow">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            3. The Solution
          </span>
        </h2>

        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Meet Cryptix AI: AI-native blockchain infrastructure that solves every major challenge:
          </p>

          <div className="space-y-3">
            {[
              {
                icon: "⚡",
                title: "Intelligent Scalability",
                benefit: "1000x faster transactions",
                detail: "AI predicts demand & optimizes routing"
              },
              {
                icon: "💸",
                title: "80% Lower Gas Fees",
                benefit: "Reduced transaction costs",
                detail: "ML algorithms optimize transaction timing"
              },
              {
                icon: "🤖",
                title: "Smart Contracts 2.0",
                benefit: "Autonomous decision-making",
                detail: "Contracts adapt to market conditions"
              },
              {
                icon: "🛡️",
                title: "Predictive Security",
                benefit: "Zero hacks through prevention",
                detail: "Anomaly detection catches threats early"
              },
              {
                icon: "✨",
                title: "Simple UX",
                benefit: "Anyone can use it",
                detail: "Natural language commands replace code"
              },
              {
                icon: "📈",
                title: "Self-Optimizing Network",
                benefit: "Peak performance always",
                detail: "AI continuously improves network health"
              },
            ].map((solution, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/15 hover:border-primary/30 transition-all neon-glow"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{solution.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{solution.title}</h3>
                    <p className="text-sm text-cyan font-medium mb-1">{solution.benefit}</p>
                    <p className="text-xs text-muted-foreground">{solution.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Architecture */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-cyan/10 border border-primary/20">
            <h3 className="text-lg font-semibold text-foreground mb-3">Architecture</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold">1.</span>
                <span>AI Engine Layer: Machine learning models for prediction & optimization</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">2.</span>
                <span>Consensus Layer: AI-enhanced validation for faster, cheaper transactions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">3.</span>
                <span>Application Layer: Intelligent smart contracts & autonomous dApps</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
