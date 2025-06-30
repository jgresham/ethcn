"use client"

import { useChainId, useSwitchChain, useConfig } from 'wagmi'
import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ChainSelector(): React.JSX.Element {
  const chainId = useChainId()
  const { switchChain } = useSwitchChain()
  const config = useConfig()
  
  // Get available chains from wagmi config
  const availableChains = config.chains

  const handleChainChange = (value: string) => {
    const newChainId = Number(value)
    if (newChainId !== chainId) {
      switchChain({ chainId: newChainId })
    }
  }

  return (
    <div className="p-4 border rounded-lg bg-card">
      <span className="text-xs text-gray-500 font-normal mb-3 leading-none">
        Chain {chainId ? `(ID: ${chainId})` : ""}
      </span>
      <div className="space-y-2">
        <div className="flex justify-between items-center gap-4">
          <Select value={chainId.toString()} onValueChange={handleChainChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a chain" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Chains</SelectLabel>
                {availableChains.map((chain) => (
                  <SelectItem key={chain.id} value={chain.id.toString()}>
                    {chain.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
