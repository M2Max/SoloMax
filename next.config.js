
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true } // Keep if needed, otherwise consider removing for optimized images
};

module.exports = nextConfig;
