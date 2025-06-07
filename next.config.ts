// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export", // Enables static export
//   images: {
//     unoptimized: true, // Required for GitHub Pages
//   },
//   basePath: "/jatin", // Must match GitHub repo name
//   assetPrefix: "/jatin/", // Ensures assets load properly
// };

// export default nextConfig;

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
