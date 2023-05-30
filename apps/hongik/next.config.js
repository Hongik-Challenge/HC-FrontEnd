/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@hc/ui', '@hc/utils'],
  experimental: {
    appDir: true
  }, 
}

module.exports = nextConfig