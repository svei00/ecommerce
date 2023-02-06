/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     domains: ['/assets/images', 'cdn.sanity.io'], // In case to load images from http need to put the domain ex. informador.mx
//   }
// }

const { ModuleKind } = require('typescript');

// module.exports = nextConfig

module.exports = {
  reactStrickmode: true,
  images: {
    domains: ['/assets/images', 'cdn.sanity.io', 'lh3.googleusercontent.com'], // In case to load images from http need to put the domain ex. informador.mx
  },
  distDir: 'build',
};