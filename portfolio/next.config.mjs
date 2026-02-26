/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  basePath: isProd ? '/Personal-Portfolio' : '',
  assetPrefix: isProd ? '/Personal-Portfolio' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
