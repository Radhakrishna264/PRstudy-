// src/lib/auth.js

export function generatePRUserId() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "PR";
  for (let i = 0; i < 4; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id; // example: PR8F2A
}

export function getUserRole(user) {
  return user?.role === "admin" ? "admin" : "user";
}
