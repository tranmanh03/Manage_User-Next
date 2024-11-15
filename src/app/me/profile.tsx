"use client";

import { useEffect } from "react";
import accountApiRequest from "@/apiRequests/account";
import { handleErrorApi } from "@/lib/utils";

export default function Profile() {
    useEffect(() => {
        fetchUserInfor();
    }, []);
    const fetchUserInfor = async () => {
        try {
            const result = await accountApiRequest.meClient();
            console.log(result);
        } catch (error) {
            handleErrorApi({ error });
        }
    };
    return <div>profile in client</div>;
}
