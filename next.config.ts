import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  // basePath only applied during GitHub Pages build via env var
  basePath: process.env.GITHUB_PAGES === 'true' ? '/temple3' : '',
  images: { unoptimized: true },
  trailingSlash: true,
}

export default nextConfig
