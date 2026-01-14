// FINAL SESSION HANDLER – Phase-11

import { isValidRole } from "./roles/index";

export function getSession(request) {
  const session = request?.session || null;

  if (!session) return null;

  if (!isValidRole(session.role)) {
    throw new Error("Invalid role in session");
  }

  return {
    userId: session.userId,
    role: session.role,
    plan: session.plan,
    loggedInAt: session.loggedInAt,
  };
}

export function requireSession(session) {
  if (!session) {
    throw new Error("Authentication required");
  }
  return session;
}
