// src/middleware.js
import { NextResponse } from "next/server";
import { getSession } from "./lib/session";

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const session = await getSession(request);

  // -----------------------------
  // PUBLIC ROUTES
  // -----------------------------
  if (
    pathname === "/" ||
    pathname.startsWith("/auth") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // -----------------------------
  // USER DASHBOARD
  // -----------------------------
  if (pathname.startsWith("/dashboard")) {
    if (!session?.user) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
    return NextResponse.next();
  }

  // -----------------------------
  // ADMIN DASHBOARD
  // -----------------------------
  if (pathname.startsWith("/admin-dashboard")) {
    if (!session?.user) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    if (
      session.user.role !== "ADMIN" &&
      session.user.role !== "SUPERADMIN"
    ) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
