"use client"

import { useGasPrice } from "wagmi"
import React from "react"

// Inline the DescriptorRow component directly here
const DescriptorRow = ({ descriptor, value }: { descriptor: string; value: React.ReactNode }) => (
  <div className="flex justify-between items-center gap-4">
    <span className="font-medium">{descriptor}:</span>
    <span className="font-mono text-xs truncate max-w-[200px]">{value}</span>
  </div>
);

interface GasPriceProps {
  chainId?: number,
  wei?: boolean
}

export function GasPrice({ chainId, wei }: GasPriceProps): React.JSX.Element {
  const { data, status } = useGasPrice({
    chainId: chainId,
  })

  if (status === 'pending') {
    return <div>...</div>
  }

  if (status === 'error') {
    return <div>{"-"}</div>
  }

  if (!data) {
    return <div></div>
  }

  // Convert wei to gwei for better readability
  const gasPriceInGwei = wei ? data : data ? Number(data) / 1e9 : 0

  return (
    <div className="p-4 border rounded-lg bg-card">
      <span className="text-xs text-gray-500 font-normal mb-3 leading-none">Gas Price</span>
      <div className="space-y-2 text-sm">
        <DescriptorRow
          descriptor={wei ? "Gas Price (Wei)" : "Gas Price (Gwei)"}
          value={wei? data.toLocaleString() : Number(gasPriceInGwei).toFixed(2)}
        />
      </div>
    </div>
  )
}
