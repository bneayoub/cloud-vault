/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "descriptive-canary-6.convex.cloud",
      },
    ],
  },
};

export default nextConfig;
