import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";
const inter = Inter({ subsets: ["vietnamese"] });
export const metadata: Metadata = {
    title: {
        template: "Hotel web | %s",
        default: "Hotel web", // a default is required when creating a template
    },
    description: "Copyright by duymanh2003.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className}`}
                suppressHydrationWarning={true}
            >
                <Toaster />
                {children}
                {/* <ClientProviders>{children}</ClientProviders> */}
            </body>
        </html>
    );
}
