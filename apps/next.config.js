/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

//모노레포에서 컴포넌트를 트랜스파일 해오는 과정이 필요하기 때문에 넣어둔 코드,(플러그인 깔음)
const withTM = require('next-transpile-modules')([
  '@hc/ui',
  '@hc/utils',
]);
module.exports = withTM({
  // Any additional config for next goes in here
});

module.exports = nextConfig
