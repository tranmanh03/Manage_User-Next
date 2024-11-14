"use client";
import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { doLogout } from "@/store/authSlice";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export default function Header() {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const isAuthenticated = useAppSelector(
        (state: any) => state.auth.isAuthenticated
    );

    const name = useAppSelector((state: any) => state.auth.account?.name);

    const handleLogout = () => {
        if (confirm("Đăng xuất???") == true) {
            dispatch(doLogout());
            router.push("/");
        }
    };

    return (
        <div className="flex justify-center items-center bg-lime-600 h-[62px] fixed top-0 left-0 right-0 z-10">
            <div className="flex justify-between items-center w-1250">
                <ul className="flex justify-center items-center text-xl gap-4">
                    <li className="hover:underline hover:text-cyan-400">
                        <Link href={"/"}>Trang chủ</Link>
                    </li>
                    <li
                        className={clsx(`hover:underline hover:text-cyan-400`, {
                            ["disabled"]: !isAuthenticated,
                        })}
                    >
                        <Link href={"/admin"}>Admin</Link>
                    </li>
                    <li
                        className={clsx(`hover:underline hover:text-cyan-400`, {
                            ["disabled"]: !isAuthenticated,
                        })}
                    >
                        <Link href={"/manage-user"}>Manage User</Link>
                    </li>
                    <li
                        className={clsx(`hover:underline hover:text-cyan-400`, {
                            ["disabled"]: !isAuthenticated,
                        })}
                    >
                        <Link href={"/me"}>Profile</Link>
                    </li>
                </ul>
                <div className="flex justify-center items-center gap-3">
                    <ModeToggle />
                    <ul className="flex justify-center items-center gap-2">
                        {isAuthenticated ? (
                            <>
                                <li>
                                    <h4 className="uppercase">{name}</h4>
                                </li>
                                <li>
                                    <Button
                                        className="bg-rose-600 hover:bg-rose-500 min-w-100 ml-2"
                                        onClick={() => handleLogout()}
                                    >
                                        Đăng xuất
                                    </Button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Button
                                        asChild
                                        className="bg-rose-600 hover:bg-rose-500 min-w-100 p-2"
                                    >
                                        <Link href="/login">Đăng nhập</Link>
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        asChild
                                        className="min-w-100 bg-dark hover:bg-zinc-700"
                                    >
                                        <Link href="/register">Đăng ký</Link>
                                    </Button>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
