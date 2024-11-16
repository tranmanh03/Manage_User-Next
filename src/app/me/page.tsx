import { cookies } from "next/headers";
import Profile from "./profile";
import accountApiRequest from "@/apiRequests/account";

export default async function page() {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("sessionToken");
    const result = await accountApiRequest.me(sessionToken?.value ?? "");
    // console.log(result);

    return (
        <div>
            Welcome {result.payload.data.name} to website.
            {/* <Profile /> */}
        </div>
    );
}
