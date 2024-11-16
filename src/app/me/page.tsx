import { cookies } from "next/headers";
import accountApiRequest from "@/apiRequests/account";
import ProfileUpdateForm from "./profile-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Profile User",
};

export default async function page() {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("sessionToken");
    const result = await accountApiRequest.me(sessionToken?.value ?? "");
    // console.log(result);

    return (
        <div>
            Welcome {result.payload.data.name} to website.
            {/* <Profile /> */}
            <ProfileUpdateForm profile={result.payload.data} />
        </div>
    );
}
