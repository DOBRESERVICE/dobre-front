/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    port: 80,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '3.126.106.58',
        port: '7000',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
