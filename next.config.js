/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.pexels.com",
      "images.unsplash.com",
      "overreacted.io",
      "localhost",
      "plus.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
