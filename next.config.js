/** @type {import('next').NextConfig} */
/*eslint-disable*/
const withPWA = require('next-pwa')

module.exports = withPWA({
  async redirects() {
    return [
      {
        source: '/recursos',
        destination: '/recursos/espiritu',
        permanent: true,
      },
      {
        source: '/tienda',
        destination: '/',
        permanent: true,
      },
      {
        source: '/reservaciones',
        destination: '/',
        permanent: true,
      },
      {
        source: '/eventos/bautizos',
        destination: '/eventos',
        permanent: true,
      },
    ]
  },

  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname
  },

  images: {
    domains: [
      'firebasestorage.googleapis.com',
    ]
  },

  pwa: {
    dest: 'public'
  },

  reactStrictMode: true,
})