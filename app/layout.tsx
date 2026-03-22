import '@rainbow-me/rainbowkit/styles.css'

import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

import { Providers } from './providers'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
})

export const metadata: Metadata = {
  title: 'Cryptix AI (CRPX) - AI-Powered Blockchain Presale',
  description: 'A next generation blockchain ecosystem powered by artificial intelligence, designed to bring intelligent automation and scalable infrastructure to Web3.',
  keywords: ['crypto', 'presale', 'AI', 'blockchain', 'CRPX', 'Cryptix AI', 'Web3'],
}

export const viewport: Viewport = {
  themeColor: '#0B0B0F',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body
        suppressHydrationWarning
        className="font-sans antialiased bg-[#0B0B0F] text-foreground"
      >
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}