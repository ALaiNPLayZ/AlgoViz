//  @type {import('next').NextConfig}
const nextConfig = {
    images: {
        unoptimized: true
    },
    output: 'export', // Outputs a Single-Page Application (SPA).
    distDir: './build', // Changes the build output directory to `./dist`.
    assetPrefix: '/AlgoViz',
    basePath: '/AlgoViz',
}
   
export default nextConfig;