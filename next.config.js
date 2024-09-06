/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com'
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com'
      }
    ],
    domains: ['www.tapback.co', 'picsum.photos']
  }
};

module.exports = nextConfig;
