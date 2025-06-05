import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["randomuser.me", "picsum.photos"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: `/home`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
