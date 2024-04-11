/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                // protocol: 'http',
                hostname: 'utfs.io',
                // hostname: 'localhost',
                // port: '3000',
                // pathname: '/api/uploadthing'
            }
        ]
    }
};

export default nextConfig;
