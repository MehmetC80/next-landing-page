/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  images: {
    domains: [
      'links.papareact.com',
      'edwardtanguay.netlify.app/share/books.json',
      'edwardtanguay.netlify.app',
    ],
  },
};
