import nextMdx from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

const withMDX = nextMdx({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
