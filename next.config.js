/** @type {import('next').NextConfig} */
/*eslint-disable*/

module.exports = {
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
      // {
      //   source: '/eventos',
      //   destination: '/',
      //   permanent: true,
      // },
      // {
      //   source: '/eventos/bautizos',
      //   destination: '/',
      //   permanent: true,
      // },
      // {
      //   source: '/eventos/bautizos',
      //   destination: '/eventos',
      //   permanent: true,
      // },
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
}