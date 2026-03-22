import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function WhitepaperConclusion() {
  return (
    <section className="mb-16">
      <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 neon-glow">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            8. Conclusion & Vision
          </span>
        </h2>

        <div className="space-y-6 text-muted-foreground">
          <p>
            Cryptix AI represents the convergence of two transformative technologies: artificial intelligence and blockchain. By integrating AI into every layer of blockchain infrastructure, we unlock unprecedented possibilities for scalability, efficiency, and innovation.
          </p>

          <p>
            Our vision is ambitious yet achievable: to become the world's leading AI-native blockchain platform, enabling millions of developers and users to build intelligent decentralized applications. We are committed to maintaining the core values of blockchain technology — transparency, security, and decentralization — while leveraging AI to overcome current limitations.
          </p>

          <div className="space-y-4 my-6">
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/30">
              <p className="font-semibold text-foreground mb-2">Strategic Advantages</p>
              <ul className="text-sm space-y-2">
                <li>• First-mover advantage in AI-blockchain integration</li>
                <li>• Experienced team with backgrounds in AI and blockchain</li>
                <li>• Strong community backing and ecosystem partnerships</li>
                <li>• Sustainable tokenomics with long-term incentive alignment</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-accent/10 border border-accent/30">
              <p className="font-semibold text-foreground mb-2">Long-Term Goals</p>
              <ul className="text-sm space-y-2">
                <li>• Process 100,000+ transactions per second by 2028</li>
                <li>• Support 10+ million active users and 1 million dApps</li>
                <li>• Establish Cryptix as the standard for AI-powered blockchain</li>
                <li>• Enable seamless cross-chain AI interoperability</li>
              </ul>
            </div>
          </div>

          <p>
            We invite developers, investors, and community members to join us on this journey to build the future of blockchain technology. Together, we can create an ecosystem where AI and blockchain work in harmony to solve real-world problems and empower billions of people.
          </p>

          <p className="italic text-sm">
            "The future is not something we predict—it's something we build together."
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-8 pt-8 border-t border-primary/20">
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/"
              className="p-4 rounded-xl bg-primary/20 border border-primary/30 hover:bg-primary/30 hover:border-primary/50 transition-all text-center neon-glow-sm"
            >
              <p className="font-semibold text-foreground mb-1">Buy CRPX</p>
              <p className="text-sm text-muted-foreground">Join the presale</p>
            </Link>
            <a
              href="https://github.com/cryptix-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-accent/20 border border-accent/30 hover:bg-accent/30 hover:border-accent/50 transition-all text-center neon-glow-sm"
            >
              <p className="font-semibold text-foreground mb-1">View Code</p>
              <p className="text-sm text-muted-foreground">GitHub repository</p>
            </a>
            <Link
              href="/#community"
              className="p-4 rounded-xl bg-cyan/20 border border-cyan/30 hover:bg-cyan/30 hover:border-cyan/50 transition-all text-center neon-glow-sm"
            >
              <p className="font-semibold text-foreground mb-1">Join Community</p>
              <p className="text-sm text-muted-foreground">Telegram & Twitter</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="mt-12 pt-8 border-t border-primary/10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-cyan transition-all hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          Back to Home
        </Link>
      </div>
    </section>
  )
}
