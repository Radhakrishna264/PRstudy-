// src/middleware.js

import { NextResponse } from "next/server";
import { getSession } from "./lib/session";

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const session = await getSession(request);

  // PUBLIC ROUTES
  if (
    pathname.startsWith("/about") ||
    pathname.startsWith("/contact") ||
    pathname.startsWith("/privacy") ||
    pathname.startsWith("/terms") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico")
  ) {
    return NextResponse.next();
  }

  // AUTH ROUTES
  if (pathname.startsWith("/auth")) {
    if (session?.user) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return NextResponse.next();
  }

  // ADMIN ROUTES
  if (pathname.startsWith("/admin-dashboard")) {
    if (!session?.user) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    if (
      session.user.role !== "admin" &&
      session.user.role !== "superadmin"
    ) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return NextResponse.next();
  }

  // USER ROUTES
  if (pathname.startsWith("/dashboard")) {
    if (!session?.user) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image).*)"],
};
