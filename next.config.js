/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true, // optional: avoids build errors from ESLint in CI
  },
  images: {
    domains: [], // add external image domains here if needed
  },
  experimental: {
    appDir: true, // enable if using Next.js 13+ app directory
  },
};

module.exports = nextConfig;
