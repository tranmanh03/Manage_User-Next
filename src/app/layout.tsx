import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/ui/header";
import { Toaster } from "@/components/ui/toaster";
import AppProvider from "@/AppProvider";
import { cookies } from "next/headers";
import Link from "next/link";
import SlideSession from "@/components/slide-session";

const inter = Inter({ subsets: ["vietnamese"] });
export const metadata: Metadata = {
    title: "Home Page",
    description: "Generated by create next app",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("sessionToken");

    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className}`}>
                <Toaster />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    <Link href="/me">Profile</Link>
                    <AppProvider inititalSessionToken={sessionToken?.value}>
                        {children}
                        <SlideSession />
                    </AppProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
