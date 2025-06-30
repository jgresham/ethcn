"use client"

import { useAccount, useEnsName } from 'wagmi'
import React from 'react'

export function EnsName(): React.JSX.Element {
  const { address } = useAccount()
  console.log("ensName address", address)
  const { data, error, status } = useEnsName({ address: "0xd5575a1089667506110071bF73551c4735A329ef" })

  if (status === 'pending') {
    return <div>{"..."}</div>
  }

  if (status === 'error') {
    console.log("ensName error fetching ens name", error)
    return <div>{"-"}</div>
  }

  return <div>{ data } </div>
}