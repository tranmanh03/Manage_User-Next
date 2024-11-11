import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import { Button } from "@/components/ui/button"

export default function Header() {
    return (
        <div className="flex justify-center items-center bg-lime-600 h-[62px]">
          <div className="flex justify-between items-center w-1250">
                  <ul className="flex justify-center items-center text-xl gap-4">
                      <li className="hover:underline hover:text-cyan-400">
                          <Link href={"/"}>Trang chủ</Link>
                      </li>
                      <li className="hover:underline hover:text-cyan-400">
                          <Link href={"/admin"}>Admin</Link>
                      </li>
                      <li className="hover:underline hover:text-cyan-400">
                          <Link href={"/manage-user"}>Manage User</Link>
                      </li>
                      <li className="hover:underline hover:text-cyan-400">
                          <Link href={"/me"}>Profile</Link>
                      </li>
                  </ul>
              <div className="flex justify-center items-center gap-3">
                  <ModeToggle />
                  <ul className="flex justify-center items-center gap-2">
                      <li>
                      <Button asChild className="bg-rose-600 hover:bg-rose-500 min-w-100 p-2">
                        <Link href="/login">Đăng nhập</Link>
                      </Button>
                      </li>
                      <li>
                          <Button asChild className=" min-w-100 bg-dark hover:bg-zinc-700">
                            <Link href="/register">Đăng ký</Link>
                          </Button>
                      </li>
                  </ul>
              </div>
          </div>
        </div>
    );
}
