"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

const tokenomicsData = [
  { name: "Presale", value: 30, color: "#3B82F6", description: "Public presale allocation" },
  { name: "Liquidity", value: 20, color: "#6366F1", description: "DEX liquidity provision" },
  { name: "Staking Rewards", value: 20, color: "#06B6D4", description: "Staking reward pool" },
  { name: "Development", value: 10, color: "#8B5CF6", description: "Platform development" },
  { name: "Marketing", value: 8, color: "#22D3EE", description: "Marketing & partnerships" },
  { name: "Community", value: 7, color: "#14B8A6", description: "Community rewards" },
  { name: "Advisors", value: 5, color: "#F59E0B", description: "Advisor allocation" },
]

export function TokenomicsSection() {
  return (
    <section id="tokenomics" className="relative py-20 px-4">
      {/* Background effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tokenomics
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transparent and sustainable token distribution designed for long-term growth
          </p>
        </div>

        {/* Total Supply Card */}
        <div className="mb-12 p-6 rounded-2xl bg-card/60 backdrop-blur-xl border border-primary/15 text-center max-w-md mx-auto neon-glow">
          <p className="text-sm text-muted-foreground mb-2">Total Supply</p>
          <p className="text-4xl font-bold text-foreground">10,000,000,000</p>
          <p className="text-lg text-primary mt-1">CRPX</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Pie Chart */}
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={tokenomicsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={140}
                  paddingAngle={3}
                  dataKey="value"
                  stroke="none"
                >
                  {tokenomicsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload
                      return (
                        <div className="bg-card/90 backdrop-blur-sm border border-primary/20 rounded-lg p-3">
                          <p className="text-foreground font-semibold">{data.name}</p>
                          <p className="text-primary text-lg font-bold">{data.value}%</p>
                          <p className="text-muted-foreground text-sm">{data.description}</p>
                        </div>
                      )
                    }
                    return null
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Distribution Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {tokenomicsData.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-card/60 backdrop-blur-xl border border-primary/10 hover:border-primary/30 transition-colors group neon-glow"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-foreground font-semibold">{item.name}</span>
                </div>
                <p className="text-2xl font-bold text-foreground mb-1">{item.value}%</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
