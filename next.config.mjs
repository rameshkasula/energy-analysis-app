/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Disable TypeScript errors during builds
  typescript: {
    ignoreBuildErrors: true,
  },

  // Other common configurations
  reactStrictMode: true,
  swcMinify: true,

  // Experimental features
  experimental: {
    // Add any experimental features you need
  },
}

export default nextConfig;