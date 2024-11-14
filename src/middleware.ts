import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { store } from "./store/store";

const privatePaths = ["/me"];
const authPaths = ["/login", "/register"];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    // const { pathname } = request.nextUrl;
    // const token = store?.getState()?.auth.account?.token;
    // console.log(token);

    // if (privatePaths.some((path) => pathname.startsWith(path)) && !token) {
    //     return NextResponse.redirect(new URL("/login", request.url));
    // }

    // if (authPaths.some((path) => pathname.startsWith(path)) && token) {
    //     return NextResponse.redirect(new URL("/", request.url));
    // }

    return NextResponse.next();
}

// See "Matching Paths" below to learn more
// export const config = {
//     matcher: ["/login", "/register", "/me"],
// };
