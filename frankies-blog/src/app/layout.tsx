import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteMetadata } from '@/lib/siteMetadata'
import ErrorBoundary from '@/components/common/ErrorBoundary' // Import ErrorBoundary

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title, // Default title for pages that don't set one explicitly
    template: `%s | ${siteMetadata.title}`, // Template for prepending page titles
  },
  description: siteMetadata.description,
  openGraph: {
    siteName: siteMetadata.title,
    locale: 'en_US',
    type: 'website',
    url: siteMetadata.siteUrl, // Base URL for the site
    images: [
      {
        url: siteMetadata.socialBanner, // Default OG image
        // width and height can be specified if known
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: siteMetadata.twitterHandle, // Site's Twitter handle
    creator: siteMetadata.twitterHandle, // Default creator handle
    images: [`${siteMetadata.siteUrl}${siteMetadata.socialBanner}`], // Default Twitter image, ensure absolute URL
  },
  // Optional: Add more global metadata like icons, manifest, theme color etc.
  // icons: {
  //   icon: '/favicon.ico',
  //   shortcut: '/favicon-16x16.png',
  //   apple: '/apple-touch-icon.png',
  // },
  // manifest: '/site.webmanifest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-[#111b22] text-white min-h-screen">
        <div className="relative flex size-full min-h-screen flex-col bg-[#111b22] dark group/design-root overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            <Header />
            <main className="flex flex-1">
              <ErrorBoundary>
                {children}
              </ErrorBoundary>
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
