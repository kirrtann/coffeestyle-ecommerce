import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  }, images: {
    domains: ['cdn.prod.website-files.com'],
  }
};