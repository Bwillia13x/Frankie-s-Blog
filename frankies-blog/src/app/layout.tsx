import type { Metadata } from 'next'
import './globals.css'
import { siteMetadata } from '@/lib/siteMetadata'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ErrorBoundary from '@/components/common/ErrorBoundary' // Import ErrorBoundary
import { SessionProvider } from '@/components/SessionProvider'
import { Toaster } from 'react-hot-toast'
import { ReadingProgress } from '@/components/ui/reading-progress'
import { ExitIntentNewsletter } from '@/components/ui/newsletter-enhanced'
import { 
  ServiceWorkerRegistration, 
  MemoryMonitor, 
  BundleAnalyzer,
  ResourcePreloader 
} from '@/components/performance/PerformanceOptimizer'

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
    url: siteMetadata.siteUrl,
    images: [
      {
        url: siteMetadata.socialBanner,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: siteMetadata.twitterHandle,
    creator: siteMetadata.twitterHandle,
    images: [`${siteMetadata.siteUrl}${siteMetadata.socialBanner}`],
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-[#111b22] text-white min-h-screen">
        <SessionProvider>
          <ReadingProgress />
          <ExitIntentNewsletter />
          <ServiceWorkerRegistration />
          <MemoryMonitor />
          <BundleAnalyzer />
          <ResourcePreloader 
            fonts={[
              { href: '/fonts/newsreader-variable.woff2', type: 'font/woff2' }
            ]}
            images={[
              '/images/og-default.png',
              '/images/logo.png'
            ]}
          />
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
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#1e293b',
                color: '#fff',
                border: '1px solid #334155',
              },
              success: {
                style: {
                  background: '#065f46',
                  border: '1px solid #10b981',
                },
              },
              error: {
                style: {
                  background: '#7f1d1d',
                  border: '1px solid #ef4444',
                },
              },
            }}
          />
        </SessionProvider>
      </body>
    </html>
  )
}
