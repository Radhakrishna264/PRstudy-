
import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  const isLoggedIn = false; // later real auth check
  const isAdmin = false; // later role check

  // Protect admin routes
  if (pathname.startsWith("/admin") && !isAdmin) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Protect user-only routes
  if (
    ["/files", "/tests", "/chat", "/profile"].some((path) =>
      pathname.startsWith(path)
    ) &&
    !isLoggedIn
  ) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/files/:path*", "/tests/:path*", "/chat/:path*", "/profile/:path*"],
};
