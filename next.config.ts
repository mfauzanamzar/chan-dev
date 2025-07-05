// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  webpack(config: { module: { rules: { test: RegExp; type: string; generator: { filename: string; }; }[]; }; }) {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/models/[hash][ext][query]',
      },
    });

    return config;
  },
};

module.exports = nextConfig;
