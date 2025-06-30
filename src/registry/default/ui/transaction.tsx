"use client"

import { useTransaction } from 'wagmi'
import React from 'react'
// Inline the DescriptorRow component directly here
const DescriptorRow = ({ descriptor, value }: { descriptor: string; value: React.ReactNode }) => (
  <div className="flex justify-between items-center gap-4">
    <span className="font-medium">{descriptor}:</span>
    <span className="font-mono text-xs truncate max-w-[200px]">{value}</span>
  </div>
);

interface TransactionProps {
  hash?: `0x${string}`
}

export function Transaction({ hash }: TransactionProps): React.JSX.Element {
  const { data, error, status } = useTransaction({
    hash: hash,
  })

  if (status === 'pending') {
    return <div>Loading transaction data...</div>
  }

  if (status === 'error') {
    return <div>Error fetching transaction data: {error?.message}</div>
  }

  if (!data) {
    return <div>No transaction data available</div>
  }

  return (
    <div className="p-4 border rounded-lg bg-card max-w-[600px]">
      <span className="text-xs text-gray-500 font-normal mb-3 leading-none">Transaction</span>
      <div className="space-y-2 text-sm">
        <DescriptorRow
          descriptor="Status"
          value={
            <span className={`font-mono ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {status === 'success' ? 'Success' : 'Failed'}
            </span>
          }
        />
        <DescriptorRow
          descriptor="Block Number"
          value={data.blockNumber?.toString() || 'Pending'}
        />
        <DescriptorRow
          descriptor="From"
          value={data.from}
        />
        <DescriptorRow
          descriptor="To"
          value={data.to || 'Contract Creation'}
        />
        <DescriptorRow
          descriptor="Value"
          value={data.value ? `${data.value} ETH` : '0 ETH'}
        />
        <DescriptorRow
          descriptor="Gas Used"
          value={data.gas?.toString() || 'Pending'}
        />
        <DescriptorRow
          descriptor="Gas Price"
          value={data.gasPrice ? `${data.gasPrice.toLocaleString()} wei` : 'Pending'}
        />
        <DescriptorRow
          descriptor="Hash"
          value={data.hash}
        />
        {data.blockHash && (
          <DescriptorRow
            descriptor="Block Hash"
            value={data.blockHash}
          />
        )}
      </div>
    </div>
  )
}
