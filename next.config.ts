/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export" as const,
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/" : "",
  trailingSlash: true,
} as const;

export default nextConfig;
