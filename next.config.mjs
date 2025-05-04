/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Enables static export for your project
    trailingSlash: true,
    images: {
        unoptimized: true,  // Disable image optimization for static export
    },
    basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
};

export default nextConfig;