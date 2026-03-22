import { parseEther } from "viem"

// ✅ UPDATED CONTRACTS (FINAL)
export const presaleAddress = "0xf7C121Bd02948cb3B05Ab16887460eD6f62fedCe"
export const tokenAddress = "0xbaf3A3661B077EeDFe41362b267D62Cf4EB464DD"
export const usdtAddress = "0x55d398326f99059fF775485246999027B3197955"

// ✅ CORRECT PRESALE ABI (UPDATED WITH LIVE PRICE)
export const presaleABI = [
  {
    name: "buyWithBNB",
    type: "function",
    stateMutability: "payable",
    inputs: [],
    outputs: [],
  },
  {
    name: "buyWithUSDT",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      { name: "usdtAmount", type: "uint256" }
    ],
    outputs: [],
  },
  {
    name: "currentPhase",
    type: "function",
    stateMutability: "view",
    inputs: [],
    outputs: [{ type: "uint256" }],
  },
  {
    name: "totalSold",
    type: "function",
    stateMutability: "view",
    inputs: [],
    outputs: [{ type: "uint256" }],
  },
  {
    // ✅ NEW (LIVE BNB PRICE)
    name: "getBNBPrice",
    type: "function",
    stateMutability: "view",
    inputs: [],
    outputs: [{ type: "uint256" }],
  },
]

// ✅ HELPER: convert BNB string → wei
export const toWei = (value: string) => {
  try {
    return parseEther(value || "0")
  } catch {
    return BigInt(0)
  }
}