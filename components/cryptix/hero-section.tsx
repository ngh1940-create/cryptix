"use client"

import Link from "next/link"
import { ArrowRight, FileText } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan" />
          </span>
          <span className="text-sm text-muted-foreground">Presale is Live</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight text-balance">
          <span className="text-foreground">Cryptix AI — </span>
          <span className="bg-gradient-to-r from-primary via-accent to-cyan bg-clip-text text-transparent">
            The Future of AI-Powered Blockchain
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed text-pretty">
          A next generation blockchain ecosystem powered by artificial intelligence, designed to
          bring intelligent automation and scalable infrastructure to Web3.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all text-primary-foreground px-8 py-6 text-lg gap-2 group shadow-lg shadow-primary/25 rounded-lg flex items-center hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] neon-glow-sm"
          >
            Buy CRPX
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            className="border border-primary/30 hover:bg-primary/10 text-foreground px-8 py-6 text-lg gap-2 rounded-lg flex items-center transition-all hover:border-primary/50 neon-glow-sm"
          >
            <Link href="/whitepaper" className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Read Whitepaper
            </Link>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
          {[
            { label: "Total Supply", value: "10B CRPX" },
            { label: "Presale Price", value: "$0.005" },
            { label: "Raised", value: "$1.2M+" },
            { label: "Holders", value: "5,200+" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all neon-glow"
            >
              <p className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
