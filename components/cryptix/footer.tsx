"use client"

import { MessageCircle, Twitter, ExternalLink } from "lucide-react"
import { tokenAddress } from "@/lib/contract" // ✅ ADDED

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "Tokenomics", href: "/#tokenomics" },
    { name: "Roadmap", href: "/#roadmap" },
    { name: "How to Buy", href: "/#how-to-buy" },
  ],
  resources: [
    { name: "Whitepaper", href: "/whitepaper" },
    { name: "Smart Contract", href: "#", external: true },
    { name: "Audit Report", href: "#", external: true },
    { name: "Media Kit", href: "#" },
  ],
  socials: [
    { name: "Telegram", icon: MessageCircle, href: "https://t.me/cryptixcoin" },
    { name: "X (Twitter)", icon: Twitter, href: "https://x.com/cryptix_ai25" },
  ],
}

export function Footer() {
  return (
    <footer className="relative bg-[#070709] border-t border-primary/10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-lg" />
                <span className="relative text-primary-foreground font-bold text-lg">C</span>
              </div>
              <span className="text-foreground font-semibold text-lg">Cryptix AI</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              A next generation blockchain ecosystem powered by artificial intelligence.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {footerLinks.socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-all hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-all inline-flex items-center gap-1 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]"
                  >
                    {link.name}
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contract Info */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Contract</h4>
            <div className="p-3 rounded-lg bg-secondary/30 border border-primary/10">
              <p className="text-xs text-muted-foreground mb-1">Token Address</p>

              {/* ✅ FIXED HERE */}
              <p className="text-xs text-foreground font-mono break-all">
                {tokenAddress.slice(0, 6)}...{tokenAddress.slice(-4)}
              </p>

            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Always verify contract address before transactions.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Cryptix AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-all hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-all hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}