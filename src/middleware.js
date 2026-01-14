import { NextResponse } from "next/server";
import { getSession } from "./lib/session";

/*
  PRstudy – Global Middleware
  Covers:
  - Public routes
  - Auth routes
  - User app routes
  - Admin & Superadmin routes
*/

const PUBLIC_ROUTES = [
  "/",
  "/about",
  "/contact",
  "/privacy",
  "/terms"
];

const AUTH_ROUTES = [
  "/login",
  "/signup",
  "/forgot-password",
  "/search-account"
];

const USER_APP_PREFIX = "/dashboard";
const ADMIN_PREFIX = "/admin-dashboard";

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Ignore Next internals & static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Public routes → always allowed
  if (PUBLIC_ROUTES.includes(pathname)) {
    return NextResponse.next();
  }

  // Read session (server authoritative)
  const session = await getSession(request);

  const isLoggedIn = !!session;
  const role = session?.role || null; // user | admin | superadmin

  // Auth pages
  if (AUTH_ROUTES.includes(pathname)) {
    if (isLoggedIn) {
      // Logged-in users never go back to auth pages
      return NextResponse.redirect(
        new URL(USER_APP_PREFIX, request.url)
      );
    }
    return NextResponse.next();
  }

  // App routes (user area)
  if (pathname.startsWith(USER_APP_PREFIX)) {
    if (!isLoggedIn) {
      return NextResponse.redirect(
        new URL("/login", request.url)
      );
    }
    return NextResponse.next();
  }

  // Admin / Superadmin routes
  if (pathname.startsWith(ADMIN_PREFIX)) {
    if (!isLoggedIn) {
      return NextResponse.redirect(
        new URL("/login", request.url)
      );
    }

    // Only admin or superadmin allowed
    if (role !== "admin" && role !== "superadmin") {
      return NextResponse.redirect(
        new URL(USER_APP_PREFIX, request.url)
      );
    }

    return NextResponse.next();
  }

  // Fallback:
  // If route is unknown but user is logged in → allow
  // Else → send to login
  if (!isLoggedIn) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  return NextResponse.next();
}

/*
  Matcher:
  - Middleware runs on all app routes
  - Excludes static assets & API
*/
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)"
  ]
};
