/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['anilibria.tv', 'cache.libria.fun'],
  },
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
};


export default nextConfig;
