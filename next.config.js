// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // Allow loading local images from the public folder (WebP, etc.)
    formats: ['image/webp'],
    // If you later use external images, add domains here
    // domains: ['example.com'],
  },
};

module.exports = nextConfig;
