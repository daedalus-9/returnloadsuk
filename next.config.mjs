/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  compress: true,
  turbopack: {
    root: process.cwd(),
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "returnloadsuk.co.uk" }],
        destination: "https://www.returnloadsuk.co.uk/:path*",
        permanent: true,
      },
      {
        source: "/about-us/",
        destination: "/about/",
        permanent: true,
      },
      {
        source: "/signin/",
        destination: "/haulage-subcontractor-work/",
        permanent: false,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
