/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allows loading remote images from Unsplash
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // IMPORTANT: Prevents Vercel from altering image dimensions dynamically
    unoptimized: true,
  },
  
  // Ensures Vercel includes all bundled CSS properly
  transpilePackages: [],
};

export default nextConfig;