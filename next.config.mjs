/** @type {import('next').NextConfig} */
const nextConfig = {
  // trailingSlash: true,
  // output: "export",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
