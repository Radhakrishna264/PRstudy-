// FINAL PERMISSIONS MATRIX

export const PERMISSIONS = {
  USER: [
    "VIEW_CONTENT",
    "ATTEMPT_TEST",
    "EDIT_PROFILE",
    "SEND_DM",
  ],

  ADMIN: [
    "VIEW_CONTENT",
    "ATTEMPT_TEST",
    "EDIT_PROFILE",
    "SEND_DM",
    "MANAGE_USERS",
    "MANAGE_TESTS",
    "VIEW_REPORTS",
  ],

  SUPERADMIN: [
    "*", // ABSOLUTE POWER
  ],
};

export function hasPermission(role, permission) {
  if (role === "SUPERADMIN") return true;
  return PERMISSIONS[role]?.includes(permission);
}
