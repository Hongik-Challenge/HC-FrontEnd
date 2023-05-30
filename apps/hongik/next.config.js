/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@hc/ui', '@hc/utils'],
  compiler: {
    styledComponents: true,
  },
  experimental: {
    appDir: true
  }, 
}

module.exports = nextConfig