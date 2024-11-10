"use client"

import { useEffect } from "react";
import accountApiRequest from "@/apiRequests/account";

export default function Profile() {
    useEffect(() => {
      fetchUserInfor()
    }, []);
    const fetchUserInfor = async () => {
        const result = await accountApiRequest.meClient()
        console.log(result);
    }
    return <div>profile in client</div>;
}