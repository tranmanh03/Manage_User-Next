import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import ClientProviders from "@/components/ClientProviders";
// const inter = Inter({ subsets: ["vietnamese"] });
// export const metadata: Metadata = {
//     title: {
//         template: "Hotel web | %s",
//         default: "Hotel web", // a default is required when creating a template
//     },
//     description: "Copyright by duymanh2003.",
// };

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ClientProviders>{children}</ClientProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
