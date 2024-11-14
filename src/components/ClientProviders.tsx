// components/ClientProviders.js
"use client";

import { ThemeProvider } from "@/components/theme-provider";
import ReduxProvider from "@/store/redux-provider";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/ui/header";

export default function ClientProviders({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ReduxProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <Toaster />
                <Header />
                {children}
            </ThemeProvider>
        </ReduxProvider>
    );
}
