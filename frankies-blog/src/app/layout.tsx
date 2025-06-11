import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteMetadata } from '@/lib/siteMetadata'

const inter = Inter({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const mono = Roboto_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${mono.variable} antialiased bg-[#111b22] text-white min-h-screen`}>
        <div className="relative flex size-full min-h-screen flex-col bg-[#111b22] dark group/design-root overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            <Header />
            <main className="flex flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
