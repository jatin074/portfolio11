import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  webpack: (config: Configuration) => config,
  // No `experimental.turbo` needed
};

export default nextConfig;



