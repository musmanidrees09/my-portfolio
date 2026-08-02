/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Keep only the qualities used by this portfolio so invalid requests fail fast.
    qualities: [65, 75],
    // AVIF/WebP reduce transfer size while preserving the original public assets.
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
