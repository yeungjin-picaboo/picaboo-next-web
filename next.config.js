/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  i18n,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picaboo-nft-image.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/*',
      },
      {
        protocol: 'https',
        hostname: 'picaboo-diary-image.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/*',
      },
    ],
  },
};

module.exports = nextConfig;
