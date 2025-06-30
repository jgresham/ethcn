"use client"

import { useBlock } from 'wagmi'
import React from 'react'

// Inline the DescriptorRow component directly here
const DescriptorRow = ({ descriptor, value }: { descriptor: string; value: React.ReactNode }) => (
  <div className="flex justify-between items-center gap-4">
    <span className="font-medium">{descriptor}:</span>
    <span className="font-mono text-xs truncate max-w-[200px]">{value}</span>
  </div>
);

interface BlockDataProps {
  blockNumber?: bigint
}

export function BlockData({ blockNumber }: BlockDataProps): React.JSX.Element {
  const { data, error, status } = useBlock({
    blockNumber: blockNumber,
  })

  if (status === 'pending') {
    return <div>Loading block data...</div>
  }

  if (status === 'error') {
    return <div>Error fetching block data: {error?.message}</div>
  }

  if (!data) {
    return <div>No block data available</div>
  }

  return (
    <div className="p-4 border rounded-lg bg-card">
      <span className="text-xs text-gray-500 font-normal mb-3 leading-none">Block</span>
      <div className="space-y-2 text-sm">
        <DescriptorRow
          descriptor="Block Number"
          value={data.number?.toString()}
        />
        <DescriptorRow
          descriptor="Timestamp"
          value={data.timestamp ? new Date(Number(data.timestamp) * 1000).toLocaleString() : 'N/A'}
        />
        <DescriptorRow
          descriptor="Transactions"
          value={data.transactions?.length || 0}
        />
        <DescriptorRow
          descriptor="Gas Used"
          value={data.gasUsed?.toLocaleString()}
        />
        <DescriptorRow
          descriptor="Gas Limit"
          value={data.gasLimit?.toLocaleString()}
        />
        <DescriptorRow
          descriptor="Hash"
          value={data.hash}
        />
        <DescriptorRow
          descriptor="Parent Hash"
          value={data.parentHash}
        />
      </div>
    </div>
  )
}
