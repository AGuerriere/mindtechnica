/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  basePath: "/mindtechnica",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
}

module.exports = nextConfig
