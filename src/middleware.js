import { NextResponse } from "next/server";
import { getSession } from "./lib/session";
import { isAtLeast } from "./lib/roles";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  const session = getSession();
  const role = session?.user?.role;

  // Admin routes protection
  if (pathname.startsWith("/admin")) {
    if (!role || !isAtLeast(role, "admin")) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // App routes protection
  if (pathname.startsWith("/dashboard") || pathname.startsWith("/files") || pathname.startsWith("/tests")) {
    if (!role) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/dashboard", "/files", "/tests", "/chat", "/profile", "/rewards"]
};
