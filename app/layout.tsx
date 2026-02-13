import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'

import './globals.css'
import AgeGate from '@/components/AgeGate'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair'
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Chillcloud - Premium Smoking Accessories',
  description: 'Your daily dose of chill. Premium hand-rolled ciga-rolls, pre-rolled cones, and finest rolling papers crafted with excellence.',
  generator: 'v0.app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <AgeGate />
        {children}
      </body>
    </html>
  )
}
