"use client"

import Image from "next/image";
import { BlockData } from "../registry/default/ui/block";
import { DisplayAddress } from "../registry/default/ui/display-address";
import { Card } from "./Card";
import { Transaction } from "../registry/default/ui/transaction";
import { Token } from "../registry/default/ui/token";
import { ChainSelector } from "../registry/default/ui/chain-selector";
import { Balance } from "../registry/default/ui/balance";
import { GasPrice } from "../registry/default/ui/gas-price";

// const baseUrl = "https://ethcn.xyz/r/";
const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/r/`;

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-2 gap-12 sm:p-6 pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[24px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">Ethcn</h1>
        <h2 className="text-xl font-bold">Web3 React Components</h2>
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by adding a component to your project{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              npx shadcn add {baseUrl}ens-name.json
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Add a <a href="https://wagmi.sh/react/getting-started#manual-installation">wagmi provider and tanstack query client</a> to your app if you don&apos;t already have one.
          </li>
        </ol>

        <div className="flex flex-row gap-4 flex-wrap items-start">
          <div className="flex flex-col gap-4">
          <Card
            title="DisplayAddress"
            icon={
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            }
            copyCommand={`npx shadcn add ${baseUrl}display-address.json`}
          >
            <DisplayAddress address={"0xd5575a1089667506110071bF73551c4735A329ef"} />
          </Card>
          <Card
            title="Balance"
            icon={
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            }
            copyCommand={`npx shadcn add ${baseUrl}balance.json`}
          >
            <Balance address={"0xd5575a1089667506110071bF73551c4735A329ef"} />
          </Card>
          </div>
          <div className="flex flex-col gap-4">
          <Card
            title="ChainSelector"
            icon={
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            }
            copyCommand={`npx shadcn add ${baseUrl}chain.json`}
          >
            <ChainSelector />
          </Card>
          <Card
            title="GasPrice"
            icon={
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            }
            copyCommand={`npx shadcn add ${baseUrl}gas-price.json`}
          >
            <GasPrice chainId={1} wei={true} />
          </Card>
          </div>
          <Card
            title="BlockData"
            icon={
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            }
            copyCommand={`npx shadcn add ${baseUrl}block.json`}
          >
            <BlockData blockNumber={BigInt(17000000)} />
          </Card>
          <Card
            title="Transaction"
            icon={
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            }
            copyCommand={`npx shadcn add ${baseUrl}transaction.json`}
          >
            <Transaction hash={"0xfdb9f404cb30c787467b2bf9cb4a57a1a353b2f2d96840d916b33f9ac0043567"} />
          </Card>
          <Card
            title="Token"
            icon={
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            }
            copyCommand={`npx shadcn add ${baseUrl}token.json`}
          >
            <Token contractAddress={"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"} />
          </Card>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          {/* <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a> */}
          {/* <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a> */}
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/jgresham/ethcn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="Github icon"
            width={16}
            height={16}
          />
          Github
        </a>
      </footer>
    </div>
  );
}
