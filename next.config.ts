/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/jonoyanguren-portfolio",
  assetPrefix: "/jonoyanguren-portfolio",
};

module.exports = nextConfig;
