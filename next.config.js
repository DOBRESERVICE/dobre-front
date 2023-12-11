/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostnames: 'loremflickr.com',
      },
      {
        protocol: 'https',
        hostnames: '3.126.106.58',
        port: '7000',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
