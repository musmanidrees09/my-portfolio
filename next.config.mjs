/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Keep all qualities used by portfolio components
    qualities: [65, 70, 75, 80, 85],
    // AVIF/WebP reduce transfer size while preserving the original public assets.
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
