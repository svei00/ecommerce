/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['/assets/images'] // In case to load images from http need to put the domain ex. informador.mx
  }
}

module.exports = nextConfig
