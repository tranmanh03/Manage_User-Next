import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import ButtonLogout from "../button-logout";

export default function Header() {
    return (
        <div>
            <ul>
                <ButtonLogout />
                <li>
                    <Link href={"/product/add"}>Tao san pham</Link>
                </li>
                <li>
                    <Link href={"/register"}>Đăng ký</Link>
                </li>
            </ul>
            <ModeToggle />
        </div>
    );
}
