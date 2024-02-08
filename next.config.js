/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  async rewrites(){
    return [
      {
        source: '/devto/:path*',
        destination: 'https://dev.to/api/:path*'
      },
    ]
  },
  i18n: {
    locales: ['es','en'],
    defaultLocale: 'es',
    //todo: make the text files
  },
};
module.exports = nextConfig;
