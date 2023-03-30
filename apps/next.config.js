/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withTM = require('next-transpile-modules')([
  '@hc/ui',
  '@hc/utils',
]);
module.exports = withTM({
  // Any additional config for next goes in here
});

module.exports = nextConfig
