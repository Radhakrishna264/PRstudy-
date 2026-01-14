// FINAL ROLE DEFINITIONS

export const ROLES = {
  USER: "USER",
  ADMIN: "ADMIN",
  SUPERADMIN: "SUPERADMIN",
};

export function isValidRole(role) {
  return Object.values(ROLES).includes(role);
}
