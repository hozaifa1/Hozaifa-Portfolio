import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'hozaifa-space.vercel.app' }],
        destination: 'https://hozaifa.dev/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
