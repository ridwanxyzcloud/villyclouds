/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "villyclouds.com", pathname: "/**" },
      { protocol: "http", hostname: "villyclouds.com", pathname: "/**" },
      { protocol: "https", hostname: "demo.wpzoom.com", pathname: "/**" },
      { protocol: "https", hostname: "images.pexels.com", pathname: "/**" },
    ],
  },
};
export default nextConfig;
