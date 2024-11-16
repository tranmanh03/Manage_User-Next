"use client";
import authApiRequest from "@/apiRequests/auth";
import { clientSessionToken } from "@/lib/http";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
export default function Logout() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const sessionToken = searchParams.get("sessionToken");
    useEffect(() => {
        if (sessionToken === clientSessionToken.value) {
            authApiRequest
                .logoutFromNextClientToNextServer(true)
                .then((res) => router.push(`/login?redirectFrom=${pathname}`));
        }
    }, [sessionToken, pathname, router]);
    return <div>page</div>;
}
