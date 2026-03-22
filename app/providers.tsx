"use client"

import "@rainbow-me/rainbowkit/styles.css"

import { WagmiProvider } from "wagmi"
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit"
import { bsc } from "wagmi/chains"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode, useState } from "react"

// ✅ FIX: stable QueryClient (important)
export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  const config = getDefaultConfig({
    appName: "Cryptix",
    projectId: "4585fdba3d57d2562b7d3d62a74fe0e6", // ⚠️ replace this
    chains: [bsc],
  })

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}