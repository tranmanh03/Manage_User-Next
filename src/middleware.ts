import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const privatePaths = ["/me", "/admin", "/manage-user"];
const authPaths = ["/login", "/register"];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const token = request.headers.get("Authorization");

    if (privatePaths.some((path) => pathname.startsWith(path)) && !token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    if (authPaths.some((path) => pathname.startsWith(path)) && token) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/me", "/admin", "/manage-user", "/login", "/register"],
};
