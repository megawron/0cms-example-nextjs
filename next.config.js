/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: '/0cms-example-nextjs',
  assetPrefix: '/0cms-example-nextjs',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
