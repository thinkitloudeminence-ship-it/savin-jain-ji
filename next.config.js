/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;