const isProd = process.env.NODE_ENV === 'production'
const isStaticExport = process.env.STATIC_EXPORT === 'true'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only enable static export when explicitly requested (e.g., for GitHub Pages)
  ...(isStaticExport && { output: 'export' }),
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  images: {
    // Only unoptimize images for static export
    unoptimized: isStaticExport
  },
  // Enable standalone output for better performance on serverless platforms
  ...(isProd && !isStaticExport && { output: 'standalone' })
}

export default nextConfig
