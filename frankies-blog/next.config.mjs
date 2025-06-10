import nextMdx from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}

if (process.env.GITHUB_ACTIONS) {
  const repo = process.env.GITHUB_REPOSITORY.split('/')[1]
  if (repo) nextConfig.basePath = `/${repo}`
}

const withMDX = nextMdx({
  extension: /\.mdx?$/,
})

export default withMDX(nextConfig)
