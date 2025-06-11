import nextMdx from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}

// Detect when building for production (static export) and set basePath/assetPrefix
if (process.env.NODE_ENV === 'production') {
  const repoName = 'Frankie-s-Blog'
  nextConfig.basePath = `/${repoName}`
  nextConfig.assetPrefix = `/${repoName}/`
}

if (process.env.GITHUB_ACTIONS) {
  const repo = process.env.GITHUB_REPOSITORY.split('/')[1]
  if (repo) {
    nextConfig.basePath = `/${repo}`
    nextConfig.assetPrefix = `/${repo}/`
  }
}

const withMDX = nextMdx({
  extension: /\.mdx?$/,
})

export default withMDX(nextConfig)
