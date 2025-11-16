/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  compress: true,

  images: {
    domains: ["www.returnloadsuk.co.uk"],
  },

  // async redirects() {
  //   return [
  //     {
  //       source: "/become-a-partner",
  //       destination: "/",
  //       permanent: true,
  //     },
  //     {
  //       source: "/contact",
  //       destination: "/",
  //       permanent: true,
  //     },
  //     {
  //       source: "/rate-review-job",
  //       destination: "/",
  //       permanent: true,
  //     },
  //     {
  //       source: "/about-us/",
  //       destination: "/",
  //       permanent: true,
  //     },
  //   ];
  // },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Robots-Tag", value: "index, follow" },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
