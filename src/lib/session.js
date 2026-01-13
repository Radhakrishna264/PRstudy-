// src/lib/session.js
import { AUTH_MODE } from "@/config/app/auth";

export async function getSession() {
  // STEP-2.4: Bootstrap auth (temporary)
  if (AUTH_MODE === "bootstrap") {
    return {
      user: {
        role: "superadmin",
        name: "Praveen Rajput",
      },
    };
  }

  // REAL AUTH MODE (Phase-10)
  return null;
}
