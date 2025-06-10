/** @type {import('next').NextConfig} */
const nextConfig = { output: 'export' };

if (process.env.GITHUB_ACTIONS) {
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];
  if (repo) nextConfig.basePath = `/${repo}`;
}

export default nextConfig;
