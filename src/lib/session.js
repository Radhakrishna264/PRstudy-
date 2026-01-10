
// src/lib/session.js

export function createSession(user) {
  return {
    userId: user.id,
    role: user.role,
    loginTime: new Date().toISOString(),
    lastOpenPage: "/",
    lastReadingItem: null,
    device: "single", // single-device rule
  };
}

export function updateLastPage(session, path) {
  return {
    ...session,
    lastOpenPage: path,
  };
}

export function updateLastReading(session, itemId) {
  return {
    ...session,
    lastReadingItem: itemId,
  };
}
