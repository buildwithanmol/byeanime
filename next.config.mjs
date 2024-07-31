/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'cdn.noitatnemucod.net'
            }
        ]
    }
};

export default nextConfig;
