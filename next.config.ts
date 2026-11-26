import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // No ESLint config is shipped; skip the lint step during builds.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
