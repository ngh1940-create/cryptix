import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { bsc } from 'wagmi/chains'

export const config = getDefaultConfig({
  appName: 'Cryptix',
  projectId: 'YOUR_PROJECT_ID',
  chains: [bsc],
})