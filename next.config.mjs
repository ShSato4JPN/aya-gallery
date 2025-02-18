/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/t8pgof6z62g7/**",
        search: "",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
