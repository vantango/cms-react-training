/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'i.annihil.us',
        port: '3000',
        pathname: '/u/prod/marvel/i/mg/**',
      },
    ],
  },
}

module.exports = nextConfig;
