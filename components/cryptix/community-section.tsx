"use client"

import { MessageCircle, Twitter } from "lucide-react"

const socialLinks = [
  {
    name: "Telegram",
    icon: MessageCircle,
    href: "https://t.me/cryptixcoin",
    color: "from-[#229ED9] to-[#2AABEE]",
    description: "Join our Telegram community",
  },
  {
    name: "X (Twitter)",
    icon: Twitter,
    href: "https://x.com/cryptix_ai25",
    color: "from-[#1DA1F2] to-[#0D8BD9]",
    description: "Follow us for updates",
  },
]

export function CommunitySection() {
  return (
    <section id="community" className="relative py-20 px-4">
      {/* Background effect */}
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Join Our{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Community
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with thousands of CRPX holders and stay updated on the latest developments
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-card/60 backdrop-blur-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 text-center neon-glow"
            >
              <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${social.color} mb-4 group-hover:scale-110 transition-transform`}
              >
                <social.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{social.name}</h3>
              <p className="text-sm text-muted-foreground">{social.description}</p>
            </a>
          ))}
        </div>

        {/* Newsletter or additional CTA */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-center neon-glow">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Ready to be part of the future?
          </h3>
          <p className="text-muted-foreground mb-6">
            Join our growing community of innovators and early adopters.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-sm text-muted-foreground">
              <span className="text-cyan font-semibold">5,200+</span> community members
            </span>
            <span className="hidden sm:block text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">
              <span className="text-cyan font-semibold">24/7</span> active discussion
            </span>
            <span className="hidden sm:block text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">
              <span className="text-cyan font-semibold">Global</span> community
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
