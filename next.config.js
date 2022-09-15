/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // images.unoptimized: true
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

module.exports = nextConfig;
