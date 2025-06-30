"use client"

import { useBalance, useAccount } from "wagmi"

export function Balance({ address }: { address?: `0x${string}` }) {
  const { address: connectedAddress } = useAccount()
  const targetAddress = address || connectedAddress

  const { data: balance, isLoading, error } = useBalance({
    address: targetAddress,
  })

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (error) {
    return <span>Error loading balance</span>
  }

  return (
    <span>
      {balance?.formatted ? Number(balance.formatted).toFixed(5) : '0'} {balance?.symbol}
    </span>
  )
}

