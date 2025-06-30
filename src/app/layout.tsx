// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ethcn",
  description: "Web3 React Components",
  openGraph: {
    images: [
      {
        url: '/ogimage2.png',
        width: 1200,
        height: 630,
        alt: 'Ethcn Web3 React Components',
      },
    ],
  },
  // Optionally, X card
  twitter: {
    card: 'summary_large_image',
    images: ['/ogimage2.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
            {children}
          </Providers>
      </body>
    </html>
  );
}
