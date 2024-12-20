import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/ui/header";
import { Toaster } from "@/components/ui/toaster";
import AppProvider from "@/AppProvider";
import { cookies } from "next/headers";
import SlideSession from "@/components/slide-session";
import accountApiRequest from "@/apiRequests/account";
import { AccountResType } from "@/schemaValidations/account.schema";

const inter = Inter({ subsets: ["vietnamese"] });
export const metadata: Metadata = {
    title: {
        template: "My web | %s",
        default: "My web", // a default is required when creating a template
    },
    description: "Copy right by duymanh2003",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("sessionToken");
    let user: AccountResType["data"] | null = null;
    if (sessionToken) {
        const data = await accountApiRequest.me(sessionToken?.value);
        user = data.payload.data;
    }

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
                    <AppProvider
                        inititalSessionToken={sessionToken?.value}
                        user={user}
                    >
                        <Header user={user} />
                        {children}
                        <SlideSession />
                    </AppProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
