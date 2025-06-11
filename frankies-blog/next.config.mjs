import nextMdx from '@next/mdx'

const isProd = process.env.NODE_ENV === 'production'
const repoName = 'Frankie-s-Blog'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Set the basePath and assetPrefix for production builds on GitHub Pages.
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
}

const withMDX = nextMdx({
  extension: /\.mdx?$/,
})

export default withMDX(nextConfig)
