"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ConnectButton } from "@rainbow-me/rainbowkit"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Tokenomics", href: "/#tokenomics" },
  { name: "Roadmap", href: "/#roadmap" },
  { name: "How to Buy", href: "/#how-to-buy" },
  { name: "Whitepaper", href: "/whitepaper" },
  { name: "Community", href: "/#community" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B0B0F]/80 backdrop-blur-xl border-b border-primary/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 flex items-center justify-center rounded-lg overflow-hidden group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300">
              <Image
                src="/cryptix-logo.jpg"
                alt="Cryptix AI"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <span className="text-foreground font-semibold text-lg hidden sm:block">
              Cryptix AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm font-medium hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Connect Wallet Button (Desktop) */}
          <div className="hidden lg:block">
            <ConnectButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0B0F]/95 backdrop-blur-xl border-b border-primary/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-muted-foreground hover:text-primary transition-all duration-300 py-2 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]"
              >
                {link.name}
              </Link>
            ))}

            {/* Connect Wallet Button (Mobile) */}
            <div className="mt-4 flex justify-center">
              <ConnectButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}