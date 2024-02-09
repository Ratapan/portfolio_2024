/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/devto/:path*",
        destination: "https://dev.to/api/:path*",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/aboutme/",
        permanent: true,
      },
    ];
  },
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    //todo: make the text files
  },
};
export default nextConfig;
