import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "6868",
                // pathname: '/**',
            },
        ],
    },
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
};

export default nextConfig;
