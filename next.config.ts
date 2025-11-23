/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Only use basePath in production (when deployed to GitHub Pages)
  // For local testing, it will work without the basePath
  ...(process.env.GITHUB_ACTIONS && {
    basePath: '/alphaindex',
    assetPrefix: '/alphaindex/',
  }),
}

module.exports = nextConfig