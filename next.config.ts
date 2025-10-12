import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  headers: async () => [
    {
      source: "/",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=0, s-maxage=31536000, stale-while-revalidate=86400",
        },
      ],
    },
  ],
};

export default nextConfig;
