/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'd1muf25xaso8hp.cloudfront.net',
      'tapback.com',
      'picsum.photos',
      'example.com',
      'logo.clearbit.com',
      'images.unsplash.com',
      'avatars.githubusercontent.com',
      'randomuser.me',
      'mentors.univation.com',
      'lh3.googleusercontent.com',
      'img.youtube.com',
      'www.tapback.co',
      '*.tapback.co',
      'tapback.co'
      // Add your logo domain here if it's not locally stored
    ],
  },
  // ... other configurations
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  },
}

module.exports = nextConfig
