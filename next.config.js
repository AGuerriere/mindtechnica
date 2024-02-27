/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export",  // <=== enables static exports
}

module.exports = nextConfig
