await import('./src/env.mjs');

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  experimental: {
    esmExternals: false, // THIS IS THE FLAG THAT MATTERS
  },

  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};
export default config;
