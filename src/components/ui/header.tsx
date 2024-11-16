import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import ButtonLogout from "../button-logout";
import { cookies } from "next/headers";
import accountApiRequest from "@/apiRequests/account";
import { AccountResType } from "@/schemaValidations/account.schema";

export default async function Header({
    user,
}: {
    user: AccountResType["data"] | null;
}) {
    // const cookieStore = await cookies();
    // const sessionToken = cookieStore.get("sessionToken")?.value ?? "";
    // let user = null;
    // if (sessionToken) {
    //     const data = await accountApiRequest.me(sessionToken);
    //     user = data.payload.data;
    // }
    return (
        <div>
            <ul className="flex justify-between items-center">
                {!!user ? (
                    <>
                        <li>
                            <Link href={"/me"}>
                                <span>Hello {user.name}</span>
                            </Link>
                        </li>

                        <li>
                            <Link href={"/me"}>Profile</Link>
                        </li>
                        <li>
                            <ButtonLogout />
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link href={"/login"}>Đăng nhập</Link>
                        </li>
                        <li>
                            <Link href={"/register"}>Đăng ký</Link>
                        </li>
                    </>
                )}
                <li>
                    <Link href={"/product"}>Sản phẩm</Link>
                </li>
                <li>
                    <ModeToggle />
                </li>
            </ul>
        </div>
    );
}
