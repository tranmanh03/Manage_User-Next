import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Register page",
    },
    description: "Generated by create next app",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}