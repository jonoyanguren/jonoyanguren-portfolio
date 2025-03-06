/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/" : "",
  trailingSlash: true,
};

export default nextConfig;
