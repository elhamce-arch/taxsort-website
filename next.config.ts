import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/testimonials",
        destination: "/",
        permanent: true, // 301 — tells Google to update its index
      },
    ];
  },
};

export default nextConfig;
