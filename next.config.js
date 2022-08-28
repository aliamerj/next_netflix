/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.hollywoodreporter.com"],
  },
};

module.exports = nextConfig;
