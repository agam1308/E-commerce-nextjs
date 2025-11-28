/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  basePath: '/E-commerce-nextjs',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
