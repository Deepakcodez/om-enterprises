import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  transpilePackages: ['framer-motion'],
  reactStrictMode: false,
  images: {
    formats: ['image/webp'],
    domains: [
      'plus.unsplash.com',
      'img.freepik.com',
      "static.vecteezy.com",
      "cdn.vectorstock.com",
      "res.cloudinary.com"

    ],
  },
};

export default nextConfig;
