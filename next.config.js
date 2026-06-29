/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: true,
    qualities: [75, 85, 90, 95],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;