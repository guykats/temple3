import type { NextConfig } from 'next'

const basePath = process.env.GITHUB_PAGES === 'true' ? '/temple3' : ''

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  // Expose basePath so components can prefix public-dir image paths.
  // next/image with unoptimized:true does not auto-inject basePath into src.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: { unoptimized: true },
  trailingSlash: true,
}

export default nextConfig
