/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: '/graphql',
        destination: 'http://localhost:5000/graphql',
      },
    ];
  },
  reactStrictMode: true,
};
