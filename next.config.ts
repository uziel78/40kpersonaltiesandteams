import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
        protocol: 'https',
        port: '',
        pathname: '/**',
      },
      {
        hostname: 'capable-hornet-134.eu-west-1.convex.cloud',
        protocol: 'https',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
