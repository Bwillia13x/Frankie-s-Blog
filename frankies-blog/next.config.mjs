const isProd = process.env.NODE_ENV === 'production'
const repoName = 'Frankie-s-Blog'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only enable static export in production
  ...(isProd && { output: 'export' }),
  // Set the basePath and assetPrefix for production builds on GitHub Pages.
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  images: {
    unoptimized: isProd // Only unoptimize images in production for static export
  }
}

export default nextConfig
