/** @type {import('next').NextConfig} */
const nextConfig = {
  future: {
    webpack5: true,
  },
  reactStrictMode: true,
  distDir: 'dist',
  images: {
    loader: 'akamai',
    path: '',
  },
  webpack: (config) => {
    config.experiments = { topLevelAwait: true };
    return config;
  },
}

module.exports = nextConfig
