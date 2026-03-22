export function WhitepaperIntroduction() {
  return (
    <section className="mb-16">
      <div className="p-8 rounded-2xl bg-card/60 backdrop-blur-xl border border-primary/15 neon-glow">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            1. Introduction
          </span>
        </h2>

        <div className="space-y-6">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cryptix AI combines two transformative technologies: blockchain's transparency and artificial intelligence's intelligence.
            </p>
          </div>

          {/* What is Cryptix */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-3">What is Cryptix AI?</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>An AI-native blockchain ecosystem on BNB Chain</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>10 billion CRPX tokens powering intelligent automation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Enabling smart contracts, predictive analytics, and autonomous optimization</span>
              </li>
            </ul>
          </div>

          {/* Vision & Mission */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-cyan/5 border border-cyan/20">
              <h3 className="text-lg font-semibold text-cyan mb-2">Our Vision</h3>
              <p className="text-sm text-muted-foreground">
                Create the world's most intelligent blockchain ecosystem where AI amplifies human potential.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-accent/5 border border-accent/20">
              <h3 className="text-lg font-semibold text-accent mb-2">Our Mission</h3>
              <p className="text-sm text-muted-foreground">
                Democratize access to AI-powered blockchain solutions with unmatched security and efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
