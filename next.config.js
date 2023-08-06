/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.postimg.cc", "i.ibb.co", "lh3.googleusercontent.com"],
  },
}

module.exports = nextConfig
