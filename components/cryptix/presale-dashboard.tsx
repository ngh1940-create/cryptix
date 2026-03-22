"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount, useWriteContract, useReadContract } from "wagmi"

import { presaleAddress, presaleABI, toWei } from "@/lib/contract"

const CURRENT_PRICE = 0.005
const TOTAL_TOKENS_PHASE2 = 2_000_000_000
const TOKENS_SOLD_PHASE2 = 1_245_000_000

export function PresaleDashboard() {
  const [bnbAmount, setBnbAmount] = useState("")
  const [usdtAmount, setUsdtAmount] = useState("")
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(false)

  const { address, isConnected } = useAccount()
  const { writeContractAsync } = useWriteContract()

  // ✅ LIVE BNB PRICE FROM CONTRACT
  const { data: bnbPriceData } = useReadContract({
    address: presaleAddress,
    abi: presaleABI,
    functionName: "getBNBPrice",
  })

  const bnbPrice = bnbPriceData
    ? Number(bnbPriceData) / 1e18
    : 0

  // ✅ FIXED CALCULATION (LIVE PRICE)
  const calculateTokens = (amount: string, type: "bnb" | "usdt") => {
    const num = Number(amount)

    if (!amount || amount.trim() === "" || isNaN(num) || num <= 0) {
      return 0
    }

    let usdValue = 0

    if (type === "bnb") {
      if (!bnbPrice) return 0
      usdValue = num * bnbPrice
    } else {
      usdValue = num
    }

    const tokens = usdValue / CURRENT_PRICE

    return Number.isFinite(tokens) ? Math.floor(tokens) : 0
  }

  const handleCopy = () => {
    if (address) {
      navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const progress =
    TOTAL_TOKENS_PHASE2 > 0
      ? (TOKENS_SOLD_PHASE2 / TOTAL_TOKENS_PHASE2) * 100
      : 0

  return (
    <section id="presale" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-10">
          Join the Presale
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT */}
          <div className="p-6 border rounded-xl">
            <h3 className="mb-4">Presale Progress</h3>

            <Progress value={progress} className="h-3 mb-4" />

            <div className="flex justify-between">
              <span>Price</span>
              <span>${CURRENT_PRICE}</span>
            </div>

            {/* ✅ OPTIONAL: show live price */}
            <div className="flex justify-between mt-2">
              <span>BNB Price</span>
              <span>
                {bnbPrice ? `$${bnbPrice.toFixed(2)}` : "Loading..."}
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="p-6 border rounded-xl">

            {!isConnected ? (
              <div className="text-center space-y-4">
                <p>Connect wallet</p>
                <ConnectButton showBalance={false} />
              </div>
            ) : (
              <>
                <Tabs defaultValue="bnb">
                  <TabsList className="grid grid-cols-2 mb-4">
                    <TabsTrigger value="bnb">BNB</TabsTrigger>
                    <TabsTrigger value="usdt">USDT</TabsTrigger>
                  </TabsList>

                  {/* BNB */}
                  <TabsContent value="bnb">
                    <Input
                      type="text"
                      placeholder="Enter BNB"
                      value={bnbAmount}
                      onChange={(e) => {
                        const val = e.target.value
                        if (/^\d*\.?\d*$/.test(val)) {
                          setBnbAmount(val)
                        }
                      }}
                    />

                    <p className="mt-2">
                      You get: {calculateTokens(bnbAmount, "bnb")} CRPX
                    </p>

                    <Button
                      className="w-full mt-4"
                      disabled={loading}
                      onClick={async () => {
                        try {
                          const value = Number(bnbAmount)

                          if (!value || isNaN(value) || value <= 0) {
                            alert("Invalid amount")
                            return
                          }

                          setLoading(true)

                          await writeContractAsync({
                            address: presaleAddress,
                            abi: presaleABI,
                            functionName: "buyWithBNB",
                            args: [],
                            value: toWei(bnbAmount),
                          })

                          alert("Success 🚀")

                        } catch (err) {
                          console.error(err)
                          alert("Failed ❌")
                        } finally {
                          setLoading(false)
                        }
                      }}
                    >
                      {loading ? "Processing..." : "Buy with BNB"}
                    </Button>
                  </TabsContent>

                  {/* USDT */}
                  <TabsContent value="usdt">
                    <Input
                      type="text"
                      placeholder="Enter USDT"
                      value={usdtAmount}
                      onChange={(e) => {
                        const val = e.target.value
                        if (/^\d*\.?\d*$/.test(val)) {
                          setUsdtAmount(val)
                        }
                      }}
                    />

                    <p className="mt-2">
                      You get: {calculateTokens(usdtAmount, "usdt")} CRPX
                    </p>

                    <Button className="w-full mt-4">
                      Coming Soon
                    </Button>
                  </TabsContent>
                </Tabs>

                <div className="mt-6 flex justify-between">
                  <span>
                    {address?.slice(0, 6)}...{address?.slice(-4)}
                  </span>

                  <button onClick={handleCopy}>
                    {copied ? <Check /> : <Copy />}
                  </button>
                </div>
              </>
            )}

          </div>
        </div>
      </div>
    </section>
  )
}