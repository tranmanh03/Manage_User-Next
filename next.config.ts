import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.tuoitre.vn",
                port: "",
                pathname: "/**",
            },
        ],
    },
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
    reactStrictMode: false,
};

export default nextConfig;
