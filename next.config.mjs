/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,


  async redirects() {
    return [
      {
        source: '/become-a-partner',
        destination: '/',
        permanent: true,
      },
      
    ];
  },
};

export default nextConfig;
