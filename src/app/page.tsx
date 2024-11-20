import HomeBody from "@/components/HomePage/body-home-page";
import Footer from "@/components/HomePage/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home page",
    description: "Copyright by duymanh2003.",
};

export default function Home() {
    return (
        <>
            <HomeBody />
            <Footer />
        </>
    );
}
