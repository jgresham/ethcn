"use client"

import { useReadContract } from 'wagmi'
import { erc20Abi } from 'viem'
import React from 'react'

interface TokenProps {
  contractAddress?: `0x${string}`
}

export function Token({ contractAddress }: TokenProps): React.JSX.Element {
  const { data: name, error: nameError, status: nameStatus } = useReadContract({
    address: contractAddress,
    abi: erc20Abi,
    functionName: 'name',
  })

  const { data: symbol, error: symbolError, status: symbolStatus } = useReadContract({
    address: contractAddress,
    abi: erc20Abi,
    functionName: 'symbol',
  })

  const { data: decimals, error: decimalsError, status: decimalsStatus } = useReadContract({
    address: contractAddress,
    abi: erc20Abi,
    functionName: 'decimals',
  })

  const { data: totalSupply, error: totalSupplyError, status: totalSupplyStatus } = useReadContract({
    address: contractAddress,
    abi: erc20Abi,
    functionName: 'totalSupply',
  })

  // Check if any of the basic ERC20 calls failed
  const hasError = nameError || symbolError || decimalsError || totalSupplyError
  const isLoading = nameStatus === 'pending' || symbolStatus === 'pending' || 
                   decimalsStatus === 'pending' || totalSupplyStatus === 'pending'

  if (!contractAddress) {
    return <div>No contract address provided</div>
  }

  if (isLoading) {
    return <div>Loading token data...</div>
  }

  if (hasError) {
    return <div>This contract does not appear to be a valid ERC20 token</div>
  }

  if (!name || !symbol || decimals === undefined || !totalSupply) {
    return <div>Unable to read complete token information</div>
  }

  // Format total supply with proper decimals
  const formattedTotalSupply = Number(totalSupply) / (10 ** Number(decimals))

  return (
    <div className="p-4 border rounded-lg bg-card max-w-[600px]">
      <span className="text-xs text-gray-500 font-normal mb-3 leading-none">Token</span>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="font-medium">Name:</span>
          <span className="font-mono">{name}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Symbol:</span>
          <span className="font-mono">{symbol}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Decimals:</span>
          <span className="font-mono">{decimals.toString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Total Supply:</span>
          <span className="font-mono">{formattedTotalSupply.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center gap-4">
          <span className="font-medium">Contract Address:</span>
          <span className="font-mono text-xs truncate max-w-[200px]">
            {contractAddress}
          </span>
        </div>
      </div>
    </div>
  )
}
