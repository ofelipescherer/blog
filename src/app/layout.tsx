import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'A personal Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='flex min-h-screen'>

      <head>

        <link href="https://api.fontshare.com/v2/css?f[]=switzer@300&f[]=gambarino@400&display=swap" rel="stylesheet" />
      </head>

      <body className="flex w-full flex-col gap-8 bg-background font-switzer text-text">
        <Header />
        <main className="m-auto flex w-full max-w-screen-2xl flex-1 px-4 pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
