import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "standalone",
  allowedDevOrigins: ["127.0.0.1", "localhost"],
    typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
