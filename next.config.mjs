/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/E-commerce-nextjs' : '',

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
