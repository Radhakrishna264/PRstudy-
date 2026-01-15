import { NextResponse } from "next/server";
import { getSession } from "./lib/session";

/*
 PRstudy – Global Middleware (FINAL)

 Covers:
 - Public routes
 - Auth routes
 - User app routes
 - Admin & SuperAdmin routes
*/

const PUBLIC_ROUTES = [
  "/",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
];

const AUTH_ROUTES = [
  "/login",
  "/signup",
  "/forgot-password",
  "/search-account",
];

const USER_APP_PREFIX = "/dashboard";
const ADMIN_PREFIX = "/admin-dashboard";

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Ignore next internals, static files, api
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Public routes (including nested)
  if (PUBLIC_ROUTES.some(route => pathname === route || pathname.startsWith(route + "/"))) {
    return NextResponse.next();
  }

  // Read session (server authoritative)
  const session = await getSession(request);
  const isLoggedIn = !!session;
  const role = session?.role || null; // USER | ADMIN | SUPERADMIN

  // Auth routes
  if (AUTH_ROUTES.some(route => pathname === route || pathname.startsWith(route + "/"))) {
    if (isLoggedIn) {
      return NextResponse.redirect(
        new URL(USER_APP_PREFIX, request.url)
      );
    }
    return NextResponse.next();
  }

  // User app routes
  if (pathname.startsWith(USER_APP_PREFIX)) {
    if (!isLoggedIn) {
      return NextResponse.redirect(
        new URL("/login", request.url)
      );
    }
    return NextResponse.next();
  }

  // Admin / SuperAdmin routes
  if (pathname.startsWith(ADMIN_PREFIX)) {
    if (!isLoggedIn) {
      return NextResponse.redirect(
        new URL("/login", request.url)
      );
    }

    // Only ADMIN or SUPERADMIN allowed
    if (role !== "ADMIN" && role !== "SUPERADMIN") {
      return NextResponse.redirect(
        new URL(USER_APP_PREFIX, request.url)
      );
    }

    return NextResponse.next();
  }

  // Fallback
  if (!isLoggedIn) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
}; 
