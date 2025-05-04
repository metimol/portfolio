/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Enables static export for your project
    trailingSlash: true,
    images: {
        unoptimized: true,  // Disable image optimization for static export
    },
};

export default nextConfig;