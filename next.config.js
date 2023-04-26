/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picaboonftimage.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/*',
      },
      {
        protocol: 'https',
        hostname: 'picaboodiaryimage.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/*',
      },
    ],
  },
};

module.exports = nextConfig;
