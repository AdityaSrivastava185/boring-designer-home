import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint:{
    ignoreDuringBuilds: true,
  },
  typescript: {
    // This option allows you to ignore TypeScript errors during the build process.
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
