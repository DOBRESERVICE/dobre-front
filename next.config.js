/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
      },
      {
        protocol: 'https',
        hostname: '3.126.106.58',
        port: '7000',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
