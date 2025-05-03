
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' as it conflicts with dynamic routing/middleware
  // output: 'export',
  images: { unoptimized: true } // Keep if needed, otherwise consider removing for optimized images
};

module.exports = nextConfig;
